import Router from '@koa/router'
import { fetchDataAndInsertByAnnual } from './util'

const router = new Router();

router.get('/kosis/annual/:startPrdDe/:endPrdDe', async ctx => {
  const data = await fetchDataAndInsertByAnnual(ctx.params)
  ctx.body = data
})

module.exports = router