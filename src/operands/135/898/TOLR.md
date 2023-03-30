---
title: TOLR
icon: state
category:
  - 操作数
---

> 分类: [灵敏度公差数据](/hb/operands/135/898/  "Zemax 操作数 灵敏度公差数据")

公差数据。数据(Data)为0表示RSS估计性能的变化量，1表示名义上的性能，2表示估计性能（名义性能加上估计变化量）。文件(File)是一个整数与所用的公差设置文件相对应。组态（Config#）为-2时，则计算CONF定义的最后一个组态；-1计算所有的组态；0计算公差设置文件中使用的组态；1或者更大的数值则计算指定组态。详见 “优化公差敏感度（Optimizing tolerance sensitivity）”。