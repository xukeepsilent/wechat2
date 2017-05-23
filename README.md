#### 微信小程序：
由于微信小程序目前处于内侧阶段,因此Demo是在无AppId情况下创建的.

### 开发环境：
---
微信web开发者工具 v0.9.092300
下载地址:http://wxopen.bcoder.cn/download.html
官方文档:http://wxopen.bcoder.cn/index.htm

### 创建项目：
---
开发者工具安装完成后，打开并使用微信扫码登录。选择创建「项目」，填入上文获取到的 AppID，设置一个本地项目的名称（非小程序名称），比如「我的第一个项目」，并选择一个本地的文件夹作为代码存储的目录，点击「新建项目」就可以了。

为方便初学者了解微信小程序的基本代码结构，在创建过程中，如果选择的本地文件夹是个空文件夹，开发者工具会提示，是否需要创建一个 quick start 项目。选择「是」，开发者工具会帮助我们在开发目录里生成一个简单的 demo。

![][jane-createApp-pic]
[jane-createApp-pic]: image/createApp.png

项目创建成功后，我们就可以点击该项目，进入并看到完整的开发者工具界面，点击左侧导航，在「编辑」里可以查看和编辑我们的代码，在「调试」里可以测试代码并模拟小程序在微信客户端效果.

![][jane-eyre-pic]
[jane-eyre-pic]: image/Snip20161031_1.png

### 初始化小程序：
---
- app.js - 小程序的脚本代码,声明全局变量
```
App({
  onLaunch: function() { 
        // Do something initial when launch.
    },
    onShow: function() {
        // Do something when show.
    },
    onHide: function() {
        // Do something when hide.
    },
    globalData: 'I am global data'
})
```

- app.json - 小程序的全局配置,配置小程序的窗口背景色，配置导航条样式，配置默认标题
```
"window":{
    "backgroundTextStyle":"light",
    "navigationBarTextStyle": "white",
    "navigationBarTitleText": "Small App",
    "navigationBarBackgroundColor": "#000000",
    "backgroundColor": "#fbf9fe",
    "enablePullDownRefresh": true
  }
```

- app.wxss - 小程序的公共样式表
```
/**app.wxss**/
@import "./style/layout.wxss"; `通过import引入其他样式表`
    .container {
    font-family: Helvetica Neue,Helvetica,Arial,sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-sizing: border-box;
    } 
```


### 目录结构：
---
- style — 存放独立wxss文件，可import引入
- image — 存放项目图片
- pages — 存放项目页面相关文件
- utils — 存放utils文件(通过module.exports对外暴露接口)，可require引入

### 创建页面：
---
微信小程序中的每一个页面的【路径+页面名】都需要写在 app.json 的 pages 中，且 pages 中的第一个页面是小程序的首页,每一个小程序页面是由同路径下同名的四个不同后缀文件的组成
- index.js 
```
Page({
    data: {
    motto: 'Hello World'
    }
})
```

- index.wxml - 页面结构文件
```
<text class="user-motto">{{motto}}</text>
```

- index.wxss
```
页面的样式表中的样式规则权重大于app.wxss
```

- index.json 
```
页面的配置文件.json会覆盖app.json 的 window 中相同的配置项
```

### 框架：
---
- 逻辑层
	- 注册程序
		- 通过全局函数getApp()可以获取全局的应用实例，如果需要全局的数据可以在App()中设置
	- 注册页面
	- 模块化
		- 我们可以将一些公共的代码抽离成为一个单独的js文件，作为一个模块。模块只有通过module.exports才能对外暴露接口。
	- API
	- 路由
		+ wx.navigateTo(OBJECT)：保留当前页面，跳转到应用内的某个页面，使用wx.navigateBack可以返回到原页面,一个应用同时只能打开5个页面
		+ wx.redirectTo(OBJECT)：关闭当前页面，跳转到应用内的某个页面
		+ wx.navigateBack()：关闭当前页面，回退前一页面
- 视图层
	- 条件渲染
	- 列表渲染
	- 模板
	- 事件
	- 引用






