
## Colors

|                        |           |        |
| ---------------------- | --------- | ------ |
| [0 0.4470 0.7410]      | ‘#0072BD’ | 普蓝   |
| [0.8500 0.3250 0.0980] | ‘#D95319’ | 暗橘   |
| [0.9290 0.6940 0.1250] | ‘#EDB120’ | 中黄   |
| [0.4940 0.1840 0.5560] | ‘#7E2F8E’ | 紫色   |
| [0.4660 0.6740 0.1880] | ‘#77AC30’ | 树绿   |
| [0.3010 0.7450 0.9330] | ‘#4DBEEE’ | 浅天蓝 |
| [0.6350 0.0780 0.1840] | ‘#A2142F’ | 苝褐   |



## DSP Learning using MATLAB

## Basic Information about FDSP Companion 

| Name         | Description                                                  |
| ------------ | ------------------------------------------------------------ |
| *f caliper*  | Measure points on plot using mouse cross hairs               |
| *f prompt*   | Prompt for a scalar in a specified range                     |
| *f clip*     | Clip value to an interval, check calling arguments           |
| *f randinit* | Initialize the random number generator                       |
| *f getsound* | Record signal from PC microphone                             |
| *f randg*    | Gaussian white noise matrix                                  |
| *f header*   | Display header information for examples, figures, or problems |
| *f randu*    | Uniformly distributed white noise matrix                     |
| *f labels*   | Label graphical output                                       |
| *f wait*     | Pause to examine displayed output                            |
| *soundsc*    | Play a signal as sound on the PC speaker (MATLAB)            |

## Personal Learning Summary

``` matlab title="personal practices"
b=[0,1];a=[3,-4,1];
[R,p,C]=residuez(b,a)
[b1,a1]=residuez(R,p,C)

b=1;a=poly([0.9,0.9,-0.9]);
[R,p,C]=residuez(b,a)

% poly function outputs the coefficients of a polynomail using all roots as inputs 
% residuez can divide a rational z fraction, so its output format follows the regular of ZF 
R =
    0.5000
   -0.5000
p =
    1.0000
    0.3333
C =
     []
b1 =
   -0.0000    0.3333
a1 =
    1.0000   -1.3333    0.3333
R =
   0.2500 + 0.0000i
   0.2500 + 0.0000i
   0.5000 - 0.0000i
p =
  -0.9000 + 0.0000i
   0.9000 + 0.0000i
   0.9000 - 0.0000i
C =
     []


[bz,az] = impinvar([2],[1,4,3],10)
% AF -> DF

% 系统函数到格型结构 lattice
K = tf2latc(b) %注意b(0)是否为1
K = tf2latc(1,a)
[K,C] = tf2latc(b,a)

% 格型结构到直接型结构
b = latc2tf(K,'fir') %K - 按顺序排列
[b,a] = latc2tf(K,1,'allpole')
[b,a] = latc2tf(K,C)

% 格型滤波器输出
[f,g] = latcfilt(K,x) %注意系统增益b(0)
[f,g] = latcfilt(K,1,x)
[f,g] = latcfilt(K,C,x)
```



## GUI

- **GUI (Graphical User Interface)** refers to a user interface that allows users to interact with computers or software through graphical and visual elements such as buttons, text boxes, icons, menus, and more. 

  This type of interface design enables users to engage with computer programs in a more intuitive and user-friendly way, rather than relying on command line input. 

### Components of GUI

1. **Windows**: GUI typically consists of one or more windows. Each window can display different information or allow users to perform various operations.
2. **Controls**: Various elements included in the window, common controls are:
   - **Button**: Users can click to perform a specific action.
   - **Text Box**: A place where users can input text.
   - **Label**: Used to display static text.
   - **Drop-down Menu**: Provides selectable options.
   - **Slider**: Allows users to select a value by sliding.
3. **Events**: Interactions by users with the GUI generate events, such as button clicks or text input. The program responds to these user actions through an event-driven mechanism.

###  Implementation of GUI 

1. **Create the Window**: Use the `figure` function to create a window and set its position and size.

2. **Add Controls**: Use the `uicontrol` function to add buttons and text boxes, specifying their position, size, and text.

3. **Callback Function**: Define a callback function for the button that executes when the button is clicked. 

   ~~~matlab
   function simple_gui()
       % Create a graphical window
       f = figure('Position', [300, 300, 400, 200], 'MenuBar', 'none', 'Name', 'Simple GUI', 'NumberTitle', 'off');
   
       % Add a button
       uicontrol('Style', 'pushbutton', ...
                 'Position', [150, 100, 100, 40], ...
                 'String', 'Click Me', ...
                 'Callback', @button_callback);
   
       % Add a text box
       text_box = uicontrol('Style', 'edit', ...
                            'Position', [100, 60, 200, 25], ...
                            'String', '');
   
       % Button callback function
       function button_callback(~, ~)
           set(text_box, 'String', 'Hello, World!'); % Display text in the text box
       end
   end
   
   function sliding_average_gui()
       % 创建GUI界面
       f = figure('Position', [100, 100, 600, 400], 'MenuBar', 'none', 'Name', 'Sliding Average', 'NumberTitle', 'off', 'Resize', 'off');
   
       % 输入信号编辑框
       uicontrol('Style', 'text', 'Position', [20, 350, 80, 25], 'String', 'Input Signal:');
       input_signal = uicontrol('Style', 'edit', 'Position', [120, 350, 200, 25]);
   
       % 窗口大小编辑框
       uicontrol('Style', 'text', 'Position', [20, 300, 120, 25], 'String', 'Window Size:');
       window_size = uicontrol('Style', 'edit', 'Position', [120, 300, 50, 25], 'String', '3');
   
       % 计算按钮
       uicontrol('Style', 'pushbutton', 'Position', [250, 300, 100, 25], 'String', 'Smooth', 'Callback', @smooth_signal);
   
       % 显示结果的轴
       axes('Position', [0.2, 0.1, 0.75, 0.5]);
       title('Original Signal and Smoothed Signal');
       xlabel('Sample Number');
       ylabel('Amplitude');
       grid on;
   
       % 平滑信号的回调函数
       function smooth_signal(~, ~)
           % 获取输入信号
           input_str = get(input_signal, 'String');
           input_signal_data = str2num(input_str); 
   
           % 获取窗口大小
           w_size = str2double(get(window_size, 'String'));
   
           % 进行滑动平均
           smoothed_signal = movmean(input_signal_data, w_size);
   
           % 绘制结果
           cla;
           plot(input_signal_data, 'b', 'DisplayName', 'Original Signal'); hold on;
           plot(smoothed_signal, 'r', 'DisplayName', 'Smoothed Signal');
           legend('show');
           title('Original Signal and Smoothed Signal');
           grid on;
       end
   end
   ~~~

   

## Mathematical and Statistical Operations with Arrays

## Mathematical Functions

![sin(Array)](https://lcms-files.mathworks.com/content/file/73e7ac9a-3c3a-4925-b673-8ec0b15edc5b/functionOnMatrix.png?versionId=a.ZNMnjT_SgD0k5Oa0OAFYTtzIqhbV5q)

| Other Similar Functions |                    |
| :---------------------: | ------------------ |
|          `sin`          | Sine               |
|          `cos`          | Cosine             |
|          `log`          | Logarithm          |
|         `round`         | Rounding Operation |
|         `sqrt`          | Square Root        |
|          `mod`          | Modulus            |
|        Many more        |                    |



Matrix Operations (Including Scalar Expansion)

![scalar addition](https://lcms-files.mathworks.com/content/file/b56d75e7-9174-44ea-9bb0-2a11a4a284f6/scalarExpansion.png?versionId=Adpc7yCz5QqVyJX8i1ZtK6JQK4rF3KYr)

| Operators |                                        |
| :-------: | -------------------------------------- |
|    `+`    | Addition                               |
|    `-`    | Subtraction                            |
|    `*`    | Multiplication                         |
|    `/`    | Division                               |
|    `^`    | Exponentiation (Matrix exponentiation) |



Element-wise Operations

![summing matrices](https://lcms-files.mathworks.com/content/file/b7e51a60-75ef-4410-8db1-736eccd5db94/elementwiseArithmetic.png?versionId=ppUoTcdHeoKao8YGFG1e_8UHSHVyiBUT)

| Operators |                             |
| :-------: | --------------------------- |
|    `+`    | Addition                    |
|    `-`    | Subtraction                 |
|   `.*`    | Element-wise Multiplication |
|   `./`    | Element-wise Division       |
|   `.^`    | Element-wise Exponentiation |



Implicit Expansion

![summing a matrix and vector](https://lcms-files.mathworks.com/content/file/18e87519-c4ab-4925-95da-2fa1e8faf38a/implicitExpansion.png?versionId=SOWXkTYSk2UTUOqrxz_jdOtkxA2dIXeW)

| Operators |                             |
| :-------: | --------------------------- |
|    `+`    | Addition                    |
|    `-`    | Subtraction                 |
|   `.*`    | Element-wise Multiplication |
|   `./`    | Element-wise Division       |
|   `.^`    | Element-wise Exponentiation |

Array operations can be performed on operands of different *compatible* sizes. Two arrays have compatible sizes if the size of each dimension is either the same or one.



## Statistics Processing

-  **The plot command also works on matrices column-wise.** (defaulted)So it can operate a matrix

   There will be a line plot for each column in the matrix.  For example, if `M` is 5-by-3, there will be three line plots on the graph. 

-  For the `max` and `min` functions, you can request a second output that gives you the index for the maximum of each column. 

- histogram()

  histogram(X)
  histogram(X,nbins)
  histogram(X,edges)
  histogram('BinEdges',edges,'BinCounts',counts)
  histogram(C)
  histogram(C,Categories)
  histogram('Categories',Categories,'BinCounts',counts)
  histogram(___,Name,Value)
  histogram(ax,___)
  h = histogram(___)

~~~matlab
a=mean(b,"omitnan");%omitnan ignores all the values which are blank

monthly=mean(usage,2,"omitnan");%1:*default)column 2:row
%'double'、'native'、'default'、'omitnan'、'includenan'、'omitmissing' or 'includemissing'。
bar(monthly);

minUsage=min(usage,[],2);
maxUsage=max(usage,[],2);

minUse=min(usage,[],"all");
maxUse=max(usage,[],"all");
avgUse=mean(usage,"all","omitnan");%notice the differences of where to set "all"

diff1990=diff(firstYear);
plot(diff1990);
a=[1 2 3 1 4 2];
b=diff(a)%diff is forward difference
%1	1	-2	3	-2
~~~

## Statistical Operations on Matrices



Some common mathematical functions which calculate a value for each column in a matrix include:

| Function | Behavior                                                     |
| :------: | :----------------------------------------------------------- |
|  `max`   | Largest elements                                             |
|  `min`   | Smallest elements                                            |
|  `mean`  | Average or mean value                                        |
| `median` | Median value                                                 |
|  `mode`  | Most frequent values                                         |
|  `std`   | Standard deviation                                           |
|  `var`   | Variance                                                     |
|  `sum`   | Sum of elements                                              |
|  `prod`  | Product of elements                                          |
|   std    | `S = std(A,w,dim)` returns the standard deviation along dimension `dim`. To maintain the default normalization while specifying the dimension of operation, set `w = 0` in the second argument. |

   

Many statistical functions accept an optional dimensional argument that specifies whether the operation should be applied to columns independently (the default) or to rows.
![cols and rows](https://lcms-files.mathworks.com/content/file/59efa30b-f4d3-400c-8b72-621841f8335b/dimensions.png?versionId=ObI.AJXnNKmOVHri3lcu8hJwc8GZSiOc)

```matlab
>> M = mean(A,dim)
```

| `M`  | Vector of average values along dimension `dim`. |
| ---- | ----------------------------------------------- |
|      |                                                 |

| `A`   | Matrix                                                       |
| ----- | ------------------------------------------------------------ |
| `dim` | Dimension across which the mean is taken. `1`: the mean of each column `2`: the mean of each row |

## Matrix Multiplication

linear algebra rules...

## The Backslash Operator


With scalars, and represent the same equation. The solution to these equations is , like you'd expect.

*Ax≠xA*. So, *Ax*=*B* and *xA*=*B* are two different equations. <u>The solution of both can be thought of as</u> 

<u>'B divided by A', but the order is important.</u> 

MATLAB has two "division" operators: **/ (slash) and \ (backslash).**

| Expression |       Interpretation       |
| :--------: | :------------------------: |
| `x = B/A`  | Solves `x*A = B` (for `x`) |
| `x = A\B`  | Solves `A*x = B` (for `x`) |

# Visualizing Data

## Basic Functions

|         Function         |                         Description                          |
| :----------------------: | :----------------------------------------------------------: |
|        `scatter`         |      Scatter plot, with variable marker size and color       |
|          `bar`           |             Bar graph (vertical and horizontal)              |
|          `stem`          |               Discrete sequence (signal) plot                |
|         `stairs`         |                       Stairstep graph                        |
|          `area`          |                       Filled area plot                       |
|          `pie`           |                          Pie chart                           |
|       `histogram`        |                          Histogram                           |
|           plot           |                                                              |
| semilogy/loglog/semilogx |                             log                              |
|          fplot           |                    绘制函数或参数方程曲线                    |
|         errorbar         |                           误差条图                           |
|          ginput          | 交互绘图，[x,y] = ginput(n)[x,y] = ginput，[x,y,button] = ginput(…) |
|                          |                                                              |
|                          |                                                              |

## labels

图题标注	title(obj,__)  可以为指定的对象添加标题

图例标注	legend(__,'Orientation',Value)	'vertical' 'horizontal'

文本标注	text(1.1,8,['$____' , latex(___) , '$'] , 'interpreter' , 'latex')



## Identifying Available Plot Types

~~~matlab
xticklabels(["January",...
    "April",...
    "July",...
    "October"]);

bar(monthly);
xticklabels(["January",...
    "April",...
    "July",...
    "October"]);
xticks([1 4 7 10])%assign the places of labels
xticklabels(["January",...
    "April",...
    "July",...
    "October"]);
    
plot(x,y,"o-","MarkerEdgeColor","c","color",[0.6 0.2 0.8])

~~~

- `LineWidth` (width of the line and marker edges)
- `MarkerSize` (size of the marker symbols)
- `MarkerEdgeColor` (color of the edge of the marker symbols)
- `MarkerFaceColor` (color of the interior of the marker symbols)

For eight specific colors, you can refer to them by name or a single letter abbreviation:

| red (r)   | green (g)   | blue (b)   |
| --------- | ----------- | ---------- |
| black (k) | magenta (m) | yellow (y) |
| cyan (c)  | white(w)    |            |
|           |             |            |

## Axis Control

 MATLAB automatically chooses the limits and tick markings for plot axes. Although the automatic values are usually aesthetically reasonable, you may want more precise control of the axis appearance to investigate subsets of the data.

 ![img](https://i-blog.csdnimg.cn/blog_migrate/b77c935b01e9429273117be5a9c912ac.png) 

~~~matlab
xyLims=axis
%1990	2008	1	8
~~~

## Visualizing Matrices

~~~matlab
surf(yr,mth,revenue);
mesh(yr,mth,revenue);
contour(yr,mth,revenue);%矩阵的等高线图

~~~

# Conditional Data Selection

~~~matlab
hwLast10 = any(homewinning(end-9:end))
numHomeLosing=nnz(~homewinning(1:10))%count the Number of Non-Zero values in an array

%You can obtain the locations of just the first or last n true values in a logical vector by providing optional extra arguments to find.
%where dirn is either "first" or "last".

idx = find(v,n,dirn)

plot(d,(time - min(time)),"x-")
xlabel("Distance (m)")
ylabel("Time Behind Lead (s)")
xticks(d)
legend(country,"Location","eastoutside")%"eastoutside" exracts legends out

~~~

# Tables of Data

1.table tool button

2.programmatically using the function.

```matlab
>> EPL = readtable("EPLresults.xlsx")
```
The readtable function creates the table variable names from the column headings in file. Because some headings contain spaces ("Home Wins"), MATLAB modifies them to make them valid MATLAB variable names (HomeWins).

| `EPL` | Name of the variable you would like to store your data to in MATLAB, returned as a table array. |
| ----- | ------------------------------------------------------------ |
|       |                                                              |

| `"EPLresults.xlsx"` | Name of the file you would like to import, entered as text. |
| ------------------- | ----------------------------------------------------------- |
|                     |                                                             |

~~~matlab
%You can use the summary function to display a summary of each variable.
summary(data)

teamWins=table(team,w)%remain the fomer order of matrix

stats = array2table(WDL,"VariableNames",["Wins" "Draws" "Losses"])

winners = sortrows(EPL,["HomeWins" "AwayWins"],"descend")%可以实现多重排序，先排序前者，再根据后者排序

EPL = movevars(EPL,"Points","After",1)%更换顺序，使*排在*后

%Use the cumsum function to calculate the cumulative sum
ptsTot = cumsum(manU.Points)
~~~

## Proprocessing Data

~~~matlab
centeredUsage = normalize(usage,"center","mean");%不加参数的话，默认均值为零，进行z归一化处理

scaledUsage = normalize(usage,"scale","first");

rangeUsage = normalize(usage,"range",[-1 1]);

xnan=standardizeMissing(x,[NaN -999])

idx=ismissing(x,[NaN,-999])

population =fillmissing(population,"linear")
plot(yr,population,"o-")%填充缺失数据

plotmatrix(usage)%画出所有类型的graphics

usagecorr = corrcoef(usage)%计算相关系数
~~~

