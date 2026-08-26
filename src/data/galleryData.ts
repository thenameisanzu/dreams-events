export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  aspectRatio: 'vertical' | 'horizontal' | 'square';
}

export interface RecentWork {
  id: string;
  title: string;
  category: string;
  venue: string;
  date: string;
  desc: string;
  image: string;
  highlights: string[];
}

export const galleryItems: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Grand Floral Mandap Wedding Stage',
    category: 'Weddings',
    image: '/hero-bg.jpg',
    aspectRatio: 'horizontal'
  },
  {
    id: 'g2',
    title: 'Metal Stage Truss Concert Rigging',
    category: 'Concerts',
    image: '/concert.jpg',
    aspectRatio: 'vertical'
  },
  {
    id: 'g3',
    title: 'Executive Conference Presentation Screen',
    category: 'Corporate',
    image: '/corporate.jpg',
    aspectRatio: 'horizontal'
  },
  {
    id: 'g4',
    title: 'Traditional Sadya Catering Visual Table Settings',
    category: 'Decorations',
    image: '/decor-details.jpg',
    aspectRatio: 'square'
  },
  {
    id: 'g5',
    title: 'Neon Signage & Floral Archway Gateways',
    category: 'Weddings',
    image: '/hero-bg.jpg',
    aspectRatio: 'square'
  },
  {
    id: 'g6',
    title: 'High-Density Speaker Line Arrays',
    category: 'Concerts',
    image: '/concert.jpg',
    aspectRatio: 'horizontal'
  },
  {
    id: 'g7',
    title: 'Annual General Meeting Staging Setup',
    category: 'Corporate',
    image: '/corporate.jpg',
    aspectRatio: 'vertical'
  },
  {
    id: 'g8',
    title: 'Kids Birthday Theme Table Settings',
    category: 'Birthdays',
    image: '/decor-details.jpg',
    aspectRatio: 'horizontal'
  }
];

export const recentWorks: RecentWork[] = [
  {
    id: 'rw1',
    title: 'Royal Destination Wedding at Kumarakom Lake Resort',
    category: 'Weddings',
    venue: 'Kumarakom, Kottayam',
    date: 'August 2026',
    desc: 'An exquisite lakefront wedding featuring a floating fresh-flower mandap, customized canopy drapes, and a glass-base walkway above the water.',
    image: '/hero-bg.jpg',
    highlights: ['Floating Water Stage', '3,000+ Fresh Floral Chains', 'Integrated Warm LED Uplighting']
  },
  {
    id: 'rw2',
    title: 'Mega Concert Stage at Jawaharlal Nehru Stadium',
    category: 'Concerts',
    venue: 'Kaloor, Kochi',
    date: 'July 2026',
    desc: 'Full-scale arena stage production with heavy-duty structural trusses, advanced line array acoustics, synchronized pyro effects, and safe zone barricading.',
    image: '/concert.jpg',
    highlights: ['20-Ton Rigging Trusses', '360° Sound Acoustics', '100% Crowd Control Design']
  },
  {
    id: 'rw3',
    title: 'Annual Tech Summit at Infopark Kakkanad',
    category: 'Corporate',
    venue: 'Kakkanad, Kochi',
    date: 'June 2026',
    desc: 'High-end corporate seminar setup utilizing widescreen curved LED displays, presentation nodes, lapel mic systems, and digital check-in counters.',
    image: '/corporate.jpg',
    highlights: ['Curved LED Wall backdrop', 'RFID Check-In Terminals', 'VIP Lounge Design & Staff']
  }
];
