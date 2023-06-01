type Product = {
  id: number
  title: string
  description: string
  capacity: string
  type: string
  price: number
}

const productsArray:Product[] = [
  {
    id: 1,
    title: 'iPhone 14 Pro',
    description: 'This is iPhone 14 Pro',
    capacity: '256',
    type: 'phone',
    price: 1500
  },
  {
    id: 2,
    title: 'iPhone 13 Pro',
    description: 'This is iPhone 13 Pro',
    capacity: '256',
    type: 'phone',
    price: 1000
  },
  {
    id: 3,
    title: 'iPhone 14',
    description: 'This is iPhone 14',
    capacity: '128',
    type: 'phone',
    price: 1000
  },
  {
    id: 4,
    title: 'iPhone 11 Pro MAX',
    description: 'This is iPhone 11 Pro MAX',
    capacity: '512',
    type: 'phone',
    price: 2000
  },
  {
    id: 5,
    title: 'iPhone XS',
    description: 'This is iPhone XS',
    capacity: '128',
    type: 'phone',
    price: 500
  },
  {
    id: 6,
    title: 'iPhone 12 Pro',
    description: 'This is iPhone 12 Pro',
    capacity: '64',
    type: 'phone',
    price: 1500
  }
]

export default productsArray