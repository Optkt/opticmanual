---
title: OSCD
icon: state
category:
  - 操作数
---

> 分类: [像差](/hb/operands/131/885/  "Zemax 操作数 像差")

违正弦条件。在Wave定义的波长下，违正弦条件(OSC)有两种定义。第一种定义如Welford在Aberrations of optical Systems书中所描述（在OpticStudio入门>教程>下一步是什么？的 “镜头设计参考(References on Lens Design)”中）。该定义用于Zone为0时。另一定义则是Rolannd Shack教授提出的， 支持OSC作为光瞳函数的计算，并只使用真实光线。如果Zone不为零，就使用这个定义。在这种情况下，Zone对应实际边缘光线的 Py 坐标。当Zone对应这两种定义都是1.0时，两种定义方法对带有适当F/#和像差的系统会给出相似的结果。这个操作符对非轴对称系统没有意义。