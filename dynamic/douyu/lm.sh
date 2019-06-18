#!/bin/bash
###################
export LD_LIBRARY_PATH=/usr/local/services/report_egame_1-1.0/bin
source ~/.bash_profile
echo LD_LIBRARY_PATH >> /usr/local/services/report_egame_1-1.0/bin/getpath.log
ps aux | grep dynamic.py | xargs kill -s 9
while read line
do
    (
	echo $line	
	/usr/bin/python /usr/local/services/report_egame_1-1.0/bin/dynamic.py $line
    )&
done < '/usr/local/services/report_egame_1-1.0/bin/douyu_anchor_yz.text'
