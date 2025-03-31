# Audio Acoustic

## Sundry Patches

### Use metric tensor wo tranform coordinate

####  度量张量的基本概念

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

#### 坐标变换的基本概念

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


#### 应用
##### 度量张量在拉普拉斯算子变换中的应用

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


##### 计算距离 

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

##### 计算体积

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

#### 总结

度量张量是一个重要的工具，用于描述流形上的距离和角度的测量方式。通过计算新坐标系下的度量张量 \( g' \)，我们可以实现坐标变换，并在新坐标系下进行几何计算和拉普拉斯算子的变换。具体步骤包括：

1. **确定坐标变换公式**：找到从旧坐标系到新坐标系的转换关系。
2. **计算雅可比矩阵 \( J \)**：根据坐标变换公式，计算新坐标对旧坐标的偏导数。
3. **计算新坐标系下的度量张量 \( g' \)**：使用公式 \( g' = J^T \cdot g \cdot J \)。
4. **利用 \( g' \) 进行几何计算**：在新坐标系下，利用 \( g' \) 进行距离、角度等几何量的计算。
5. **在拉普拉斯算子变换中应用 \( g' \)**：通过计算 \( g' \) 的行列式和逆矩阵，代入拉普拉斯算子的表达式，确保在新坐标系下，拉普拉斯算子能够正确描述场的分布。
## Power Spectrum Analysis

### Basic background

- 功率谱是描述随机信号的重要参量，描述随机过程在频域的能量（功率）分布情况。
- 通过功率谱分析，可以了解信号中各个频率成分的强度，这对于信号的频域特性分析非常重要。
- 对于确定性信号的功率谱计算，一般采用傅立叶分析法即可，但需注意窗函数的选择。
- 对于随机信号的功率谱计算，传统的方法，无论是用傅立叶分析法还是通过维纳-辛钦定理计算，在数据量较少时其结果的准确性都存在很大的问题，这就催生了参数谱估计方法。

### Classic PSA

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

#### Welch method

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

### Parameter sprctrum estimate(modern estimate)

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

# Ultrasonics
# Acoustic Measure
# Room Acoustics