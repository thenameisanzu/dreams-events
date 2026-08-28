export interface BlogPost {
  id: string;
  title: string;
  category: string;
  author: string;
  date: string;
  image: string;
  excerpt: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: '5 Design Secrets for a Luxury Destination Wedding',
    category: 'Weddings',
    author: 'Aishwarya Sen',
    date: 'August 24, 2026',
    image: '/gallery/weddings/event-06.jpg',
    excerpt: 'Discover how we combine floating floral ceilings, custom mandaps, and ambient LED uplighting to transform raw palace grounds into magical destinations.',
    content: `Destination weddings are more than just a ceremony; they are an immersive multi-day experience for your guests. As visual planners, we focus heavily on the spatial architecture of the venue.

First, scale matters. Standard decorations can feel empty on grand palace grounds or in massive hotel ballrooms. This is why we utilize custom hanging trusses for floral installations and crystal drop ceilings, bringing the visual focus down to create intimacy.

Second, lighting transforms everything. We blend traditional warm candle highlights with intelligent LED uplighting. This maintains the warm, romantic atmosphere of a wedding while accentuating the building’s architectural details on camera.

Finally, materials must be premium. We source high-grade silks for drapes and fresh imports for florals, ensuring everything looks clean and luxurious up close.`
  },
  {
    id: '2',
    title: 'Navigating Staging Logistics for Large Arena Concerts',
    category: 'Concerts',
    author: 'Kabir Mehta',
    date: 'July 15, 2026',
    image: '/gallery/decorations/event-16.jpg',
    excerpt: 'A detailed production breakdown of rigging calculations, crowd safety barriers, local permits, and audio engineering checklists.',
    content: `Rigging safety and structural stability calculations are the backbone of any large-scale arena show. When dealing with tons of audio arrays, lighting trusses, and pyro pods suspended above a crowd, there is zero margin for error.

In outdoor venues, wind loads, speaker weight distributions, and cable layouts must be certified by licensed engineers before the first soundcheck. Additionally, crowd control is vital. We utilize heavy-duty metal barriers, separate security grids, and strategic medical checkpoints to ensure guest safety.

Lastly, licensing is a major operational phase. Event managers must coordinate with police, municipal councils, sound control, and fire marshals weeks in advance. Having a dedicated logistics team ensures all permits are secured on time.`
  },
  {
    id: '3',
    title: 'The Evolution of Corporate Staging and Conferences',
    category: 'Corporate',
    author: 'Rohan Malhotra',
    date: 'June 30, 2026',
    image: '/gallery/decorations/event-11.jpg',
    excerpt: 'How high-definition curved LED walls, hybrid presenter layouts, and digital RFID registration terminals are changing corporate galas.',
    content: `The days of low-contrast projector screens and simple podiums are long gone. Modern corporate events require high-impact visual technology and dynamic staging.

Today's companies expect immersive, high-resolution curved LED screens that act as a backdrop, wrapping around presenters with high-quality media presentations. Furthermore, staging now integrates hybrid presentation nodes, allowing remote speakers to stream live onto the main stage screens with latency under 50 milliseconds.

Operational efficiency has also upgraded. By using RFID wristbands or digital check-in terminals, we register hundreds of attendees per minute, reducing lines and generating real-time analytics for the corporate organizers.`
  }
];
