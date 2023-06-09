---
title: ERFP
icon: state
prev: DENF
next: GENC
category:
  - 操作数
---

> 分类: [包围圈能量](/hb/operands/131/890/  "Zemax 操作数 包围圈能量")

边缘响应函数的位置。这个操作数计算的是一个点的边缘响应函数达到一个确定的相对值时，此点的x或y的位置。有关边缘响应函数计算的细节，参见 “几何线性/边缘扩散(Geometric Line/Edge Spread)”。采样(Sampling)的值为1代表32×32，2代表64×64等等。波长(Wave)是波长编号，0代表多色光。视场(Field)是视场序号。类型(Type)决定了要返回的数据。如果Type是0或1，表示返回的是相对于主光线的x位置（即边缘平行于局部y轴）或y位置（即边缘平行于局部x轴），它们使用镜头单位。如果Wave为0，以主波长的主光线作为参考点。如果Type是2或3，返回相对于表面顶点的x或y的位置，也使用镜头单位。百分比(Fraction)是边缘响应曲率的相对值，而且必须在0.01和0.99之间。最大半径(Max Radius)是积分窗口径向的最大值，它以微米为单位。如果Max Radius为0即为默,认值。在大多数情况下建议设定为默认值。 
注意，边缘响应函数一般情况下将边缘的“亮”面定义在整合坐标系的+方向。这意味着当坐标变为正的时，边缘响应变为1。为了计算反方向边缘响应的结果，即“亮”面在坐标系的负方向，使用值(1-fraction)代替(fraction)。例如，为了得到一个反方向的80%的边缘响应，使用Fraction=0.20。如果使用的是无焦系统，所有的返回值都采用无焦系统的单位。