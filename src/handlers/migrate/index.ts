import Router from '@koa/router'
import { fetchDataAndInsertByAnnual, fetchDataAndInsertByMonthlyAndQuarterly, importData } from './util'

const router = new Router();

router.get('/kosis/annual/:startPrdDe/:endPrdDe', async ctx => {
  const data = await fetchDataAndInsertByAnnual({
    prdSe: 'A',
    ...ctx.params
  })
  const result = await importData(data)
  ctx.body = result
})

router.get('/kosis/quarterly/:startPreDe/:endPreDe', async ctx => {
  const data = await fetchDataAndInsertByMonthlyAndQuarterly({
    prdSe: 'Q',
    ...ctx.params
  })
  const result = await importData(data)
  ctx.body = result  
})

router.get('/kosis/monthly/:startPrdDe/:endPrdDe', async ctx => {
  const data = await fetchDataAndInsertByMonthlyAndQuarterly({
    prdSe: 'M',
    ...ctx.params
  })
  const result = await importData(data)
  ctx.body = result
})

module.exports = router