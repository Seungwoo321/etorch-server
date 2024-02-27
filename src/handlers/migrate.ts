import Router from '@koa/router'
import { fetchDataAndInsertByAnnual, fetchDataAndInsertByMonthlyAndQuarterly, importDataToKosis } from '../utils/kosis'
import { fetchDataAndInsertByAnnualFromEcos, fetchDataAndInsertByDailyAndMonthlyAndQuarterlyFromEcos, importDataToEcos } from '../utils/ecos'
const router = new Router();

router.get('/kosis/annual/:startPrdDe/:endPrdDe', async ctx => {
  const data = await fetchDataAndInsertByAnnual({
    prdSe: 'A',
    ...ctx.params
  })
  const result = await importDataToKosis(data)
  ctx.body = result
})

router.get('/kosis/quarterly/:startPreDe/:endPreDe', async ctx => {
  const data = await fetchDataAndInsertByMonthlyAndQuarterly({
    prdSe: 'Q',
    ...ctx.params
  })
  const result = await importDataToKosis(data)
  ctx.body = result  
})

router.get('/kosis/monthly/:startPrdDe/:endPrdDe', async ctx => {
  const data = await fetchDataAndInsertByMonthlyAndQuarterly({
    prdSe: 'M',
    ...ctx.params
  })
  const result = await importDataToKosis(data)
  ctx.body = result
})

router.get('/ecos/annual/:searchStartDate/:searchEndDate', async ctx => {
  const data = await fetchDataAndInsertByAnnualFromEcos({
    period: 'A',
    ...ctx.params
  })
  const result = await importDataToEcos(data)
  ctx.body = result
})

router.get('/ecos/quarterly/:searchStartDate/:searchEndDate', async ctx => {
  const data = await fetchDataAndInsertByDailyAndMonthlyAndQuarterlyFromEcos({
    period: 'Q',
    ...ctx.params
  })
  const result = await importDataToEcos(data)
  ctx.body = result  
})

router.get('/ecos/monthly/:searchStartDate/:searchEndDate', async ctx => {
  const data = await fetchDataAndInsertByDailyAndMonthlyAndQuarterlyFromEcos({
    period: 'M',
    ...ctx.params
  })
  const result = await importDataToEcos(data)
  ctx.body = result
})

router.get('/ecos/daily/:searchStartDate/:searchEndDate', async ctx => {
  const data = await fetchDataAndInsertByDailyAndMonthlyAndQuarterlyFromEcos({
    period: 'D',
    ...ctx.params
  })
  const result = await importDataToEcos(data)
  ctx.body = result
})



module.exports = router