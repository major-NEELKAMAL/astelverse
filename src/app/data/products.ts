/** Products shown on the home page. Add one here when a product launches. */
export interface Product {
  name: string;
  /** Letter shown in the coloured badge. */
  mark: string;
  /** Brand colour for the badge, link and hover border. */
  color: string;
  url: string;
  /** Link text at the bottom of the card. */
  linkText: string;
  description: string;
}

export const PRODUCTS: Product[] = [
  {
    name: 'Risegap',
    mark: 'R',
    color: '#6B8E80',
    url: 'https://www.risegap.com',
    linkText: 'risegap.com',
    description: 'Jobs for career returners. People who took a career break meet employers who value their experience.',
  },
  {
    name: 'Royawl',
    mark: 'R',
    color: '#6366F1',
    url: 'https://www.royawl.com',
    linkText: 'royawl.com',
    description: 'A private social network for distinguished people, plus Royawl Proxy VPN for secure, no-logs browsing.',
  },
  {
    name: 'Doc Tools',
    mark: 'D',
    color: '#C2703D',
    url: 'https://www.image-picture.com',
    linkText: 'image-picture.com',
    description: 'Crop, resize and watermark images and documents, turn them into a PDF, and compare text, all inside your browser.',
  },
  {
    name: 'Car AI Mechanic',
    mark: 'C',
    color: '#2F7DA8',
    url: 'https://www.caraimechanic.com',
    linkText: 'caraimechanic.com',
    description: "Coming soon. Mechanic-reviewed car care guides for your exact model, with a route to a verified mechanic when a job isn't right for home.",
  },
  {
    name: 'Jagruk Janta',
    mark: 'J',
    color: '#7B2FF7',
    url: 'https://www.jagrukjanta.com',
    linkText: 'jagrukjanta.com',
    description: 'Citizens report civic problems like potholes, garbage and water logging, vote on them and track them until they are fixed, with quick medical help in an emergency.',
  },
];
