export interface Review {
  id: number
  name: string
  city: string
  rating: number
  text: string
  vehicle: string
  date: string
}

export const reviews: Review[] = [
  {
    id: 1,
    name: 'Rahul Mehta',
    city: 'Mumbai',
    rating: 5,
    text: 'Excellent service! The Honda Activa was in perfect condition. Rode all the way to Om Beach and Yana Caves. Helmet was provided. Highly recommend Shiva Bike Rental!',
    vehicle: 'Honda Activa',
    date: 'March 2024',
  },
  {
    id: 2,
    name: 'Priya Sharma',
    city: 'Bangalore',
    rating: 5,
    text: 'Booked the Royal Enfield for 3 days. Best decision ever! The bike was well-maintained and the pricing was very affordable. Will definitely rent again on my next Gokarna trip.',
    vehicle: 'Royal Enfield Classic 350',
    date: 'February 2024',
  },
  {
    id: 3,
    name: 'Arjun Nair',
    city: 'Kochi',
    rating: 5,
    text: 'Very professional team. Quick WhatsApp booking, no hassle. TVS Jupiter was clean and fuel-efficient. Explored all of Gokarna in a day. Great value for money!',
    vehicle: 'TVS Jupiter',
    date: 'January 2024',
  },
  {
    id: 4,
    name: 'Sneha Patel',
    city: 'Pune',
    rating: 5,
    text: 'Rented the KTM Duke for 2 days. Absolutely loved it! The roads around Gokarna are perfect for this bike. Shiva Rental is the best in town — no hidden charges at all.',
    vehicle: 'KTM Duke 200',
    date: 'December 2023',
  },
  {
    id: 5,
    name: 'Vikram Singh',
    city: 'Delhi',
    rating: 5,
    text: 'Smooth experience from start to finish. Booked via WhatsApp, picked up the Pulsar, explored the coast. Returned without any issues. 10/10 would recommend!',
    vehicle: 'Bajaj Pulsar 220',
    date: 'November 2023',
  },
]
