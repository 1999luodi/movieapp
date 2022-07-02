# python项目开发

## 1.项目技术选型

### 项目开发流程

- 1-需求调研

	- 粤语+word级别
	- 如何做出规范有效的需求规约

		- 角色
		- 文档

			- 表

	- 产品经理——设计难度
	- 项目经理——技术难度

- 2-产品原型设计

	- 开发过的产品，拿出来给客户参考
	- 1500-2000的产品原型设计费用

		- 过滤没有诚意的客户

	- 没有产品参考

		- word级别难度，产品经理自己做
		- Axure、墨刀 页面原型工具

	- 需求确认书

		- 开发多少页面
		- 页面中每个事件对应应怎样的响应

- 3-工作量估评

	- 人月

		- 一个成熟的程序员1个月出来的效果

	- 报价

		- 项目开发需要多少人月
		- 地域

			- 北京 30000—60000
			- 大连 10000—25000

		- 技术选型

			- 选择项目组已经有人员比较熟悉的技术

	- 支付方式

		- 50%首付 40%底线
		- 里程碑 如果项目部署到客户方，运行一周90%
		- 5—10%维护基金 一年

- 4-开发模式

	- 瀑布式开发模式

		- 需求设计
		- 详细设计
		- 开发
		- 适配项目

			- 需求非常明确
			- 变更周期很长

	- 敏捷式开发模式

		- 把瀑布拆成1米一股细流
		- 需求—设计—开发—快速迭代—客户三天见结果
		- 文档少

			- 站会
			- 故事版

### 前后端分离

- 微信小程序

	- 微信帮我们解决了跨平台的问题
	- 不需要考虑设备的兼容性，只需要专注于编程

- python

	- django框架
	- python基础

## 2.python核心技术

### 简介

- 了解

	- Django框架
	- 优点

		- 面向对象
		- 语法简单

	- 缺点

		- 慢

			- 解释执行语言

		- 解释执行

			- 整本执行

		- 编译执行

			- 逐句执行

	- 其他语言

		- c/c++编译执行 最快
		- Java跨平台 先编译成class字节码文件
		- python 解释执行 慢

	- 排名

		- python第三

	- 案例

		- 知乎
		- 豆瓣

- 学习平台

	- 线上工具

		- 菜鸟教程
		- 编程猫

			- 显示图片

	- cmd
	- 离线工具

		- MU
		- pycharm

### 基础环境

### 吃个苹果先

### 通用基础

- 变量

	- 基本数据类型

		- 数字

			- 进制

				- 二进制

					- 0b

				- 八进制

					- 0o

				- 十六进制

					- 0x

			- 速记演练

				- 36位数演练化为 8进制数 2个八进制位一名词 6个名词

		- 浮点

			- 精度缺失

				- 0.2+0.1=0.30000000004
				- （2+1）/10=0.3

		- 字符串

			- 双引号

				- “ i'm a student ”

			- 单引号

				- ' he said "bye!" '

		- 布尔类型

			- 大写Ture
			- 大写False

		- 空值

			- None
			- 与0不同

	- 命名规划

		- 有大小写英文字母、数字、下划线组成
		- 不能由数字开头
		- 不能为关键字

			- not and or

	- 运算符

		- 算术运算符号

			- + - * /
			- **

				- x的y次方

			- //

				- 地板除
				- 计算向下取整

					- 10//3=3

			- 子主题 4
			- 取模%

				- 判断奇偶
				- 数位颠倒

		- 关系运算符
		- 逻辑运算符号

			- 与或非

				- or
				- and
				- not

					- <=20
					- not a>20

			- 短路计算

				- A and B

					- A是假不运行

				- C or D

					- C为真不允许

		- 保留小数点

			- round(num,3) 保留3位小数

		- 位运算符
		- 成员运算符
		- 身份运算符
		- 运算符优先

	- 字符串

		- python中英文混用
		- utf-8编码

			- ASCII

				- 数字与字符串转换

			- 发展史

				- ASCII
				- GB2312
				- ISO-8859-1
				- Unicode

					- 32
					- 16
					- 8

						- UTF-8

		- 转义字符

			- \t \n
			- raw字符串

				- 不需要转义

					- (r “\\@^@//”)

			- 三个单引号

				- 换行保留输出

			- format

				- 顺序匹配
				- 指定匹配

					- msg="word sort:{0} {1} {2} {4} {3}"
r=msg.format("a","b","c","d","e")
print(r)
msf="word show:{a},{b},{c}"
r2=msf.format(a="dalian",b="shengyang",c="beijing")
print(r2)

			- 本质

				- 列表或是数组
				- 切片

					- msg="hello !welcome to dalian"
print(msg[:12])
print(msg[13:])

- I/O操作

	- 键盘输入输出

		- raw_input()

			- 字符串

		- input()

			- 表达式

		- print(i,end=" ") 

			- 结尾自定义

		- print('error',flag)

			- flag为变量   之间用，拼接

		- print('%.3s' % '答复阿斯蒂芬')

			- 点后加个数表示显示几位字符

- 流程控制语句

	- 顺序

		- 万能结构

			- 取值
			- 处理

				- 功能处理数据变化

			- 反馈

				- 输出结果

		- 案例

			- [成绩](https://www.luogu.com.cn/problem/P3954)

				- if __name__ == '__main__':
    b=input()
    a=b.split()
    r=int(int(a[0])*2/10+int(a[1])*3/10+int(a[2])*5/10)
    print(r)


	- 条件判断

		- 定义

			- if 判断条件：
    执行语句……
elif 判断条件：
    执行语句……
else：
    执行语句……

		- 案例

			- 输入两个数：一个表示当前月，一个表示追加的月份；输出最后月份所在的季节

				- def print_season():
    month=int(input("输入月份："))
    num=int(input("追加的月份数量:"))
    month_now=month+num
    if month_now>=1 and month_now<=3:
        print("spring")
    elif month_now>=4 and month_now<=6:
        print("summer")
    elif month_now>=7 and month_now<=9:
        print("fall")
    elif month_now>=10 and month_now<=12:
        print("winter")
    else:
        print("error input")


			- 5717s三角形问题

				- import math

a=int(input("a"))
b=int(input("b"))
c=int(input("c"))

min=min(a,b,c)
max=max(a,b,c)
mid=a+b+c-min-max
flag=pow(min,2)+pow(mid,2)-pow(max,2)
if min+mid>max:
    if flag==0:
        print("Right triangle")
    elif flag>0:
        print("Acute triangle")
    elif flag < 0:
        print("Obtuse triangle")
    elif a == b or b == c or a == c:
        print("Isosceles triangle")
    elif a==b and b==c:
        print("Equilateral triangle")
else:
    print("Not triangle")


	- 循环

		- 循环类型

			- for

				- range

					- range(5)--》从0到4
					- range(1,6)-->[1,6)

			- while

				- k=1
while k<=10:
    print(k,end=" ")
    k=k+1

					- 初始化
					- 判断条件
					- 循环体
					- 自增

			- 特点

				- for:计算循环 无法精确控制变量
				- while

					- 先判断后执行

		- 循环中断

			- break

				- name=""
while True:
    name=input('your name')
    if name=='exit':
        break
    print('welcome name')
print('**********end********')
				- 跳出循环

			- continue

				- for i in range(20):
    if i%2==0:
        continue
    print(i)
				- 可以算法优化掉
				- 调到下一次循环，不建议使用

			- 案例

				- 密码三次错误锁死

					- flag=0
key='1234'
while True:
    if flag==3:
        print('bye')
        break
    else:
        password = input('your password:')
        if password==key:
            print('succeed')
            break
        else:
            print('error')
            flag=flag+1
					- flag=0

while True:
    if flag==3:
        break
    else:
        password = input('your password:')
        if password=="1234":
            break
        else:
            flag=flag+1
            print('error',flag)
if flag<3:
    print("succeed")
else:
    print("bye")
					- 业务分离

						- 判断登录
						- 登录处理

		- 无限循环

			- name=""
while True:
    name=input('your name')
    if name=='exit':
        break
    print('welcome name')
print('**********end********')

		- 嵌套循环

			- for i in range(5):
    for j in range(5):
        if i>=j:
            print(' * ',end='')
    print()

				- 外层解决行
				- 内层解决列
				- for i in range(1,5):
    for j in range(1,i*2):
        print(' * ',end='')
    print()

					- 从1开始
					- 则可以j=k*2-1
					- range(1,k*2)

			- 图形

				- 三角形

					- line=int(input('行号'))
for i in range(1,line+1):
    for j in range((line-i)*2):
        print(' ', end='')
    for j in range(i*2-1):
        print('*',end='')
    print()

						-  三角形反向输入

				- 菱形

					- line=int(input('行号'))
for i in range(1,line+1):
    c=abs((line+1)//2-i)
    for j in range(c):
        print(' ', end='')
    for k in range(line-c*2):
        print('*',end='')
    print()
					- 子主题 2

			- 计算

				- import math
line=int(input('行号'))
for i in range(1,line+1):
   for j in range(i,2*i):
       print(j,end='')
   print()

					- 行号5
1 
2 3 
3 4 5 
4 5 6 7 
5 6 7 8 9 
					- line=int(input('行号'))
for i in range(1,line+1):
   for j in range(i):
       print(i+j,end=' ')
   print()

						- 行号5
1 
2 3 
3 4 5 
4 5 6 7 
5 6 7 8 9 

				- line=int(input('行号'))
for i in range(1,line+1):
   a=(1+i-1)*(i-1)//2+1
   for j in range(a,a+i):
       print(j,end=' ')
   print()

					- 行号5
1 
2 3 
4 5 6 
7 8 9 10 
11 12 13 14 15 

		- 算法

			- 百钱百鸡

				- 公鸡5文钱一只，母鸡3文钱一只，小鸡1文钱三只
				- 枚举 算法

					- for i in  range(1,100//5+1):
    for j in range(1,100//3):
        for k in range(1,100*3):
            if k%3==0 and i+j+k==100 and i*5+j*3+k//3==100 :
                print("公鸡{0},母鸡{1},小鸡{2}".format(i,j,k))

						- O(n^3)

					- for i in  range(1,100//5+1):
    j=int(25-7*i/4)
    k=int(75+3*i/4)
    if j>0 and i+j+k==100 and k%3==0:
        print("公鸡{0},母鸡{1},小鸡{2}".format(i,j,k))
					- 优化

						- for k in range(1,4):
    x=4*k
    y=25-7*k
    z=75+3*k
    print("公鸡{0},母鸡{1},小鸡{2}".format(x,y,z))

				- 行李箱忘记密码只记得首位为6，能被18整除，密码为三位，求密码

					- for i in range(10):
    for j in range(10):
        if (6*100+i*10+j)%18==0:
            print("6{0}{1}".format(i,j))
					- k=1
for i in range(600,701,k):
    if i%18==0:
        print(i)
        k=18

- 容器

	- java 

		- Collection

			- List

				- 有序
				- 重复数据

			- Set

				- 无序
				- 去重

		- Map(键值对）

			- key不能重复
			- 遍历快

		- Iterator

	- Python

		- List

			- 有序
			- 允许重复
			- 下标可以逆序

				- 0    1    2   3  
				- -4 -3 -2  -1 

			- 可以容纳不同数据类型的数据
			- 案例

				- names=['皇后',1,'hu','af']
print(names[-2])
print(names[2])
print(names[0:2])
print(names[:])
print(names[::-1])
				- for item in names:
    print(item)

			- 增删

				- names.pop(2)
names.append("asdfa")
names.insert(1,"daf")
a=names.index('af')


			- 二维列表

				- s1=[55,33,22]
s2=[55,66,55]
s3=[55,66,88]
sore=["小明",s1,"小红",s2,"小强",s3]
for i in range(3):
    print(sore[i*2],end=" ")
    sum=0
    for item in sore[2*i+1]:
        print(item,end=" ")
        sum=sum+item
    print("总分",sum)

				- 改进：同类型数据放在统一的列表中

		- tuple元组

			- Python独有的
			- 特点

				- 只读，不能更改数据
				- list——》转换tuple

					- 转换后的tuple不会因为修改list而变化

				- 类型tuple
				- 变化

					- lnum=[10,10,55,100,100]
tu=('zhao',20,lnum)
print(tu)
# 不影响tu,tu的空间里存的是lnum的地址，至于lnum变化不影响
lnum.append(100)
print(tu)

city=['shanghai','beijing']
# 物理地址不能修改
tu[2]=city
print(tu)

			- api

				- index
				- max
				- min
				- count

					- tunm.count(100) 找到“100”的个数

			- 案例

				- lnum=[10,10,55,100,100]
tnum=tuple(lnum)
print(tnum)
print(tnum.index(100))
print(max(tnum))
print(min(tnum))
print(tnum.count(100))
lnum[2]=100
tu=(6,)*4
print(tu)
a=(1,2,3)
b=(2,8)
c=a+b
print(c)

		- DIct字典（key-value)与Map 对应

			- 案例

				- emp={
    "1001":'hi',
    "1002":'5d',
    "1003":'ad'
}

#查询
if "1001" in emp:
    print("ok")
else:
    print('no found')

#增删改
emp["1005"]="df"
print(emp)

emp.pop("1002")
print(emp)

emp["1001"]=5
print(emp)
				- emp={
    "1001": {
        "name":"zhao",
        "score":[50,61,66]
    },
    "1002": {
        "name":"qian",
        "score":[80,61,66]
    },
    "1003": {
        "name":"sun",
        "score":[88,75,90]
    }
}
print("%4s %5s %5s %4s"%("姓名","最高分","最低分","总分"))
for item in emp.values():
    print("%6s"%(item["name"]),end="")

    tu=tuple(item["score"])
    max1=max(tu)
    min1=min(tu)
    sum=0
    for u in tu:
        sum=sum+u
    print("%6d %6d %6d"%(max1,min1,sum))


		- set

			- 去重
			- 增删改

				- ln=[4,6,5,2,4,8,7,9,1,1]
print(ln)
ls=set(ln)
print(ls)
# 添加
ls.add(9)# 单个增加
print(ls)

# 更新
num=[100,12,6]
ls.update(num) #批量
print(ls)

#删除 remove去没有的值会报错
ls.discard(7)
print(ls)

# 查询
if 7 in ls:
    print(7)
else:
    print("not found")

			- 集合

				- 判断子集
				- 超集
				- 是否重合

		- 集合

			- s&a

				- 交集

			- s|a

				- 并集

			- s-a

				- 差集

			- s^a

				- 对称差集

		- 数据结构

			- 数组

				- List下标

			- 链表

				- insert
				- pop

			- 栈

				- pop
				- push

			- 队列

				- popleft
				- append

- 函数

	- 类型

		- 单身狗

			- 无参无返回值

		- 有对象

			- 一个参数
			- 多个参数
			- 默认参数

				- 默认参数必须排在后面
				- # python isinstance() 等价java instanceof关键字
# print(isinstance(5,int))
# print(isinstance(5.5,float))
# print(isinstance('jell',str))
# print(isinstance((5,5,5),tuple))

def area(r=10.0):
    if isinstance(r,float):
        return 3.14*r**r
    else:
        return "参数错误"

print(area())
print(area(5.0))
print(area(5))


			- 可变参数

				- # 可变参数 list列表 append追加 tuple数据快照
# list-->tuple 可直接使用方法sum
def tusm(*args):
    # sum=0
    # for item in args:
    #     sum +=item
    # return sum
    return sum(args)

r1=tusm(1,2,6)
r2=tusm(5,5,5,1,2,3)
print(r1," ",r2)
				- # 可变参数 dict
def pd(*args):
    print(type(args))
    # for key in args:
    #     print(args.get(key))

pd([1,2])
				- 底层list+tuple

			- 可变关键字参数

				- # 可变参数 dict
def pd(**args):
    # print(type(args))
    for key in args:
        print(args.get(key))
    
pd(name="zhang",age=20,gender='female')
				- # 可变参数 dict
def pd(**args):
    # print(type(args))
    for key in args:
        print(args.get(key))


emp={
    "1001":'hi',
    "1002":'5d',
    "1003":'ad'
}
pd(**emp)
				- 底层字典dict

		- 有儿女

			- 有参有返回值
			- 多返回值

				- 理解：多个返回值为封装tuple
				- def area(f):
    c=2*f*3.14
    a=3.14*f**2
    return c,a
r=area(5)
print('%.3f' % r[0])
print('面积', r[1])

	- 递归

		- 注意栈溢出
		- 空间复杂度O(n)
		- 案例

			- 一案例

				- # mian栈帧——》调用add(10)->>add(9)->>**        ->>add(1)
# 下一条语句《-返回值add(10) 《《《---**    返回值 <--1 
				- # 递归
def digu(n):
    if n==1:
        print(n)
        return 1
    else:
        print(n)
        return n+digu(n-1)

a=digu(10)
print(a)


			- # 递归
def digu(a,b):
    if b==0:
        return 1
    else:
        return a*digu(a,b-1)

a=digu(2,3)
print(a)

def digu1(n):
    if n==1:
        return 1
    elif n==2:
        return 1
    else:
        return digu1(n-1)+digu1(n-2)

a=digu1(4)
print(a)

			- 汉罗塔

				- def hanoi(n,a,b,c):
    if n==1:
        print('move',n,'from',a,"to",c)
    else:
        hanoi(n-1,a,c,b)
        print('move',n,'from',a,"to",c)
        hanoi(n-1,b,a,c)
hanoi(3,'A','B','C')
				- move 1 from A to C
move 2 from A to B
move 1 from C to B
move 3 from A to C
move 1 from B to A
move 2 from B to C
move 1 from A to C

	- 随机

		- 猜数字

			- n=random.randint(1,10)

				- 注意他是闭合范围
				- import random
for i in range(10):
    print(random.randint(0,9))

		- 扑克牌

			- random.ranint(列表）

				- import random
ln= [64,542,22]
for i in range(3):
    print(random.choice(ln))

		- 案例

			- 随机出现7个不同的随机数

				- import random
ls=set([])
while len(ls)<7:
    a=random.randint(1,33)
    ls.add(a)
print(ls)

	- turtle函数库

		- 绘图

			- 案例

				- import turtle
turtle.bgcolor('black')
pen= turtle.Pen()
pen.pencolor('red')
pen.speed(0)
#pen.width(0)
# x= int(input('输入边数'))
# for i in range(x):
#     pen.forward(100)
#     pen.left(360//x)
y=int(input('旋转角度'))
for i in range(100):
    pen.forward(i*2)
    pen.left(y)

			- pen

				- turtle.bgcolor('black')

					- 设置画布背景

				- pen= turtle.Pen()

					- 得到画笔

				- pen.pencolor('red')

					- 设置画笔颜色

				- pen.speed(0)

					- 画的速度

				- pen.circle(i*2)

					- 画圆

				- pen.left(y)

					- 画笔笔尖朝向向左转y度

				- pen.forward(i)

					- 画笔朝笔尖方向画一条i像素的直线

			- 事件

				- 鼠标

					- 案例

						- import turtle
import random
turtle.bgcolor('black')
pen= turtle.Pen()
pen.pencolor('red')
pen.speed(0)

a=['grey','blue','white','orange','purper']

def draw(x,y):
    pen.penup()
    pen.setpos(x,y)
    pen.pendown()
    for j in range(20):
        pen.circle(j*2)
        pen.pencolor(a[j%5])
        pen.left(random.randint(1,360))
        
turtle.onscreenclick(draw)

					- turtle.onscreenclick(draw)

						- 点击屏幕触发事件

				- 键盘

					- turtle.done()防闪退
					- turtle.onkey(forward, 'Up')

						- 点击‘UP'触发

					- 案例

						- import turtle

pen = turtle.Pen()



def forward():
    pen.forward(50)


def back():
    pen.left(180)
    pen.forward(50)


def left():
    pen.left(90)
    pen.forward(50)


def right():
    pen.right(90)
    pen.forward(50)

turtle.listen()
turtle.onkey(forward, 'Up')
turtle.onkey(back, 'Down')
turtle.onkey(left, 'Left')
turtle.onkey(right, 'Right')
turtle.done()

### 核心技术

- 面向对象

	- 三大特性

		- 封装

			- Class 类

				- class emp(object):
      属性：值

					- 继承父类object

				- emp.属性

					- 操作对象属性

				- a=emp() 

					- 实例化对象

				-   def __init__(self,id,name,score1,score2) 

					- 构建函数

				- self.__name

					- 私有

				- 案例 

					- class Stu(object):
    # 所有对象公用的
    count=0 
    def __init__(self,id,name,score1):
        self.id=id
        self.name=name
        # .__私有的类外不能使用
        self.__score=score1
        Stu.count+=1

    def get_score(self):
        return self.__score

    def set_score(self,score):
        self.__score=score

    def retire(self):
        Stu.count-=1

Stu.count+=1000
a=Stu(233,'zhangsan',100)
b=Stu(122,'adfa',55)
print(a.id)
print(a.name)

# 无此属性
# print(a.__score1)
print(a.get_score())
print(Stu.count)
b.retire()
print(Stu.count)

			- 打印各科成绩平均分

				- 
				- class Stu(object):
    # 所有对象公用的
    count=0
    math=[]
    chinese=[]
    english=[]
    def __init__(self,id,name,chinese,math,english):
        self.__id=id
        self.__name=name
        # .__私有的类外不能使用
        self.__chinese=chinese
        self.__math=math
        self.__english=english
        Stu.math.append(math)
        Stu.chinese.append(chinese)
        Stu.english.append(english)
        Stu.count+=1

    def Statistic_score(self):
        self.score=[self.__chinese,self.__math,self.__english]
        list=tuple(self.score)
        print('姓名：',self.__name)
        print('最高分',max(list))
        print('最低分', min(list))
        print('总分', sum(list))
        print('平均分%.2f'%(sum(list)/3))
        print("******************************")
    def get_avgscore(self):
        l_math=tuple(Stu.math)
        l_english=tuple(Stu.english)
        l_chinese=tuple(Stu.chinese)
        print('英语平均分%.2f' % (sum(l_english) / len(l_english)))
        print('数学平均分%.2f' % (sum(l_math) / len(l_math)))
        print('语文平均分%.2f' % (sum(l_chinese) / len(l_chinese)))

zhang=Stu(1,'zhang',100,50,60)
wang=Stu(2,'wang',90,50,20)
jie=Stu(3,'jie',120,80,60)

jie.get_avgscore()

					- class Stu(object):
    # 所有对象公用的
    __count=0
    math=[]
    chinese=[]
    english=[]
    # 各科平均成绩每个人都公有，每个人都影响，但不想它被直接访问
    __math=0
    # 相当于java
    # private static int math

     # 私有
        Stu.__math+=math

    # 私有使用
        print('数学平均分%.2f' % (Stu.__math / Stu.__count))

		- 继承

			- 特点

				- A 继承　Ｂ类

					- 

				- 子类可以使用父类的方法

					- # 子类中是否存在相应方法，有执行子类方法，无则使用父类方法
					- 

				- 多继承

					- 会打篮球的学生，会踢足球的老师

						- 

					- 缺陷：菱形关系的出现

			- 案例

				- class emp(object):

    def __init__(self,id):
        self.__id=id
    def show(self):
        print(f'empno is {self.__id}')
    def get_id(self):
        return self.__id

# pg继承emp
class pg(emp):
    def __init__(self,empno,level):
        super(pg, self).__init__(empno)
        self.__level=level

		- 多态

			- 案列

				- 动态引用

					- 
class hr(emp):
    def __init__(self,empno):
        super(hr, self).__init__(empno)
    def hire(self,e): # 动态引用
        if isinstance(e,pg):
            print('三年合同')
        elif isinstance(e,saler):
            print('一年合同')
        else:
            print('统一模板')

zhao=pg(1001,5)
saler1=saler(1002,500)
sun=hr(1003)
e=emp(100)

sun.hire(zhao)
sun.hire(saler1)
sun.hire(e)

				- 多态重写

					-   # 多态重写
    # def show(self):
    #     print(f'pg live is :{self.__level}')
    #     print(f'empno is {self.get_id()}')
    def __str__(self):
        return(f'pg live is :{self.__level},empno is {self.get_id()}')


zhao=pg(1001,5)
print(zhao)
# 子类中是否存在相应方法，有执行子类方法，无则使用父类方法



	- 类设计

		- # Tom猫捉Jerry鼠
# 类
# 属性
# 方法 --

# 分析 
# 名词 ——》类
# 形容词——》属性
# 动词——》作为主语的方法

			- # Tom猫捉Jerry鼠

class Cat(object):
    def __init__(self,name):
        self.__name=name

    def get_name(self):
        return self.__name
    def catgetmouse(self,mouse_name):
        print('{}猫捉{}鼠'.format(self.__name,mouse_name))


class Mouse(object):
    def __init__(self,name):
        self.__name=name
    def get_name(self):
        return self.__name

Tom=Cat('Tom')
Jerry=Mouse('Jerry')
Tom.catgetmouse(Jerry.get_name())

				- 不可或缺的属性采用构造方法
可更改的属性使用方法传参
				- API接口传参数为对象而不用值

			- class Person(object):
    def __init__(self,name):
        self.__name=name
    def get_name(self):
        return self.__name
    def wear(self,shoe):
        self.__cloth=shoe.get_color()+shoe.get_name()+shoe.get_type()
    def run(self,place):
        self.__run=place.get_name()
    def dothing(self):
        print('{}穿{}在{}跑'.format(self.__name,self.__cloth,self.__run),)

class Place(object):
    def __init__(self,name):
        self.__name=name

    def get_name(self):
        return self.__name

class Shoes(object):
    def __init__(self,name,color,type):
        self.__name=name
        self.__color=color
        self.__type=type
    def get_name(self):
        return self.__name
    def get_color(self):
        return  self.__color
    def get_type(self):
        return self.__type

place=Place('星海公园')
sun=Person('孙红雷')
shoe=Shoes('李宁','白色','跑鞋')
sun.wear(shoe)
sun.run(place)
sun.dothing()


				- 孙红雷穿白色李宁跑鞋在星海公园跑

		- 综合应用 

			- 孙红雷穿衣穿鞋

				- class Person(object):
    def __init__(self,name):
        self.__name=name
    def get_name(self):
        return self.__name
    def wear(self,clothes):
        print(f'穿着{clothes.desc()}')
    def run(self,place):
        self.__place=place.get_name()


class Place(object):
    def __init__(self,name):
        self.__name=name

    def get_name(self):
        return self.__name


class clothes(object):
    def __init__(self,color,brand):
        self.__color=color
        self.__brand=brand

    def desc(self):
       pass
   
class shoes(clothes):
    def __init__(self,color,brand,type):
        super(shoes, self).__init__(color,brand)
        self.__type=type
    def desc(self):
        return (f'{self.get_color()}{self.get_brand()}{self.__type}')

class tshirt(clothes):
    def __init__(self,color,brand,name,type):
        super(tshirt, self).__init__(color,brand)
        self.__type=type
        self.__name=name
    def desc(self):
        return (f'{self.get_color()}{self.__name}{self.get_brand()}{self.__type}')

place=Place('星海公园')
sun=Person('孙红雷')
shoe=shoes('白色','李宁','跑鞋')
cloth=tshirt('','耐克','圆领','T恤')
sun.wear(shoe)
sun.wear(cloth)


			- 员工

				- class emp(object):

    def __init__(self,id):
        self.__id=id
    def show(self):
        print(f'empno is {self.__id}')
    def get_id(self):
        return self.__id

# pg继承emp
class pg(emp):
    def __init__(self,empno,level):
        super(pg, self).__init__(empno)
        self.__level=level
    def __str__(self):
        return(f'pg live is :{self.__level},empno is {self.get_id()}')


class saler(emp):
    def __init__(self,empno,comm):
        super(saler, self).__init__(empno)
        self.__comm=comm
    def __str__(self):
        return(f'saler reward is :{self.__comm},empno is {self.get_id()}')



class hr(emp):
    def __init__(self,empno):
        super(hr, self).__init__(empno)
    def hire(self,e): # 动态引用
        if isinstance(e,pg):
            print('三年合同')
        elif isinstance(e,saler):
            print('一年合同')
        else:
            print('统一模板')

zhao=pg(1001,5)
saler1=saler(1002,500)
sun=hr(1003)
e=emp(100)

sun.hire(zhao)
sun.hire(saler1)
sun.hire(e)
# 子类中是否存在相应方法，有执行子类方法，无则使用父类方法



- 模块化设计

	- 官方

		- Python中自带的模块直接引用
		- import 那个模块 from 那个包 as 别名
		- 

	- 第三方

		- 配置pycharm 的 terminal控制台为本机的控制台

			- 

		- pip install

			- 

		- pip uninstall  ***包名***

	- 自定义

		- 新建一个tool 包
		- 在tool包里新建cal.py

			- def tsum(*args):
    tu=tuple(args)
    return sum(tu)

def tmul(*args):
    r=1
    for i in args:
        r*=i
    return r

		- 其他py文件调用自定义模块

			- from tool import cal

a=[1,2,3]
print(cal.tsum(*a))
print(cal.tsum(1,2,3))

- 读写文件异常处理

	- 读写

		- 解释

			- f=open('hello.txt','r')

				- 打开文件，执行操作
 a追加 r读 w重写 +可读可写

			- s=f.readline(30)

				- 单行读取  预留空间

			- f.write(str)

				- 写入文件

			- ss=f.readlines()

				- 多行读取 不用给值
				- 是一段列表

			- f,close()

				- 必须关闭文件

		- try:
    # a追加 r读 w重写 +可读可写
    f=open('hello.txt','r+')

except IOError:
    print('file not found')

else:
    f2=open('copy.txt','w+')
    fstr=f.readlines()
    for i in fstr:
        i=i[::-1]
        f2.write(str(i))

finally:
    f.close()
    f2.close()

	- 异常

		- try:
		- except IOError:

			- 异常处理

		- else:
		- finally:

			- f.close()

- 函数式编程

	- 定义

		- "函数式编程"是一种"编程范式"（programming paradigm），也就是如何编写程序的方法论。
		- 它属于"结构化编程"的一种，主要思想是把运算过程尽量写成一系列嵌套的函数调用

	- 特点

		- 易于并发编程

			- 函数式编程不需要考虑"死锁"（deadlock），因为它不修改变量，所以根本不存在"锁"线程的问题
			- 多个线程互不影响，不会修改其他线程的变量

		- 函数是第一等公民

			- 所谓"第一等公民"（first class），指的是函数与其他数据类型一样，处于平等地位，可以赋值给其他变量，也可以作为参数，传入另一个函数，或者作为别的函数的返回值。

		- 代码热升级

			- 只要接口不变，内部实现与外部无关

	- 高阶函数

		- 特点

			- 函数作为参数传递的函数

		- 自定义

			- 特点

				- 自定义

			- 案例

				- 结果=a的绝对值+b的绝对值
				- import math

def add(a,b,f):
    return f(a)+f(b)

r=add(-5,-6,abs)
print(r)


# add方法-》叫做高阶函数  调用函数的函数

					- 结果=a的b次方+c的d次方
					- def add(a,b,c,d,f):
    return f(a,b)+f(c,d)

r=add(1,2,2,4,pow)
print(r)

		- 官方

			- map(f,list)

				- 映射

					- 对list列表按照f函数进行批处理
					- 结果为列表

				- 案例

					- 
					- import math
def f(x):
    return x*x

ln=[2,2,3,4,5,2,9]
print(ln)
lr=map(f,ln)
# map 是一个集合
for item in lr:
    print(item,end=' ')

			- reduce(f,list)

				- 减少

					- list中的元素从左依次取出两个数分别赋值于a，b,参与f函数运算c=f(a,b)

						- c和list中的下一个元素分别再次赋值于a,b,参与f函数运算，c=f(a,b)

							- 最后输出c

					- 结果为值

				- 案例

					- r=7!
					- from functools import reduce
# 累加没有意义
def add(a,b):
    return a+b
# 累乘
def mul(a,b):
    return a*b

ln=[1,2,3,4,5,6,7]
print(ln)
r=reduce(mul,ln)
print(r)


			- filter(f,list)

				- 过滤

					- 通过f函数的真假判断，过滤所有为真的元素，
					- 为列表

				- 案例

					- 判断奇函数
					- def print1(a):
    for item in a:
        print(item,end=' ')
    print()
lm=[1,2,3,4,5,6,7,8]
def is_odd(n):
    return n%2==1

r1=filter(is_odd,lm)
print1(r1)

			- sorted(list,key=f)

				- 排序

					- 根据key关键字key=函数名  进行排序
					- 结果列表

				- 案例

					- 对list中的每个元组的第二个元素进行升序排列
					- def print1(a):
    for item in a:
        print(item,end=' ')
    print()

def orderby(s):
    return s[1]
ls=[('A',88),('B',98),('C',6)]
r=sorted(ls,key=orderby)

print1(r)


						- 

	- 闭包

		- 特点

			- 即函数定义和函数表达式位于另一个函数的函数体内。
			- 这些内部函数可以访问它们所在的外部函数中声明的所有局部变量、参数和声明的其他内部函数。当其中一个这样的内部函数在包含它们的外部函数之外被调用时，就会形成闭包。
			- 一般而言函数调用被执行后，其函数内部的局部变量执行完即释放其所在内存，但对于闭包函数而言，外部函数的局部变量依然存在内存，提供给闭包函数使用

		- 案例

			- 简单运用

				- 闭包函数show

					- 内部函数show在外部函数closere返回后
					- 内部函数对象被一个全局变量myshow所引用
					- myshow()执行时要访问外部函数的n值,打印n值

				- def closure():
    n=100
    def show():
        print(n)
    return show


myshow=closure()# <--show
myshow()        # <--show()

			- 高级运用

				- 修改局部变量的值

					- python中 #调用外部函数变量n
					-  nonlocal n

				- def closer():
    n=100

    def get():
        return n
    def set(m):
        print('执行')
        nonlocal n #调用外部函数变量
        n=m
    return  {
        'set':set,
        'get':get
    }

mycloser=closer()
#取值
r=mycloser.get('get')
print(r())
#设值
a=mycloser.get('set')
a(120)
#再取值
r=mycloser.get('get')
print(r())


		- 引申

			- 原型属性

				- 在将值赋给其命名属性时，如果对象没有该属性则会创建该命名属性，否则会重设该属性的值。
				- 主要是Javascript，在python类中同样使用原型属性

			- 对象名属性解析

				- 原生对象属于语言，而宿主对象由环境提供，比如说可能是文档对象、DOM 等类似的对象。

	- lambda 

		- 特点

			- 匿名函数  参数：返回值————》代替函数

		- 案例

			- ln=[2,3,4,2,3,4]

lr=map(lambda x:x*x,ln) 
for i in lr:
    print(i,end=" ")
			- from functools import reduce

ln=[2,3,4,2,3,4]  
ls=reduce(lambda x,y:x*y,ln)
print(ls)

		- 综合案例

			- # from functools import reduce
# def myprint(s):
#     for i in s:
#         print(i,end=' ')
#     print()
#
# def ascendsort(s):
#     return s[1]
#
# def is_not_none(s):
#     return s and(len(s.strip())>0)
# ln=[2,3,4,2,3,4,4,5,9,8,7]
# lm=[('A',78),('B',100),('b',34)]
# lb=[' dd d',' ','asdfa','sss',None]
#
#
#
# print('*'*8+'lambda'+'*'*8)
# myprint(ln)
# lr=map(lambda x:x*x,ln) #匿名函数  参数：返回值————》代替函数
# myprint(lr)
# ls=reduce(lambda x,y:x*y,ln)
# print(ls)
# ls=filter(lambda s:s>5,ln)
# myprint(ls)
#
# print('*'*8+'sorted'+'*'*8)
# myprint(lm)
# ls=sorted(lm,reverse=True)
# myprint(ls)
# ls=sorted(lm,key=ascendsort)
# print(ls)
#
# print('*'*8+'filter'+'*'*8)
# myprint(lb)
# ls=filter(is_not_none,lb)
# myprint(ls)


- 网络编程

	- 网络基础知识

		- OSI七层协议

			- 
			- 

		- TCP/IP4层协议

			- 模型

				- 
				- 

			- 应用层

				- 应用

					- DNS域名系统

						- 特点

							- 域名绑定IP

					- 文件传输

						- FTP文件传输

					- WWW互联网

						- HTTP

							- python有自己的HTTP服务器
							- CTRL+C 退出
							- 
							- 

						- HTTPS

							- 加密

					- DHCP动态主机配置协议
					- 电子邮件

						- SMTP简单邮件传输协议

							- 支持ASCII码信息传输
							- 互联网邮件扩充协议MIME

								- 相当于翻译角色
								- 可以传输非ASIIC的数据

						- POP3协议和IMAP协议

							- 接受邮件的协议

						- 基于网络的电子邮件

							- HTTP

					- P2P运用

			- 运输层

				- 作用

					- 解决不同进程之间数据传输问题

				- 端口

					- 特点

						- 16位bit

					- 作用

						- 数据复用与分用

							- 应用进程通过运输层传到网络层叫复用
							- 运输层从网络层接受数据叫分用

					- 分类

						- 熟记端口

							- 0-1023

						- 登记端口

							- 1024~49151

						- 登记端口

							- 49152~65535

					- 常用端口

						- HTTP80

							- 超文本协议

						- FTP 20/21

							- 21为服务器

								- 文件传输

						- DHCP 67/68

							- 67服务器

								- 动态主机配置

						- POP3 110

							- 接受邮件

						- Mysql 3306
						- Tomcat 8080

				- TCP协议

					- 特点

						- 面向连接

							- 建立虚连接

								- socket套接字（ip地址，端口号）

						- 可靠传输

							- 理性可靠传输特点

								- 传输信道不出错
								- 不管发送方以多快的速度发送数据，接收方都能来得及处理收到的数据

							- 确报可靠传输的协议

								- 停止等待协议

						- 点对点

							- 单播

						- 面向字节流

							- 无结构字节流

						- 全双工通信

							- TCP运行运用进程任何时刻都可以发送数据
							- 数据由发送缓冲和接受缓存来处理

					- tcp报文

						- 

					- 建立连接三握手

						- 情景分析

							- c在吗，我们能一起吃饭吗
							- r好的
							- c太好了

						- 模型

							- 

					- 关闭连接四挥手

						- 情景

							- a我要和你分手
							- b我知道你要分手，但我舍不得
							- 中间…………

								- b在挽留

							- b我准备与你分手
							- a那就分吧

						- 模型

							- 

				-  UDP协议

					- 特点

						- 无连接
						- 尽最大能力交付
						- 面向报文

							- 保留报文边界，原样发送
							- 发送效率问题

						- 没有拥塞控制

							- 数据丢失，不允许时延
							- 实时运用

								- IP电话 
								- 视频会议

						- 支持

							- 单播
							- 多播
							- 组播

					- 模型

						- 

					- 子主题 3

			- 网际层

				- IP

					- i
					- IP地址

						- 分类

							- 

								- 分析A类地址

									- 网络号占1字节，只有7位可用，第一位固定为0

										- 网络号全为0，特殊用途表示本网络
										- 127（01111111）

											- 特殊用途表示环回测试

										- 2^7-2

									- 主机号占3字节

										- 全0、全1不指派
										- 2^24-2

								- 特殊IP地址

									- 

					- 无分类编址

						- 网络前缀

							- 斜线计法  CIDR法
							- 

						- 地址块

							- 网络前缀都相同的IP地址组成‘CIDR 地址块’
							- 
							- 

						- 地址掩码

							- 又称为子网掩码，由一连串的0、1组成的32位比特数据

								- 1表示网路前缀长度

							- CIDR计法，斜线后的数字为掩码的1的个数
							- 

						- 常用CIDR地址块划分

							- 

				- ARP

					- 地址解析协议

				- 查看IP命令

					- 本地IP

						- 

					- ping

						- 

							- 用ip地址访问百度

			- 网络接口层

				- 数据链路层
				- 物理层

	- Socket套接字

		- 模型

			- 

		- 案例

			- 服务器

				- import socket
server=socket.socket()
server.bind(('127.0.0.1',9999))
# 监听的用户数
server.listen(5)
print('sever start on 9999 ')
s,addr=server.accept() # 接受到socket 地址
print(f'{addr}')
while True:
    content=s.recv(1024)
    s1=str(content,encoding='utf-8')
    if s1=='exit':
        break
    print('客户端：'+s1)
    s.send(bytes('我收到了',encoding='utf-8'))

print('关闭服务器')
server.close()

			- 客户端

				- import socket

client=socket.socket()
client.connect(('127.0.0.1',9999))
# client.send(bytes('hello python 网络编程',encoding='utf-8'))
while True:
    s=input('客户端：')
    client.send(bytes(s, encoding='utf-8'))
    if s=='exit':
        break
    print('发送成功。')
    cr=client.recv(1024)
    print('服务器：'+str(cr,encoding='utf-8'))
print('关闭客户端')
client.close()

	- HTTP

		- request

			- 子主题 1

		- response
		- 官方urlib库运用

			- 用来处理url
			- 案例

				- from urllib import request
response=request.urlopen('http://www.baidu.com')
content=response.headers
print(content)

		- 第三方库

			- requests库

				- 导包
				- 获取head

					- import requests
response=requests.get('http://www.baidu.com/s?wd=红烧肉')
print(response.status_code)
# print(type(response))
# print(type(response.headers))
h=response.headers
for item in h:
    print(item,':',h.get(item))

				- 获取content

					- import requests
response=requests.get('http://www.jd.com')
content=str(response.content,encoding='utf-8')
conntent_list=content.split('\n')
for line in conntent_list:
    if 'href' in line:
        print(line.strip())

## 3.开发框架

### MVC框架

- 模型

	- 

- Model

	- 模型代表一个存取数据的对象或 JAVA POJO。它也可以带有逻辑，在数据变化时更新控制器。
	- Dao

		- 数据库
		- 操作数据库语言JDBC

			- MyBatis

- View

	- 视图代表模型包含的数据的可视化。
	- 技术

		- html,css ,javascript

	- 框架

		- vue bootsrap React Angular

- Control

	- 控制器作用于模型和视图上。它控制数据流向模型对象，并在数据变化时更新视图。它使视图与模型分离开。
	- 业务

		- 取值

			- 从客户端取需求

		- 处理

			- 处理数据

		- 反馈

			- 封装数据返回给客户端

	- java

		- SpringMVC
		- Springboot

- python 

	- 主要框架

		- Flask
		- Django
		- Tornado

	- python 可以跨层

		- MVT

			- 

### Python框架

- 主流

	- Djiango
	- Flask
	- Tornado 

- 占有率

### Django框架

- 开源Web框架
- 基于MVT框架

	- View

		- 请求方式request

			- get

				- Get方式在通过URL提交数据，数据在URL中可以看到
				- 大小有限制

					-  GET方式提交的数据最多只能有1024 Byte

			- post

				- POST方式，数据放置在HTML HEADER内提交。
				- POST大小没有此限制
				- template

					-  {% csrf_token %}

		- 应答response

			- IO流

				- 覆盖原有页面

					-  return HttpResponse("content")

			- 转发

				- 跳转本服务器的其他页面

					- 客户端和浏览器只发出一次请求

				- render

					- return render(request,"showuser.html",{'msg':msg})

			- 重定向

				- 跳转到其他外部应用

					- 访问两次

				- redirect

					- return redirect("http://www.baidu.com")

	- Template

		- 路径设置

			- 

		- 调用

			- 

		- 动态数据绑定

			- View

				- from django.http import HttpResponse
from django.shortcuts import render,redirect

def dorender(request):
    msg='python is dog'
    return render(request,"dorender.html",{'msg':msg})

			- Templates->dorender.html

				- <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>dorender</title>
</head>
<body>
<p>数据{{ msg }}</p>

</body>
</html>

			- 当msg的值一旦变化，视图页面全改变

		- 循环

			- 元素

				- for endfor标签

					-  {% for e in emps %}
   
{% endfor %}

				- forloop变量

					- 模板本身存在的变量

						-  <li>{{ forloop.counter }}:{{ e }}</li>

					- count

						- 从1开始

					- count0

						- 从0开始

							- 

				- 案例

					- <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
    {% for e in emps %}
    <li>{{ forloop.counter }}:{{ e }}</li>
{% endfor %}
</body>
</html>

		- 容器

			- 列表

				- def clist(request):
    emps=['zhao','qian','sun','li']
    return render(request,"list.html", {'emps':emps})


			- 字典

				- msg={'un':username,'pw':password}
return render(request,"showuser.html",{'msg':msg})

		- 选择分支

			- 

				- 注意score 与比较符号之间有空格

		- 过滤器

			- 字符

				- 

					-   <h3>过滤器</h3>>
    <ul>
        <li>length:{{ msg|length }}</li>
        <li>wordcount:{{ msg|wordcount }}</li>
        <li>lower:{{ msg|lower }}</li>
        <li>upper:{{ msg|upper }}</li>
        <li>truncatewords:{{ msg|truncatewords:"16" }}</li>
        <li>truncatechars:{{ msg|truncatechars:"10" }}</li>
        <li>cut:{{ msg|cut:" " }}去除所有空格</li>
        <li>first|lower:{{ msg|first|lower}}</li>

    </ul>

			- 数字

				- 

			- 容器

				- list

					- 

				- dict

					- 

			- 时间

				- 

			- 安全

				- 

					- link|safe

						- 子主题 1

			- 案例

				- <h3>过滤器数字</h3>>
    <ul>
        <li>num+3:{{ num|add:"3" }}</li>
    </ul>
    <h3>过滤器字符</h3>>
    <ul>
        <li>length:{{ msg|length }}</li>
        <li>wordcount:{{ msg|wordcount }}</li>
        <li>lower:{{ msg|lower }}</li>
        <li>upper:{{ msg|upper }}</li>
        <li>truncatewords:{{ msg|truncatewords:"16" }}</li>
        <li>truncatechars:{{ msg|truncatechars:"10" }}</li>
        <li>cut:{{ msg|cut:" " }}去除所有空格</li>
        <li>first|lower:{{ msg|first|lower}}</li>

    </ul>
<h3>过滤器列表</h3>>
    <ul>
        <li>first list:{{ list|first }}</li>
    </ul>
<h3>过滤器字典</h3>>
    <ul>
        <li>dict sort:{{ dict|dictsort:'score' }}</li>
    </ul>
<h3>过滤器时间</h3>>
    <ul>
        <li>date:{{ date|date:"y-m-d H:m" }}</li>
    </ul>
<h3>过滤器link</h3>>
    <ul>
        <li>link:{{ link|safe}}</li>
    </ul>

					- def filter(request):
    dict=[{
        'name':'A',
        'score':8
    },
    {
        'name': 'B',
        'score': 9
    },
    {
        'name': 'C',
        'score': 2
    }
    ]
    num=324
    list=['sdaf','bsdfas','sdfd']
    msg="sadfasfas sdfasf e asdf asedf e的萨芬 Hsadf Hse"
    date=datetime.datetime.now()
    link = '<a href="https://www.baidu.com">测试百度</a>'
    return render(request,'showuser.html',{'msg':msg,'list':list,'dict':dict,'num':num,'date':date,  'link':link
})

		- 配置静态文件

			- setting

				- 

			- 案例

				- 目录结构

					- 

				- view

					- from django.http import HttpResponse
from django.shortcuts import render



def hello_msg(request):
    msg = 'Hello Django'
    img = 'static/images/movie04.jpg'
    return render(request, 'hello.html', {
        'msg': msg,
        'img': img
    })

				- hello.html

					- <!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title></title>
        <link rel="stylesheet" href="/static/plugs/bootstrap/css/bootstrap.min.css">
	</head>
	<body>
    <div class="page-header">
    <h1>
        {{ msg }}
        <small>{{ img }}</small>
    </h1>
    <button id="toggle_btn" class="btn-success">图片切换</button>
        <div>
            <img id="hero" src="{{ img }}" class="img-circle">
        </div>
    </div>


	</body>
	<script src="/static/js/jquery.min.js" type="text/javascript"></script>
    <script src="/static/plugs/bootstrap/js/bootstrap.min.js" type="text/javascript"></script>
    <script type="text/javascript">
            $(function(){
				flag = true
				$("#toggle_btn").click(function(){
					flag = !flag;
					$("#hero").toggle(1000);
					$(this).text(flag?"隐藏":"显示")
				})
			});
    </script>

</html>


				- url

					- from django.contrib import admin
from django.urls import path
from . import views
urlpatterns = [
    path('admin/',admin.site.urls),
    path('', views.hello_msg)
]

	- Model

		- 对象映射工具

			- 

		- 数据库相关设置

			- settings.py

				- 

			- python 控制台

				- 

			- django app应用

				- manage.py

					- django命令

						- 

							- 
							- 

					- settings.py引用

						- 

					- 建立模型

						- 模型

							- 

								- 根据model创建数据库

						- django字段类型

							- 数字

								- 整数类型

									- IntegerField

								- 浮点数类型

									- FloatField

							- 文本类型

								- TextField

							- 时间

								- 日期类型

									- DateField

								- 时间类型

									- TimeField

								- 日期时间类型

									- DateTimeField

								- auto_now=True

									- 字段保存时会自动保存当前时间，但要注意每次对其实例执行save()的时候都会将当前时间保存，也就是不能再手动给它存非当前时间的值

								- auto_now_add=True

									- 字段在实例第一次保存的时候会保存当前时间，不管你在这里是否对其赋值。但是之后的save()是可以手动赋值的。也就是新实例化一个model，想手动存其他时间，就需要对该实例save()之后赋值然后再save()


							- 自增+主键

						- 编写models.py

							- 代码

								- from django.db import models


# Create your models here.

class Movie(models.Model):
    # 标号主键自增
    mid = models.AutoField(primary_key=True)
    # 电影名称
    title = models.TextField()
    # 宣传图片
    movie_img = models.TextField()
    # 导演
    director = models.TextField()
    # 演员列表
    actors = models.TextField()
    # 电影简介
    content = models.TextField()
    # 猫眼评分
    grade = models.FloatField()
    # 上映时间
    release_date = models.DateTimeField(auto_now_add=True)

								- 

							- 翻译，生成迁移集

								- 

							- 合并，执行sql语句，创建数据库

								- 

			- 执行SQL语句

				- 

					-  insert into moviesapp_movie(title, movie_img, director, actors, content, grade, release_date)
values ('t1','/static/images/movie01.jpg','d1','a1','c1',9.3,'2020-01-01 10:30:20'),
       ('t2','/static/images/movie02.jpg','d1','a1','c1',8.3,'2020-05-06 13:20:20'),
       ('t3','/static/images/movie03.jpg','d1','a1','c1',2.3,'2021-09-11 06:38:20'),
       ('t4','/static/images/movie04.jpg','d1','a1','c1',9.3,'2022-06-28 15:00:00');
select title,grade,release_date from moviesapp_movie;
delete from moviesapp_movie;

				- 

			- django后台

				- 命令

					- makemigrations
					-  migrate
					- createsuperuser

						- 

					- runserver

				- 修改url

					- 

						- http://127.0.0.1:8000/admin/

				- 登录

					- 
					- 根据创建的超级管理员

				- 把moviesapp的model注册admin后台

					- 

						- 多个模型

							- 

				- 登录后台，修改movie

					- 

						- 

- 案例

	- 新建DJango

		- 新建Django
		- 文件结构

			- 

		- 启动

			- 命令行

				- 
				- 

			- 点击按钮

		- 第一个项目

			- 新建view.py

				- from django.http import HttpResponse
def hello(request):
    return HttpResponse('<h1 style="color:red" onclick="alert(1)">helldcco world</h1>')


			- 修改路由

				- 
				- 导包

					- from . import view

				- 路由跳转

					- path('hello',view.hello)

	- django登录验证

		- views

			- from django.http import HttpResponse
from django.shortcuts import render


def login_form(request):
    username = request.POST.get('username')
    password = request.POST.get('password')
    print(username,password)
    if username == 'scott' and password == '1234':
        return HttpResponse(f'<h1>login successed</h1>')
    else:
        return HttpResponse(f'<h1>login failed</h1>')

def login(request):
    return render(request,"login.html")

		- urls

			- from django.urls import path
from . import views as v

urlpatterns = [
    path('login_form/', v.login_form),
    path('login/', v.login),

]


		- login.html

			- <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>登录页面</title>
</head>
<body>
    <form action="/login_form/" method="post">
        {% csrf_token %}
        <table>
            <tr>
                <td>用户名</td>
                <td><input type="text" value="scott" name="username" placeholder="用户名英文字母"></td>
            </tr>
            <tr>
                <td>用户名</td>
                <td><input type="password" value="1234" name="password" placeholder="4位数"></td>
            </tr>
            <tr>
                <td><input type="submit" value="登录"></td>
                <td><input type="reset" value="重置"></td>
            </tr>
        </table>
    </form>

</body>
</html>

## 4.项目实训

### bootstrap开发

- css

	- 
	- 说明

		- 层叠样式表(英文全称：Cascading Style Sheets)是一种用来表现HTML（标准通用标记语言的一个应用）或XML（标准通用标记语言的一个子集）等文件样式的计算机语言。CSS不仅可以静态地修饰网页，还可以配合各种脚本语言动态地对网页各元素进行格式化。

	- 注意

		- 引用

			- <style type="text/css"></style>
			- <link rel="stylesheet" href="./css/bootstrap.min.css">

		- 放置位置

			- html中的head中

		- 行内元素

			- 其高度无法变化

				- padding：20px

					- 

				- padding:20px;
display:inline-block:

					- 

		- 块元素

			- 边框属性

				- border: 4px groove green;

					- 三个属性
					- 否则显示不出来

- js

	- 

		- 	<body>
		<a id="toggleBtn" href="javascript:void(0)">页面显示</a>
		<div class="box1">
			<button id="hideBtn" type="button">hide</button>
			<button id="showBtn" type="button">show</button>
		</div>
		<img id="hero" src="img/movie01.jpg" />

	</body>
	<script type="text/javascript">
		window.alert("hello world")
		$(function() {
					flag = true;
					$(' #hideBtn ').click(function() {
						$("#hero").hide(1000);
					});
					$("#showBtn").click(function() {
						$("#hero").show(1000);
					});
					$("#toggleBtn").click(function() {
						flag = !flag;
						$("#hero").toggle(2000);
						$(this).text(flag ? "隐藏"∵ : "显示")
					})
	</script>

	- 引用

		- <script type="text/javascript"></script>
		- <script src="js/bootstrap.min.js"></script>

	- 注意

		- $("#id").click(funciton(){

});

			- $("#id").click(funciton(){ 函数体  }); $取到html元素对象

- bootstrap

	- 引用

		- js

			- 

		- css

			- 

	- 效果

		- 栅格化

			-   <button class="btn btn-success">success</button><hr>
	  <button class="btn btn-success col-sm-10 col-lg-6 col-md-8 col-xs-12">show</button>

				- 

		- 幻灯片

			- 自动轮播

				- data-ride="carousel"

	- json

		- 

			- <!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title></title>
	</head>
	<body>
		<h3>电影网站</h3>
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id porro error illum fugit voluptatibus incidunt in similique veniam et impedit doloribus aspernatur reiciendis quod! Neque sapiente pariatur incidunt placeat quos!</p>
		<div id="movies-info">
			<ul id="movies">
				
			</ul>
			
		</div>
		
		
	</body>
	<script src="./js/jquery.min.js" type="text/javascript"></script>
	<script type="text/javascript">
		$(function(){
			$.ajax({
				type:"get",
				url:"./json/hot.json",
				  
					// console.log("dsfsaf ");
					movies = res.data.hot;
					$(movies).each(function(){
						$li = $("<li></li>");
                                                $li.text(this.nm) ;
						$img = $( "<img>< /img>");
						$img.attr( "src" ,this.img).css({
							"width": "300px",
							"border-radius" : "30px"
						})
						$li.append($img)
						$( "#movies" ).append($li);});

				}
			})
		})
	</script>
</html>


		-  自动生成字符串

			- lorem*N+TAB

		- 追加html元素

			- $li

				- 定义li元素

					- $li=$("<li></li>")

				- 设置内容

					- $li.text(this.nm)
					- $img=$("<img></img>")

						- $img.attr("src",this.img).css({
"width":50px;
"border-radius":"30px"})

				- 添加到body的ul里

					- $("#movies").append($li)

			- 字符串拼接

				- 直接添加

					- 	str='<li ><h4>'+this.nm+'</h4><img src="'+this.img+'" style="width:300px; border-radius:30px"/></li>'
						
						$( "#movies" ).append(str);});

		- 请求不同网络的数据

			- 请求有限制

				- 解决同源策略

					- 

			- 网站API

				- 阿里云免费api

### django数据操作

- django读取数据库显示

	- 在movieapp编辑

		- views

			- from django.shortcuts import render
from moviesapp.models import Movie
# Create your views here.
def getbyid(request):
    id= int(request.GET.get('id'))
    movie=Movie.objects.get(mid=id)
    print(movie)
    return render(request,"movie.html",{'movie':movie})

				- 获取所有

					- def getall(request):
    movies=Movie.objects.all()
    print(type(movies))
    return render(request,"movie.html",{'movies':movies})
					- movies 是objectset

		- 新建urls,二级路由

			- from django.urls import  path
from moviesapp import views
urlpatterns={
    path('getbyid/',views.getbyid)
}

				- 路由

					-   path('all/',views.getall)

	- 主函数中

		- 引用二级路由

			- 

	- Templates

		-  编写movie.html

			- <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>电影详情</title>
</head>
<body>
    <h3>{{ movie.title }}</h3>
    <p><img src="{{ movie.movie_img }}"></p>
    <p>{{ movie.content }}</p>
<p>{{ movie.release_date|date:"Y-m-d" }}</p>

</body>
</html>

				- 路由

					-     {% for i in  movies  %}
        <p>{{ i.title }}</p>
        <p><img src="{{ i.movie_img }}"></p>
         <p>{{ i.content }}</p>
        <p>{{ i.release_date|date:"Y-m-d h:i:s" }}</p>
    {% endfor %}

					- 修改html 服务器不需要重加载

- 分页

	- 

		- 根据条件从数据库取值
根据条件进行数据处理返回

	- def getall(request):
    con=request.GET.get('sort_con')
    page=int(request.GET.get('pn'))
    row=int(request.GET.get('rn'))

    begin=(page-1)*row
    end=(page*row)
    movies=Movie.objects.order_by(con)[begin:end]
    print(type(movies))
    return render(request,"movie.html",{'movies':movies})

		- 分页（begin,end)
		- java

			- 分页（begin,num)

	- 过滤数据

		- movies=Movie.objects.filter(director="吴京")
return render(request,"movie.html",{'movies':movies})

			- 一般不采用，因为会吃服务器资源

		- 

	- 排序数据

		- 

			- 一般不采用，因为会吃服务器资源

- 加分

	- 

		- 一般项目员工离职用的是改

	- 

- 增

	- 新建newmovie.html

		- 内容

			- <form action="movie/save" method="get">
     {% csrf_token %}
    <table>
			<tr>
				<td>title</td>
				<td>
					<input name="title" type="text"/>
				</td>
			</tr>
			<tr>
				<td>movie_img</td>
				<td>
					<input name="movie_img" type="text"/>
				</td>
			</tr>

			<tr>
				<td>director</td>
				<td>
					<input name="director" type="text"/>
				</td>
			</tr>

			<tr>
				<td>actor</td>
				<td>
					<input name="actor" type="text"/>
				</td>
			</tr>

			<tr>
				<td>content</td>
				<td>
                    <textarea cols="15" rows="3" name="title" type="text"></textarea>
				</td>
			</tr>

			<tr>
				<td>grade</td>
				<td>
					<input name="grade" type="number" min="1.0" max="10" step="0.1"/>
				</td>
			</tr>
			<tr>
				<td>relese_date</td>
				<td>
					<input name="relese_date" type="date"/>
				</td>
			</tr>
             <tr>
                 <td><button type="submit"> 提交</button></td>
				<td><button type="reset"> 重置</button></td>
			</tr>
        </table>


</form>


		- {% csrf_token %}

			- post处理

				- 

		- url

			- action

				- 

					- 第一个斜杠

						- 不为路径拼接

							- 

					- 第二个斜杠

						- 为post传参

							- 

		- set

			- 

				- 解决

					- 
					- 是[] 而不是{}

		- 内容

			- <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<form action="/movie/save/" method="post">
     {% csrf_token %}
    <table>
			<tr>
				<td>title</td>
				<td>
					<input name="title" type="text"/>
				</td>
			</tr>
			<tr>
				<td>movie_img</td>
				<td>
					<input name="movie_img" type="text"/>
				</td>
			</tr>

			<tr>
				<td>director</td>
				<td>
					<input name="director" type="text"/>
				</td>
			</tr>

			<tr>
				<td>actor</td>
				<td>
					<input name="actors" type="text"/>
				</td>
			</tr>

			<tr>
				<td>content</td>
				<td>
                    <textarea cols="15" rows="3" name="content" type="text"></textarea>
				</td>
			</tr>

			<tr>
				<td>grade</td>
				<td>
					<input name="grade" type="number" min="1.0" max="10" step="0.1"/>
				</td>
			</tr>
			<tr>
				<td>relese_date</td>
				<td>
					<input name="relese_date" type="date"/>
				</td>
			</tr>
             <tr>
                 <td><button type="submit"> 提交</button></td>
				<td><button type="reset"> 重置</button></td>
			</tr>
        </table>


</form>

</body>
</html>

	- 设置路由urls

		- path('new/',views.newmovie),
    path('save/',views.save)

	- views

		- 代码

			- def newmovie(request):
    return render(request,"newmovie.html")

def save(request):
    # ptitle = request.POST.get('title')
    # pimg = request.POST.get('movie_img')
    # pdir = request.POST.get('director')
    # pact = request.POST.get('actors')
    # pcontent = request.POST.get('content')
    # pgrade = request.POST.get('grade')
    # prelease_date = request.POST.get('release_date')
    print('进入')
    movie=Movie(
        title=request.POST.get('title'),
        movie_img=request.POST.get('movie_img'),
        director=request.POST.get('director'),
        actors=request.POST.get('actors'),
        content=request.POST.get('content'),
        grade=request.POST.get('grade'),
        release_date=request.POST.get('release_date')
    )

    movie.save()
    return redirect('/movie/all')

### 前后端分离

- 后端

	- 返回json数据

		- from django.http import JsonResponse
from django.shortcuts import render, redirect
from moviesapp.models import Movie

# 前后端分离，传json
def get_json(request):
    movies=Movie.objects.all()
    data=list(movies.values())
    print(data)
    return JsonResponse({'data':data,'code':200,'msg':'获取数据'})

			- 

	- 修改数据库

		- setting

			- 
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': "djangobook",
        'USER':'root',
        'PASSWORD':'123456',
        'HOST':'localhost',
        'PORT':'3306',
        'OPTIONS': {'charset': 'utf8mb4'},
    }
}


		- _init_.py

			- import pymysql
pymysql.install_as_MySQLdb()

- 微信小程序

	- 小程序介绍
	- 开发者工具使用

		- 静态资源配置

	- 小程序开发

		- swiper

			- 子主题 1

		- wx:for

			- 

				- 

		- wx.request

			- 

				- 

					- 

						- 

							- 

		- css

			- 伪类选择器

				- :nth-child(number)

直接匹配第number个元素。参数number必须为大于0的整数。
				- 第二种：倍数写法
:nth-child(an)

匹配所有倍数为a的元素。其中参数an中的字母n不可缺省，它是倍数写法的标志，如3n、5n。
				- 子主题 3

			- 立体

				- box-shadow: 5rpx 5rpx 5rpx rgba(0,0,0,0.2);

			- 居中

				- text

					-  行高等于高
					- text-align:center;

			- 隐藏

				- overflow: hidden;

			- 超出文字显示省略号

				- height: 50rpx;
  width:320rpx;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis; 

			- 动画

				- /* pages/our/our.wxss */
.view {
    width: 200rpx;
    height: 200rpx;
    background-color: red;
    margin-left: 100rpx;
    margin-top: 100rpx;
    /** 第一种写法**/
    animation:viewline 3s linear infinite alternate ;
  }
  @keyframes viewline {

  
  
    /** 第二种写法**//*开始转的角度*/
    from {
     width: 50rpx;
    }/*结束的角度*/
  
    to {
   height: 50rpx;
    }
  }

					- <view class="view"></view>
					- .view {
  width: 200rpx;
  height: 200rpx;
  background-color: red;
  margin-left: 100rpx;
  margin-top: 100rpx;
  /** 第一种写法**/
  animation-name: viewlinear;
  animation-duration: 2s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  /** 第二种写法**/
  animation: viewlinear 2s linear infinite;
}

				- 翻转

					- }
@keyframes viewline {
  from{
  height: 100rpx;
  width: 100rpx;
  transform: scaleX(0);
  }
  to{
    /* height: 80rpx;
    width: 80rpx; */
    transform: scaleX(1);
  }

			- js改css样式

				-  getdetailtop:function(e){
    var bookid = e.currentTarget.id;
    var viewDataSet = e.currentTarget.dataset;
    var index = viewDataSet.idx;
   this.setData({
     bookindex:index,
     
   });

					- xml

						- .detailtap{
 
animation: topto 1s linear 1;
top:-160rpx;
}
@keyframes topto{
  from{
    top:0rpx;
  }
  to{
    top:-160rpx
  }
}


