---
sidebar: 'auto'
---
# GIT

## 一、总结

~~~
git init  # 初始化git仓库
将要上传的文件放入初始化的git仓库
git status  # 查看当前文件夹状态
git add .  # 将项目全部添加到仓库上
git commit -m "写下你这次提交文件的提交说明"  # 将项目提交到仓库中
git remote add origin Github上项目的ssh链接  # 将Git与GitHub建立连接
git push origin master # 进行上传
~~~

## 二、上传文件到GitHub仓库

1、把这个文件夹变成**Git可管理的仓库**

~~~
git init
~~~

2、查看当前文件夹的状态

~~~
git status  //通过 git status 来查看当前文件夹的状态

git diff <file>   //查看具体的修改内容

git restore <file>  //放弃修改
~~~

3、将项目全部添加到仓库上（增加命令）

~~~
git add .
~~~

4、将项目提交到仓库中（提交命令）

~~~
git commit -m "写下你这次提交文件的提交说明"
//-m 后面跟提示信息，这个提示信息一定要写的，方便记录我们提交的说明。
~~~

5、将Git与GitHub建立连接

~~~
git remote add origin Github上项目的ssh链接  # 将Git与GitHub建立连接
~~~

6、将文件上传到GitHub仓库中

~~~
git push origin master 
~~~

## 三、从GitHub仓库克隆文件

~~~
git clone 需要下载的ssh链接  # 下载GitHub上的源码
~~~

## 四、分支管理

1、查看分支情况

~~~
git branch    //查看本地分支情况
git branch --remote    //查看远程仓库分支情况
~~~

2、创建分支

~~~
git checkout -b <new-branch>  //新建一个分支并且切换过去

//其他
git branch <new-branch> <base-branch>  //基于某个分支上开出新分支
git branch <new-branch> commit_hash  //基于某个提交开出新分支
git branch <new-branch> v1.1  //基于某个tag开出有新分支
~~~

3、切换分支

~~~
git checkout <branch>
~~~

4、删除分支

~~~
删除本地分支：git branch -d <branch-name>。
删除远程分支：git push -d origin <branch-name>
~~~

