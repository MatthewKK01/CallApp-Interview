const Koa = require('koa');
const app = new Koa();
const Cors = require('@koa/cors');
const KoaRouter = require('koa-router');
let fs = require('fs');

const router = new KoaRouter();
app.use(Cors());


fs.readFile('./data.json' , 'utf-8' , (error,data)=>{ 
  router.get('/', ctx => (ctx.body = JSON.parse(data)))
})

router.get('/test',(ctx) => (ctx.body = 'Hello'));

app.use(router.routes()).use(router.allowedMethods());


app.listen(3001);