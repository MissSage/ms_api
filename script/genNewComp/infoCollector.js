const inquirer = require('inquirer')
const fs = require('fs-extra')
const { resolve } = require('path')

const listFilePath = '../../src/list.json'

const RegxMap = {
  IS_COMP_NAME: /^[A-Z]/,
  IS_DB_NAME: /^[a-z]/,
  IS_COMP_ZH_NAME: /^(?:[\u3400-\u4DB5\u4E00-\u9FEA\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0])+$/
}

// const kebabCase = string => string
//   .replace(/([a-z])([A-Z])/g, "$1-$2")
//   .replace(/[\s_]+/g, '-')
//   .toLowerCase();

module.exports = async () => {
  const meta = await inquirer
    .prompt([
      {
        type: 'input',
        message: '请输入数据库名（纯英文，小写）：',
        name: 'databaseName',
        validate(answer) {
          const done = this.async()
          const validateRes = RegxMap.IS_DB_NAME.test(answer)
          if (!validateRes) {
            done('请按要求输入正确的数据库名！')
            return
          }
          const listData = fs.readJSONSync(resolve(__dirname, listFilePath))
          if (listData.find(item => item.compName === answer)) {
            done('已存在同名数据库，请确认后更换名字再重试。')
            return
          }
          done(null, true)
        }
      },
      {
        type: 'input',
        message: '请输入你要新建的控制器名（纯英文，驼峰格式）：',
        name: 'apiName',
        validate(answer) {
          const done = this.async()
          const validateRes = RegxMap.IS_COMP_NAME.test(answer)
          if (!validateRes) {
            done('请按要求输入正确的控制器名！')
            return
          }
          const listData = fs.readJSONSync(resolve(__dirname, listFilePath))
          if (listData.find(item => item.compName === answer)) {
            done('已存在同名控制器，请确认后更换名字再重试。')
            return
          }
          done(null, true)
        }
      },
      {
        type: 'input',
        message: '请输入你要新建的控制器名（中文）：',
        name: 'apiZHName',
        validate(answer) {
          const done = this.async()
          const validateRes = RegxMap.IS_COMP_ZH_NAME.test(answer)
          if (!validateRes) {
            done('请按要求输入正确的控制器名！')
            return
          }
          done(null, true)
        }
      },
      {
        type: 'input',
        message: '请输入控制器的功能描述：',
        name: 'apiDesc',
        default: '默认：这是一个新控制器'
      }
    ])
  const { apiName } = meta
  // meta.apiClassName = kebabCase(apiName)
  meta.collectionName = apiName.toLowerCase()
  return meta
}