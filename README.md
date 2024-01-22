<p >
  <h1 align="center"> - - - </h1>
</p>

### 配置指南
- APK内双击 `logo` 配置
- `config` 目录见开发基础配置项（`地址`、`切换时间`等）

### 注意事项
- 打单击包切换 `static` 分支

运行命令请参考 `package.json` 文件

#### [HBuilder X](https://www.dcloud.io/)

- 打包发行

  - 发行 - 原生 APP 云打包 - 传统打包（安心打包造成 `VideoPlayer` 异常）- 排队进入打包
  - 证书别名 `testalias`、证书私钥密码 `123456`
  - 证书文件见根目录 `test.keystore`
  - 云打包 总文件超过 `50M` 需要权限

- 运行终端
  - 运行到浏览器 H5
  - 运行到手机或模拟器 APP [夜神模拟器](https://www.yeshen.com/)(启动后 `HBuilder X` 检测稍有延迟)，[代码热更新问题](https://blog.csdn.net/AK852369/article/details/122982149)
  - 默认启动运行终端时：使用`index.vue` 文件 `onLoad` 中的 `autoTest()` 会导致 `编译静态文件异常`

#### [VsCode](https://code.visualstudio.com/)

- 需要启动 `HBuilder X`

---

## 🚀 [krd-uni-file](http://xx:18088/root/media/-/tree/master/krd-uni-file)

### 展示 `docx`、`xlsx` 测试环境

      'http://xx:18002/?link=' + 文件路径 + '&notice=' + 通知公告

---

### APK源码业务简述
- 基础
    - 设备信息的获取与存储（Mac地址等）
	  - dev | prod 不同环境的流程
    - 通知公告 | 文件列表 的数据获取
    - webSockt 文件及通知 信息接收与推送，心跳检测（重连操作）
    - 不同类型文件的展示，展示时间的计算
    - 选择配置地址及设备的重启、日志等功能
	
- APP特有
  - 文件信息的缓存、断网读取 

- H5特有
	- 用于后台管理系统`预览`功能
	- 请求H5地址，携带 `type=ui_server` 参数

---
| 文件类型 | 是否支持                              | 依托                                                               |
| -------- | ------------------------------------- | ------------------------------------------------------------------ |
| swiper   | <span style="color:green">true</span> | uni 组件                                                           |
| jpg/png  | <span style="color:green">true</span> | uni 组件                                                           |
| pdf      | <span style="color:green">true</span> | img 方式显示 |
| docx     | <span style="color:green">true</span> | krd-uni-file                                                       |
| mp4      | <span style="color:green">true</span> | uni 组件                                                           |
| mp3      | <span style="color:green">true</span> | 社区封装组件                                                       |
| xlsx     | <span style="color:green">true</span> | krd-uni-file                                                       |
| ppt      | <span style="color:red">false</span>  | -                                                                  |
| doc      | <span style="color:red">false</span>  | -                                                                  |
