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
    title: 'Red and White Rose Centrepiece',
    category: 'Decorations',
    image: '/gallery/decorations/event-01.jpg',
    aspectRatio: 'square'
  },
  {
    id: 'g2',
    title: 'Three-Tier Wedding Cake',
    category: 'Weddings',
    image: '/gallery/birthdays/event-02.jpg',
    aspectRatio: 'square'
  },
  {
    id: 'g3',
    title: 'Rose-Petal Wedding Celebration',
    category: 'Weddings',
    image: '/gallery/weddings/event-03.jpg',
    aspectRatio: 'vertical'
  },
  {
    id: 'g4',
    title: 'Red and White “Better Together” Stage',
    category: 'Weddings',
    image: '/gallery/decorations/event-04.jpg',
    aspectRatio: 'vertical'
  },
  {
    id: 'g5',
    title: 'Ivory and Blush Floral Stage',
    category: 'Weddings',
    image: '/gallery/weddings/event-05.jpg',
    aspectRatio: 'horizontal'
  },
  {
    id: 'g6',
    title: 'Floral Welcome Arch',
    category: 'Weddings',
    image: '/gallery/weddings/event-06.jpg',
    aspectRatio: 'horizontal'
  },
  {
    id: 'g7',
    title: 'Traditional Wedding Couple',
    category: 'Weddings',
    image: '/gallery/weddings/event-07.jpg',
    aspectRatio: 'horizontal'
  },
  {
    id: 'g8',
    title: 'Wedding Party on a Floral Stage',
    category: 'Weddings',
    image: '/gallery/decorations/event-08.jpg',
    aspectRatio: 'horizontal'
  },
  {
    id: 'g9',
    title: 'White Floral Cake Stage',
    category: 'Decorations',
    image: '/gallery/decorations/event-09.jpg',
    aspectRatio: 'horizontal'
  },
  {
    id: 'g10',
    title: 'Ivory Canopy Ceremony Stage',
    category: 'Decorations',
    image: '/gallery/decorations/event-10.jpg',
    aspectRatio: 'horizontal'
  },
  {
    id: 'g11',
    title: 'Pastel Baby Shower Dessert Table',
    category: 'Birthdays',
    image: '/gallery/decorations/event-11.jpg',
    aspectRatio: 'horizontal'
  },
  {
    id: 'g12',
    title: 'Floral Reception Stage with Cake',
    category: 'Weddings',
    image: '/gallery/birthdays/event-12.jpg',
    aspectRatio: 'vertical'
  },
  {
    id: 'g13',
    title: 'Hanging Floral Reception Backdrop',
    category: 'Weddings',
    image: '/gallery/weddings/event-13.jpg',
    aspectRatio: 'horizontal'
  },
  {
    id: 'g14',
    title: 'Illuminated Event Entrance',
    category: 'Decorations',
    image: '/gallery/weddings/event-14.jpg',
    aspectRatio: 'horizontal'
  },
  {
    id: 'g15',
    title: 'Pink and Gold Banquet Seating',
    category: 'Decorations',
    image: '/gallery/decorations/event-15.jpg',
    aspectRatio: 'horizontal'
  },
  {
    id: 'g16',
    title: 'Princess-Themed First Birthday',
    category: 'Birthdays',
    image: '/gallery/decorations/event-16.jpg',
    aspectRatio: 'horizontal'
  },
  {
    id: 'g17',
    title: 'Pastel Floral Birthday Stage',
    category: 'Decorations',
    image: '/gallery/decorations/event-17.jpg',
    aspectRatio: 'horizontal'
  },
  {
    id: 'g18',
    title: 'Pastel Floral Backdrop Detail',
    category: 'Decorations',
    image: '/gallery/decorations/event-18.jpg',
    aspectRatio: 'horizontal'
  }
];
