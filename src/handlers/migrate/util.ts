import { kosis } from 'eidl'
import kosisOptions from './options/kosis'

export async function fetchDataAndInsertByAnnual({
  startPrdDe,
  endPrdDe
}) {
  const indicators = kosisOptions.yearly
  const fn = indicators.map(option => kosis.getIndicatorData({
    ...option,
    apiKey: process.env.KOSIS_API_KEY,
    prdSe: 'A',
    startPrdDe,
    endPrdDe
  }))
  try {
    const values = await Promise.all(fn)
    // console.log(values)
    return values
  } catch (error) {
    console.log(error)
  }
}