---
title: HHCN
icon: state
category:
  - 操作数
---

> 分类: [实际光线数据约束](/hb/operands/131/882/  "Zemax 操作数 实际光线数据约束")

对超半球条件的测试。OpticStudio追迹波长(Wave)定义的波长下的光线到面(Surf)定义的面，并计算x，y，z交点坐标。然后，x和y坐标只用于该面的矢高表达式以观察z坐标的结果。如果z坐标不相同，那么HHCN返回1，否则返回0。该操作数可以用于防止优化到用超半球面的,结果。 
参见“Hx，Hy，Px和Py”。