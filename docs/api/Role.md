# 角色

- 角色

## 查询角色详情

- 请求路径：`api/Role/:id`
- 请求方法： `get`
- rest参数

  | 参数 |   说明    |  类型  | 可选值 | 默认值 | 是否必填 |
  | :--: | :-------: | :----: | :----: | :----: | :------: |
  | `id` | _id | string |   -    |   -    |    是    |

- 请求响应

  ```json
  {
    "message": "操作成功",
    "data": {}
  }
  ```

## 查询角色列表

- 请求路径：`api/Role`
- 请求方法： `get`
- query参数

  |    参数     |   说明   |  类型  |    可选值     | 默认值 | 是否必填 |
  | :---------: | :------: | :----: | :-----------: | :----: | :------: |
  |   `page`    |   页码   | number |       -       |   -    |    否    |
  |   `size`    | 每页条数 | number |       -       |   -    |    否    |
  | `sortType`  |   排序   | string | `asc`、`desc` | `desc` |    否    |
  | `sortField` | 排序字段 | string |       -       |   -    |    否    |
  | `startTime` | 创建开始时间 | number |       -       |   -    |    否    |
  |  `endTime`  | 创建结束时间 | number |       -       |   -    |    否    |

- 请求响应

  ```json
  {
    "message": "操作成功",
    "data": {
      "data": [],
      "total": 0
    }
  }
  ```

## 修改角色

- 请求路径：`api/Role/:id`
- 请求方法： `put`

- rest参数

  |    参数     |   说明   |  类型  |    可选值     | 默认值 | 是否必填 |
  | :---------: | :------: | :----: | :-----------: | :----: | :------: |
  |   `id`    |   ID   | string |       -       |   -    |    是    |

- body 参数

  |    参数     |   说明   |  类型  |    可选值     | 默认值 | 是否必填 |
  | :---------: | :------: | :----: | :-----------: | :----: | :------: |
  |   `{[xxx]:any}`    |   包含所有需要修改的属性的实例对象   | object |       -       |   -    |    是    |

- 请求响应

  ```json
  {
    "message": "操作成功",
    "data": {}
  }
  ```

## 批量删除角色

- 请求路径：`api/Role`
- 请求方法： `delete`

- body参数

  |    参数     |   说明   |  类型  |    可选值     | 默认值 | 是否必填 |
  | :---------: | :------: | :----: | :-----------: | :----: | :------: |
  |   `ids`    |  _id数组   | string[] |       -       |   -    |    是    |

- 请求响应

  ```json
  {
    "message": "操作成功"
  }
  ```

## 新增角色

- 请求路径：`api/Role`
- 请求方法： `post`

- body参数

  |    参数     |   说明   |  类型  |    可选值     | 默认值 | 是否必填 |
  | :---------: | :------: | :----: | :-----------: | :----: | :------: |
  |   `{[xxx]:any}`    |   新增的对象   | object |       -       |   -    |    是    |

- 请求响应

  ```json
  {
    "message": "操作成功",
    "data": {}
  }
  ```

## 批量修改角色

- 请求路径：`api/Role`
- 请求方法： `patch`

- body参数

  |    参数     |   说明   |  类型  |    可选值     | 默认值 | 是否必填 |
  | :---------: | :------: | :----: | :-----------: | :----: | :------: |
  |   `ids`    |   修改的_id数组   | object |       -       |   -    |    是    |
  |   `{[xxx]:any}`    |   包含要修改的属性的对象   | object |       -       |   -    |    是    |

- 请求响应

  ```json
  {
    "message": "操作成功",
    "data": {}
  }
  ```

## 批量添加角色

- 请求路径：`api/Role/addmany`
- 请求方法： `post`

- body参数

  |    参数     |   说明   |  类型  |    可选值     | 默认值 | 是否必填 |
  | :---------: | :------: | :----: | :-----------: | :----: | :------: |
  |   `{[xxx]: any}[]`    |   添加的对象数组   | object[] |       -       |   -    |    是    |

- 请求响应

  ```json
  {
    "message": "操作成功",
    "data": {}
  }
  ```
