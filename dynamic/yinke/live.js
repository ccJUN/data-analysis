/**
 * 直播首页
 *
 * @Author qianggao
 * @Date 2016-07-10
 */

// 去除jwplayer官方logo
// jwplayer.key = "lsUqQ+PB1edH+bYoMb85Yr5CuPlXyhK/ngcyNQ==";

// 等级图标
var level = {
    data: '',
    init: function() {
        var _self = this;
        this.getData().done(function(res) {
            if (res.error_code == 0) {
                _self.data = _self.formatData(res.data);
            } else {
                console.log(res.message || '获取等级图标失败，请重试！');
            }
        });
    },
    getData: function() {
        return $.ajax({
            url: initData.api_url + 'Live_resource_rank',
            dataType: 'json',
            error: function() {
                console.log('获取等级图标出错！');
            }
        });
    },
    formatData: function(_data) {
        var temp = {};
        for (var i = 0; i < _data.length; i++) {
            temp[_data[i].level + '_1'] = _data[i].blk; // 男
            temp[_data[i].level + '_0'] = _data[i].glk; // 女
        }
        return temp;
    }
}

if (!localStorage.level) {
    level.init();
}


$(document).ready(function() {
    // console.log('各方面时间：', window.performance);
    // console.log(initData.userInfo, '>>>>>>>');
    var _uid = '', // 主播的id
        _id = '', // 当前直播的id
        _view_id = JSON.parse(initData.userInfo || '{}').view_id, // 账户id
        $liveInfo = $('.live_info'), // 直播
        $hostInfo = $('.host_info'), // 主播信息
        $hostFocus = $('.host_focus'), // 关注
        $hostFocusDone = $('.host_focus_done'),
        $replayBox = $('.replay_box'), // 回放
        $playendBox = $('.playend_box'), // 播放结束
        $livePlay = $('.live_play'), // 播放/暂停
        $liveReplay = $('#live_replay'), // 回放卡片
        $liveCont = $('.live_content'),
        $liveHot = $('#live_hot'), // 热播卡片
        $listPanelBd = $('.list_panel_bd'), // 卡片主体
        $loading = $('.loading_wrapper'),
        $comments = $('.comments'), // 互动区
        $commentsBox = $comments.find('.comments_list'),
        $hasFlash = $('.has_flash'),
        _liveData = [], // 直播页数据
        PlayControl = null,
        player = null,
        Chat = null,
        timer = null,
        _isLogin = initData.userInfo, // 是否登录
        _isFollow = true,
        _isScroll = false, // 滚动
        recordsArr = [], // 过滤当前回放
        hasFlash = flashCheck().hasFlash, // 0:未安装／禁用flash,1:已安装
        isFull = false,
        agent = navigator.userAgent.toLowerCase(),
        protocol = window.location.protocol;

    // 获取search

    function getLocationSearch() {
        var searchArr = document.location.search ? document.location.search.substring(1).split('&') : [];
        if (searchArr.length != 0) {
            _uid = searchArr[0].split('=')[1];
            _id = searchArr[1].split('=')[1];
        }
    }
    /*
     *
     * 达达通过uid直接进直播间
     * @author baoyl@inke 2017.12.01
     *
     * */
    function dada_islive(liveuid) {
        $.ajax({
            url: location.protocol+'//baseapi.busi.inke.cn/live/LiveInfo',
            data: {
                uid: liveuid
            },
            dataType: 'json',
            xhrFields: {
                withCredentials: true
            },
            success: function(res) {
                console.log(res);
                _uid = getQueryString('uid');
                if(res.error_code==0){
                    if(!res.data.live_info.status*1){
                        liveEndFn();
                        _id=res.data.live_info.liveid;
                        console.log(res.data.live_info.user.pic);
                        $('.host_name span').html(res.data.live_info.user.nick);
                        $('.host_code span').html(res.data.live_info.user.uid);
                        var _img=res.data.live_info.user.pic;
                        if(res.data.live_info.user.pic.indexOf('http:')<0){
                            _img='//img2.inke.cn/'+_img;
                        }
                        $hostInfo.find('.host_portrait').attr({
                            src: _img
                        });
                        $('.host_focus_done').hide();
                    }else {
                        _id=res.data.live_info.liveid;
                    }
                }else {
                    liveEndFn();
                    _id='';
                }
                initDataInfo();
            },
            error: function() {
                console.log('error！');
            }
        });
    }

    function getQueryString(e) {
        var t = new RegExp("(^|&)" + e + "=([^&]*)(&|$)","i")
            , i = window.location.search.substr(1).match(t);
        return null != i ? unescape(i[2]) : ""
    }

    if(getQueryString('id')){
        getLocationSearch();
        initDataInfo();
    }else {
        getQueryString('uid')&&dada_islive(getQueryString('uid'));
    }

    /**
     * 获取初始化数据
     *
     * @param uid 主播的id
     * @param id 当前直播的id
     */

    function initDataInfo() {
        /**
         * add by libaoxu@inke.cn 20180916 
         * 直播间统一socket
         * @description http://wiki.inkept.cn/pages/viewpage.action?pageId=14822927​
         */
        var chartroomDfd = $.ajax({
            url: location.protocol + '//chatroom.inke.cn/url',
            // url: 'https://chatroom.inke.cn/url',
            data: {
                roomid: _id,
                uid: _uid,
                id: _id
            },
            dataType: 'json',
            xhrFields: {
                withCredentials: true
            },
        })

        var liveShareDfd = $.ajax({
            url: initData.api_url + 'live_share_pc',
            // url: 'http://apitest.webapi.busi.inke.com/web/Live_share_pc',
            data: {
                uid: _uid,
                id: _id
            },
            dataType: 'json',
            xhrFields: {
                withCredentials: true
            },
        });
        console.log(initData.api_url,_uid,_id)
        // 两个延迟对象
        $.when(liveShareDfd, chartroomDfd)
            .done(function(resDetail, chartroomDetail) {
                console.log(chartroomDetail)
                var res = resDetail.push ? resDetail[0] : resDetail
                var chartroom = chartroomDetail.push ? chartroomDetail[0] : chartroomDetail

                res.data.chartroom = chartroom
                
                // 过滤掉当前正在播放的
                if (res.data && res.data.records && res.data.records.length > 0) {
                    for (var i = 0; i < res.data.records.length; i++) {
                        if (res.data.records[i].liveid != _id) {
                            recordsArr.push(res.data.records[i]);
                        };
                    }
                }

                $loading.hide();
                $liveCont.show();
                if (Util.getQueryString('type') !== 'game') {
                    $liveHot.show();
                }
                if (recordsArr.length > 0 && Util.getQueryString('type') !== 'game') {
                    $liveReplay.show();
                }

                if (res.error_code == 0) {
                    _liveData = res.data;
                    console.log(res.data)
                    renderView(res.data);
                } else {
                    console.log(res.message || '获取数据失败，请重试！');
                }
            })
            .fail(function() {
                alert('获取数据出错！');
            })
    }


    //更换播放器，使其支持m3u8格式，徐德明，2016-11-04
    function newPlayer(_data) {
        // https://my.oschina.net/u/554046/blog/297523
        var fileUrl = _data.file.record_url,
            filePic = _data.file.pic,
            // fileUrl = 'http://pullhls99.a8.com/live/1478484726128190/playlist.m3u8',
            fileType = fileUrl.substring(fileUrl.lastIndexOf('.') + 1),
            fileBg = '',
            flashvars = {};
        //兼容微信头像用户
        if (filePic.match(/http(?!\:).*jpg/ig)) {
            fileBg = decodeURIComponent(filePic.match(/http(?!\:).*jpg/ig)[0]);
        } else {
            fileBg = decodeURIComponent(filePic.match(/http(?!\:).*&w=/ig)[0]);
            fileBg = fileBg.split('&w')[0];
        }
        if (fileUrl.indexOf('?') != -1) {
            fileUrl = fileUrl.substr(0, fileUrl.indexOf('?'));
            fileType = fileType.substr(0, fileType.indexOf('?'));
        }
        //推流游戏的话
        /*if(Util.getQueryString('type')=='game'){
            fileUrl = Util.getQueryString('addr');
        }*/
        //根据不同类型，修改配置
        switch (fileType) {
            case 'm3u8': //目前录播采用
                flashvars = {
                    f: protocol + '//static.inke.cn/web/common/ckplayer/m3u8.swf',
                    a: fileUrl,
                    i: fileBg,
                    p: 1, //默认暂停
                    s: 4,
                    c: 0, //style样式
                    e: 0, //直播结束
                    h: 3,
                    loaded: 'loadedHandler'
                };
                break;
            case 'mp4':
                flashvars = {
                    f: fileUrl,
                    s: 0,
                    p: 0,
                    i: fileBg,
                    c: 0,
                    e: 0,
                    h: 3
                };
                break;
            default:
                // rtmp格式 目前直播采用
                flashvars = {
                    f: fileUrl,
                    i: fileBg,
                    p: 1,
                    c: 1,
                    e: 0,
                    lv: 1,
                    loaded: 'loadedHandler'
                };
        }

        showPlayer(fileUrl, 'liveMedia')

        function showPlayer(src, id) {
            var params = {
                bgcolor: '#999',
                allowFullScreen: true,
                allowScriptAccess: 'always',
                wmode: 'transparent'
            };
            var video = [src];
            CKobject.embed(window.location.protocol + '//static.inke.cn/web/common/ckplayer/ckplayer.swf', id, 'ckplayer_a1', '100%', '100%', false, flashvars, video, params);
        }
        setTimeout(function() {
            $('#js-gift-show-container').show();
        }, 2000);

        function loadedHandler() {
            CKobject.getObjectById('ckplayer_a1').addListener('play', 'playHandler');

        }

        function playHandler() {
            console.log("视频播放");
            CKobject.getObjectById('ckplayer_a1').addListener('ended', 'ended');
            /*CKobject.getObjectById('ckplayer_a1').addListener('fullScreen','fullScreen');*/
            //$('#js-gift-show-container').show();
        }

        function ended() {
            console.log("视频播放完成");
            liveEndFn();
        }
    }
    // 渲染页面
    function renderView(_data) {
        var chat = new Chat(_data), // 聊天
            isPlay = false;
        //礼物位置
        function rsize() {
            var live_m_h = $('.live_cont_lf').height(),
                live_m_w = $('.live_cont_lf').width(),
                movie_now = live_m_h * 368 / 640;
            $('#js-gift-show-container').css('left', (live_m_w - movie_now) / 2);
        }
        rsize();
        window.onresize = function() {
            rsize();
        };
        // 是否登录
        if (_isLogin) {
            $hostFocus.show();
            $hostFocusDone.hide();

            // 是否关注 is_follow 1 关注 0 未关注
            if (_data.is_follow) {
                $hostFocus.hide();
                $hostFocusDone.show().html('已关注');
            }

            $comments.find('.comments_box input').attr('placeholder', '和大家说点什么吧');

            // 发送评论（点击 or 回车）
            $comments.find('.comments_box span').on('click', sendMsgFn);
            $(document).on('keydown', function(e) {
                if (e.keyCode == 13) {
                    sendMsgFn();
                }
            })

            $comments.find('.comments_box p').hide();
        } else {
            // 未登录发送评论埋点
            $comments.find('.comments_box span').on('click', function() {
                addBuriedPointHandler('109000');
            });
            $comments.find('.comments_box p').show();
        }

        // 观看人数
        $liveInfo.find('li:first span').html(_data.file.online_users);
        // 主播地理位置
        $liveInfo.find('li:last span').html(_data.file.city || '火星');

        // 主播信息
        $hostInfo.find('.host_portrait').attr({
            src: _data.media_info.portrait,
            alt: _data.media_info.nick
        });
        $hostInfo.find('.host_name span').html(_data.media_info.nick);
        $hostInfo.find('.host_name i:first').addClass(_data.media_info.gender == 0 ? 'sex_woman' : 'sex_man');
        $hostInfo.find('.host_name i:last').css({
            'backgroundImage': 'url(' + _data.media_info.level_img + ')',
            'backgroundRepeat': 'no-repeat',
            'backgroundSize': '100% 100%'
        });
        $hostInfo.find('.host_code span').html(_data.live_uid);
        $hostInfo.find('.host_slogan').html(_data.media_info.description);

        // 未安装／禁用flash
        if (!hasFlash) {
            $hasFlash.show();
        } else {
            // status  1 正在直播 0 未直播 -1 无录播
            // player = PlayControl.init();
            if (_data.status == 1) {

                // 直播默认暂停，开始播放
                // $livePlay.show().on('click', function() {
                //     $(this).hide();
                //     player.player.play();
                // });

                // 互动聊天
                chat.enter_room(_id, _uid);

                // var opt = {
                //     file: _data.file.record_url,
                //     image: _data.file.pic,
                //     controls: false
                // }

                // player.setUp(opt);


                //更换播放器，使其支持m3u8格式，徐德明，2016-11-04
                newPlayer(_data);
                //更换结束
            } else if (_data.status == 0) {
                // var opt = {
                //     file: _data.file.record_url,
                //     image: _data.file.pic,
                //     controls: true,
                //     skin: "http://static.inke.cn/web/common/xml/five.xml"
                // }

                // player.setUp(opt);

                //更换播放器，使其支持m3u8格式，徐德明，2016-11-04
                newPlayer(_data);
                //更换结束

                $liveInfo.find('li:first span').html(_data.file.online_users + '人看过');
                $comments.find('.comments_box').hide();
                $comments.css('background', '#f5f5f5 url("./images/comments_bg.png") no-repeat 50% 50%')
            } else {
                $('#liveMedia').css({
                    'background': 'url(' + _data.file.pic + ') no-repeat',
                    'backgroundSize': '100%'
                });
                liveEndFn();
            }
        }
        //模拟全屏操作
        /*$('.code_panel').click(function(){
           if(!isFull){
               isFull=true;
               $('#header,#footer,#live_replay,#live_hot,.live_cont_rg').hide();
               $('html,body,#container,.live_content,.live_cont_lf').css({width:'100%',height:'100%'});
               $('.live_content').css({'background-image':"url('http://img.meelive.cn/OTEwNTQxNDc5ODE2NTI2.jpg')",'background-size':'15%'});
               $('.live_cont_lf').css({'width':'47%','margin':'0 auto'}).removeClass('fl');
           }else{
               isFull=false;
               $('#header,#footer,#live_replay,#live_hot,.live_cont_rg').show();
               $('html,body,#container,.live_content,.live_cont_lf').css({width:'',height:''});
               $('.live_content').css({'background-image':"url('')",'background-size':''});
               $('.live_cont_lf').css({'width':'','margin':''}).addClass('fl');
           }
        });*/
        // 回放面板操作
        // function replayBoxFn() {
        //     var $videoRate = $replayBox.find('.video_rate'),
        //         $voiceBtn = $replayBox.find('.voice_btn'),
        //         $voiceRate = $replayBox.find('.voice_rate');

        //     adjustVoiceFn($voiceRate.find('span'));


        //     $replayBox.on('click', function() {
        //         if (!isPlay) {
        //             player.play();
        //             $(this).find('.play_btn').hide();
        //         } else {
        //             player.pause();
        //             $(this).find('.pause_btn').show();
        //         }
        //         console.log('state : ' + player.getState());
        //     }).on('mouseenter', function() {
        //         // $(this).find('.replay_operate_panel').stop().slideDown(200);
        //         $(this).find('.replay_operate_panel').show();
        //     }).on('mouseleave', function() {
        //         // $(this).find('.replay_operate_panel').stop().slideUp(200);
        //         $(this).find('.replay_operate_panel').show();
        //     });
        // }

        // 关注主播（未登录的直接显示登录弹窗）
        $hostFocus.on('click', function() {
            hostFocusFn(_uid);

            // 登录－关注埋点
            addBuriedPointHandler('104000', 1);
        });
        $hostFocusDone.on('click', function() {
            if (!_isLogin) {
                renderLoginPanel();

                // 未登录－关注埋点
                addBuriedPointHandler('104000');
            }
        });
        $comments.find('.comments_box p').on('click', renderLoginPanel);

        // 互动区域滚动条控制
        $commentsBox.on('mouseenter', function() {
            // clearTimeout(timer);
            _isScroll = true;
            $(this).css('overflowY', 'auto');
        }).on('mouseleave', function() {
            // 5秒后滚动
            _isScroll = false;
            $(this).css('overflowY', 'hidden');

            // timer = setTimeout(function() {
            //     _isScroll = false;
            // }, 5000);
        }).on('scroll', function(e) {
            e.preventDefault();
        });

        // 发送评论
        function sendMsgFn() {
            var $input = $comments.find('.comments_box input'),
                tempCont = $input.val();

            // 发送评论埋点
            addBuriedPointHandler('109000', 1);

            if (tempCont.length <= 0) {
                alert('请先输入内容，再进行评论哦～');
                return;
            }
            if (tempCont.length > 150) {
                alert('字数过多，请清除些，重新发送～');
                return;
            }

            // 防止XSS
            chat.send(tempCont.replace(/\<|\>/g, ''));
            $input.val('');
        }

        // 当前选中直播
        $listPanelBd.on('mouseenter', '.list_box .list_pic', function() {
                $(this).find('img').addClass('hover_scale');
                $(this).find('.play_layer').show();
            })
            .on('mouseleave', '.list_box .list_pic', function() {
                $(this).find('img').removeClass('hover_scale');
                $(this).find('.play_layer').hide();
            }).on('click', '.list_box .list_pic', function(e) {
                window.location.search = '?uid=' + ($(this).data('uid') || '') + '&id=' + ($(this).data('id') || '');
            });

        // 回放更多埋点
        $liveReplay.find('h3').siblings().attr('href', './replaylive_list.html?uid=' + _uid).on('click', function() {
            if (_isLogin) {
                addBuriedPointHandler('110001', 1)
            } else {
                addBuriedPointHandler('110001')
            }
        });

        // 回放列表
        if (recordsArr.length > 0) {
            // var _html = '';

            // for (var i = 0; i < (recordsArr.length <= 3 ? recordsArr.length : 3); i++) {
            //     _html += '<div class="list_box">' +
            //         '<div class="list_pic" data-uid="' + _data.live_uid + '" data-id="' + recordsArr[i].liveid + '">' +
            //         '<img src="' + recordsArr[i].pic + '" alt="' + _data.media_info.nick + '">' +
            //         '<p class="num"><i></i><span>' + recordsArr[i].online_users + '人看过</span></p>' +
            //         '<span class="tag">回放</span>' +
            //         '<span class="play_layer"><i></i></span>' +
            //         '</div>' +
            //         '<div class="list_intro">' +
            //         '<p>' + recordsArr[i].title + '</p>' +
            //         '</div>' +
            //         '</div>';
            // }
            // $liveReplay.find('.list_panel_bd').append(_html);
        } else {
            $liveReplay.hide();
        }

        // 热门列表
        getHotLiveFn();
        //埋点
        $liveHot.find('h3').siblings().on('click', function() {
            if (_isLogin) {
                addBuriedPointHandler('110002', 1);
            } else {
                addBuriedPointHandler('110002');
            }
        });
    }

    /**
     * 关注主播
     *
     * @param _uid 主播id
     */
    function hostFocusFn(_uid) {
        $.ajax({
            url: initData.api_url + 'live_follow_pc',
            data: {
                uid: _uid
            },
            dataType: 'json',
            xhrFields: {
                withCredentials: true
            },
            success: function(res) {
                if (res.error_code != 0) {
                    alert(res.message || '关注失败，请重试！');
                    window.location.reload();
                } else {
                    $hostFocus.hide();
                    $hostFocusDone.show().html('已关注');
                }
            },
            error: function() {
                console.log('关注出错！');
            }
        });
    }

    // 直播结束
    function liveEndFn() {
        //$playendBox.find('dd span').html(_liveData.file.online_users);
        $playendBox.find('dd').hide();
        $playendBox.show();
        $comments.find('.comments_box').hide();
        $comments.css('background', '#f5f5f5 url("./images/comments_bg.png") no-repeat 50% 50%');
        //$('#js-gift-show-container').hide();
    }

    // 获取热门直播
    function getHotLiveFn() {
        $.ajax({
            url: initData.api_url + 'live_hotlist_pc',
            dataType: 'json',
            success: function(res) {
                if (res.error_code == 0) {
                    // var _html = '';
                    // for (var i = 0; i < 3; i++) {
                    //     _html += '<div class="list_box">' +
                    //         '<div class="list_pic" data-uid="' + res.data.hotlists[i].id + '" data-id="' + res.data.hotlists[i].liveid + '">' +
                    //         '<img src="' + res.data.hotlists[i].portrait + '" alt="' + res.data.hotlists[i].nick + '">' +
                    //         '<p class="num"><i></i><span>' + res.data.hotlists[i].online_users + '</span></p>' +
                    //         '<span class="tag">热门</span>' +
                    //         '<span class="play_layer"><i></i></span>' +
                    //         '</div>' +
                    //         '<div class="list_intro">' +
                    //         '<p>' + res.data.hotlists[i].title + '</p>' +
                    //         '</div>' +
                    //         '</div>';
                    // }
                    // $liveHot.find('.list_panel_bd').append(_html);
                } else {
                    console.log(res.message || '获取热门数据失败，请重试！');
                }
            },
            error: function() {
                console.log('获取热门数据出错！');
            }
        });
    }

    function json_decode(str) {
        var data = null;
        try {
            str = str.replace(/\"(\w+)\":/g, "$1:");
            data = eval('(' + str + ')');
        } catch (e) {
            //console.log('error:', e);
        }
        return data;
    }

    //播放器初始化&控制
    PlayControl = {
        player: null,
        isRecordList: 0, // back_video 点击录播列表
        conf: '',
        init: function(conf) {
            var _self = this;
            return _self;
        },
        /*
         * opt : 播放器配置参数
         * type : 1  from 录播 列表 , 0 init时直播||录播  0 ：
         */
        setUp: function(opt, type) {
            var _self = this;
            _self.isRecordList = type || 0;
            var defaults = {
                flashplayer: 'http://static.inke.cn/web/common/swf/jwplayer.flash.swf',
                width: "100%",
                height: "100%",
                primary: "flash",
                events: {
                    onPlay: _self.onPlay,
                    onPause: _self.onPause,
                    onBuffer: _self.onBuffer,
                    onDisplayClick: _self.onDisplayClick,
                    onSetupError: _self.onSetupError,
                    onComplete: _self.onComplete,
                    onIdle: _self.onIdle,
                    onError: _self.onError
                }
            };
            $.extend(true, defaults, opt || {});
            // console.log("player defaults", defaults);
            _self.player = jwplayer("liveMedia").setup(defaults);

        },

        onPlay: function() {
            console.log("onPlay");
        },
        onPause: function() {
            console.log("onPause");
        },
        onBuffer: function() {
            console.log("onBuffer");
        },
        onDisplayClick: function() {
            console.log("onDisplayClick");
        },
        onSetupError: function() {
            console.log("onSetupError", arguments);
        },
        onComplete: function() {
            liveEndFn();
            console.log("onComplete");
        },
        onIdle: function() {
            console.log("onIdle", arguments);
        },
        onError: function() {
            console.error("player onError", arguments);
        },
        bindEvent: function() {}
    };

    // 评论区
    Chat = function(_data) {
        var self = this;
        this.socket = null;
        // roomid：当前直播id    uid：主播id 
        this.enter_room = function(roomid, uid) {
            var params = {
                uid: _view_id,
                place: 'room',
                sid: 1,
                roomid: roomid,
                token: _data.token,
                time: _isLogin ? _data.token_time : _data.time, // 是否登录
                nonce: _data.nonce,
                sec: _data.sec
            }

            if (this.socket != null) {
                var msg = { b: { ev: 'c.lr' } };
                this.socket.emit('c.lr', msg);
            }

            /**
             * @param sio_ip
             * @param uid
             * @param session 不需要了，默认1
             * @param roomid
             * @param token
             * @param token_time
             * @param nonce
             * @param sec
             */
            var sokectIoUrl = _data.sio_ip
            var httpReg = Util.regs.http
            if (!httpReg.test(sokectIoUrl)) {
                sokectIoUrl = protocol + '//' + sokectIoUrl
            }

            /**
             * socket.io适配器, 具有跟socket.io相同的api, 但是是用新协议WebSocket创建的
             * @param {String} url 创建socket的url, ws协议的
             * @author libaoxu@inke.cn 20180918
             */
            var createIoByWebSocket = function (url) {
                var ws = new WebSocket(url)

                ws.on = ws.addEventListener
                ws.disconnect = ws.close
                ws.emit = function () {}

                return ws
            }

            // let url = 'ws://chatroom.inke.cn/ws?uid=0&place=room&roomid=0…c13915602bdc&sid=&id=1537074521295843&uid=2628736'
            this.socket = createIoByWebSocket(_data.chartroom.url)

            // this.socket = io.connect(sokectIoUrl + '?' + $.param(params));
            // this.socket = io.connect('https://siogb.inke.cn:443?' + $.param(params))


            this.socket.on('connect', function(data) {
                // console.log("connected-------");
            });

            this.socket.on('message', function(res, ack) {
                // console.log('socket message: ', res)
                var data = res.data
                if (ack) {
                    ack();
                }

                data = json_decode(data);
                
                // console.log("ev++++++++++", data.b.ev);
                // console.log("data++++++++++", data);

                if (data != null) {
                    // 同一用户只能访问同一直播间
                    if (typeof data.b != 'undefined' && data.b.ev == 's.d') {
                        $commentsBox.hide();
                        $comments.css('background', '#f5f5f5 url("./images/comments_bg.png") no-repeat 50% 50%')
                        alertHandler('您的帐号同时在客户端登录，为了保证您的观看质量，建议您去客户端继续观看哦！');
                        self.leave_room();
                    }

                    // 聊天
                    if (typeof data.b != 'undefined' && data.b.ev == 's.m') {

                        var msg_list = self.parse_message(data);
                        self.show_message(msg_list);
                        if (agent.indexOf('applewebkit/') > -1) {
                            self.showGift(data); //小礼物走一波
                        }
                    }
                    // 房间人数
                    if (typeof data.b != 'undefined' && data.b.ev == 's.m') {
                        if (typeof data.ms !== 'undefined' && data.ms.length == 1) {
                            if (typeof data.ms[0].tp && data.ms[0].tp == 'usernu' && typeof data.ms[0].n != 'undefined' && parseInt(data.ms[0].n) > 0) {
                                $liveInfo.find('li:first span').html(data.ms[0].n);
                                //update_user_num(data.ms[0].n);
                            }
                        }
                    }
                    // 送礼返回
                    if (typeof data.b != 'undefined' && data.b.ev == 'c.g') {
                        gift.after_send(data);
                    }
                }


            })
        };
        this.send = function(msg) {
            var data = { b: { ev: "c.ch" }, c: msg };
            this.socket.send(JSON.stringify(data));

            var arr = [{
                nick: JSON.parse(initData.userInfo).name,
                level: JSON.parse(initData.userInfo).level,
                gender: JSON.parse(initData.userInfo).gender,
                msg: msg
            }];
            this.show_message(arr);
        };
        this.parse_message = function(data) {
            var msg_list = [];

            if (typeof data.b != 'undefined' && typeof data.b.ev != 'undefined' && data.b.ev == 's.m' && typeof data.ms != 'undefined' && data.ms.length) {
                var ms = data.ms;

                for (var i = 0; i < ms.length; i++) {
                    if (typeof ms[i].from != 'undefined' && typeof ms[i].c != 'undefined') {
                        msg_list.push({ nick: ms[i].from.nic, msg: ms[i].c, level: ms[i].from.lvl, gender: ms[i].from.gd });
                    }
                }
            }
            return msg_list;
        };
        this.show_message = function(msg_list) {
            // 本地存储level图标数据
            if (level.data) {
                localStorage.level = JSON.stringify(level.data);
            }

            var _level = JSON.parse(localStorage.level);

            for (var i = 0; i < msg_list.length; i++) {
                var _class = 'comments_text';
                if (msg_list[i].msg.indexOf('我送了') != -1) {
                    _class = 'comments_gift';
                }
                var localImgUrl = _level[msg_list[i].level + '_' + msg_list[i].gender]
                var imgUrl = Util.getImgUrlAdapter(localImgUrl)
                var msg = '<li><img src="' + imgUrl + '" alt="第' + msg_list[i].level + '级" /><span>' + msg_list[i].nick + '：</span><span class="' + _class + '">' + msg_list[i].msg + '</span></li>'

                $commentsBox.find('ul').append(msg)
            }

            if (!_isScroll && $commentsBox.find('ul').innerHeight() > $commentsBox.height()) {
                $commentsBox.scrollTop($commentsBox.find('ul').innerHeight() - $commentsBox.height());
            }

            // 数据只显示最新的3屏，鉴于每屏显示20条数据，数据超出60条后就要从开始删除
            if ($commentsBox.find('ul').children().length > 60) {
                $commentsBox.find('ul li:first').remove();
            }
        };
        this.send_gift = function(gift, num, uid, seq) {
            var data = { b: { ev: "c.g" }, id: gift.id, repeat: num, cl: [255, 255, 255], to: uid, seq: seq };
            this.socket.send(JSON.stringify(data));
            //console.log(JSON.stringify(data));
        };
        this.leave_room = function() {
            this.socket.disconnect();
        };
        this.showGift = function(data) {
            for (var j = 0; j < data.ms.length; j++) {
                if (!data.ms[j].gift) {
                    return;
                }
                var gift_info = data.ms[j].gift;
                var from = data.ms[j].from;
                var seq = (!gift_info.seq) ? 0 : gift_info.seq;
                var jsonData = {
                    nick: from.nic,
                    ptr: from.ptr,
                    fromId: from.id,
                    num: seq,
                    giftId: gift_info.id, //礼物Id
                    type: gift_info.name
                };
                //console.log("animate data", jsonData);
                //console.log("gift_info", gift_info);
                ShowGiftAnimate.init(jsonData);
            }
        }
    }

    if (Util.getQueryString('type') == 'game' && Util.getQueryString('addr')) {
        init_game();
    }

    function init_game() {
        $('.host_info,#live_replay,#live_hot').hide();
        $('.comments').css({ 'margin-top': '0', 'height': '100%' });
        $('.live_cont_lf').css('background', '#f5f5f5');
        $('#liveMedia').css('height', '64%');
        $('.gift-show-container').css('bottom', '44%');
        $('.box-game').show();
        $('.toc-tit').html('直播标题:' + Util.getQueryString('tit'));
        $('.game-tit-push-url-addr').html(Util.getQueryString('addr'));
        $('.btn-close-live').on('click', function() {
            $.ajax({
                url: apiHost + '/game/Live_stop',
                data: {
                    uid: _uid
                },
                dataType: 'json',
                xhrFields: {
                    withCredentials: true
                },
                success: function(res) {
                    if (res.dm_error == 0) {
                        window.history.back();
                    } else {
                        alert('操作失败，稍后再试');
                    }
                },
                error: function() {
                    console.log('结束直播接口gg');
                }
            });
        });
    }

    /*
    *
    * 新增一键复制推流地址
    * @author wanghl@inke 2017.11.17
    *
    * */
    var clipboard = new Clipboard('.game-tit-push-url-addr-btn', {
        target: function() {
            return document.getElementById('game-tit-push-url-addr');
        }
    });

    clipboard.on('success', function(e) {
        console.log(e);
    });

    clipboard.on('error', function(e) {
        console.log(e);
        alert('复制失败，请手动复制~');
    });


});
