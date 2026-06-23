export interface FAQ {
  id: number
  question: string
  answer: string
}

export const faqs: FAQ[] = [
  {
    id: 1,
    question: 'What documents are required to rent a bike or scooty?',
    answer:
      'You need a valid Driving License (DL) and a government-issued photo ID such as Aadhar Card, Passport, or Voter ID. For bikes above 150cc, a two-wheeler endorsement on your DL is mandatory.',
  },
  {
    id: 2,
    question: 'Is fuel included in the rental price?',
    answer:
      'No, fuel is not included. You will receive the vehicle with a specified fuel level and are expected to return it at the same level. Fuel can be filled at nearby petrol pumps in Gokarna.',
  },
  {
    id: 3,
    question: 'What is the security deposit amount?',
    answer:
      'The security deposit ranges from ₹500 to ₹2,000 depending on the vehicle. Scooties require ₹500 deposit, while bikes require ₹1,500–₹2,000. The full deposit is refunded upon returning the vehicle in good condition.',
  },
  {
    id: 4,
    question: 'Can I extend my rental booking?',
    answer:
      'Yes, you can extend your booking subject to vehicle availability. Simply WhatsApp us at least 2 hours before your return time to arrange an extension. Additional charges apply at the daily rate.',
  },
  {
    id: 5,
    question: 'Is a helmet included with the rental?',
    answer:
      'Yes! One helmet is included free of charge with every rental. Additional helmets are available for ₹50/day. Wearing a helmet is mandatory as per traffic laws and for your safety.',
  },
  {
    id: 6,
    question: 'What if the vehicle breaks down during my rental?',
    answer:
      'We provide 24/7 roadside assistance. In case of a breakdown, call or WhatsApp us immediately and we will either repair the vehicle or arrange a replacement. We are always just a call away.',
  },
  {
    id: 7,
    question: 'Are there any hidden charges?',
    answer:
      'Absolutely not! We believe in complete transparency. The price you see is the price you pay. The only additional costs are fuel, any optional extra helmets, and late return fees if applicable.',
  },
  {
    id: 8,
    question: 'What are the rental timings?',
    answer:
      'Our rental shop is open from 7:00 AM to 8:00 PM daily. We can arrange early morning or late evening pickups via prior arrangement. Contact us on WhatsApp to schedule.',
  },
]
