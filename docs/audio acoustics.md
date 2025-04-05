## 1. Sundry Patches

# - Pre-contents

![Application Field](https://raw.githubusercontent.com/Atlas-Lee/myMkdocsREP/refs/heads/main/docs/assets/images/AudioAcoustics_process.png)

# - Some rules of vector and matrix

## 1. 基本约定
采用**分母布局**（Denominator Layout）：

- 标量\( y \)对列向量\( \mathbf{x} \in \mathbb{R}^n \)求导结果为列向量：

\[
\frac{\partial y}{\partial \mathbf{x}} = \left[ \frac{\partial y}{\partial x_1}, \cdots, \frac{\partial y}{\partial x_n} \right]^T
\]

- 列向量\( \mathbf{y} \in \mathbb{R}^m \)对列向量\( \mathbf{x} \in \mathbb{R}^n \)求导结果为矩阵（Jacobian）：

\[
\frac{\partial \mathbf{y}}{\partial \mathbf{x}} = \begin{bmatrix}
\frac{\partial y_1}{\partial x_1} & \cdots & \frac{\partial y_m}{\partial x_1} \\
\vdots & \ddots & \vdots \\
\frac{\partial y_1}{\partial x_n} & \cdots & \frac{\partial y_m}{\partial x_n}
\end{bmatrix}
\]

---

## 2. 基本法则

### 2.1 线性函数
设\( \mathbf{a} \)为常数向量，\( \mathbf{x} \in \mathbb{R}^n \)，则：

\[
\frac{\partial (\mathbf{a}^T \mathbf{x})}{\partial \mathbf{x}} = \mathbf{a}
\]

??? abstract "**推导**"
    \[
    \mathbf{a}^T \mathbf{x} = \sum_{i=1}^n a_i x_i \text{(i.Prod)} \implies \frac{\partial (\mathbf{a}^T \mathbf{x})}{\partial x_j} = a_j \implies \frac{\partial (\mathbf{a}^T \mathbf{x})}{\partial \mathbf{x}} = \mathbf{a}
    \]

### 2.2 二次型
设对称矩阵\( \mathbf{A} \in \mathbb{R}^{n \times n} \)，则：

\[
\frac{\partial (\mathbf{x}^T \mathbf{A} \mathbf{x})}{\partial \mathbf{x}} = 2\mathbf{A}\mathbf{x}
\]

??? abstract "**推导**"
    \[
    \mathbf{x}^T \mathbf{A} \mathbf{x} = \sum_{i=1}^n \sum_{j=1}^n A_{ij}x_i x_j = A_{kk} x_k^2 + x_k \sum_{i=1,i\neq k}^n A_{ik}x_i + x_k \sum_{j=1,j\neq k}^n A_{kj}x_j \stackrel{\mathbf{A}=\mathbf{A}^T}{=} A_{KK} x_k^2 + 2 x_k \sum_{i=1,i\neq k}^n A_{ik}x_i
    \]

    \[
    \implies \frac{\partial}{\partial x_k} = 2A_{KK} + 2\sum_{j=1,j\neq k}^n A_{kj}x_j = 2\sum_{j=1}^n A_{kj}x_j = 2\mathbf{A}\mathbf{x}
    \]

---

## 3. 矩阵求导

### 3.1 矩阵-向量乘积
设\( \mathbf{A} \in \mathbb{R}^{m \times n} \)，则：

\[
\frac{\partial (\mathbf{A} \mathbf{x})}{\partial \mathbf{x}} = \mathbf{A}^T
\]

???abstract "**推导**"
    \[
    \mathbf{A}\mathbf{x} = \begin{bmatrix}
    \sum_{j=1}^n A_{1j}x_j \\
    \vdots \\
    \sum_{j=1}^n A_{mj}x_j
    \end{bmatrix} \implies \frac{\partial (\mathbf{A}\mathbf{x})_i}{\partial x_j} = A_{ij} \implies \frac{\partial (\mathbf{A}\mathbf{x})}{\partial \mathbf{x}} = \mathbf{A}^T
    \]

### 3.2 迹的导数
对任意方阵\( \mathbf{X} \)，有：

\[
\frac{\partial \, \text{tr}(\mathbf{X}^T \mathbf{A} \mathbf{X} \mathbf{B})}{\partial \mathbf{X}} = \mathbf{A} \mathbf{X} \mathbf{B} + \mathbf{A}^T \mathbf{X} \mathbf{B}^T
\]

??? abstract "**推导**"
    （利用\( d\,\text{tr}(\mathbf{M}) = \text{tr}(d\mathbf{M}) \)）：

    \[
    d\,\text{tr}(\mathbf{X}^T \mathbf{A} \mathbf{X} \mathbf{B}) = \text{tr}(\mathbf{B} \mathbf{X}^T \mathbf{A} d\mathbf{X} + \mathbf{A} \mathbf{X} \mathbf{B} d\mathbf{X}^T) \implies \frac{\partial}{\partial \mathbf{X}} = \mathbf{A} \mathbf{X} \mathbf{B} + \mathbf{A}^T \mathbf{X} \mathbf{B}^T
    \]

    - 目标表达式
    推导标量函数\( f(\mathbf{X}) = \text{tr}(\mathbf{X}^T \mathbf{A} \mathbf{X} \mathbf{B}) \)对矩阵\(\mathbf{X}\)的导数：
    
    \[
    \frac{\partial \, \text{tr}(\mathbf{X}^T \mathbf{A} \mathbf{X} \mathbf{B})}{\partial \mathbf{X}} = \mathbf{A} \mathbf{X} \mathbf{B} + \mathbf{A}^T \mathbf{X} \mathbf{B}^T
    \]

    ---

    - 推导步骤

    1.微分定义
    首先计算微分\( df = d[\text{tr}(\mathbf{X}^T \mathbf{A} \mathbf{X} \mathbf{B})] \)，利用微分与迹交换的性质：

    \[
    df = \text{tr}(d[\mathbf{X}^T \mathbf{A} \mathbf{X} \mathbf{B}])
    \]

    2.展开微分
    应用乘积法则展开微分：

    \[
    d[\mathbf{X}^T \mathbf{A} \mathbf{X} \mathbf{B}] = d\mathbf{X}^T \mathbf{A} \mathbf{X} \mathbf{B} + \mathbf{X}^T \mathbf{A} d\mathbf{X} \mathbf{B}
    \]

    {==（注：由于\(\mathbf{A}\)和\(\mathbf{B}\)为常数矩阵，其微分为零）==}

    3.分项处理
    将微分分为两部分处理：

    \[
    df = \underbrace{\text{tr}(d\mathbf{X}^T \mathbf{A} \mathbf{X} \mathbf{B})}_{\text{项I}} + \underbrace{\text{tr}(\mathbf{X}^T \mathbf{A} d\mathbf{X} \mathbf{B})}_{\text{项II}}
    \]

    项I处理：

    利用迹的循环置换性：

    \[
    \text{tr}(d\mathbf{X}^T \mathbf{A} \mathbf{X} \mathbf{B}) = \text{tr}(\mathbf{B} d\mathbf{X}^T \mathbf{A} \mathbf{X}) 
    \]

    再应用转置性质\(\text{tr}(\mathbf{M}^T) = \text{tr}(\mathbf{M})\)：

    \[
    = \text{tr}(\mathbf{X}^T \mathbf{A}^T d\mathbf{X} \mathbf{B}^T)
    \]

    提取与\(d\mathbf{X}\)相关的项：

    \[
    = \text{tr}(\mathbf{A}^T \mathbf{X} \mathbf{B}^T d\mathbf{X})
    \]

    项II处理：

    直接应用迹的循环置换：

    \[
    \text{tr}(\mathbf{X}^T \mathbf{A} d\mathbf{X} \mathbf{B}) = \text{tr}(\mathbf{B} \mathbf{X}^T \mathbf{A} d\mathbf{X})
    = \text{tr}(\mathbf{A} \mathbf{X} \mathbf{B} d\mathbf{X})
    \]

    4.合并结果
    将两项合并：

    \[
    df = \text{tr}\left( [\mathbf{A} \mathbf{X} \mathbf{B} + \mathbf{A}^T \mathbf{X} \mathbf{B}^T]^T d\mathbf{X} \right)
    \]

    根据矩阵导数定义：

    \[
    \frac{\partial f}{\partial \mathbf{X}} = \mathbf{A} \mathbf{X} \mathbf{B} + \mathbf{A}^T \mathbf{X} \mathbf{B}^T
    \]

    ---

    - 几何解释

    **第一项**\(\mathbf{A} \mathbf{X} \mathbf{B}\)：来自原始乘积链路的直接微分

    **第二项**\(\mathbf{A}^T \mathbf{X} \mathbf{B}^T\)：由转置操作引入的共轭项，保证导数结构的对称性

    ---

    - 特例验证
    当\(\mathbf{B} = \mathbf{I}\)时，公式退化为：

    \[
    \frac{\partial \, \text{tr}(\mathbf{X}^T \mathbf{A} \mathbf{X})}{\partial \mathbf{X}} = \mathbf{A} \mathbf{X} + \mathbf{A}^T \mathbf{X}
    \]

    与二次型导数公式一致（当\(\mathbf{A}\)对称时简化为\(2\mathbf{A}\mathbf{X}\)）

??? warning "为什么迹导数中向量微分可以更序的问题"
    - 问题焦点
    在推导项I时，出现步骤：

    \[
    \text{tr}(d\mathbf{X}^T \mathbf{A} \mathbf{X} \mathbf{B}) = \text{tr}(\mathbf{B} d\mathbf{X}^T \mathbf{A} \mathbf{X})
    \]

    随后进一步转换为：

    \[
    = \text{tr}(\mathbf{A}^T \mathbf{X} \mathbf{B}^T d\mathbf{X})
    \]

    **疑问**：为什么可以改变\(d\mathbf{X}\)的位置？矩阵乘法不满足交换律，这种操作是否合法？

    ---

    - 关键原理说明

        1.迹的循环置换性


        对任意合规矩阵\(\mathbf{M}, \mathbf{N}, \mathbf{P}\)，有：

        \[
        \text{tr}(\mathbf{M}\mathbf{N}\mathbf{P}) = \text{tr}(\mathbf{P}\mathbf{M}\mathbf{N}) = \text{tr}(\mathbf{N}\mathbf{P}\mathbf{M})
        \]

        这一性质允许我们在{++保持矩阵乘积整体结构++}的前提下，循环移动矩阵位置。

        2.转置运算的迹性质

        对任意矩阵\(\mathbf{M}\)，有：

        \[
        \text{tr}(\mathbf{M}^T) = \text{tr}(\mathbf{M})
        \]

    ---

    - 分步解释

    原始项I：

    \[
    \text{tr}(d\mathbf{X}^T \mathbf{A} \mathbf{X} \mathbf{B})
    \]

    应用循环置换：

    \[
    = \text{tr}(\mathbf{B} d\mathbf{X}^T \mathbf{A} \mathbf{X})
    \]

    利用转置的迹性质：

    \[
    \text{tr}(\mathbf{B} d\mathbf{X}^T \mathbf{A} \mathbf{X}) = \text{tr}([\mathbf{X}^T \mathbf{A}^T d\mathbf{X} \mathbf{B}^T]^T)= \text{tr}(\mathbf{X}^T \mathbf{A}^T d\mathbf{X} \mathbf{B}^T)
    \]

    最终整理，再次应用循环置换：

    \[
    = \text{tr}(\mathbf{B}^T \mathbf{X}^T \mathbf{A}^T d\mathbf{X})
    \]

    提取有效成分：

    \[
    = \text{tr}([\mathbf{A}^T \mathbf{X} \mathbf{B}^T]^T d\mathbf{X})
    \]

    ---

    - 合法性验证

    虽然矩阵乘法不满足交换律，但：

    1.**迹运算只关心对角线元素之和**，与矩阵排列顺序无关（只要保证乘积维度匹配）

    2.**转置操作本质上是在重组信息**，而不是改变矩阵间的相互作用关系

    3.**微分矩阵\(d\mathbf{X}\)始终作为独立变量处理**，其位置变化通过迹的运算性质实现

    ---

    - 几何视角理解

    可以把整个运算过程看作：

    通过迹的运算特性，在{++保持矩阵乘积"信息流"完整性++}的前提下对计算路径进行拓扑变形（类似张量网络的收缩重组），最终将\(d\mathbf{X}\)移动到标准位置以便提取导数

    ---

    - 重要结论
    这种顺序调整的合法性建立在：
    {++
        1.迹运算的循环置换特性
        2.微分矩阵的独立性
        3.转置运算与迹运算的兼容性
    ++}

    因此，虽然表面上改变了矩阵位置，但数学上是严格等价的。


## 4. 链式法则
设复合函数\( \mathbf{z} = \mathbf{g}(\mathbf{y}) \), \( \mathbf{y} = \mathbf{f}(\mathbf{x}) \)，则：

\[
\frac{\partial \mathbf{z}}{\partial \mathbf{x}} = \frac{\partial \mathbf{z}}{\partial \mathbf{y}} \cdot \frac{\partial \mathbf{y}}{\partial \mathbf{x}}
\]

其中“·”表示矩阵乘法

---

## 5. 常用公式总结
| 表达式                  | 导数结果               |
|-------------------------|------------------------|
| \( \mathbf{a}^T \mathbf{x} \) | \( \mathbf{a} \)       |
| \( \mathbf{x}^T \mathbf{A} \mathbf{x} \) | \( 2\mathbf{A}\mathbf{x} \)（\(\mathbf{A}\)对称时） |
| \( \|\mathbf{x}\|^2 \)  | \( 2\mathbf{x} \)      |
| \( \mathbf{A} \mathbf{x} \) | \( \mathbf{A}^T \)     |
| \( \mathbf{x}^T \mathbf{A} \) | \( \mathbf{A} \)       |

# - Use metric tensor to tranform coordinate

##  度量张量的基本概念

度量张量是一个矩阵，用于描述空间中不同坐标系下的距离和角度的测量方式。在不同的坐标系下，度量张量的形式可能会有所不同。它在微分几何和广义相对论中具有重要作用。

度量张量的概念源于对非欧几里得空间中距离和角度的描述需求。在欧几里得空间中，距离和角度的计算相对简单，可以通过勾股定理和标准内积来实现。然而，在弯曲的流形（如广义相对论中的时空）中，这些简单的计算不再适用。 

为了在更一般的流形上定义距离和角度，数学家引入了度量张量（Metric Tensor）。度量张量是一个二阶张量，它在流形的每一点上定义了该点处的内积结构。通过度量张量，可以计算出流形上任意两点之间的距离，以及两个切向量之间的角度。

!!! note ""
    1. 从欧几里得空间到流形：在欧几里得空间中，距离和角度的计算基于标准内积。但在流形中，由于空间的弯曲，标准内积不再适用。 
    2. 内积的推广：为了在流形上定义内积，引入了度量张量。度量张量在每一点上定义了该点处的内积结构。 
    3. 距离和角度的计算：通过度量张量，可以计算出流形上任意两点之间的距离，以及两个切向量之间的角度。

!!! tip "使用场景"
    1. 微分几何：在研究流形的几何性质时，度量张量是基本工具之一。它用于描述流形的内积结构、距离、角度和曲率。 
    2. 广义相对论：在广义相对论中，时空被描述为一个四维流形，其几何性质由度量张量决定。爱因斯坦场方程通过度量张量描述了时空的弯曲与物质分布之间的关系。
    3. 计算机图形学：在处理曲面的几何变换和渲染时，度量张量可以用于计算曲面上的距离和角度，从而实现更精确的几何操作。 
    4. 机器人学：在机器人路径规划和运动控制中，度量张量可以用于描述机器人在配置空间中的距离和角度，从而优化运动轨迹。

## 坐标变换的基本概念

坐标变换是指将一个点从一个坐标系转换到另一个坐标系的过程。例如，从笛卡尔坐标系转换到球坐标系。在进行坐标变换时，需要知道两个坐标系之间的转换关系，以及如何在新的坐标系下表达原来的度量张量。

-  通过度量张量矩阵进行坐标变换的思路

    1. **确定坐标系之间的转换关系**：找到从旧坐标系到新坐标系的转换公式。
    2. **计算雅可比矩阵**：雅可比矩阵的元素是新坐标对旧坐标的偏导数。
    3. **变换度量张量**：使用雅可比矩阵将旧坐标系下的度量张量转换为新坐标系下的度量张量。

-  球坐标系的例子

    4.1 球坐标系的定义

    球坐标系有三个坐标：半径r，极角θ，和方位角φ。笛卡尔坐标(x, y, z)可以表示为球坐标(r, θ, φ)的函数：

    - x = r sinθ cosφ
    - y = r sinθ sinφ
    - z = r cosθ

    4.2 计算雅可比矩阵

    雅可比矩阵的元素是新坐标对旧坐标的偏导数：

    \[
    J = \begin{bmatrix}
    \frac{\partial x}{\partial r} & \frac{\partial x}{\partial  \theta} & \frac{\partial x}{\partial \phi} \\
    \frac{\partial y}{\partial r} & \frac{\partial y}{\partial  \theta} & \frac{\partial y}{\partial \phi} \\
    \frac{\partial z}{\partial r} & \frac{\partial z}{\partial  \theta} & \frac{\partial z}{\partial \phi}
    \end{bmatrix}
    \]

    计算每个偏导数得到雅可比矩阵J为：

    \[
    J = \begin{bmatrix}
    \sin\theta \cos\phi & r \cos\theta \cos\phi & -r \sin\theta \sin\phi \\
    \sin\theta \sin\phi & r \cos\theta \sin\phi & r \sin\theta \cos\phi \\
    \cos\theta & -r \sin\theta & 0
    \end{bmatrix}
    \]

    4.3 变换度量张量

    在笛卡尔坐标系(Cartesian CDN)下，度量张量g是单位矩阵：

    \[
    g = \begin{bmatrix}
    1 & 0 & 0 \\
    0 & 1 & 0 \\
    0 & 0 & 1
    \end{bmatrix}
    \]

    新坐标系下的度量张量g'可以通过以下公式 (1) 计算：
    { .annotate }

    1.  公式$g' = J^T g J$的意义在于，通过雅可比矩阵J，将旧坐标系下的度量张量g转换到新坐标系下。这个过程确保了在新坐标系下，距离和角度的测量方式能够正确反映旧坐标系下的几何关系。同时，这个公式也体现了张量的变换规则，即二阶张量在坐标变换下的新分量可以通过旧分量与雅可比矩阵的乘积来计算。

    \[
    g' = J^T g J
    \]
   

    由于g是单位矩阵，$g' = J^T J$。

    计算$J^T J$：

    \[
    J^T = \begin{bmatrix}
    \sin\theta \cos\phi & \sin\theta \sin\phi & \cos\theta \\
    r \cos\theta \cos\phi & r \cos\theta \sin\phi & -r \sin\theta \\
    -r \sin\theta \sin\phi & r \sin\theta \cos\phi & 0
    \end{bmatrix}
    \]

    \[
    J^T J = \begin{bmatrix}
    \sin^2\theta \cos^2\phi + \sin^2\theta \sin^2\phi + \cos^2\theta & \cdots & \cdots \\
    \cdots & r^2 \cos^2\theta (\cos^2\phi + \sin^2\phi) + r^2 \sin^2\theta & \cdots \\
    \cdots & \cdots & r^2 \sin^2\theta (\sin^2\phi + \cos^2\phi)
    \end{bmatrix}
    \]

    简化后得到：

    !!! abstract "球坐标系下的度量张量"
        \[
        g' = \begin{bmatrix}
        1 & 0 & 0 \\
        0 & r^2 & 0 \\
        0 & 0 & r^2 \sin^2\theta
        \end{bmatrix}
        \]

    同理。

    !!! abstract "柱坐标"
        \[
        J^T = \begin{bmatrix}
        \cos\phi & \sin\phi & 0 \\
        -r \sin\phi & r \cos\phi & 0 \\
        0 & 0 & 1
        \end{bmatrix}
        \]

        \[
        J^T \cdot J = \begin{bmatrix}
        \cos^2\phi + \sin^2\phi & 0 & 0 \\
        0 & r^2 \sin^2\phi + r^2 \cos^2\phi & 0 \\
        0 & 0 & 1
        \end{bmatrix} = \begin{bmatrix}
        1 & 0 & 0 \\
        0 & r^2 & 0 \\
        0 & 0 & 1
        \end{bmatrix}
        \]


## 应用
### 度量张量在拉普拉斯算子变换中的应用

拉普拉斯算子在不同的坐标系下有不同的表达式，而度量张量 \( g' \) 在其中起到了关键作用。

!!! abstract annotate "拉普拉斯算子在新坐标系下的表达式 (1) "
    \[
    \nabla^2 \phi = \frac{1}{\sqrt{\det g'}} \frac{\partial}{\partial x'^i} \left( \sqrt{\det g'} g'^{ij} \frac{\partial \phi}{\partial x'^j} \right)
    \]

1.  其中：\( g'^{ij} \) 是度量张量 \( g' \) 的逆矩阵,\( \det g' \) 是度量张量 \( g' \) 的行列式。

示例：在球坐标系下计算拉普拉斯算子

- **度量张量 \( g' \)**：

\[
g' = \begin{bmatrix}
1 & 0 & 0 \\
0 & r^2 & 0 \\
0 & 0 & r^2 \sin^2\theta
\end{bmatrix}
\]

- **行列式 \( \det g' \)**：

\[
\det g' = 1 \cdot r^2 \cdot r^2 \sin^2\theta = r^4 \sin^2\theta
\]

- **逆矩阵 \( g'^{ij} \)**：

\[
g'^{ij} = \begin{bmatrix}
1 & 0 & 0 \\
0 & \frac{1}{r^2} & 0 \\
0 & 0 & \frac{1}{r^2 \sin^2\theta}
\end{bmatrix}
\]

!!! abstract annotate "拉普拉斯算子的表达式(1)"
    \[
    \begin{align*}
    \nabla^2 \phi = \frac{1}{r^2 \sin\theta} \frac{\partial}{\partial r} \left( r^2 \sin\theta \frac{\partial \phi}{\partial r} \right) \\+ \frac{1}{r^2 \sin\theta} \frac{\partial}{\partial \theta} \left( \sin\theta \frac{\partial \phi}{\partial \theta} \right) \\+ \frac{1}{r^2 \sin^2\theta} \frac{\partial^2 \phi}{\partial \phi^2}
    \end{align*}
    \]

1.  通过这个过程，我们可以看到度量张量 \( g' \) 在拉普拉斯算子变换中的重要性。它确保了在新坐标系下，拉普拉斯算子能够正确描述场的分布。


### 计算距离 

假设我们有两个点A和B，它们的柱坐标分别是 \( (r1, \phi1, z1) \) 和 \( (r2, \phi2, z2) \)，那么它们之间的距离 \( d \) 可以表示为： 

\[
d^2 = g'_{rr}(r2 - r1)^2 + g'_{\phi\phi}(\phi2 - \phi1)^2 + g'_{zz}(z2 - z1)^2
\] 

!!! abstract "柱坐标"
    \[
    J^T = \begin{bmatrix}
    \cos\phi & \sin\phi & 0 \\
    -r \sin\phi & r \cos\phi & 0 \\
    0 & 0 & 1
    \end{bmatrix}
    \]

    \[
    g' = J^T \cdot J = \begin{bmatrix}
    \cos^2\phi + \sin^2\phi & 0 & 0 \\
    0 & r^2 \sin^2\phi + r^2 \cos^2\phi & 0 \\
    0 & 0 & 1
    \end{bmatrix} = \begin{bmatrix}
    1 & 0 & 0 \\
    0 & r^2 & 0 \\
    0 & 0 & 1
    \end{bmatrix}
    \]

代入 \( g' \) 的值：

\[
d^2 = (r2 - r1)^2 + r1^2 (\phi2 - \phi1)^2 + (z2 - z1)^2
\] 

### 计算体积

体积元素 ( dV ) 可以通过度量张量的行列式计算： 

\[
dV = \sqrt{\det g'} dr  d\phi  dz
\] 

计算 \( \det g' \)： 

\[
\det g' = 1 \cdot r^2 \cdot 1 = r^2
\] 

因此，体积元素为： 

\[
dV = r dr  d\phi  dz
\]

## 总结

度量张量是一个重要的工具，用于描述流形上的距离和角度的测量方式。通过计算新坐标系下的度量张量 \( g' \)，我们可以实现坐标变换，并在新坐标系下进行几何计算和拉普拉斯算子的变换。具体步骤包括：

1. **确定坐标变换公式**：找到从旧坐标系到新坐标系的转换关系。
2. **计算雅可比矩阵 \( J \)**：根据坐标变换公式，计算新坐标对旧坐标的偏导数。
3. **计算新坐标系下的度量张量 \( g' \)**：使用公式 \( g' = J^T \cdot g \cdot J \)。
4. **利用 \( g' \) 进行几何计算**：在新坐标系下，利用 \( g' \) 进行距离、角度等几何量的计算。
5. **在拉普拉斯算子变换中应用 \( g' \)**：通过计算 \( g' \) 的行列式和逆矩阵，代入拉普拉斯算子的表达式，确保在新坐标系下，拉普拉斯算子能够正确描述场的分布。
---

# 2. Signal Vector Space
## 范数(norm)

空间元素\( \mathbf{x}=(x_1,x_2,\cdots,x_N) \)的p阶范数定义为:

\[
    \left\|\mathbf{x}\right\|_p=\begin{cases}\left[\sum_{i=1}^N\left|x_i\right|^p\right]^{\frac{1}{p}},&1\leq p<\infty\\\max_{1\leq i\leq N}\left|x_i\right|,&p=\infty&&\end{cases}\\
\]

常用范数为一阶,二阶和无穷阶范数,二阶范数对应矢量的长度,称为欧式(Eucilidean)范数或欧式矩。

- 信号矢量空间的十条公理  
    1. 向量加法的封闭性 对于任意两个信号（向量）𝑥 和 𝑦，它们的和 𝑥+𝑦 仍然属于该空间。 • 例子：在二维信号空间 𝑅2 中，𝑥=[1,2] 和 𝑦=[3,4]，则 𝑥+𝑦=[4,6]，仍然属于 𝑅2。  
    2. 标量乘法的封闭性 对于任意信号（向量）𝑥 和任意标量 𝑎，标量乘积 𝑎𝑥 仍然属于该空间。 • 例子：在 𝑅2 中，𝑥=[1,2]，标量 𝑎=3，则 𝑎𝑥=[3,6]，仍然属于 𝑅2。  
    3. 加法交换律 对于任意两个信号（向量）𝑥 和 𝑦，有 𝑥+𝑦=𝑦+𝑥。 • 例子：𝑥=[1,2]，𝑦=[3,4]，则 𝑥+𝑦=[4,6]，𝑦+𝑥=[4,6]。  
    4. 加法结合律 对于任意三个信号（向量）𝑥、𝑦 和 𝑧，有 (𝑥+𝑦)+𝑧=𝑥+(𝑦+𝑧)。 • 例子：𝑥=[1,2]，𝑦=[3,4]，𝑧=[5,6]，则 (𝑥+𝑦)+𝑧=[9,12]，𝑥+(𝑦+𝑧)=[9,12]。  
    5. 加法单位元 存在一个零向量 0，使得对于任意信号（向量）𝑥，有 𝑥+0=𝑥。 • 例子：在 𝑅2 中，0=[0,0]，𝑥=[1,2]，则 𝑥+0=[1,2]。  
    6. 加法逆元 对于任意信号（向量）𝑥，存在一个负向量 −𝑥，使得 𝑥+(−𝑥)=0。 • 例子：在 𝑅2 中，𝑥=[1,2]，−𝑥=[−1,−2]，则 𝑥+(−𝑥)=[0,0]。  
    7. 标量乘法的分配律（标量对向量的分配律） 对于任意标量 𝑎 和任意两个信号（向量）𝑥 和 𝑦，有 𝑎(𝑥+𝑦)=𝑎𝑥+𝑎𝑦。 • 例子：𝑎=2，𝑥=[1,2]，𝑦=[3,4]，则 𝑎(𝑥+𝑦)=[8,12]，𝑎𝑥+𝑎𝑦=[8,12]。  
    8. 标量乘法的分配律（向量对标量的分配律） 对于任意两个标量 𝑎 和 𝑏 以及任意信号（向量）𝑥，有 (𝑎+𝑏)𝑥=𝑎𝑥+𝑏𝑥。 • 例子：𝑎=2，𝑏=3，𝑥=[1,2]，则 (𝑎+𝑏)𝑥=[5,10]，𝑎𝑥+𝑏𝑥=[5,10]。  
    9. 标量乘法的结合律 对于任意两个标量 𝑎 和 𝑏 以及任意信号（向量）𝑥，有 (𝑎𝑏)𝑥=𝑎(𝑏𝑥)。 • 例子：𝑎=2，𝑏=3，𝑥=[1,2]，则 (𝑎𝑏)𝑥=[6,12]，𝑎(𝑏𝑥)=[6,12]。  
    10. 标量乘法的单位元 存在一个标量 1，使得对于任意信号（向量）𝑥，有 1𝑥=𝑥。 • 例子：1𝑥=𝑥，其中 𝑥=[1,2]。
- Common norm def: 
!!! note "continuous SPE **L** & discrete SPE **l**"
    \[
        \begin{gathered}\left\|\mathbf{x}\right\|_p=\begin{cases}\left[\int_{-\infty}^\infty\left|x(t)\right|^pdt\right]^{\frac{1}{p}},1\leq p<\infty\\\\\sup\left|x\left(t\right)\right|,\quad p\to\infty&\end{cases}\\\left\|\mathbf{x}\right\|_p=\begin{cases}\left[\sum_{n=-\infty}^\infty\left|x(n)\right|^p\right]^{\frac{1}{p}},1\leq p<\infty\\\\\sup\left|x(n)\right|,\quad p\to\infty&\end{cases}\end{gathered}
    \]
## Inner product SPE
## 内积空间的定义

内积空间（Inner Product Space）是一个向量空间 \( V \)，其中定义了一个内积运算，记作 \( \langle \cdot, \cdot \rangle \)。内积满足以下公理：

1. **线性**：
    - 对第一个向量线性：对于任意的向量 \( u, v, w \in V \) 和标量 \( a \)，有

        \[
        \langle a u + v, w \rangle = a \langle u, w \rangle + \langle v, w \rangle
        \]

    - 对第二个向量线性：对于任意的向量 \( u, v, w \in V \) 和标量 \( a \)，有

        \[
        \langle u, a v + w \rangle = a \langle u, v \rangle + \langle u, w \rangle
        \]


2. **对称性**：
   对于任意的向量 \( u, v \in V \)，有

    \[
    \langle u, v \rangle = \langle v, u \rangle
    \]


3. **正定性**：
   对于任意的向量 \( v \in V \)，有

    \[
    \langle v, v \rangle \geq 0\quad (iff. v = 0)
    \]

## 完备性的要求

完备性（Completeness）是内积空间的一个重要性质，它要求内积空间中的所有柯西序列（Cauchy Sequence） (1) 都收敛到该空间中的某个点。
{ .annotate }

1. **柯西序列：**
    一个序列 \( \{v_n\} \) 称为柯西序列，如果对于任意的 \( \epsilon > 0 \)，存在一个自然数 \( N \)，使得对于所有 \( m, n > N \)，有
    
    \[
    \|v_m - v_n\| < \epsilon
    \]

    其中，范数 \( \|v\| \) 由内积定义为
    
    \[
    \|v\| = \sqrt{\langle v, v \rangle}
    \]

    **完备性**：
    内积空间 \( V \) 是完备的，如果每一个柯西序列 \( \{v_n\} \) 都收敛到 \( V \) 中的某个向量 \( v \)，即

    \[
    \lim_{n \to \infty} \|v_n - v\| = 0
    \]

??? abstract "meaning"
    柯西列的定义依赖于距离的定义，所以只有在度量空间(metric space)中柯西列才有意义。在更一般的一致空间(uniform space)中，可以定义更为抽象的柯西滤子(Cauchy filter)和柯西网(Cauchy net)。
    
     一个重要性质是，在完备空间（complete space）中，所有的柯西列都有极限，这就让人们可以在不求出这个极限（如果存在）的情况下，利用柯西列的判别法则证明该极限是存在的。柯西列在构造具有完备性的代数结构的过程中也有重要价值，如构造实数。

## 内积空间与Hilbert空间

{== 一个**完备的内积空间**被称为 **Hilbert空间**（Hilbert Space）==}。Hilbert空间在数学和物理中具有广泛的应用，例如在量子力学中，状态空间就是一个Hilbert空间。

- 示例

1. **欧几里得空间**：
   实数空间 \( \mathbb{R}^n \) 配备标准点积是一个内积空间，并且它是完备的，因此是一个Hilbert空间。

2. **平方可积函数空间**：
   考虑区间 \( [a, b] \) 上的所有平方可积函数 \( f \)，即满足
   
\[
\int_a^b |f(x)|^2 dx < \infty
\]
   
   定义内积为:
!!! note "inner prod"   

    \[
    \langle f, g \rangle = \int_a^b \overline{f(x)} g(x)  dx
    \]
   
   这个空间在 \( L^2 \) 范数下是完备的，因此是一个Hilbert空间。

- 总结

内积空间通过内积运算扩展了向量空间的结构，使得我们可以定义向量的长度和夹角。完备性要求确保了内积空间中的所有柯西序列都收敛到空间中的某个点，从而使得内积空间成为一个Hilbert空间，具备广泛的应用价值。
## Linear transform and orthogonal transform
## Self-adjoint(Hermitian)operator
即保证了内积定义下的可交换性
!!! note "Self-adjoint(Hermitian)operator(自伴算子)"
    1. 所有特征值（eigenvalue）为实数
    2. 不同特征值对应的特征矢量（eigenvector）正交
    3. 特征矢量构成H的完备正交基（可转换为归一化正交基）

## orthogonal transform
**Invariant I.Prod**
保证内积不变，则可以在内积空间进行操作。对\( \mathbb{R}^N \),变换矩阵为正交矩阵

\[
    \left\langle T\mathbf{x},T\mathbf{y}\right\rangle=\left\langle\mathbf{x},\mathbf{y}\right\rangle\mathrm{~for~}\mathbf{x},\mathbf{y}\in V
\]

更一般定义**酉变换**(unitary transform)(complex I.prod SPE).此时变换矩阵是酉矩阵。

## Unitary trans. and Unitary Mat.
在数学中，酉变换（Unitary Transformation）和酉矩阵（Unitary Matrix）是与复数域上的线性变换相关的重要概念。它们在量子力学、信号处理、控制系统等领域有着广泛的应用。 酉变换 酉变换是一种保持向量内积不变的线性变换。具体来说，对于一个复数内积空间，酉变换是一个线性映射，它保持向量的内积不变。数学上，如果 ( U ) 是一个酉变换，那么对于任意的向量 ( x ) 和 ( y )，都有： 

\[
\langle Ux, Uy \rangle = \langle x, y \rangle
\] 

其中，\( \langle \cdot, \cdot \rangle \) 表示复数域上的内积。酉矩阵是酉变换的矩阵表示。一个复数方阵 \( U \) 称为酉矩阵，如果它满足以下条件： 

!!! note ""
    \[
    U^\dagger U = UU^\dagger = I
    \] 

其中，\( U^\dagger \) 表示 \( U \) 的共轭转置（即复数共轭后取转置），\( I \) 是单位矩阵。

!!!note "1. 酉矩阵的性质"
    -  列（行）向量的标准正交性：酉矩阵的列向量（或行向量）是标准正交的。即，对于任意的列向量 \( u_i \) 和 \( u_j \)，有： 
    
    \[
    \langle u_i, u_j \rangle = \delta_{ij}
    \] 
    
    -  行列式的模为1：酉矩阵的行列式的绝对值为1，即： 
    
    \[
    |\det(U)| = 1
    \]  

    -  逆矩阵的共轭转置：酉矩阵的逆矩阵是其共轭转置，即： 

    \[
    U^{-1} = U^\dagger
    \]  

    -  特征值的模为1：酉矩阵的特征值的模都是1，即它们位于复数单位圆上。   

- 酉变换的应用 
    1.  量子力学：在量子力学中，酉变换用于描述量子态的演化，因为它们保持**量子态的范数不变**。  
    2.  信号处理：酉变换在信号处理中用于**设计正交滤波器和正交码**，以减少干扰。  
    3.  控制系统：
    在控制系统中，酉变换用于保持系统的稳定性，因为它们保持**系统的能量不变**。
??? tip "示例 考虑一个二维复数空间中的酉矩阵"
    \[
    U = \begin{bmatrix}
    \cos\theta & -\sin\theta \\
    \sin\theta & \cos\theta
    \end{bmatrix}
    \] 

    这个矩阵表示一个旋转θ的酉变换。其共轭转置为： 

    \[
    U^\dagger = \begin{bmatrix}
    \cos\theta & \sin\theta \\
    -\sin\theta & \cos\theta
    \end{bmatrix}
    \] 

    验证酉矩阵的条件： 

    \[
    U^\dagger U = \begin{bmatrix}
    \cos\theta & \sin\theta \\
    -\sin\theta & \cos\theta
    \end{bmatrix}
    \begin{bmatrix}
    \cos\theta & -\sin\theta \\
    \sin\theta & \cos\theta
    \end{bmatrix}
    = I
    \] 

    同样， 

    \[
    UU^\dagger = I
    \] 

    因此，( U ) 是一个酉矩阵。
---

# 3. Karhunen-Loève Transform
## 定义
KL变换（Karhunen-Loève Transform）是一种基于数据协方差矩阵特征分解的线性变换，用于**数据降维**和**特征提取**。其核心思想是将数据投影到正交基上，使得投影后的坐标具有最大方差且互不相关。

- 一个自然的问题：怎样的正交变换有最优特性？从数据压缩角度看，变换后的信号能量分布越集中越好，换言之，数据压缩的信息损失越小越好。

- 如何定义优化目标？
注意：我们处理的对象是随机过程{==（一般约定广义平稳遍历条件）==}

## 数学推导
!!! note annotate "基本过程"
    1.数据假设
    设观测数据为\( \{\mathbf{x}_i\}_{i=1}^N \)，其中\( \mathbf{x}_i \in \mathbb{R}^d \)，均值为零**（已中心化）**：

    \[
    \mathbb{E}[\mathbf{x}] = \mathbf{0}
    \]

    2.协方差矩阵
    协方差矩阵定义为：

    \[
    \mathbf{C} = \mathbb{E}[\mathbf{x}\mathbf{x}^T] = \frac{1}{N} \sum_{i=1}^N \mathbf{x}_i \mathbf{x}_i^T
    \]

    3.特征分解
    对协方差矩阵进行特征分解(1)：

    \[
    \mathbf{C} \mathbf{u}_k = \lambda_k \mathbf{u}_k
    \]

    

    4.投影与坐标
    将数据\( \mathbf{x} \)投影到**前\(m\)个特征向量张成的子空间**(2)：

    \[
    y_k = \mathbf{u}_k^T \mathbf{x} \quad (k=1,2,...,m)
    \]

   
1. 其中：
    - \( \lambda_k \)为第\(k\)大特征值，即需要对特征值**排序**
    - \( \mathbf{u}_k \)为对应的正交特征向量
2. 投影坐标\( y_k \)满足：
    - 方差最大：\( \mathbb{E}[y_k^2] = \lambda_k \)
    - 互不相关：\( \mathbb{E}[y_k y_l] = 0 \ (k \neq l) \)

??? abstract annotate "具体推导"
    从Lagrange乘数法推导KL变换最优性

    1.最优化问题建模
    设数据已中心化，寻找投影方向\(\mathbf{u}\)使得投影方差最大化：
    
    \[
    \max_{\mathbf{u}} \mathbb{E}[(\mathbf{u}^T\mathbf{x})^2] = \mathbf{u}^T\mathbf{C}\mathbf{u}
    \]
    
    约束条件：
    
    \[
    \mathbf{u}^T\mathbf{u} = 1 \quad (\text{单位向量约束})
    \]

    ---

    2.单主成分推导

    2.1 Lagrange函数构造
    引入Lagrange乘子(1)\(\lambda\)：
    
    \[
    \mathcal{L}(\mathbf{u}, \lambda) = \mathbf{u}^T\mathbf{C}\mathbf{u} - \lambda(\mathbf{u}^T\mathbf{u} - 1)
    \]

    2.2 求导求解
    对\(\mathbf{u}\)求导并令导数为零：
    
    \[
    \frac{\partial \mathcal{L}}{\partial \mathbf{u}} = 2\mathbf{C}\mathbf{u} - 2\lambda\mathbf{u} = 0 \implies \mathbf{C}\mathbf{u} = \lambda\mathbf{u}
    \]
    
    此时：

    - \(\lambda\)为协方差矩阵\(\mathbf{C}\)的特征值

    - \(\mathbf{u}\)为对应特征向量

    2.3 极值验证
    最大方差对应最大特征值：
    
    \[
    \mathbf{u}_1^T\mathbf{C}\mathbf{u}_1 = \lambda_1 \quad (\lambda_1 \text{为最大特征值})
    \]

    ---

    3.多主成分扩展

    3.1 正交约束条件
    寻找第\(k\)个主成分时，需满足正交约束：
    
    \[
    \mathbf{u}_k^T\mathbf{u}_i = 0 \quad (i=1,...,k-1)
    \]

    3.2 推广的Lagrange函数
    引入多个乘子\(\{\lambda, \mu_i\}\)：
    
    \[
    \mathcal{L} = \mathbf{u}_k^T\mathbf{C}\mathbf{u}_k - \lambda(\mathbf{u}_k^T\mathbf{u}_k - 1) - \sum_{i=1}^{k-1} \mu_i \mathbf{u}_k^T\mathbf{u}_i
    \]

    3.3 特征方程推导
    求导可得：
    
    \[
    2\mathbf{C}\mathbf{u}_k - 2\lambda\mathbf{u}_k - \sum_{i=1}^{k-1} \mu_i \mathbf{u}_i = 0
    \]
    
    由正交性条件可得\(\mu_i=0\)，最终仍得到：
    
    \[
    \mathbf{C}\mathbf{u}_k = \lambda_k\mathbf{u}_k
    \]

1. 深层理论解释 

    1.对偶关系 Lagrange乘数法的符号选择本质上建立了原始问题与对偶问题的一致性。在标准形式中： • 正乘子对应有效约束 • 负乘子会导致约束条件失效  
    
    2.几何解释 在流形优化中，约束条件定义了一个黎曼流形。使用正确符号时： • 梯度方向与约束流形切空间对齐 • 符号反转相当于在余切丛中镜像映射    
    
    - 实际应用指导正确符号选择规则 
    
    |问题类型    |Lagrange函数形式 |   
    |最大化问题  |( f - \lambda(g - c) ) |  
    |最小化问题  |( f + \lambda(g - c) ) | 
    
    快速验证方法:对简单二次型\( \max x^2 \ \text{s.t.} \ x^2=1 \)，验证： • 正确符号得解x=±1（最大） • 错误符号得解x=0（违反约束）    
    
    结论: 符号选择不是任意的，{++1. 保持优化方向与物理意义一致 2. 确保驻点方程与原始问题同构 3. 维护对偶关系的数学一致性++}

## 关键概念解释

1."截短"(Truncation)

- **物理意义**：舍弃小特征值对应的低方差成分

- **数学操作**：将特征分解结果截断为：

\[
\mathbf{C} \approx \sum_{k=1}^m \lambda_k \mathbf{u}_k\mathbf{u}_k^T
\]

!!! info "截断最优性证明"
    - 总方差分解
    协方差矩阵的迹为总方差：

    \[
    \text{tr}(\mathbf{C}) = \sum_{i=1}^d \lambda_i
    \]

    - 最优截断准则
    选择前\(m\)个最大特征值对应的特征向量，保留方差：

    \[
    \eta = \frac{\sum_{k=1}^m \lambda_k}{\sum_{i=1}^d \lambda_i}
    \]

    此时在均方误差意义下达到最优：

    \[
    \min_{\{\mathbf{u}_k\}} \mathbb{E}\left[\|\mathbf{x} - \sum_{k=1}^m (\mathbf{u}_k^T\mathbf{x})\mathbf{u}_k\|^2\right]
    \]

2."前m个"的由来

**能量集中原理**：实际数据协方差矩阵的特征值通常快速衰减

**典型分布**：常见数据中前5-20%主成分可保留90%以上方差，进行数据压缩

??? tip "应用示例"
    对\(d=2\)数据，协方差矩阵为：

    \[
    \mathbf{C} = \begin{bmatrix}
    1.2 & 0.8 \\
    0.8 & 0.9
    \end{bmatrix}
    \]

    其特征分解结果为：

    \[
    \lambda_1=1.8, \ \mathbf{u}_1=[0.81, 0.58]^T \\
    \lambda_2=0.3, \ \mathbf{u}_2=[-0.58, 0.81]^T
    \]

    选择\(m=1\)时，数据被投影到\( \mathbf{u}_1 \)方向，保留约85.7%的总方差。

## 最优性总结及应用

通过Lagrange乘数法可严格证明：

{++
    1. KL变换是**方差最大意义下**的最优线性投影
    2. 按特征值降序截断可**最大程度保留信息量**
    3. 正交基保证了解耦性，满足\( \mathbb{E}[y_i y_j] = 0 \ (i \neq j) \)
++}


!!! success "关键性质和应用"
    1. **最优压缩**：在均方误差意义下，KL变换是**保留信息量最大**的线性降维方法
    2. **去相关性**：投影后的坐标互不相关
    3. **能量集中**：前几个主成分通常包含数据的主要能量
    4. 信号的白化处理
    5. 数据降维
    6. 音频编解码（MDCT）
    7. 变换域滤波

## 实际问题与近似算法

### 基本定义
离散余弦变换（DCT）的基向量为{++预先定义++}的余弦函数：

\[
\mathbf{u}_k[n] = \alpha_k \cos\left(\frac{(2n+1)k\pi}{2N}\right)
\]

其中(1)
{ .annotate}

1. normalization factor（归一化因子）

\[
\alpha_k = \begin{cases}
\sqrt{\frac{1}{N}}, & k=0 \\
\sqrt{\frac{2}{N}}, & k>0
\end{cases}
\]

!!! info "关键优势"
    - **数据无关性**：基函数固定，无需计算特征分解
    - **快速算法**：存在\(O(N\log N)\)快速实现（类似FFT）
    - **能量集中性**：对常见信号接近KL变换的最优性

---

### DCT与KL变换的近似关系

- 理论近似条件

当信号满足以下条件时，DCT近似KL变换：

1. **平稳性**：信号统计特性不随时间变化
2. **马尔可夫性**：协方差矩阵满足\(\mathbf{C}_{ij} = \rho^{|i-j|}\)
   
此时DCT基函数与KL变换的特征向量渐近一致{==（\(\rho \to 1\)）==}

??? abstract "数值验证"
    生成马尔可夫过程数据（\(\rho=0.9\)）：

    | 变换类型 | 能量集中率（前8/64分量） |
    |----------|--------------------------|
    | KL变换   | 94.7%                    |
    | DCT-II   | 93.2%                    |
    | DFT      | 89.5%                    |


#### DCT

- DCT-II标准式
!!! note "最常用DCT-II型定义"
    \[
    X_k = \sum_{n=0}^{N-1} x_n \cos\left(\frac{\pi}{N}(n+\frac{1}{2})k\right)
    \]

    其正交基矩阵\(\mathbf{U}\)满足：

    \[
    \mathbf{U}^T\mathbf{U} = \mathbf{I}
    \]

- 与KL变换的对比

| 特性         | KL变换               | DCT               |
|--------------|----------------------|-------------------|
| 基函数来源   | 数据驱动             | 预先定义          |
| 最优性       | 严格最优             | 准最优            |
| {==计算复杂度==}   | \(O(N^3)\)          | \(O(N\log N)\)    |
| 适用场景     | 特定数据集分析       | 实时压缩/通信     |

---
!!! abstract "渐进等价性证明"
    当信号满足以下条件时，DCT近似KL变换： 
    
    1.信号为一阶平稳Markov过程： 
    
    \[ r_{|i-j|} = \mathbb{E}[x_i x_j] = \rho^{|i-j|}\] 
    
    2.相关系数\(\rho \to 1\)（高度相关信号）  此时DCT基函数收敛于KL变换的特征向量。 
    
    3.数学近似推导 对Toeplitz矩阵\(\mathbf{C}\)，当\(\rho \approx 1\)时：

    \[
    \mathbf{C} \approx \mathbf{U}\mathbf{\Lambda}\mathbf{U}^T
    \]

    其中\(\mathbf{U}\)的列向量趋近DCT基函数。

!!! info "工程实践中的选择"
    - 选择DCT的场景
        - **标准化需求**：如JPEG、MPEG等国际标准
        - **硬件实现**：固定基函数适合设计专用电路
        - **实时系统**：快速算法降低延迟

    - 保留KL变换的场景
        - **非平稳信号分析**：如金融时间序列
        - **小样本高维数据**：如基因表达数据分析
        - **精确建模需求**：如量子化学计算

    - 改进方向：自适应DCT
        结合两者优势的方法：
        1. **分块自适应**：将信号分段，每段选择最优DCT类型
        2. **参数化基**：设计含参数的DCT基，在线优化参数
        3. **混合架构**：首层用DCT快速压缩，深层用KL变换精调

# 4. Power Spectrum Analysis

## Basic background

- 功率谱是描述随机信号的重要参量，描述随机过程在频域的能量（功率）分布情况。
- 通过功率谱分析，可以了解信号中各个频率成分的强度，这对于信号的频域特性分析非常重要。
- 对于确定性信号的功率谱计算，一般采用傅立叶分析法即可，但需注意窗函数的选择。
- 对于随机信号的功率谱计算，传统的方法，无论是用傅立叶分析法还是通过维纳-辛钦定理计算，在数据量较少时其结果的准确性都存在很大的问题，这就催生了参数谱估计方法。

## Classic PSA

**对平稳随机过程，功率谱直接定义为自相关函数的Fourier transform(Wiener-Khinchine定理 (1) )** 
{ .annotate }

1. 对于一个平稳随机过程，其功率谱密度（Power Spectral Density, PSD）是其自相关函数（Autocorrelation Function, ACF）的傅里叶变换。换句话说，功率谱密度和自相关函数是一对傅里叶变换对。

\[ 
S(f) = \mathcal{F}{R(\tau)} 
\]

- 功率谱密度（PSD）： 功率谱密度描述了信号在单位频带内的平均功率。它是一个频域的量，可以通过傅里叶变换从时域的自相关函数中获得。 
- 计算方法：  
    1.直接计算：对信号进行傅里叶变换，然后计算其幅度平方  
    2.间接计算：通过计算自相关函数，再进行傅里叶变换
    - 计算自相关函数：对信号进行自相关运算，得到 \( R(\tau) \)。
    - 傅里叶变换：对 \( R(\tau) \) 进行傅里叶变换，得到功率谱密度 \( S(f) \)。

只有随机过程的某个特定样本的一段数据：\( \hat{P}_{xx}(\omega) \xrightarrow{\text{estimate}} P_{xx}(\omega) \)

!!! note "由样本估计的方式处理"
    1.Unbiases estimate:一阶一致  
    2.Asymptotically unbiased estimate:极限情况下,能保证一阶一致  
    3.Consistent estimate:二阶一致

先看自相关**(Autocorrelation Function, ACF)**的计算(同样是估计),两种方法:

\(
    \begin{aligned}&\\&1.\text{固定分母法}\quad\hat{R}_{xx}(m)=\frac{1}{N}\sum_{n=0}^{N-1}x(n)x(n+m)=\frac{1}{N}\sum_{n=0}^{N-|m|-1}x(n)x(n+m)\\&2.\text{变化分母法}\quad\hat{R}_{xx}(m)=\frac{1}{N-|m|}\sum_{n=0}^{N-|m|-1}x(n)x(n+m)\end{aligned}
\)

??? abstract "期望与方差分析"
    \[\begin{aligned}
    \text{对方法1}\\&E\left[\hat{R}_{xx}(m)\right]=\frac{N-\left|m\right|}{N}R_{xx}(m)\\&\mathrm{var}\left[\hat{R}_{xx}(m)\right]\approx\frac{1}{N}\sum_{n=-(N+m)+1}^{N-m-1}\left[|R_{xx}(n)|^{2}+R_{xx}(n-m)R_{xx}(n+m)\right]\\
    \text{对方法2}\\&E\left[\hat{R}_{_{xx}}(m)\right]=R_{_{xx}}(m)\\&\mathrm{var}\left[\hat{R}_{x}(m)\right]\approx\frac{N}{\left(N-m\right)^{2}}\sum_{n=-\left(N+m\right)+1}^{N-m-1}\left[\left|R_{xx}(n)\right|^{2}+R_{xx}(n-m)R_{xx}(n+m)\right]\end{aligned}
    \]

??? abstract "两种方法比较"
    固定分母法  
    • 分母：始终为 ( N )  
    • 优点：计算简单，结果具有固定的尺度，便于比较不同延迟下的自相关值  
    • 缺点：当延迟 ( m ) 增大时，实际参与计算的样本数量减少，导致估计的方差增大，可能低估自相关值  
    变化分母法：  
    • 分母：随延迟 ( m ) 变化，为 ( N - |m| )  
    • 优点：在统计上是无偏估计，消除了由于样本数量减少而引入的偏差  
    • 缺点：计算稍微复杂，结果的尺度随延迟变化，可能影响直观比较  
      
    固定分母法可以看作是有偏估计，而变化分母法是无偏估计。在某些应用中，无偏估计更受青睐，但在实际操作中，两种方法都可以提供有用的信息。

## Welch method

Welch方法是一种用于估计信号功率谱密度（Power Spectral Density, PSD）的经典技术。**它通过将信号分成多个重叠的子段，对每个子段进行傅里叶变换，然后对所有子段的功率谱进行平均，从而降低了估计的方差，提高了估计的稳定性。**

- 基本原理: Welch方法的核心思想是通过分段处理信号并进行平均，来减少功率谱估计的方差。具体步骤如下:  
    1.  信号分段： • 将原始信号分成多个重叠的子段。每个子段的长度为 \( L \)，重叠部分的长度为 \( D \)。 • 重叠的目的是为了充分利用信号中的信息，提高估计的准确性。   
    2.  加窗处理： • 对每个子段应用一个窗函数（如汉宁窗、汉明窗等），以减少分段引起的频谱泄漏。   
    3.  傅里叶变换： • 对每个加窗后的子段进行快速傅里叶变换（FFT），得到该子段的频谱。 
    4.  功率谱计算： • 计算每个子段的功率谱，即频谱的幅度平方。   
    5.  功率谱平均： • 将所有子段的功率谱进行平均，得到最终的功率谱密度估计。

- 数学表达 假设信号 \( x(n) \) 的长度为 \( N \)，将其分成 \( K \) 个子段，每个子段的长度为 \( L \)，重叠部分的长度为 \( D \)。第 \( k \) 个子段的信号为 \( x_k(n) \)，其加窗后的信号为 \( x_k(n)w(n) \)，其中 \( w(n) \) 是窗函数。 对每个子段进行FFT，得到频谱 \( X_k(f) \)，然后计算功率谱 \( S_k(f) = |X_k(f)|^2 \)。 最终的功率谱密度估计为： 

\[
\hat{S}(f) = \frac{1}{K} \sum_{k=1}^{K} S_k(f)
\]   

??? warning "优势与局限性😥"  
    优势： 
    1. 降低方差：通过分段和平均，Welch方法显著降低了功率谱估计的方差，提高了估计的稳定性
    2. 灵活性：可以通过调整子段长度、重叠程度和窗函数类型，来适应不同的信号特性和分析需求
    3. 广泛应用：在音频信号处理、通信系统、生物医学信号分析等领域中，Welch方法被广泛应用于功率谱估计  
    局限性： 
    1. 计算复杂度：由于需要对多个子段进行FFT和平均，Welch方法的计算复杂度较高 
    2. 分辨率限制：分段和加窗会引入频谱泄漏，影响功率谱的分辨率
    3. 参数选择：子段长度、重叠程度和窗函数类型的选择会影响估计结果，需要根据具体情况进行调整

- 实现步骤 
    1.  确定参数： • 信号长度 \( N \)。 • 子段长度 \( L \)。 • 重叠长度 \( D \)。 • 窗函数类型（如汉宁窗、汉明窗等）。   
    2.  信号分段： • 将信号分成 \( K = \frac{N - L}{D} + 1 \) 个子段。   
    3.  加窗处理： • 对每个子段应用窗函数。   
    4.  傅里叶变换： • 对每个子段进行FFT，得到频谱。   
    5.  功率谱计算： • 计算每个子段的功率谱。   
    6.  功率谱平均： • 对所有子段的功率谱进行平均，得到最终的功率谱密度估计。

## Parameter sprctrum estimate(modern estimate)

参数谱估计（现代谱估计）的处理出发点：  
平稳随机过程x(n)可以看成是由一个输入信号u(n)激励一个LTI Causal系统H(Z)的输出，u(n)是均值为零方差为\(σ^2\)的白噪声序列.**由观测序列推导系统参数，进而获得功率谱估计结果**

- AR model
可选系统模型MA、AR、ARMA. AR模型最为常用，因其可获得有效解析解

\[
    \begin{gathered}x(n)=-\sum_{k=1}^Ka_kx(n-k)+u(n)\\R_x(m)=\begin{cases}-\sum_{k=1}^Ka_kR_x(m-k)&\quad m\geq1\\\\-\sum_{k=1}^Ka_kR_x(k)+\sigma^2&\quad m=0&\end{cases}\\\text{Yule-Walker方程}\end{gathered}
\]

\[
    \begin{aligned}
    &\begin{bmatrix}R(0)&R(1)&\cdots&R(K)\\R(1)&R(0)&\cdots&R(K-1)\\\cdots&\cdots&\cdots&\cdots\\R(K)&\cdots&\cdots&R(0)\end{bmatrix}\begin{bmatrix}1\\a_1\\\vdots\\a_K\end{bmatrix}=\begin{bmatrix}\sigma^2\\0\\\vdots\\0\end{bmatrix}
    \end{aligned}
\]

系数矩阵为Toeplitz matrix，可通过Levinson-Durbin迭代方法快速计算

# 5. Time-Frequency Displays

## Different FT
![different FT](https://raw.githubusercontent.com/Atlas-Lee/myMkdocsREP/refs/heads/main/docs/assets/images/4kinds_of_FT.png)

In all four cases, the Fourier transform can be interpreted as the inner product of the signal \(x\) with a complex sinusoid at radian frequency \(\omega\).

\[
    \begin{align*}
    s_\omega(t)&=e^{j\omega t}&\text{(Fourier Transform)}\\
    s_{\omega_k}(t_n)&=e^{j\omega_kt_n}=e^{j2\pi nk/N}&\mathrm{(DFT)}
    \\s_\omega(t_n)&=e^{j\omega t_n}=e^{j\omega n}&\mathrm{(DTFT)}
    \end{align*}
\]

- DTFT

Instead of operating on sampled signals of length \(N\) (like the DFT), the DTFT operates on sampled signals \(x(n)\) defined over all integers \( n \in \mathbb{Z} \) 

Unlike the DFT, the DTFT frequencies form a continuum. That is, the DTFT is a function of continuous frequency, while the DFT is a function of discrete frequency. The DFT frequencies \(\omega_k\), are given by the angles of \(N\) points uniformly distributed along the unit circle in the complex plane. Thus, as \(N \rightarrow \infty\) , a continuous frequency axis must result in the limit along the unit circle. The axis is still finite in length, however, {++because the time domain remains sampled++}.

- FT

The Fourier transform is defined for {++continuous time and continuous frequency++}, both unbounded. As a result, mathematical questions such as existence and invertibility are **most difficult** for this case.

??? tip "integrablility conditions"
    \[
        \begin{align*}
        &\text{Conditions for the existence of FT are complicated to state in}\\&\text{general, but it is sufficient for }x(t)\text{ to be }absolutely\  intergrable,i.e.,\\
        &\|x\|_{1}\triangleq\int_{-\infty}^{\infty}|x(t)|dt\quad<\infty\\
        &\text{This requirement can be stated as }x\in L_{1}\text{, meaning that }x\text{ belongs to the set of}\\&\text{all signal having a finite }L_{1}\mathrm{~nrom}(\|x\|_{1}<\infty)\text{. It is similarly sufficient for}\\&x(t)\text{ to be square integrable, i.e.,}\\\\&\|x\|_{2}^{2}\triangleq\int_{-\infty}^{\infty}|x(t)|^{2}dt<\infty\\\\&\mathrm{or~}x\in L_{2}\text{. More geneally, it suffices to show }x\in L_{p}\mathrm{~for~}1\leq p\leq2
        \end{align*}
    \]

\[
    x(\frac{t}{a}) \longleftrightarrow |a|\cdot X(a\omega)    
\]

## STFT(Short-Time Fourier Transform, STFT)

The STFT is the main computational tool used in spectral modeling applications. The STFT may be viewed as either an 

1. overlap-add processor--a sequence of Fourier transforms of windowed data segments (a ''sliding'' or ''hopping'' FFT), or a 
2. filter-bank-sum processor--an implementation of a time-domain bandpass filter bank using an FFT to implement the filter bank.

!!! success "applications"
    1.Approximating the time-frequency analysis performed by the ear for purposes of spectral display. 

    2.Measuring model parameters in a short-time spectrum.
---
- 基本概念
短时傅里叶变换（STFT）是一种时频分析工具，通过对信号加窗分段后计算傅里叶变换，将非平稳信号的频谱随时间变化的过程可视化。其核心思想是：{++假设信号在短时间内是平稳的++}。

---

### Mathematical definition

!!! note annotate "(1)"
    \[
        X_m(\omega)=\sum_{n=-\infty}^\infty x(n)w(n-mR)e^{-j\omega n}=\mathrm{DTFT}_\omega(x\cdot\mathrm{SHIFT}_{mR}(w))
    \]
1. 
\[
    \begin{aligned}
    \\x(n)&=\quad\text{imput signal at time }n\\w(n)&=\quad\mathrm{leagh~}M\text{ window function }(e.g.,\mathrm{~Hamming})\\X_m(\omega)&=\quad\text{DTFT of windowed data centered about time }mR\\R&=\quad\text{hop size, in samples, between successive DTFTs.}\end{aligned}
\]

*Constant OverLap-Add(COLA) property* at hop-size \(R\), i.e.,{==\(\sum_{m} w(n-mR) = 1\)==}. Then,

{++lossless reconstruction++}

\[
    \begin{aligned}\begin{aligned}\sum_{m=-\infty}^\infty X_m(\omega)\end{aligned}&\overset{\Delta}{\operatorname*{=}}
    \sum_{m=-\infty}^{\infty}[\sum_{n=-\infty}^{\infty}x(n)w(n-mR)e^{-j\omega n}]\\&=\sum_{n=-\infty}^\infty x(n)e^{-j\omega n}\underbrace{\sum_{m=-\infty}^\infty w(n-mR)}_{1\mathrm{~if~}w{\in}\mathrm{COLA}(R)}\\&=\quad\sum_{n=-\infty}^\infty x(n)e^{-j\omega n}\\&\overset{\Delta}{\operatorname*{\operatorname*{\equiv}}}\quad\mathrm{DTFT}_\omega(x)=X(\omega).\end{aligned}
\]

For usage as a spectrum analyzer for measurement and display, the COLA requirement can often be relaxed, as doing so only means we are not **weighting all information equally in our analysis**. Nothing disastrous happens.

For example, if we use 50% overlap with the Blackman window in a short-time spectrum analysis over time--the results look fine; however, in such a case, data falling near the edges of the window will have a slightly muted impact on the results relative to data falling near the window center, because the Blackman window is not COLA at 50% overlap.

### STFT discretization

- Take it as static window and hopping signal: variable replace: \(n \rightarrow n+MR\)

\[
    \begin{aligned}X_m(\omega)&\begin{aligned}=\sum_{n=-\infty}^{\infty}x(n+mR)w(n)e^{-j\omega(n+mR)}\end{aligned}
    \\&=e^{-j\omega mR}\sum_{n=-\infty}^\infty x(n+mR)w(n)e^{-j\omega n}\\&=e^{-j\omega mR}\mathrm{DTFT}_\omega(\mathrm{SHIFT}_{-mR}(x)\cdot w).\end{aligned}
\]

- Take it as static signal and hopping window:

\[
    X_m(\omega)=e^{j\omega mR}\mathrm{DTFT}_\omega(\mathrm{SHIFT}_{mR}(w)\cdot x)
\]



Discretize it,

\[
    \begin{aligned}X_m(\omega_k)&=e^{-j\omega_kmR}\sum_{n=0}^{N}x(n+mR)w(n)e^{-j\omega_kn}\\&=e^{-j\omega_kmR}\mathrm{DFT}_{N,\omega_k}(\mathrm{SHIFT}_{-mR}(x)\cdot w) 
    \end{aligned}
\]

---
- detailed deduction
 
连续STFT表达式为：

\[
\text{STFT}(\omega, \tau) = \int_{-\infty}^{\infty} x(t) w(t - \tau) e^{-j\omega t} \mathrm{d}t
\]

1.信号采样
对连续信号\(x(t)\)以采样率\(F_s\)采样，得到离散序列：

\[
x[n] = x(nT_s), \quad T_s = 1/F_s
\]

2.分帧与加窗
将信号分割为长度为\(N\)的帧，每帧起始时间为\(mH\)（\(H\)为帧移）：

\[
x_m[n] = x[n + mH] \cdot w[n], \quad 0 \leq n \leq N-1
\]

其中窗函数\(w[n]\)满足*COLA*：

\[
\sum_{m=-\infty}^{\infty} w[n - mH] = 1
\]

3.DFT
对每帧信号做DFT：

\[
X[m, k] = \sum_{n=0}^{N-1} x_m[n] e^{-j\frac{2\pi}{N}kn} = \sum_{n=0}^{N-1} x_m[n] e^{-j \omega_k n}, \quad 0 \leq k \leq N-1
\]

---

!!! tip "关键参数解析"
    1.  帧长\(N\)
        - 频率分辨率：\(\Delta f = F_s/N\)
        - 时间分辨率：\(\Delta t = N/F_s\)
        - 典型值：512/1024（语音处理），4096（音乐分析）

    2.  帧移\(H\)
        - 重叠率：\( \text{Overlap} = (N - H)/N \times 100\% \)
        - 常用重叠率：50%-75%（平衡计算量与时间连续性）

    3.  窗函数选择
    
    | 窗类型       | 主瓣宽度 | 旁瓣衰减 | 适用场景          |
    |--------------|----------|----------|-------------------|
    | 矩形窗       | 窄       | -13 dB   | 瞬态信号分析      |
    | 汉明窗       | 较宽     | -43 dB   | 稳态信号（默认）  |
    | 布莱克曼窗   | 最宽     | -58 dB   | 高精度频谱分析    |

---

- 时频网格的离散化
离散STFT输出为二维复数矩阵：

\[
X[m, k] \in \mathbb{C}^{M \times K}
\]

**时间轴**：\( t[m] = mH/F_s \)（秒）

**频率轴**：\( f[k] = kF_s/N \)（Hz），仅需保留\(0 \leq k \leq N/2\)（共轭对称性）

---

