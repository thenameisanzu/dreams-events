export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  aspectRatio: 'vertical' | 'horizontal' | 'square';
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

