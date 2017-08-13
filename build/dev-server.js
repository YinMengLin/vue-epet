require('./check-versions')()



var config = require('../config')
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
}

var opn = require('opn')
var path = require('path')
var express = require('express')
var webpack = require('webpack')
var proxyMiddleware = require('http-proxy-middleware')
var webpackConfig = require('./webpack.dev.conf')

// default port where dev server listens for incoming traffic
var port = process.env.PORT || config.dev.port
// automatically open browser, if not set will be false
var autoOpenBrowser = !!config.dev.autoOpenBrowser
// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware
var proxyTable = config.dev.proxyTable

var app = express()

// mock sendcode start
var md5 = require('blueimp-md5')
var moment = require('moment')
var Base64 = require('js-base64').Base64;
var request = require('request');

var apiRouter = express.Router()
apiRouter.get('/getcode', function (req, res) {
  function randomCode(length) {
    var chars = ['0','1','2','3','4','5','6','7','8','9'];
    var result = ""; //统一改名: alt + shift + R
    for(var i = 0; i < length ; i ++) {
      var index = Math.ceil(Math.random()*9);
      result += chars[index];
    }
    console.log('验证码: ', result)
    res.send(result)
    return result;
  }
  /*
   向指定号码发送指定验证码
   */
  function sendCode(phone, code, callback) {
    var ACCOUNT_SID = '8aaf07085d7cf73f015d9cdc0b9e0ab0';
    var AUTH_TOKEN = '801dae8ea5164280a35fd8bdeb397ef2';
    var Rest_URL = 'https://app.cloopen.com:8883';
    var AppID = '8aaf07085d7cf73f015d9cdc0be20ab4';
    //1. 准备请求url
    /*
     1.使用MD5加密（账户Id + 账户授权令牌 + 时间戳）。其中账户Id和账户授权令牌根据url的验证级别对应主账户。
     时间戳是当前系统时间，格式"yyyyMMddHHmmss"。时间戳有效时间为24小时，如：20140416142030
     2.SigParameter参数需要大写，如不能写成sig=abcdefg而应该写成sig=ABCDEFG
     */
    var sigParameter = '';
    var time = moment().format('YYYYMMDDHHmmss');
    sigParameter = md5(ACCOUNT_SID+AUTH_TOKEN+time);
    var url = Rest_URL+'/2013-12-26/Accounts/'+ACCOUNT_SID+'/SMS/TemplateSMS?sig='+sigParameter;

    //2. 准备请求体
    var body = {
      to : phone,
      appId : AppID,
      templateId : '1',
      "datas":[code,"1"]
    }
    //body = JSON.stringify(body);

    //3. 准备请求头
    /*
     1.使用Base64编码（账户Id + 冒号 + 时间戳）其中账户Id根据url的验证级别对应主账户
     2.冒号为英文冒号
     3.时间戳是当前系统时间，格式"yyyyMMddHHmmss"，需与SigParameter中时间戳相同。
     */
    var authorization = ACCOUNT_SID + ':' + time;
    authorization = Base64.encode(authorization);
    var headers = {
      'Accept' :'application/json',
      'Content-Type' :'application/json;charset=utf-8',
      'Content-Length': JSON.stringify(body).length+'',
      'Authorization' : authorization
    }

    //4. 发送请求, 并得到返回的结果, 调用callback

    request({
      method : 'POST',
      url : url,
      headers : headers,
      body : body,
      json : true
    }, function (error, response, body) {
      console.log(error, response, body);
      callback(body.statusCode==='000000');
      //callback(true);
    });
  }
  sendCode('13520814389', randomCode(6), function (success) {
    console.log(success);
  })
})
app.use('/api2', apiRouter)
// mock sendcode send

var compiler = webpack(webpackConfig)

var devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  quiet: true
})

var hotMiddleware = require('webpack-hot-middleware')(compiler, {
  log: false,
  heartbeat: 2000
})
// force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    hotMiddleware.publish({ action: 'reload' })
    cb()
  })
})

// proxy api requests
Object.keys(proxyTable).forEach(function (context) {
  var options = proxyTable[context]
  if (typeof options === 'string') {
    options = { target: options }
  }
  app.use(proxyMiddleware(options.filter || context, options))
})

// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')())

// serve webpack bundle output
app.use(devMiddleware)

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware)

// serve pure static assets
var staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)
app.use(staticPath, express.static('./static'))

var uri = 'http://localhost:' + port

var _resolve
var readyPromise = new Promise(resolve => {
  _resolve = resolve
})

console.log('> Starting dev server...')
devMiddleware.waitUntilValid(() => {
  console.log('> Listening at ' + uri + '\n')
  // when env is testing, don't need open it
  if (autoOpenBrowser && process.env.NODE_ENV !== 'testing') {
    opn(uri)
  }
  _resolve()
})

var server = app.listen(port)

module.exports = {
  ready: readyPromise,
  close: () => {
    server.close()
  }
}
