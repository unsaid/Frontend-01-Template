## 状态机
- 每个状态都是一个机器
    - 在每个机器里，可以计算、存储、输出
    - 所有的机器接收的输入是一致的
    - 机器本身没有状态 —— 纯函数
- 每个机器知道一个状态
    - 每个机器都有确定的下一个状态（Moore）
    - 每个机器根据输入决定下一个状态（Mealy）

### 有限状态机（Mealy）

- 每个状态设计为一个函数
- 函数参数就是输入
- 返回值为下一个状态

# HTML解析
## 第一步-拆分文件
1. 为了方便文件管理，先把parser单独拆到文件中
2. parser接受HTML文本作为参数，返回一颗DOM树
## 第二步-创建状态机
- HTML 状态：whatwg 12.2.5 Tokenization
- EOF：End of file
## 第三步-解析标签
- 主要的标签：开始标签、结束标签、自封闭标签（暂时忽略属性）
##  第四步-创建元素
- 在状态机中，除了状态迁移，还需要加入业务逻辑
- 在标签结束状态提交标签token
## 第五步-处理属性
- 属性值分为单引号、双引号、无引号三种写法，因此需要较多状态进行处理
- 处理属性的方式跟标签类似
- 属性结束时，把属性加到标签Token上
## 第六步-构造树
- 从标签构建DOM树的基本技巧是使用栈
- 遇到开始时创建元素并入栈，遇到结束标签时出栈
- 自封闭标签可视为入栈后立刻出栈
- 任何元素的父元素是它入栈前的栈顶

#CSS解析
## 第一步 收集CSS规则
1. 遇到style标签时保存css规则
2.调用现成库css parser分析css规则
## 第二步 添加调用