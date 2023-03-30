---
title: CODA
icon: state
category:
  - 操作数
---

> 分类: [光学镀膜和偏振光线追迹](/hb/operands/135/895/  "Zemax 操作数 光学镀膜和偏振光线追迹")

膜层数据。此功能使用系统设置的全局偏振状态态（见 “偏振（Polarization）这一节内容”对偏振光进行追迹。即使系统偏振态被设置为“非偏振（unpolarized）”，仍然追迹偏振态的原因是CODA计算的数据是有特定偏振态的。 
偏振光线可以从物空间任一由Field定义的视场点追迹到光瞳上任意点，一直到Surf指定的面。如果Surf为零，光线追迹到像面。波长由Wave定义，Px和Py定义归一化光瞳坐标。Data的绝对值决定返回值的类型，如下所示：  
0：相对透射偏振强度（relative transmitted intensity）（见8）。 
1，2，3：分别表示反射强度R，透射强度T，吸收强度A。 
4，5：透射场振幅实部和虚部。 
6，7：反射场振幅实部和虚部。 
8：相对透射非偏振强度（见0）。 
101，102：电场X方向的实部，虚部（E filed out X real， imaginary）。 
103，104：电场Y方向实部，虚部（E filed out X real， imaginary）。 
105，106：电场Z方向实部，虚部（E filed out X real， imaginary）。 
110：EX和EY之间的相位差Pxy。 
111，112，113：电场相位Px，Py，Pz。 
121，122，123：分别表示长轴、短轴，和椭圆偏振态的角度，单位为度。 
如果数据与膜层（1-7）相关，且Data为负，则数据用于“S”偏振态，否则用于“P”偏振态。 
其它的膜层与偏振数据可随需要加入列表中。  
见 “Hx，Hy，Px和Py”。