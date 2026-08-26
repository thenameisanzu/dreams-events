import React from 'react';
import { Heart, Cake, Briefcase, Mic, Sparkles, Calendar, Palette } from 'lucide-react';

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
    id: 'weddings',
    title: 'Weddings',
    desc: 'From grand traditional celebrations to bespoke destination weddings in Kumarakom and Kochi. We manage visual layouts, floral mandaps, and logistics.',
    icon: Heart,
    color: '#EC4899', // Pink
    image: '/hero-bg.jpg',
    features: [
      'Floral Mandap & Canopy Decors',
      'Destination Wedding Logistics',
      'Engagement Stage Architectures',
      'Bridal Styling & Dressing Rooms',
      'Traditional Sadya Catering Plans',
      'Custom Neon Backdrop Frames'
    ]
  },
  {
    id: 'birthdays',
    title: 'Birthdays',
    desc: 'Vibrant themed birthday parties, domestic anniversary setups, and intimate family gatherings with playful details, photo booths, and balloon decor.',
    icon: Cake,
    color: '#F59E0B', // Amber
    image: '/decor-details.jpg',
    features: [
      'Creative Balloon Sculptures',
      'Themed Visual Photo Backdrops',
      'Customized Name & Neon Lights',
      'Professional MC & Sound Systems',
      'Kids Entertainment & Games Area',
      'Cake Table Setup & Curation'
    ]
  },
  {
    id: 'corporate-events',
    title: 'Corporate Events',
    desc: 'Professional seminars, annual general meetings, and corporate award shows. We coordinate audio-visual arrays, VIP lounges, and runtime schedules.',
    icon: Briefcase,
    color: '#8B5CF6', // Violet
    image: '/corporate.jpg',
    features: [
      'High-End Sound & Mic Arrays',
      'Keynote & Presentation Rigs',
      'Executive Panel Setup Audits',
      'Wayfinding Signage & Layout Design',
      'Press Conference Media Rigs',
      'VIP Guest Hospitality Services'
    ]
  },
  {
    id: 'stage-shows',
    title: 'Stage Shows',
    desc: 'High-energy live music concerts, traditional classical festivals, and public stage dramas with professional trusses, pyro setups, and sound systems.',
    icon: Mic,
    color: '#3B82F6', // Blue
    image: '/concert.jpg',
    features: [
      'Heavy-Duty Stage Truss Rigging',
      'Epic Line Array Sound Systems',
      'Pyro & Laser Light Screen Sets',
      'Artist Green Room Styling',
      'Crowd Safety Control Fencing',
      'Zoning Permissions & Licenses'
    ]
  },
  {
    id: 'decorations',
    title: 'Decorations',
    desc: 'Bespoke stage styling, ceiling floral installations, elegant fabric drapes, light design concepts, and pathway gates for premium events.',
    icon: Sparkles,
    color: '#10B981', // Emerald
    image: '/decor-details.jpg',
    features: [
      'Fresh Floral Ceiling Layouts',
      'Glassmorphic Arch Gateways',
      'Neon Signage & Fairy Light Arrays',
      'Premium Table Linens & Settings',
      'Pathway Arch Floral Arrangements',
      'Bespoke Centerpiece Styling'
    ]
  },
  {
    id: 'event-planning',
    title: 'Event Planning',
    desc: 'Complete event coordination from venue selection audits to checklist tracking, vendor management, schedule designs, and budget reviews.',
    icon: Calendar,
    color: '#EF4444', // Red
    image: '/hero-bg.jpg',
    features: [
      'Venue Contract Feasibility Audits',
      'Vendor Deal & Fee Negotiations',
      'Complete Checklist & Plan Tracking',
      'Stage Schedule Runtime Designs',
      'Permit & Local Licensing Handles',
      'On-Site Coordination Directors'
    ]
  },
  {
    id: 'theme-events',
    title: 'Theme Events',
    desc: 'Creative customized events. We plan concepts, design props, build custom backdrops, and coordinate outfits to execute a complete themed experience.',
    icon: Palette,
    color: '#8B5CF6', // Violet
    image: '/corporate.jpg',
    features: [
      'Bespoke Theme Prop Construction',
      'Immersive Backdrop Screen Sets',
      'Color-Coordinated Event Settings',
      'Custom Costumed Staff Curation',
      'Creative Theme Invitation Designs',
      'Interactive Photo Zone Displays'
    ]
  }
];
