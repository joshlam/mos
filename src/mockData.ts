interface IUser {
  id: string
  name: string
}

export interface IProduct {
  id: string
  name: string
  description: string
  features: string[]
  price: number
  nonSalePrice?: number
  recommendation?: string
}

export const FEATURED_PRODUCT = 'MOSAPPADVISOR'

export const USER: IUser = {
  id: '1',
  name: 'Sophia',
}

export const PRODUCTS: IProduct[] = [
  {
    id: 'FREE',
    name: 'Free FAFSA',
    description: 'Best if you only want to submit your FAFSA',
    features: ['FAFSA form made easy'],
    price: 0,
  },
  {
    id: 'MOSAPP',
    name: 'Mos Application',
    description:
      // Used smart quote for "don't" although design calls for undirected quote.
      // I went with the majority (8 instances of smart quotes vs 2 undirected) to present a consistent style.
      'Best if you want to apply to all 500+ aid programs at once, but you don’t need extra help from an expert',
    features: [
      'The Mos application (includes FAFSA submission if you need it!)',
      'Instructions and reminders for any extra steps to get your funds',
    ],
    price: 149,
  },
  {
    id: 'MOSAPPADVISOR',
    recommendation: 'Chosen by 53% of students',
    name: 'Mos Application & Advisor',
    description:
      'Best if you want to apply to 500+ aid programs at once, and want an expert to maximize your aid.',
    features: [
      'The Mos application (includes FAFSA submission if you need it!)',
      'Instructions and reminders for any extra steps to get your funds',
      'Expert aid advisor (yes, a real human!)',
      'Written appeal for more aid',
    ],
    price: 149,
    nonSalePrice: 229,
  },
  {
    id: 'APPEALADVISOR',
    name: 'Appeal & Aid Advisor',
    description:
      'Best if you need more aid or you or your family had a life change (like losing a job)',
    features: [
      'Expert aid advisor (yes, a real human!)',
      'Written appeal for more aid',
    ],
    price: 79,
  },
]
