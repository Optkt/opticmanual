---
title: EQUA
icon: state
category:
  - 操作数
---

> 分类: [数学运算](/hb/operands/136/899/  "Zemax 操作数 数学运算")

操作数相等运算。该操作数用于约束操作数1(Op#1)和操作数2(Op#2)之间操作数的目标值相等（当目标值为零时）。当该操作数目标,值不为零时，则先计算这些操作数的平均值，然后依次计算每个操作数的数值与平均值差值的绝对值，对于绝对值大于目标值的操作数，对这些绝对值进行求和。参见SUMM和OSUM。