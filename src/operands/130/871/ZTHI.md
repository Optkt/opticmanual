---
title: ZTHI
icon: state
prev: XXET
category:
  - 操作数
---

> 分类: [镜头参数约束](/hb/operands/130/871/  "Zemax 操作数 镜头参数约束")

该操作数控制由Surf1和Surf2定义的表面总厚度在多重结构中的变化。它类似于TTHI操作数，只不过它类似于不等式操作数。指定的目标值是所定义的多重结构TTHI之间允许,的最大差值。例如，如果有3个多重结构，TTHI 3 8 计算的值分别为17，19，18.5，如果目标值设定为小于2的值，ZTHI将返回2（即19-17）。否则，ZTHI将返回目标值。为保持变焦系统所有多重结构有同样的厚度，目标值可设为0。