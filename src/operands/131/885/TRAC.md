---
title: TRAC
icon: state
prev: SPHA
next: TRAD
category:
  - 操作数
---

> 分类: [像差](/hb/operands/131/885/  "Zemax 操作数 像差")

Wave定义的波长下，在像平面上测量的径向垂轴像差，参考质心。与其它大多数操作数不同的是，TRAC在优化编辑器内的正确工作方式严格取决于其它TRAC操作数在评价函数编辑器中的位置。TRAC操作数必须将视场和波长组合在一起。OpticStudio一起追迹具有共同视场的所有光线，然后使用这些数据计算所有光线的质心。然后以计算得到的质心为参考点，独立计算每条光线的垂轴像差。该操作数只能通过序列评价函数工具(Sequential Merit Function tool)输入到评价函数编辑器，并且不推荐用户直接使用这一操作数。 
参见 “Hx，Hy，Px和Py”。