---
title: MXET
icon: state
prev: MXEG
next: MNSD
category:
  - 操作数
---

> 分类: [镜头参数约束](/hb/operands/130/871/  "Zemax 操作数 镜头参数约束")

最大边缘厚度。该边界操作数约束从Surf1到Surf2表面中每个面的边缘厚度要小于指定的目标值。也可参见MXET，MXEA，ETLT和XXET。该操作数可以同时控制多个面。该约束适用于表面的“+y”方向顶部边缘，非旋转对称表面约束请参见XXET。 
区域(Zone)，如果是非零值，缩放计算该处的厚度。如，Zone为0.5的话将计算0.5乘以半口径处的厚度。该操作数有一个模式(mode)标志，模式为0（默认）表示使用的是机械孔径，模式为1表示使用的是镜头数据编辑器(Lens Data Editor)中的通光口径。