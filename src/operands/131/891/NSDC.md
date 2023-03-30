---
title: NSDC
icon: state
category:
  - 操作数
---

> 分类: [非序列光线追迹和探测器](/hb/operands/131/891/  "Zemax 操作数 非序列光线追迹和探测器")

非序列相干强度数据。面(Surf)定义非序列组（一般在NSC系统中为1）的面序号。探测器(Det#)是指所需探测器的编号。 
如果像素(Pix#)是一个正整数，那么就从指定的像素上返回数据。如果Pix#是0，那么返回该探测器的所有像素的数据总和。 
数据(Data)为0代表实部，1代表虚部，2代表振幅度，3代表相干强度。详见“非序列模式中光源与探测器的优化（Optimizing With sources and detectors in non-sequential mode）”。