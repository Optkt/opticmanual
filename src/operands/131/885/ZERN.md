---
title: ZERN
icon: state
prev: TRCY
category:
  - 操作数
---

> 分类: [像差](/hb/operands/131/885/  "Zemax 操作数 像差")

Zernike条纹系数(Zernike Fringe coefficient)。参数为： 
 
项(Term)：Zernike项序号（fringe项序号为1-37，standard or annular项系数序号为1-231）； 
Term值，如果为负或零，也可以用来返回其它Zernike拟合数据，如下所示：  
-8：光程差峰值到谷值（参考质心） 
-7：光程差峰值到谷值（参考主光线） 
-6：RMS参考零参考值（ZEMAX不使用） 
-5：RMS参考主光线 
-4：RMS参考质心 
-3：方差 
-2：斯特列尔比 
-1：RMS拟合误差 
0：最大单点拟合误差 
波长(Wave)：波长序号； 
采样(Samp)：光瞳采样，其中1生成32×32，2生成64×64等。 
视场(Field)：视场序号。 
类型(Type)：Zernike类型（0表示fringe，1表示standard，2表示annular）。 
Epsilon：遮阑比率（只用于annular系数）。 
顶点(Vertex?): 如果为1，光程差就是以面顶点为参考点。如果为0，光程差就是以主光线为参考。 
注意：如果使用多个只是Term值不同的ZERN操作数，它们应该放置在编辑器的相邻行中，以便OpticStudio只做一个拟合，否则，计算速度会减慢。即使只求一个系数，在拟合过程中始终使用多个Zernike项。计算中使用的最大terms值取决于“Type”和“Term”设置。所有类型使用的最小Term值为11。这意味着仅当Terms值设置为大于或等于11时有效。如果Type是standard或annular时，则计算的最大Term值是被设置的等于任何相邻ZERN操作数中的Term值。