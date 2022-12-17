const fs = require('fs');
const { resolve,join } = require('path');

/**
 * 删除文件夹功能
 * @param  {String} url  文件路径，绝对路径
 * @return {Null}
 * @author huangh 20170123
 */
function deleteDir(url) {
  let files = [];
  if (fs.existsSync(resolve(__dirname,url))) {
    //判断给定的路径是否存在

    files = fs.readdirSync(resolve(__dirname,url)); //返回文件和子目录的数组
    files.forEach(function (file, index) {
      var curPath = join(resolve(__dirname,url), file);

      if (fs.statSync(curPath).isDirectory()) {
        //同步读取文件夹文件，如果是文件夹，则函数回调
        deleteDir(curPath);
      } else {
        fs.unlinkSync(curPath); //是指定文件，则删除
      }
    });

    fs.rmdirSync(resolve(__dirname,url)); //清除文件夹
  } else {
    console.log('给定的路径不存在！');
  }
}
// 读取 src/list.json 并更新
const listJsonTplReplacer = () => {
    const listFilePath = '../../src/list.json'
    const listFileContent = []
    const newListFileContentFile = JSON.stringify(listFileContent, null, 2)
    fs.writeFile(resolve(__dirname, listFilePath), newListFileContentFile, err => {
      if (err) console.log(err)
    })
    return listFileContent
  }
deleteDir('../../src/controller/');
deleteDir('../../src/db/');
deleteDir('../../src/router/');
listJsonTplReplacer()