## visualazaiton tech
`visualization`:data info -> visual formation

 - components:
   1. spatial sub - strate(空间基)
   2. graph ele (图形元素)
   3. graph (图形属性)

- R 

  - defaulted: graphics 

  - most powerful one: ggplot2

    ~~~R
    # installment
    
    ~~~

- basic graphics

  1. 散点图(scatter)

     can be used to indicate underlying connections bet. parameters( dep. on the dimentionary of them). Usually applied f 2d statistics in a *Catesian* codt.(coordination).

  2. 折线图

  3. 条形图/柱形图(bar)

     includes dif. color, length, fill etc. to perform *same&diffenrence* among multiple statistics.

  4. 饼图(pie)

  5. 直方图(histogram)

     display the statistic characteristics(PDF)

  6. 箱线图(box-plot)

- advanced graphics

  1. 热力图(hitmap)

     display cross level, both horizonal direction and vertical direction(multiple comparison). It can be allaied with cluster graphics

  2. 

- ggplot2

  from *specific statistics* to *geometry objects(geom)*

  ~~~
  plot - aesthetics - geometry
  ~~~

  **R** can save the drawing process(use "/*+..." to append more set) -> overlap other layers

  ~~~R
  # initial-> build layers -> adjust
  # common aesth.: axis(x,y), color, size, shape, fill, alpha(透明度)
  
  # scatter
  # statistics transform
  ggplot(mpg, aes(trans, cty))+
  geom_point()+
  geom_point(stat = "summary", fun = "mean", color = "red", size = 4) # apply another graph above the former ones
  
  
  ~~~

  