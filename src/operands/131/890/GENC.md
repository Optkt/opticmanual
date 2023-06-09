---
title: GENC
icon: state
prev: ERFP
next: GENF
category:
  - 操作数
---

> 分类: [包围圈能量](/hb/operands/131/890/  "Zemax 操作数 包围圈能量")

几何圈入能量（距离）。该操作数计算到指定圆形圈入，方形圈入，仅x方向，或仅y方向（狭缝）的由百分比(Frac.)定义的能量分数的距离。对于有焦模式，单位是微米。对无焦模式，单位是无焦模式的单位。其它参数是：  
采样(Samp)：光瞳采样，其中1生成32×32，2生成64×64。 
波长(Wave)：波长编号（用0表示多波长）。 
视场(Field)：视场编号。 
类型(Type)：1表示圆圈入，2表示只有x方向，3表示只有y方向，4表示方形圈入。 
参考点(Refp)：使用的参考点。用0表示主光线，1表示质心，2表示顶点，3表示点列中心。 
无衍射极限(No Diff Lim)：如果是0，结果被衍射极限所限定，否则计算的时候不考需要考虑衍射。 
也可参见GENF，DENC，DENF和XENC。