# ms_api

api for ms

<a href="http://www.piaoerbe.com/ms_api" target="__blank">文档</a>

## 启动项目

```cmd
pnpm dev
```

## 生产打包

```cmd
pnpm build
```

## 快速操作

### 快速生成接口

自动生成crud接口

```cmd
pnpm gen
```

执行上述命令后会提示输入需要连接的数据库名和控制器对应的表名和中文名称以及描述信息

```cmd
PS D:\ms_api> pnpm gen

> ms_api@1.0.0 gen D:\ms_api
> node ./script/genNewComp/index.js

? 请输入数据库名（纯英文，小写）： ms
? 请输入你要新建的控制器名（纯英文，驼峰格式）： Role
? 请输入你要新建的控制器名（中文）： 角色
? 请输入控制器的功能描述： 用户角色
接口新建完毕，接口相关文件名以Role开头，如果生成的接口不能满足生产需要，请前往 src/controller/Role.ts 进行接口调整
```

- 快速清除所有业务(慎用，会将项目恢复到初始状态)

会清除包括controller、db、router在内的所有文件

```cmd
pnpm clear
```

- 启动

通过上面的自动自动生成控制器后，可以直接执行`yarn dev`以启动接口服务，后面可以通过postman等接口调试工具来进行接口调试
具体的业务编写在controller中编写就行了

## **注意**

需要调整接口请在controller目录下进行修改，如有增删接口，并同步修改router
