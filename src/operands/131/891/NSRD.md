---
title: NSRD
icon: state
category:
  - 操作数
---

> 分类: [非序列光线追迹和探测器](/hb/operands/131/891/  "Zemax 操作数 非序列光线追迹和探测器")

非序列光线数据库。“ZRD file”定义要保存的的ZRD文件名。（最多140个字符）如果“ZRD format”设置为一个正整数，它定义了ZRD文件的格式：0表示未压缩的数据；1表示压缩了基本数据；2表示压缩了全部数据。如果“ZRD format”设置为-1，则后续的NSTR操作数将不创建NSTR文件。在优化编辑器中，此操作数必须先于NSTR操作数。