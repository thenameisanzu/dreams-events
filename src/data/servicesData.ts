import React from 'react';
import { Briefcase, Store, Tent, Landmark, Home, Music, Utensils, Presentation, MapPin } from 'lucide-react';

export interface Service {
  id: string;
  title: string;
  desc: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  color: string;
  image: string;
  features: string[];
}

export const servicesData: Service[] = [
  {
    id: 'corporate-events',
    title: 'Corporate Events',
    desc: ' Immaculate annual general meetings, corporate retreats, award functions, and product launches designed with strict adherence to scheduling protocols and high-end logistics.',
    icon: Briefcase,
    color: '#8B5CF6', // Royal Violet
    image: '/corporate.jpg',
    features: [
      'Interactive Media Backdrops',
      'Audio-Visual Rigging & Mic Arrays',
      'Keynote Presentation Integration',
      'VIP & Guest Coordination Services',
      'Detailed Stage & Runtime Schedules',
      'Branded Media Walls & Photobooths'
    ]
  },
  {
    id: 'convention-exhibition',
    title: 'Convention Exhibition',
    desc: 'Scale and structure combined. We build spatial layouts, vendor booth installations, multi-direction signage designs, and registration desks for grand trade shows and exhibitions.',
    icon: Store,
    color: '#EC4899', // Pink Accent
    image: '/decor-details.jpg',
    features: [
      'Modular Booth & Stall Construction',
      'Wayfinding Signs & Layout Plan Sets',
      'Audio arrays & Central Announcement Grids',
      'Digital Registration Check-in Desks',
      'Branding Board Integrations',
      'On-site Technical Support Teams'
    ]
  },
  {
    id: 'german-hangar',
    title: 'German Hangar Tents',
    desc: 'Heavy-duty German Hangar installations. Complete with weatherproof aluminum frames, luxury inner draping, industrial air conditioning, and heavy-duty structural safety certifications.',
    icon: Tent,
    color: '#10B981', // Emerald Accent
    image: '/hero-bg.jpg',
    features: [
      'Weatherproof Aluminum Trusses',
      'Luxury Inner Fabric Draping',
      'Industrial HVAC Air-Conditioning',
      'Custom Glass Entrances & Facades',
      'Structural Load Safety Certificates',
      'Modular Raised Floor Base Frameworks'
    ]
  },
  {
    id: 'government-events',
    title: 'Government Events',
    desc: 'Public rally arrangements, protocol compliance, VIP lounge planning, government panel setups, security barrier layouts, and local municipal permit processing.',
    icon: Landmark,
    color: '#3B82F6', // Blue Accent
    image: '/corporate.jpg',
    features: [
      'VIP Protocol Layout Compliance',
      'High-Grade Security Barricading',
      'Permits, Fire & Noise Licensing',
      'Massive Public Address (PA) Setups',
      'Media Press Conference Backdrops',
      'Backup Power Generator Integrations'
    ]
  },
  {
    id: 'home-services',
    title: 'Home Services Decor',
    desc: 'Elegant domestic celebrations. Custom floral panels, pathway arches, neon lights, and tablescapes for intimate birthday parties, anniversaries, and traditional ceremonies.',
    icon: Home,
    color: '#EF4444', // Red Accent
    image: '/decor-details.jpg',
    features: [
      'Custom Fresh Floral Pathway Arches',
      'Intimate Balloon & Neon backdrops',
      'Traditional Mandap & Canopy sets',
      'Modular Sound & Warm Light Arrays',
      'Table Setting Curation & Linens',
      'Quick Same-day Setup & Dismantling'
    ]
  },
  {
    id: 'live-events',
    title: 'Live Music Events',
    desc: 'High-energy festivals and concerts. Handled sound engineering, pyro modules, laser show integrations, barricade plans, artist booking handles, and license permissions.',
    icon: Music,
    color: '#F59E0B', // Amber Accent
    image: '/concert.jpg',
    features: [
      'Epic Sound PA & Subwoofer Arrays',
      'Laser Light Mapping & Pyro Sets',
      'Government Sound & Fire Permits',
      'Artist Lounge & VIP Styling Zones',
      'Safe Crowd Barrier Enclosures',
      'Stage Structural Safety Signoffs'
    ]
  },
  {
    id: 'menu-planning',
    title: 'Catering & Menu Planning',
    desc: 'Gourmet dining setups, visual buffet styling, live counters, customized culinary themes, and premium server staffing to complement your event themes.',
    icon: Utensils,
    color: '#10B981', // Emerald Accent
    image: '/decor-details.jpg',
    features: [
      'Curated Culinary Theme Menus',
      'Premium Buffet Stalls & Lighting',
      'Interactive Live Cooking Stations',
      'Bespoke Mocktail & Beverage Bars',
      'Professional Server & Staff Curation',
      'Strict Hygiene & Prep Safety Codes'
    ]
  },
  {
    id: 'seminar',
    title: 'Seminars & Panel Talks',
    desc: 'Academic panels and corporate seminars. Setup screen panels, presenter podiums, clean lapel acoustics, and executive seating arrays for targeted knowledge programs.',
    icon: Presentation,
    color: '#8B5CF6', // Royal Violet
    image: '/corporate.jpg',
    features: [
      'Interactive Presentation Podiums',
      'Wireless Lapel & Handheld Audio',
      'Dual Side Display Screen Displays',
      'Panel Speaker Table & Lighting Sets',
      'Corporate Folder & Stationary Sets',
      'Q&A Stand Mic Setup Deployments'
    ]
  },
  {
    id: 'venue-selection',
    title: 'Venue Selection Audits',
    desc: 'Negotiation deals, capacity calculations, layout mapping, structural feasibility inspections, and municipal restriction checks across premium properties.',
    icon: MapPin,
    color: '#F59E0B', // Amber Accent
    image: '/hero-bg.jpg',
    features: [
      'Exclusive Venue Contract Deals',
      'Exact Guest Capacity Mapping',
      'Acoustics & Power Feasibility Tests',
      'Municipal Zoning Restriction Checks',
      'Site Layout Floorplan Drafting',
      'Multi-property Site Visit Plannings'
    ]
  }
];
