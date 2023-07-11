const path = require('path');
const fs = require('fs')

// .properties
/** 
 * javascript comment 
 * @Author: flydreame 
 * @Date: 2022-03-23 16:15:35 
 * @Desc: 获取  .properties 文件中 用于代理的url的值
 */
function getPropertiesUrl(apis, obj, prefixT) {
  for (let ns in apis) {
    let prefix = prefixT || ''
    prefix += `-${ns}`
    if (typeof apis[ns] === 'string') {
      prefix = prefix.replace(/^-/, '/')
      obj[`${prefix}`] = {
        target: apis[ns],
        changeOrigin: true,
        pathRewrite: {
          [`^${prefix}`]: "/"
        }
      }
      continue
    }
    if (typeof apis[ns] === 'object') {
      getUrl(apis[ns], obj, prefix)
    }
  }
}

/** 
 * javascript comment 
 * @Author: flydreame 
 * @Date: 2022-03-23 16:17:03 
 * @Desc: 根据环境变量获取  .properties 配置文件
 */
function getServerConfig (env) {

  const parser = require(path.join(__dirname, '../lib/propertiesParser'))
  const envFilePath = path.join(__dirname, `../resources/application-${env}.properties`)

  if (!fs.existsSync(envFilePath)) {
    return null
    // throw new Error(`${envFilePath} is not existed`)
  }
  return parser(envFilePath)
}

exports.getPropertiesUrl = getPropertiesUrl
exports.getServerConfig = getServerConfig

// .yaml

function getServerYAMLConfig(env) {
  const parser = require(path.join(__dirname, '../lib/yamlParser'))
  const envFilePath = path.join(__dirname, `../../yamls/${env}.yaml`)

  if (!fs.existsSync(envFilePath)) {
    return null
    // throw new Error(`${envFilePath} is not existed`)
  }
  return parser(envFilePath)
}

exports.getServerYAMLConfig = getServerYAMLConfig