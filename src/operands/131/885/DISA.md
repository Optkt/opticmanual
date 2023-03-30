---
title: DISA
icon: state
category:
  - 操作数
---

> 分类: [像差](/hb/operands/131/885/  "Zemax 操作数 像差")

ABCD畸变。这个操作数计算由Wave定义的波长上的主光线，相对于参考视场在径向、X或Y方向的畸变。Data是0代表径向畸变，1代表X方向畸变，2代表Y方向畸变。这个畸变是通过Field定义的视场点处的主光线计算得到的。A，B，C，D的值由用户来定义。这个畸变的计算方式类似于网格畸变功能的算法（参见 “网格畸变(Grid Distortion)”）。这个操作数和DISG的关键区别在于ABCD的值是由用户自己定义的。参见 “ABCD”值和 “DISG”。