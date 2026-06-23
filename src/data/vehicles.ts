export interface Vehicle {
  slug: string
  name: string
  type: 'scooty' | 'bike'
  brand: string
  engine: string
  mileage: string
  priceDay: number
  priceWeek: number
  priceMonth: number
  deposit: number
  featured: boolean
  available: boolean
  description?: string
}

export const vehicles: Vehicle[] = [
  {
    slug: 'honda-activa',
    name: 'Honda Activa',
    type: 'scooty',
    brand: 'Honda',
    engine: '110cc',
    mileage: '45 km/l',
    priceDay: 299,
    priceWeek: 1699,
    priceMonth: 5499,
    deposit: 500,
    featured: true,
    available: true,
    description: 'The most popular scooty in India. Perfect for exploring Gokarna beaches and temples.',
  },
  {
    slug: 'tvs-jupiter',
    name: 'TVS Jupiter',
    type: 'scooty',
    brand: 'TVS',
    engine: '110cc',
    mileage: '50 km/l',
    priceDay: 279,
    priceWeek: 1599,
    priceMonth: 4999,
    deposit: 500,
    featured: true,
    available: true,
    description: 'Fuel-efficient and comfortable scooty. Great for city rides and coastal roads.',
  },
  {
    slug: 'suzuki-access-125',
    name: 'Suzuki Access 125',
    type: 'scooty',
    brand: 'Suzuki',
    engine: '125cc',
    mileage: '42 km/l',
    priceDay: 319,
    priceWeek: 1899,
    priceMonth: 6499,
    deposit: 500,
    featured: false,
    available: true,
    description: 'Powerful 125cc scooty with extra storage. Ideal for long rides along the coast.',
  },
  {
    slug: 'royal-enfield-classic-350',
    name: 'Royal Enfield Classic 350',
    type: 'bike',
    brand: 'Royal Enfield',
    engine: '346cc',
    mileage: '35 km/l',
    priceDay: 799,
    priceWeek: 4999,
    priceMonth: 15999,
    deposit: 2000,
    featured: true,
    available: true,
    description: 'The iconic cruiser. Feel the thrill of riding through Gokarna\'s winding roads.',
  },
  {
    slug: 'ktm-duke-200',
    name: 'KTM Duke 200',
    type: 'bike',
    brand: 'KTM',
    engine: '199cc',
    mileage: '32 km/l',
    priceDay: 699,
    priceWeek: 4299,
    priceMonth: 13999,
    deposit: 2000,
    featured: true,
    available: true,
    description: 'A sporty naked bike for the adventure seekers. Conquer every road in style.',
  },
  {
    slug: 'bajaj-pulsar-220',
    name: 'Bajaj Pulsar 220',
    type: 'bike',
    brand: 'Bajaj',
    engine: '220cc',
    mileage: '35 km/l',
    priceDay: 499,
    priceWeek: 2999,
    priceMonth: 9999,
    deposit: 1500,
    featured: false,
    available: true,
    description: 'A powerful and stylish bike perfect for highway cruising and long tours.',
  },
]

export const featuredVehicles = vehicles.filter((v) => v.featured && v.available)
