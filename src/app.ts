import Koa from 'koa'
import cors from '@koa/cors'
import bodyParser  from 'koa-bodyparser'
import Router from '@koa/router';
const app = new Koa();
const router = new Router();

// logger
app.use(async (ctx, next) => {
  await next();
  const responseTime = ctx.response.get('X-Response-Time');
  console.log(`${ctx.method} ${ctx.url} - ${responseTime}`);
});

// x-response-time
app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.set('X-Response-Time', `${ms}ms`);
});

app.use(bodyParser());
app.use(cors());

// const homeHandler = require('./functions/homeHandler')
// const indicatorsHandler = require('./functions/indicatorsHandler');
// const monthsHandler = require('./functions/monthsHandler');

// router.get('/', homeHandler.getHome);
// router.get('/v1/ts-learn/months', monthsHandler.getMonthsHandler);
// router.get('/v1/ts-learn/months/:month/indexes/:indexName/compositions', monthsHandler.getIndexCompositionsHandler);
// router.get('/v1/ts-learn/indicators/:code/latest', indicatorsHandler.getLatestIndicatorsHandler);

app.use(router.routes());
app.use(router.allowedMethods());

// 404
app.use(async (ctx, next) => {
  ctx.status = 404
  ctx.message = 'Page Not Found'
});

export = app