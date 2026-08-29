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
    id: 'floral-entrance-decoration',
    title: 'Creating a Beautiful Floral Entrance for Special Celebrations',
    category: 'Decorations',
    author: 'Dreams Events',
    date: 'August 24, 2026',

    // KEEP YOUR CURRENT IMAGE PATH HERE
    image: '/gallery/decorations/event-01.jpg',

    excerpt:
      'A thoughtfully designed floral entrance can instantly transform a venue and create a memorable first impression for your guests.',

    content: `
      A beautiful event begins before guests even enter the main celebration area.

      Floral entrances are one of the simplest ways to create a strong first impression. By combining fresh flowers, greenery, structured frames and carefully planned lighting, an ordinary entrance can become a beautiful part of the celebration.

      At Dreams Event Management & Decorations, we focus on creating decoration concepts that match the mood, theme and personality of every celebration.

      From elegant floral arches to modern entrance installations, every element is planned to complement the venue and photography.

      The goal is simple — create an entrance that feels beautiful, welcoming and memorable.
    `,
  },

  {
    id: 'muthas-princess-first-birthday',
    title: "Mutha's Princess First Birthday Celebration",
    category: 'Birthdays',
    author: 'Dreams Events',
    date: 'July 15, 2026',

    // KEEP YOUR CURRENT IMAGE PATH HERE
    image: '/gallery/decorations/event-16.jpg',

    excerpt:
      'A first birthday is a once-in-a-lifetime celebration. From the floral backdrop to the smallest decorative details, every element deserves to feel special.',

    content: `
      A child's first birthday is one of those celebrations that families remember forever.

      For this special occasion, the decoration was designed around a soft and elegant birthday theme with beautiful floral elements, a carefully styled backdrop and a warm celebration atmosphere.

      The focus was on creating a setup that looked beautiful in photographs while still keeping the space comfortable for children and guests.

      Every detail — from the backdrop and flowers to the seating and dessert presentation — was planned to work together as one visual story.

      First birthdays are not just about decorations. They are about creating memories that families can look back on for years to come.
    `,
  },

  {
    id: 'beautiful-birthday-dessert-table',
    title: 'How to Style an Elegant Birthday Dessert Table',
    category: 'Birthdays',
    author: 'Dreams Events',
    date: 'June 30, 2026',

    // KEEP YOUR CURRENT IMAGE PATH HERE
    image: '/gallery/decorations/event-17.jpg',

    excerpt:
      'A beautifully styled dessert table can become the centrepiece of a birthday celebration, combining the cake, sweets, flowers and theme into one elegant setup.',

    content: `
      Dessert tables have become an important part of modern birthday celebrations.

      Instead of simply placing a cake on a table, the entire setup can be designed as part of the event theme.

      For this celebration, the dessert area combines a beautifully decorated birthday cake, coordinated treats, floral arrangements and carefully styled display elements.

      The key to a successful dessert table is balance. The colours, flowers, cake, stands and backdrop should complement each other without making the setup feel overcrowded.

      With thoughtful styling, even a small dessert corner can become one of the most photographed parts of the celebration.
    `,
  },

  {
    id: 'romantic-wedding-stage-decoration',
    title: 'Designing a Romantic Wedding Stage with Flowers',
    category: 'Weddings',
    author: 'Dreams Events',
    date: 'June 12, 2026',

    image: '/gallery/decorations/event-18.jpg',

    excerpt:
      'Soft florals, warm lighting and an elegant stage design can turn a wedding venue into a romantic celebration space.',

    content: `
      Wedding stages are more than just a backdrop for photographs.

      They become the visual centre of the entire celebration and provide the setting for some of the most important moments of the day.

      Floral arrangements, warm lighting, elegant seating and carefully designed structures can be combined to create a romantic and luxurious atmosphere.

      Our approach is to understand the couple's vision first and then translate that vision into a stage design that feels personal and timeless.

      The result should look beautiful from every angle — both in person and through photographs.
    `,
  },

  {
    id: 'floral-wedding-backdrop',
    title: 'The Art of Creating a Picture-Perfect Wedding Backdrop',
    category: 'Weddings',
    author: 'Dreams Events',
    date: 'May 28, 2026',

    image: '/gallery/weddings/event-07.jpg',

    excerpt:
      'A carefully planned wedding backdrop brings together flowers, lighting, architecture and styling to create a beautiful focal point.',

    content: `
      A wedding backdrop is one of the most important visual elements of a wedding celebration.

      It creates the setting for photographs, stage moments and family memories.

      Floral installations can be used to frame the stage, highlight architectural details and introduce colour into the venue.

      Lighting also plays an important role. Soft warm lighting can create depth and make floral arrangements appear richer and more dimensional.

      When all these elements are planned together, the backdrop becomes more than decoration — it becomes part of the story of the wedding.
    `,
  },
];