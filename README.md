# ms_api

api for ms

## 用法

- 清除所有业务

会清除包括controller、db、router在内的所有文件
```cmd
yarn clear
```

- 自动生成控制器

会自动生成controller、db、router 中的相关文件

```cmd
yarn gen
```

执行上述命令后会提示输入需要连接的数据库名和控制器对应的表名和中文名称以及描述信息

- 启动

通过上面的自动自动生成控制器后，可以直接执行`yarn dev`以启动接口服务，后面可以通过postman等接口调试工具来进行接口调试
具体的业务编写在controller中编写就行了

**注意**

!list.json中的内容不要手动删除，自动生成工具是根据此文件来进行配置的!