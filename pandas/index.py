#!/usr/bin/python3
# -*- coding: UTF-8 -*-

import pandas as pd

#文件地址
CSV_FILE_PATH = '../excal/index.xlsx'


#读取文件
df = pd.read_excel(CSV_FILE_PATH,sheetname=None)
print(df['sheet1'].example_column_name)
