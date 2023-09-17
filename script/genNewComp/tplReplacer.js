const fs = require('fs-extra')
const handlebars = require('handlebars')
const { resolve } = require('path')

const getTplFilePath = (meta) => ({
  // document 目录
  document: {
    from: './.template/db/document/document.ts.tpl',
    to: `../../src/db/document/${meta.apiName}.ts`
  },
  // 根目录
  controller: {
    from: './.template/controller/controller.ts.tpl',
    to: `../../src/controller/${meta.apiName}.ts`
  },
  router: {
    from: './.template/router/router.ts.tpl',
    to: `../../src/router/${meta.apiName}.ts`
  },
  docs: {
    from: './.template/apiDocs/api/api.md.tpl',
    to: `../../docs/api/${meta.apiName}.md`
  }
})

const compFilesTplReplacer = (meta) => {
  const filePaths = getTplFilePath(meta)
  Object.keys(filePaths).forEach(key => {
    const fileTpl = fs.readFileSync(resolve(__dirname, filePaths[key].from), 'utf-8')
    const fileContent = handlebars.compile(fileTpl)(meta)
    fs.outputFile(resolve(__dirname, filePaths[key].to), fileContent, err => {
      if (err) console.log(err)
    })
  })
}

// 读取 src/list.json 并更新
const listJsonTplReplacer = (meta) => {
  const listFilePath = '../../src/list.json'
  const listFileTpl = fs.readFileSync(resolve(__dirname, listFilePath), 'utf-8')
  const listFileContent = JSON.parse(listFileTpl)
  listFileContent.push(meta)
  const newListFileContentFile = JSON.stringify(listFileContent, null, 2)
  fs.writeFile(resolve(__dirname, listFilePath), newListFileContentFile, err => {
    if (err) console.log(err)
  })
  return listFileContent
}

// 更新 router/index.ts
const routerTplReplacer = (listFileContent) => {
  const routerFileFrom = './.template/router/index.ts.tpl'
  const routerFileTo = '../../src/router/index.ts'
  const routerFileTpl = fs.readFileSync(resolve(__dirname, routerFileFrom), 'utf-8')
  let routerImports = ''
  let routerUses = ''
  listFileContent.map(comp => {
    routerImports+=`import ${comp.apiName} from './${comp.apiName}';\n`
    routerUses += `router.use(${comp.apiName});`
  })
  const routerMeta = {
    routerImports,
    routerUses
  }
  const routerFileContent = handlebars.compile(routerFileTpl, { noEscape: true })(routerMeta)
  fs.outputFile(resolve(__dirname, routerFileTo), routerFileContent, err => {
    if (err) console.log(err)
  })
}
// 更新 controller/index.ts
const controllerTplReplacer = (listFileContent) => {
  const controllerFileFrom = './.template/controller/index.ts.tpl'
  const controllerFileTo = '../../src/controller/index.ts'
  const controllerFileTpl = fs.readFileSync(resolve(__dirname, controllerFileFrom), 'utf-8')
  let controllerImports = ''
  listFileContent.map(comp => {
    controllerImports+=`export * as ${comp.apiName} from './${comp.apiName}';\n`
  })
  const controllerMeta = {
    controllerImports
  }
  const controllerFileContent = handlebars.compile(controllerFileTpl, { noEscape: true })(controllerMeta)
  fs.outputFile(resolve(__dirname, controllerFileTo), controllerFileContent, err => {
    if (err) console.log(err)
  })
}
// 更新 db/index.ts
const dbTplReplacer = (listFileContent) => {
  const dbFileFrom = './.template/db/index.ts.tpl'
  const dbFileTo = '../../src/db/index.ts'
  const dbFileTpl = fs.readFileSync(resolve(__dirname, dbFileFrom), 'utf-8')
  let dbImports = ''
  listFileContent.map(comp => {
    dbImports+=`export { ${comp.apiName} } from './document/${comp.apiName}';\n`
  })
  const dbMeta = {
    dbImports
  }
  const dbFileContent = handlebars.compile(dbFileTpl, { noEscape: true })(dbMeta)
  fs.outputFile(resolve(__dirname, dbFileTo), dbFileContent, err => {
    if (err) console.log(err)
  })
}
// 更新 docs/.vitepress/sidebar/index.ts
const sidebarTplReplacer = (listFileContent) => {
  const docFileFrom = './.template/apiDocs/config/sidebar/index.ts.tpl'
  const docFileTo = '../../docs/.vitepress/sidebar/index.ts'
  const docFileTpl = fs.readFileSync(resolve(__dirname, docFileFrom), 'utf-8')
  let docRoutes = ''
  listFileContent.map(comp => {
    docRoutes+=`{ text: '${comp.apiName}', link: '/api/${comp.apiName}' },\n`
  })
  const docMeta = {
    docRoutes
  }
  const docFileContent = handlebars.compile(docFileTpl, { noEscape: true })(docMeta)
  fs.outputFile(resolve(__dirname, docFileTo), docFileContent, err => {
    if (err) console.log(err)
  })
}

// 更新 install.ts
// const installTsTplReplacer = (listFileContent) => {
//   const installFileFrom = './.template/install.ts.tpl'
//   const installFileTo = '../../packages/index.ts' // 这里没有写错，别慌
//   const installFileTpl = fs.readFileSync(resolve(__dirname, installFileFrom), 'utf-8')
//   const installMeta = {
//     importPlugins: listFileContent.map(({ apiName }) => `import { ${apiName}Plugin } from './${apiName}';`).join('\n'),
//     installPlugins: listFileContent.map(({ apiName }) => `${apiName}Plugin.install?.(app);`).join('\n    '),
//     exportPlugins: listFileContent.map(({ apiName }) => `export * from './${apiName}'`).join('\n'),
//   }
//   const installFileContent = handlebars.compile(installFileTpl, { noEscape: true })(installMeta)
//   fs.outputFile(resolve(__dirname, installFileTo), installFileContent, err => {
//     if (err) console.log(err)
//   })
// }

module.exports = (meta) => {
  compFilesTplReplacer(meta)
  const listFileContent = listJsonTplReplacer(meta)
  routerTplReplacer(listFileContent)
  dbTplReplacer(listFileContent)
  controllerTplReplacer(listFileContent)
  sidebarTplReplacer(listFileContent)

  console.log(`接口新建完毕，接口相关文件名以${meta.apiName}开头，如果生成的接口不能满足生产需要，请前往 src/controller/${meta.apiName}.ts 进行接口调整`);
}
