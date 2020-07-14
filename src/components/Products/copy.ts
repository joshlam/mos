import { CURRENCY } from '../../constants/copy'

export const FEATURE_HEADER = 'What’s included:'
export const CONFIRM_CTA = 'Let’s do this!'
export const MONEY_BACK_GUARANTEE = '· 1 year money back guaranteed ·'

const FREE_COST = 'Free'

export const priceDisplay = (price: number) => {
  return price ? `${CURRENCY}${price}` : FREE_COST
}
