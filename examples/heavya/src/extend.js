const { createProxyMiddleware } = require('http-proxy-middleware')
const path = require('path')
const express = require('express')
const querystring = require('querystring')

const _argJson = require('minimist')(process.argv.slice(2))
const env = process.env.NODE_ENV

const corsMiddleware = (req, res, next) => {
  res.header("X-Powered-By", 'OMpress')
  res.header('Access-Control-Allow-Origin', `*`);
  res.header('Access-Control-Allow-Headers', '*');
  // res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,PUT,OPTIONS');
  res.header('Access-Control-Allow-Methods', '*');
  next()
}


module.exports = function extend(app, server) {
  // expressWs(app)
  // 中间件
  app.use(corsMiddleware)

  // prefetch
  app.options('*', function (req, res, next) {
    res.status(200).end();
  })



  const globalVariables = {
    apiEnv: env,
    PUBLIC_URL: '//127.0.0.1:7201/'
  }
  // console.log(globalVariables)


  app.get('/config.js', (req, res) => {
    let content = ''
    // content += `${Object.entries(globalVariables).filter(x => !!x[0]).map(x => `window.${x[0]}=${JSON.stringify(x[1])}`).join(';')}`
    const gv = { ...globalVariables }
    for (let k in gv) {
      if (gv[k] && typeof gv[k] === 'string' && k === gv[k].replace(/(?:_)+([^_])/g, ($0, $1) => {
        return $1.toUpperCase()
      })) {
        gv[k] = res.__(gv[k])
      }
    }
    content += `;window.__site__config=${JSON.stringify(gv)}`
    res.set('Content-Type', 'text/javascript')
    res.header('Content-Language', res.getLocale())
    res.send(content)
  })

  const timeStamp = Date.now()
  app.get('/', (req, res) => {
    sendIndex(res)
  })

  // 模拟其它环境的服务端运行时 需要先 yarn build 构建前端项目
  const pblc = path.join(__dirname, './public')
  app.use(express.static(pblc)); // 静态文件路径

  // 静态也没有就到404, catch 404 and forward to error handler
  app.use(function (req, res, next) {
    sendIndex(res)
  });

  function sendIndex(res) {
    res.render('index', { ...globalVariables, PUBLIC_URL: typeof globalVariables.PUBLIC_URL === 'undefined' ? '.' : globalVariables.PUBLIC_URL, faviconUrl: globalVariables.faviconUrl || 'favicon.ico' }, (error, html) => {
      const script = `<script src="${typeof globalVariables.PUBLIC_URL === 'undefined' ? '.' : globalVariables.PUBLIC_URL}/config.js?_=${timeStamp}" type="text/javascript"></script>`
      // const $ = require('cheerio').load(html)
      // $('head').append(script)
      // res.send($.root().html())
      res.send(html && html.replace(/(<\/head>)/i, `${script}$1`))
    })
  }
}
