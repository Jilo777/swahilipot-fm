export interface Show {
  id: string;
  title: string;
  host: string;
  description: string;
  image: string;
  category: string;
  days: string[];
  startTime: string;
  endTime: string;
  featuredGuests?: string[];
  tags?: string[];
}

export interface ScheduleDay {
  name: string;
  shows: Show[];
}

export const allShows: Show[] = [
  {
    id: 'the-breakfast-club',
    title: 'The Breakfast Club',
    host: 'Salim Barissa, Shamsa Abdi,  Joshua Wekesa',
    description:
      'Catch up with the latest news of all kinds, from politics to entertainment, with lively discussions and the best music to start your day.',
    image: '/show-banners/breakfast-club.jpeg',
    category: 'Morning Show',
    days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    startTime: '06:00',
    endTime: '10:00',
    tags: ['Talk', 'Music', 'News'],
  },
  {
    id: 'kick-off',
    title: 'Kick Off',
    host: 'JK Makaninki, Brian Tumaini, Austin Moraiz',
    description:
      'Get updated with the highlights of the latest sports news and results, with expert analysis and interviews with sports personalities.',
    image: '/show-banners/kickoff.png',
    category: 'Sports',
    days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'],
    startTime: '10:00',
    endTime: '11:00',
    tags: ['News'],
  },
  {
    id: 'swahilipot-cafe',
    title: 'Swahilipot Cafe',
    host: 'Dorcas Uwiyera, DJ Kams',
    description:
      'Join Dorcas Uwiyera and DJ Kams for a mix of music, talk, and entertainment, with the best music to keep you company.',
    image: '/show-banners/swahilipot-cafe.jpeg',
    category: 'Talk Show',
    days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    startTime: '11:00',
    endTime: '14:00',
    featuredGuests: ['Local celebrities', 'Artists'],
    tags: ['Talk', 'Music', 'Entertainment'],
  },
  {
    id: 'swahilipot-aroma',
    title: 'Swahilipot Aroma',
    host: 'Munga Sauti Teule, Shufaa Yakut',
    description:
      'Get your recipes and cooking updates right and lovely with Shufaa Yakut and Munga Sauti Teule.',
    image: '/show-banners/swahilipot-aroma.png',
    category: 'Food',
    days: ['Saturday'],
    startTime: '11:00',
    endTime: '14:00',
    tags: ['Culinary', 'Entertainment'],
  },
  {
    id: 'mikuki-ya-maneno',
    title: 'Mikuki ya Maneno',
    host: 'Malenga001, Cardiac Poet',
    description:
      "Enjoy a mix of poetry and music with Malenga001 and Cardiac Poet, as they share artists' latest works and favorite tracks.",
    image: '/show-banners/mikuki-ya-maneno.png',
    category: 'Entertainment',
    days: ['Saturday'],
    startTime: '08:00',
    endTime: '11:00',
    tags: ['Poetry', 'Music'],
  },
  {
    id: 'kick-off-saturday',
    title: 'Kick Off',
    host: 'Japheth Makanaki, Salim Barissa',
    description:
      'Get updated with the highlights of the latest sports news and results, with expert analysis and interviews with sports personalities.',
    image: '/show-banners/kickoff.png',
    category: 'Sports',
    days: ['Saturday'],
    startTime: '15:00',
    endTime: '19:00',
    tags: ['News'],
  },
  {
    id: 'swahilipot-drive-show',
    title: 'Swahilipot Drive Show',
    host: 'Munga Sauti Teule, CJ Bawazir',
    description:
      'Beat the afternoon slump with upbeat tracks, fun games, and listener call-ins with the energetic Jordan Taylor.',
    image: '/show-banners/swahilipot-drive.png',
    category: 'Drive Show',
    days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    startTime: '15:00',
    endTime: '19:00',
    tags: ['Pop', 'Interactive', 'Fun'],
  },
  {
    id: 'the-night-shift',
    title: 'The Night Shift',
    host: 'Mama Zakiya, Bahati Ngazi',
    description:
      'Dive into all matters surrounding relationships and their ups and downs with Tonny Omuga and Mama Zakiya as they give you insights into how relationships take different faces throughout different generations',
    image: '/show-banners/the-night-shift.png',
    category: 'Talk Show',
    days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'],
    startTime: '21:00',
    endTime: '00:00',
    tags: ['Talk', 'Relationships', 'Love'],
  },
  {
    id: 'the-friday-rave',
    title: 'The Friday Rave',
    host: 'DJ Spinking',
    description:
      'Enjoy mixes from DJ Spinking as he comes through with segments like Versus, Long and short mixes to get your night going',
    image: '/show-banners/the-friday-rave.png',
    category: 'Music',
    days: ['Friday'],
    startTime: '19:00',
    endTime: '22:00',
    tags: ['Live Music', 'Song', 'Entertainment'],
  },
  {
    id: 'request-hour',
    title: 'Request Hour',
    host: 'Josh, The Curator',
    description:
      'Request your favorite tracks and hear them live on air with Josh, The Curator. Call in or send your requests via social media.',
    image: '/show-banners/request-hour.png',
    category: 'Music',
    days: ['Friday'],
    startTime: '10:00',
    endTime: '11:00',
    tags: ['Song Requests', 'Entertainment'],
  },
  {
    id: 'swahilipot-mixes',
    title: 'Vibe with Kams in Swahilipot Mixes',
    host: 'DJ Kams',
    description:
      'Vibe with Kams as he mixes music that spans throughout all generations and genres.',
    image: '/show-banners/swahilipot-mixes.png',
    category: 'Music',
    days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    startTime: '14:00',
    endTime: '15:00',
    tags: ['Live Music', 'Song', 'Entertainment'],
  },
  {
    id: 'vibes-and-music',
    title: 'Vibes and Music',
    host: 'DJs, Automated',
    description:
      'Sit back and enjoy the vibes and music set for the day. Take it easy today and remember to enjoy every minute of the tracks.',
    image:
      'https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=1080&w=800&auto=format&fit=crop',
    category: 'Music',
    days: ['Sunday'],
    startTime: '11:00',
    endTime: '14:00',
    tags: ['Acoustic', 'Folk', 'Live Music'],
  },
  {
    id: 'beyond-the-ballot',
    title: 'Beyond The Ballot',
    host: 'Tonny Omuga, Mohammed Harith',
    description:
      'Discussing politics and current affairs beyond the ballot box with insightful analysis and discussions.',
    image: '/show-banners/beyond-balot.jpeg',
    category: 'Talk Show',
    days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'],
    startTime: '19:00',
    endTime: '21:00',
    tags: ['Talk', 'Politics', 'News'],
  },
];

// Helper function to organize shows by day
export const getScheduleByDay = (): ScheduleDay[] => {
  const days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];

  return days.map((day) => {
    const dayShows = allShows
      .filter((show) => show.days.includes(day))
      .sort((a, b) => a.startTime.localeCompare(b.startTime));

    return {
      name: day,
      shows: dayShows,
    };
  });
};

// Get all categories for filtering
export const getAllCategories = (): string[] => {
  const categories = new Set<string>();
  allShows.forEach((show) => categories.add(show.category));
  return Array.from(categories).sort();
};

// Get all tags for filtering
export const getAllTags = (): string[] => {
  const tags = new Set<string>();
  allShows.forEach((show) => {
    if (show.tags) {
      show.tags.forEach((tag) => tags.add(tag));
    }
  });
  return Array.from(tags).sort();
};
