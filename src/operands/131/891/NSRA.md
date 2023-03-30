---
title: NSRA
icon: state
category:
  - 操作数
---

> 分类: [非序列光线追迹和探测器](/hb/operands/131/891/  "Zemax 操作数 非序列光线追迹和探测器")

非序列单根光线追迹。Src#指目标光源的序号。此光源必须被定义为单根光线追迹。如果Splt？不为零，则分光追迹是开启的。如果Pol？非零那么就使用偏振光追迹，如果分光追迹开启则偏振项目会自动被选中。 
对于该功能散射选项通常是关闭的，因为散射的子光线是随机的，并不适合优化。 
光线追迹过程中是否出错选项在计算过程在往往是考虑的。 
如果追迹相同光线的多个NSRA操作数在评价函数编辑器中相邻，为了提高追迹效率，优化时只追迹一次。 
Seg#指的是包含返回值的光线区段的编号。用-1代表最后一个区段。Data是指特定区段的数据类型。 
使用Data1-9分别表示x坐标，y坐标，还有z坐标，x-余弦，y-余弦，z-余弦，x-法线分量，y法线分量，z-法线分量。这些数值都是相对于系统入口，参见下方的31-39。 
使用Data10-15分别表示轨迹（path-to），强度（intensity），…的相位（phase of），在何处的相位（phase at），折射率（index），初始相位（starting phase）。值得注意的是，在何处的相位phase at其值不是2pi模的大小，与,ZRD文件的情况类似。使用Data16-17分别表示从光源到指定部分结束的光线轨迹总和，或光程，以透镜单位为单位。这些值不包括衍射面的相位。 
使用Data21-26分别表示EX实部，EX虚部，Ey虚部，Ez实部，Ez虚部。如果返回实部和虚部数据，必须开启偏振。 
使用Data27-29分别表示Ex和Ey的相位和Ex、Ey的相位差。如果返回相位值，必须开启偏振。 
使用Data31-39表示坐标数据，由Data1-9定义转化到相对于全局坐标参考面。 
Source#指当光源为阵列的形式时，所用的元件序号。有关序号分类表可以参见“光源（sources）”物体性能的设置。  
这些数据项的更多信息见 “光线数据库文件（Ray database files）”。