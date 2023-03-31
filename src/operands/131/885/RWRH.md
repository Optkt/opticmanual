---
title: RWRH
icon: state
prev: RWRE
next: SMIA
category:
  - 操作数
---

> 分类: [像差](/hb/operands/131/885/  "Zemax 操作数 像差")

RMS波前差，参考主光线，以波长为单位。该操作数使用一个矩形栅格光线计算RMS。该操作数考虑渐晕。Samp为 n 将在每个光瞳区上追迹 n × n 个栅格。Hx和Hy用于定义视场点。如果Wave值为零，就会就会进行多波长加权计算。否则，就,用指定的波长计算。参见 “Hx，Hy，Px和Py”，以及“优化参考点”(OPTIMIZATION REFERENCE POINTS)。