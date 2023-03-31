---
title: NSLT
icon: state
prev: NSDP
next: NSRA
category:
  - 操作数
---

> 分类: [非序列光线追迹和探测器](/hb/operands/131/891/  "Zemax 操作数 非序列光线追迹和探测器")

非序列光线追迹（lightning trance）。该操作数追迹由光线追迹分析定义的大量光线。Surf是非序列面的面序号。Src#是用来光线追迹的光源的物体序号。如果Src#是0，则追迹所有光源发出的光线。Ray Samp定义光线采样数量：0=low（1X），1=4X，2=16X，3=64X，4=256X，5=1024X。Edge Samp 
定义的采样用于解决物体边缘的光线，与Ray Samp的输入有相同的定义（但仅输入从0到4）。 
RT?定义是否需要追迹大量的光线（当RT?=0），或者定义是否需要追迹所有的分析光线都要被传统光线追迹（RT?=1）。当RT?=1，此操作数将会关闭偏振、分光、散射，追迹方式与NSTR类似。操作数NSDC，NSDD，NSDE，或者NSDP的Det#参数设置为0时，这些操作数必须在NSLT操作数之前。也可参见NSTR。详细信息参见“光线追迹控制”（“The LightningTrace Control”）。也可参见NSTR。