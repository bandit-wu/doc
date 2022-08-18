---
sidebar: 'auto'
---
# 命令行常用指令

## 一、文件夹命令

**进入文件夹**

```
cd D:\typora\file
```

**返回上一级**

```
cd..
```

跳转到根目录

```
cd \
```

跳转指定路径(假设现在在D:\typora跳转到D:\网页下载)

```
cd D:\网页下载
```

打开文件夹或文件

~~~
start 文件名字
~~~

**新建文件夹**

```
md d:\typora\flie
mkdir newtest 进入根目录后使用
```

新建空文件

```
cd.>flie.txt
cd.>flie.docx
cd.>flie.ppt

type nul> newtest.txt 
type nul>.txt
123456
```

新建非空文件

```
echo 文件中的内容>new.txt
```

**删除文件**(如果是`del 文件夹A`是删除文件夹A内的所有带后缀的文件，若文件夹A中有文件夹B，文件夹B不会被修改)

```
del flie.txt
```

删除指定后缀的文件

```
del *.txt
del *.docx
```

删除名为flie的空文件夹

```
rd flie
```

删除名为flie的文件夹

```
rd /s D:\flie
```

删除flie文件夹下的所有文件

```
rd flie /s
```

生成目录树,在文件少一些的路径尝试。要不会运行好久，ctrl+c可以停掉

```
tree
```

**遍历当前路径下所有文件**

```
dir
```

显示当前目录及子文件

```
dir /s
```

显示文件以及文件大小、个数

```
dir /d
```

显示文件

```
dir /b
```

对dir的组合使用：

查找文件。只需要输入路径即可，无需cd返回到某个路径再执行命令(eg：D:\JAVA\eclipse\flie和D:\eclipse效果相同)

```
dir/s/b d:\flie
```

查找文件以及文件大小、个数

```
dir/s/d d:\flie
```

查看隐藏文件夹

```
dir /?
```

**复制文件**

```
copy 路径\文件名 路径\文件名
```

**移动文件**

```
move 路径\文件名 路径\文件名
```

## 二、网络相关

查看ip地址

```
ipconfig
```

查询ip地址

```
ping www.csdn.net
```

netstat 查看网络连接状态

```
netstat -help 获取命令行使用帮助信息

netstat -ano  //查看网络连接、状态以及对应的进程id
```

## 三、其他常用命令

关机

```
shutdown -s
```

关闭本地计算机，没有超时或警告

```
shutdown -p
```

强制关闭正在运行的应用程序而不提前警告用户,可搭配`-p`

```
shutdown -f
```

定时关机，定时60s,时间自定

```powershell
shutdown -s -t 60
```

关机并重启

```
　shutdown -r
```

一段时间后重启

```
　shutdown -r -t 秒数
```

注销当前用户

```
shutdown -l　
```

休眠，可以搭配-f,`shut down -h -f`。不可以搭配`-t`

```
shutdown -h 
```

解除命令

```powershell
shutdown -a
```

**清除屏幕**

```
cls
```

使用help命令查看帮助

```
命令 -help    //第1种形式的使用帮助
命令  /?       //第2种形式的使用帮助
```

终止命令

```
ctrl+c
```

退出cmd

```
exit
```

其他比较实用的，但使用频率不高的命令

~~~
notepad+路径	打开记事本
dxdiag	检查DirectX信息
winver	检查Windows版本
wmimgmt.msc		打开windows管理体系结构（WMI）
wupdmgr			windows	更新程序
wscript			windows脚本设置
write		写字板
winmsd		系统信息
wiaacmgr	扫描仪和相机
calc		计算器
mplayer2	打开windows media player
mspaint		画图板
mstsc		远程桌面连接
mmc			打开控制台
dxdiag		检查Directx信息
drwtsn32	系统医生
devmgmt.msc	设备管理器
notepad		记事本
ntbackup	系统备份和还原
sndrec32	录音机
Sndovl32	音量控制程序
tsshutdn	60秒倒计时关机
taskmgr		任务管理器
explorer	资源管理器
progman		程序管理器
regedit.exe	注册表
perfmon.msc	计算机性能监测
eventvwr	事件查看器
net user  	查看用户
whoami		查看当前用户
net user %username% 123456 		将电脑用户密码修改为123456
~~~

## 四、cmd快捷键

快速查看历史记录↑ ↓
查看完整记录F7

切换当前路径下文件Tab
反向选择文件和文件夹Shift+Tab

拖拽文件到窗口可以直接显示路径

ESC 清除当前命令行
F1 单字符输出上次输入的命令，如果已经是最后的一条的命令，则不进行任何切换操作。 （例：输入“dir”，按F1一次后自动输入d，按两次自动输入i,三次自动输入r）
F2 可复制字符数量 , 输入上次命令中含有的字符,系统自动删除此字符后的内容. （例：输入 cd test ，按下F2 输入 e 后,系统自动输入 cd t 命令）
F3 重新输入前一次输入的命令 或者按向上键
F4 可删除字符数量,同于F2的功能 （例： 输入 cd test 将光标移动到d下面，按下F4 输入e后,系统自动删除t以后(包括d) e(不包括e)以前的字符 命令变为 cest）
F5 自动切换到已经执行过的命令字符。可按下多次选择命令
F6 相当按键盘上的Ctrl＋z 键
F7 显示命令历史记录，按下后可用方向键上下选择之前输入过的命令
F8 搜索命令的历史记录，循环显示所有曾经输入的命令，直到按下回车键为止
F9 与F7配合使用。F7中选择的命令是有编号的，按下F9再输入命令的编号，就能快速执行命令
Ctrl+Break 查看统计信息并按回车继续操作
Ctrl+C 强行中止命令执行
Ctrl+H 删除光标左边的一个字符
Ctrl+M 表示回车确认键
Alt+F7 清除所有曾经输入的命令历史记录
Alt+PrintScreen 截取当前命令窗内容
Tab 自动输入当前文件夹的子文件夹名。可按下多次选择文件夹，与cmd命令配合使用可快速进入子文件夹

