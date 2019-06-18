#!/usr/bin/env python
# test for dcapi for python
# -*- coding: UTF-8 -*-

import sys
from dcapi_python import *


def main():
    data = sys.argv[3].replace('*+*', '&')
    logname = sys.argv[1]
    logtype = int(sys.argv[2])

    logger = CLogger()
    ret = logger.init(logname)
    if ret == 0:
        t1 = time.time()
        ret = logger.write_baselog(data, len(data), logtype)
        t2 = time.time()
        if ret != 0:
            print("%s" % logger.get_last_err())
        else:
            # print("write_baselog succ, consume[%d ms]" % (t2 * 1000 - t1 * 1000))
            return
    else:
        print("%s" % logger.get_last_err())


if __name__ == "__main__":
    main()
