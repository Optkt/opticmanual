---
title: ETGT
icon: state
prev: DMVA
next: ETLT
category:
  - 操作数
---

> 分类: [镜头参数约束](/hb/operands/130/871/  "Zemax 操作数 镜头参数约束")

边缘厚度大于。该边界操作数约束由Surf定义的面的边缘厚度大于指定的目标值。如果代码(code)是零，边缘厚度沿+y轴计算；如果代码是1，沿+X轴；如果代码是2，沿-y轴，如果代码是3，沿-X轴。该操作数有一个模式(mode)标志，模式为0（默认）表示使用的是机械孔径，模式为1表示使用的是镜头数据编辑器(Lens Data Editor)中的通光口径。这里直径是所选半口径的两倍。也可参见MNET。