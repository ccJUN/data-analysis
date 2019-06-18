#!/usr/bin/env python
#-------------------------------
# dcapi for python version 1.0.0
# test passed on python 2.6.6
# 2013-11-07 cloudyang create
# ------------------------------

# coding=utf-8
import time
from ctypes import *

class CLogger :
    __dcapi = cdll.LoadLibrary("/usr/local/services/report_egame_1-1.0/bin/libdcapi_c.so")


    # method constraint 
    __dcapi.clogger_getLastErr.argtypes = [ c_void_p ]
    __dcapi.clogger_getLastErr.restype = c_char_p
    __dcapi.clogger_create.restype = c_void_p
    __dcapi.clogger_mcreate.restype = c_void_p
    __dcapi.clogger_writeBaselog.argtypes = [ c_void_p, c_char_p, c_uint, c_ubyte, c_ubyte, c_ulong ]
    __dcapi.clogger_writeBaselog.restype = c_int
    __dcapi.clogger_writeModulelog.argtypes = [ c_void_p, c_int, c_int, c_char_p, c_char_p, c_char_p, c_int, c_int, c_int, c_int, c_int ]
    __dcapi.clogger_writeModulelog.restype = c_int
    __dcapi.clogger_destroy.argtypes = [ c_void_p ]

    # sock type define
    SOCK_UNIX = 0
    SOCK_TCP = 1
    SOCK_UDP = 2

    # protocol type define
    PRO_STRING = 0
    PRO_BINARY = 1
    def __init__(self):
        pass
        
        """
        初始化非模调的clogger对象，一般用于向罗盘、监控系统上报数据
        @param logname: 上报方用的唯一标识，由监控系统或罗盘进行分配
        @param socktype: api跟agent的通信协议，详见上面类中的定义
        @return: 成功返回0 ,失败返回 -1,并且可通过get_last_err获得失败原因
        """
    def init(self, logname, socktype=SOCK_UNIX):
        self.__dcobj = self.__dcapi.clogger_create(logname, socktype)
        if not self.__dcobj:
            return -1
        return 0

        """
        初始化模调用的clogger对象(仅用于上报自研模调数据使用，其余上报统一用init初始化)
        @param modid : 模块Id
        @return : 成功返回0 ,失败返回 -1,并且可通过get_last_err获得失败原因
        """
    def init_mod(self, modid):
        self.__dcobj = self.__dcapi.clogger_mcreate(modid)
        if not self.__dcobj:
            return -1
        return 0
        """
        非模调数据上报函数
        @param data: 上报内容（二进制的数据包，或者k/v格式的字符串)
        @param len: 上报内容长度
        @param logtype: 子通道ID(一般使用0即可）
        @param protocol: 协议（参考上方的PRO定义）
        @param timestamp: 上报数据的时间戳（若不填则默认是time(NULL))
        @return : 成功0，失败非0
        """
    def write_baselog(self, data, len, logtype, protocol=PRO_STRING, timestamp=int(time.time())):
        timestamp=int(time.time())
        ret = self.__dcapi.clogger_writeBaselog(self.__dcobj, data, len, logtype, protocol, timestamp)
        return ret
        """
        自研模调数据上报
        @param sid: 被调模块ID
        @param ifid: 接口ID
        @param fip: 上报IP
        @param mip: 主调IP
        @param sip: 被调IP
        @param retval: 返回值
        @param result: 返回类型
        @param delay: 调用耗时
        @param req_len: 请求包长度（可选）
        @param rsp_len: 响应包长度（可选）
        @return : 成功0，失败非0
        """
    def write_modulelog(self, sid, ifid, fip, mip, sip, retval, result, delay, req_len=0, rsp_len=0):
        ret = self.__dcapi.clogger_writeModulelog(self.__dcobj, sid, ifid, fip, mip, sip, retval, result, delay, req_len, rsp_len)
        return ret
        """
        获取最近的一条错误信息
        @return : 最新的错误信息
        """
    def get_last_err(self):
        return self.__dcapi.clogger_getLastErr(self.__dcobj)

    def __del__(self):
        if self.__dcobj is not None :
            self.__dcapi.clogger_destroy(self.__dcobj)


def main():
    # test normal data report
    clogger = CLogger()
    ret = clogger.init("jonliu_test", CLogger.SOCK_TCP)
    if ret != 0:
        print ("init failed")
        return

    while 1:
        str1 = "ftime=20150408&mall=3&title=kkds"
        ret = clogger.write_baselog(str1, len(str1), 0)
        print ("ret = %d" % ret)
        if ret != 0 :
            print ("%s" % clogger.get_last_err())
        time.sleep(1)
    
    # test module data report
    #mod_report = CLogger()
    #ret = mod_report.init_mod(123)
    #if ret != 0:
    #    print "init failed"
    #    return
    #ret = mod_report.write_modulelog(222, 333, "1.2.3.4", "1.2.3.4", "1.2.3.4", 0, 0, 20)
    #print "mod ret : %d" % ret

if __name__ == "__main__":
    main()
