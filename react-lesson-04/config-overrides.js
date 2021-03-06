// 1.下载yarn add react-app-rewired -D
// 2.更改package.json里的scripts，把react-scripts换成react-app-rewired
// 3.在根目录下创建config-overrides.js
// module.exports = (config)=>{
//     // 在这里写配置
//     return config
// }

// 1.如果想要配置方便，引入customize-cra(需要先安装 react-app-rewired)：yarn add customize-cra -D
// 2.修改config-overrides.js里的内容；使用装饰器必须先安装yarn add @babel/plugin-proposal-decorators -D
const { override,addDecoratorsLegacy,fixBabelImports,addLessLoader }  = require('customize-cra')
const theme = require('./theme')
module.exports = override(
    fixBabelImports('import',{
        libraryName:'antd',
        libraryDirectory:'es',
        style:true
    }),
    // 对less-loader有版本要求：yarn add less-loader@5.0.0 --dev
    addLessLoader({
        javascriptEnabled:true,
        modifyVars:theme
    }),
    addDecoratorsLegacy()
)