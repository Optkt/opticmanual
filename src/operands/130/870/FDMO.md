---
title: FDMO
icon: state
category:
  - 操作数
---

> 分类: [系统数据](/hb/operands/130/870/  "Zemax 操作数 系统数据")

修改视场数据。这个操作数允许对视场位置数据进行暂时修正。它适用于新的视场坐标和任何具有渐晕因子的视场坐标（除了渐晕角不能用这个操作数进行修改）。所有后续操作数都将用到修改过的视场数据。原始的视场数据在下列情况下会被重新采用，当FDRE操作数定义了同一个视场序号，或者遇到了一,个CONF操作数（不管操作数CONF是否作为参考的组态序号），或者遇到了评价函数中的最后一个操作数。 
视场：需要修改的视场序号。  
Hx，Hy：新视场的归一化视场坐标的位置。 
VDX，VDY，VCX，VCY：新视场位置的渐晕因子。参见 “渐晕因子（Vignetting factors）”。