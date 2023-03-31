---
title: NSTW
icon: state
prev: NSTR
next: REVR
category:
  - 操作数
---

> 分类: [非序列光线追迹和探测器](/hb/operands/131/891/  "Zemax 操作数 非序列光线追迹和探测器")

非序列道路照明光线追迹。该操作数仅用于非序列道明照明优化函数，并且与NSRW操作数一起用于道路照明优化。如果Splt？不为零，则分光是开启的。如果Scat?不为0，那么散射就开启。如果Pol？不为0则偏振光追迹是开启的。如果使用分光，偏振光追迹自动选中。如果IgEr不为0，将忽略误差。Origin是原始对象的行数，MH是计算中使用的安装高度。 
详细信息参见“道路照明”（Roadway Lighting）。 
NSTW操作数必须紧接着一个NSRW操作数，以便计算。此操作数旨在用作NSC道路照明功能工具的一部分。详细信息参见“非序列道路照明优化函数工具”（“NSC Roadway Merit Function Tool”）。