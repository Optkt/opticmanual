---
title: MTHA
icon: state
prev: MTFT
next: MTHS
category:
  - 操作数
---

> 分类: [Mtf数据](/hb/operands/131/883/  "Zemax 操作数 Mtf数据")

惠更斯调制传递函数。弧矢和子午的平均值。这个操作数使用惠更斯方法来计算衍射MTF（参见 “惠更斯MTF(Huygens MTF”)。参数如下：  
采样(Samp)： 光瞳采样，其中1生成32 x 32，2 生成64 x 64 等。假设光瞳和像面的采样是相同的。 
波长(Wave)：使用的波长序号（用0表示多波长）。 
视场(Field)：视场编号。 
频率(Freq)：MTF单元中的空间频率（参见 “MTF单元”）。如果精确计算MTF时，采样设置过低，操作数MTF将返回0。 
偏振(Pol?): 设为0时，忽略偏振；设为1时，考虑偏振。 
是否所有结构(All Conf?)：设为0时，使用当前结构（由这个操作数之前的的最后一个CONF操作数定义）；设为1时，为所有结构和。有关这个选项的详细讨论参见 “惠更斯MTF(Huygens MTF)”  
像面采样间距(Ima Delta)：用于计算的以微米为单位的图像增量。如果为0，采用默认的像增量 。 
如果弧矢和子午的MTF都需要计算时，将操作数MTFT和MTFS放在邻近的行中，这样就能同时计算这两个操作数。参见第 “执行优化(Performing an optimization)”。