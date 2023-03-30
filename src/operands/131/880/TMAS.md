---
title: TMAS
icon: state
category:
  - 操作数
---

> 分类: [镜头属性约束](/hb/operands/131/880/  "Zemax 操作数 镜头属性约束")

总质量。计算Surf1到Surf2面范围内玻璃镜头的质量。面的质量要考虑到后续面包围起来的体积，因此，要计算一个单个元件的质量，第一面和最后面的编号应该是一样的。参见“计算元件体积的注释（Comments computing element volumes）”上关于质量和体积是如何计算的。该操作数有一个模式(mode)标志，模式为0（默认）表示使用的是机械口径，模式为1表示使用的是镜头数据编辑器(Lens Data Editor)中的通光口径。