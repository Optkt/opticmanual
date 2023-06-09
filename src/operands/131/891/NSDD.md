---
title: NSDD
icon: state
prev: NSDC
next: NSDE
category:
  - 操作数
---

> 分类: [非序列光线追迹和探测器](/hb/operands/131/891/  "Zemax 操作数 非序列光线追迹和探测器")

非序列非相干强度数据。面(Surf)定义非序列组（一般在NSC系统中为1）的面序号。Det#是指所需探测器的编号。如果Det#是零，那么所有的探测器被清空。如果Det#小于0，那么Det#的绝对值所定义的探测器被清空。值得注意的是，NSDD操作数清空探测器数据时，必须优先于其它NSDD操作数。 
对于矩形探测器，面探测器以及所有的面元探测器来说，如果Pix#是一个正整数，那么返回值就是指定像素上的数值。否则，不同的Pix#值，将对应不同类型的返回值，如下说明： 
 0：数据(Data)为0、1、或2分别指位置空间的光通量，位置空间通量/面积，通量/立体角。 
-1：通量或通量/面积的最大值。 
-2：通量或通量/面积的最小值。 
-3：到达探测器的光线数目。 
-4：所有非零像素数据的标准差（RMS）。 
-5：所有非零像素数据的平均值。 
-6，-7，-8：分别代表x,y或z的位置坐标或角辐射度或中心强度。 
-9，-10，-11，-12,-13：RMS半径，x ，y，z或者xy方向到所有像素数据参考质心的距离或者角度。这些指的是二阶矩：r^2, x^2, y^2, z^2, and xy。 
Data为0表示光通量，1表示通量/面积，2表示通量/像素的立体角，3表示归一化的通量。面探测器只支持0和1（代表通量和通量/面积）。只有Pix#为正数时，data才能为3，这种情况的返回值是该像素相对于整个探测器最大通量的归一化数值。Data为3一般只作为NSC位图函数优化的一部分使用，参见“NSC位图优化函数”（“NSC Bitmap Merit Function Tool”）。  
仅对矩形探测器来说：如果Pix#不是正整数，则大量的边缘像素可以被忽略，如果需要的话。如果赋予# Ignored数值的话，则大量的边缘像素将会被忽略，探测器上用于计算的像素将会沿着边缘减少。 
对于立体探测器，像素(Pix#)表示像素在立方体内的序号。对于Data值为0、1或2，返回的值分别为入射通量，吸收通量，吸收通量每单位体积。如果Pix#是零，返回值是所有像素数据的和。 
对于颜色探测器，用NSDE代替。对于角探测器，用NSDP代替。