---
title: XXEG
icon: state
category:
  - 操作数
---

> 分类: [镜头参数约束](/hb/operands/130/871/  "Zemax 操作数 镜头参数约束")

玻璃最大边缘厚度。Surf1和Surf2定义的面范围内玻璃面的最大边缘厚度。该操作数检查每个面边缘众多点处的边缘厚度，确保所有的点至少是指定的最大厚度。该操作数可以同时控制多个面。参见MXEG。 
Zone，如果是非零值，缩放径向口径，在该口径上计算厚度。如，Zone的值为0.5将计算0.5乘以半径处的厚度。该操作数有一个模式(mode)标志，模式为0（默认）表示使用的是机械口径，模式为1表示使用的是镜头数据编辑器(Lens Data Editor)中的通光口径。