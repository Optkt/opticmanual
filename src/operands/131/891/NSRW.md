---
title: NSRW
icon: state
prev: NSRM
next: NSST
category:
  - 操作数
---

> 分类: [非序列光线追迹和探测器](/hb/operands/131/891/  "Zemax 操作数 非序列光线追迹和探测器")

非序列中道路照明数据。Data指定要返回的道路照明的数据类型。0表示平均亮度；1表示亮度均匀性；2表示亮度纵向亮度；3表示阈值增量；4环绕比例；5表示平均照度；6表示最小照度；7表示水平方向照度的均匀性；# Lanes， Lane Width，Spacing和Offset都是用来定义道路照明分析用的。Arrange定义灯具沿着道路的排列。0表示单向，1表示双向，2表示交错。Surf. Class定义路面分类。0表示R1，1表示R2，2表示R3，3表示R4。详细信息参见“道路照明”（Roadway Lighting）。 
特定设置的第一个NSRW操作数必须紧接着一个NSTW操作数，以便计算。具有相同设置（data除外）的NSRW操作数必须放在相邻行。这些后续操作数将简单地返回由第一个NSRW操作数缓存的数据。此操作数旨在用作NSC道路照明功能工具的一部分。详细信息参见“非序列道路照明优化函数工具”（“NSC Roadway Merit Function Tool”）。