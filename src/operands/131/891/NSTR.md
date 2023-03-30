---
title: NSTR
icon: state
category:
  - 操作数
---

> 分类: [非序列光线追迹和探测器](/hb/operands/131/891/  "Zemax 操作数 非序列光线追迹和探测器")

非序列追迹。Src#是指目标光源的物体序号。如果Src#是0，将对所有的光源进行追迹。如果Splt？不为零，则分光是开启的。如果Scat?不为0，那么散射就开启。如果Pol？不为0则偏振光追迹是开启的。如果使用分光，偏振光追迹自动选中。如果IgEr不为0，将忽略误差。详见 “非序列模式中光源与探测器的优化（Optimizing With sources and detedtors in non-sequential mode）”。操作数NSDC，NSDD，NSDE，或者NSDP的Det#参数设置为0时，这些操作数必须在NSST操作数之前。也可参见NSST。