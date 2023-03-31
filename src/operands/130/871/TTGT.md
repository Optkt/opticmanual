---
title: TTGT
icon: state
prev: TGTH
next: TTHI
category:
  - 操作数
---

> 分类: [镜头参数约束](/hb/operands/130/871/  "Zemax 操作数 镜头参数约束")

总厚度大于指定目标值。该边界操作数约束Surf定义的面的矢高以及紧跟在其后的面在相应半口径处的总厚度要大于指定的目标值。如果Code为0，厚度沿着+y轴计算，如果Code是1，沿+x轴，如果是2沿-y轴，如果Code是3沿-x轴。该操作数在镜像空间中自动改变厚度的符号，这样对于物理上可实现的镜头总是产生正值。见TTLT和TTVA。