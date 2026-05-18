export interface Presenter {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
  email?: string;
  socialLinks?: {
    youtube?: string;
    twitter?: string;
    instagram?: string;
    linkedin?: string;
    website?: string;
  };
  showIds?: string[]; // References to shows the presenters host
}

export const presenters: Presenter[] = [
  {
    id: 'salim-barissa',
    name: 'Salim Barissa',
    role: 'Morning Host, Sports Analyst',
    image: '/presenters/salim_barissa.jpg',
    email: 'salim@swahilipot.fm',
    bio: "Salim Barissa is the co-host of 'The Breakfast Club' and the host of 'Kick Off', our daily sports show. Salim is a former professional \
      footballer who played for the national team for over a decade. He brings his unique insights and analysis to the world of sports, covering \
      everything from local matches to international tournaments. Salim is known for his quick wit and sharp commentary, and he has a loyal \
      following of sports fans who tune in daily to hear his take on the latest games and controversies.",
    showIds: ['the-breakfast-club', 'kick-off'],
  },
  {
    id: 'japheth-makanaki',
    name: 'Japheth Makanaki',
    role: 'Sports Analyst and Host',
    image: '/presenters/japheth_makanaki.jpg',
    email: 'japheth@swahilipot.fm',
    bio: "Japheth Makanaki is the host of 'Kick Off', our daily sports show. Japheth is a former professional \
        footballer who played for the national team for over a decade. He brings his unique insights and analysis to the world of sports, covering \
        everything from local matches to international tournaments. Japheth is known for his quick wit and sharp commentary, and he has a loyal \
        following of sports fans who tune in daily to hear his take on the latest games and controversies.",
    showIds: ['kick-off'],
  },
  {
    id: 'dorcas-uwiyera',
    name: 'Dorcas Uwiyera',
    role: 'Talk Show Host',
    image: '/presenters/dorcas_uwiyera.jpg',
    email: 'dorcas@swahilipot.fm',
    bio: 'Dorcas Uwiyera hosts our popular lunchtime talk show, bringing insightful conversations and thought-provoking topics to our listeners daily. \
      With a background in journalism and psychology, Dorcas has a unique ability to connect with guests from all walks of life and draw out fascinating \
      stories. Their interview style is both compassionate and direct, creating moments of authentic revelation that listeners have come to cherish. Outside \
      the studio, Dorcas is an avid rock climber, sci-fi enthusiast, and mentor for aspiring broadcasters.',
    showIds: ['swahilipot-cafe'],
  },
  {
    id: 'dj-kams',
    name: 'DJ Kams',
    role: 'Show DJ',
    image: '/presenters/dj_kams.jpg',
    email: 'kams@swahilipot.fm',
    bio: 'Dj Kams is the co-host and DJ for the Swahilipot Cafe show. With his infectious energy and engaging personality, \
      Dj Kams has become a beloved voice in the community. He brings a wealth of experience to the airwaves, having worked in radio for over \
      a decade. Dj Kams is passionate about social justice and community empowerment, and he uses his platform to raise awareness of important \
      issues. In his free time, he enjoys hiking, reading, and spending time with his family.',
    socialLinks: {
      youtube: 'https://www.youtube.com/@vdjkams',
    },
    showIds: ['swahilipot-cafe', 'swahilipot-mixes'],
  },
  {
    id: 'munga-sauti-teule',
    name: 'Munga Sauti Teule',
    role: 'Drive Show Host',
    image: '/presenters/munga_sauti_teule.jpg',
    email: 'munga@swahilipot.fm',
    bio: 'Munga Sauti Teule hosts the Swahilipot Drive Show and Swahilipot Aroma show.',
    showIds: ['swahilipot-drive-show', 'swahilipot-aroma'],
  },
  {
    id: 'cj-bawazir',
    name: 'CJ Bawazir',
    role: 'Drive Show Host',
    image: '/presenters/cj_bawasir.jpg',
    email: 'cj@swahilipot.fm',
    bio: 'CJ Bawazir hosts the Swahilipot Drive show.',
    showIds: ['swahilipot-drive-show'],
  },
  {
    id: 'dj-spinking',
    name: 'DJ Spinking',
    role: 'Show DJ',
    image: '/presenters/dj_spinking.jpg',
    email: 'spinking@swahilipot.fm',
    bio: 'DJ Spinking is the co-host and DJ for the Swahilipot Drive show.',
    socialLinks: {
      youtube: 'https://www.youtube.com/@Djspinking',
    },
    showIds: ['swahilipot-drive-show', 'the-friday-rave'],
  },
  {
    id: 'josh-the-curator',
    name: 'Josh, The Curator',
    role: 'Host',
    image: '/presenters/josh_wekesa.jpg',
    email: 'josh@swahilipot.fm',
    bio: 'Josh, The Curator a host of the Swahilipot Drive show and the main host of the Request Hour',
    socialLinks: {
      instagram: 'https://www.instagram.com/joshthecurator_/',
    },
    showIds: ['swahilipot-drive-show', 'request-hour'],
  },
  {
    id: 'mama-zakiya',
    name: 'Mama Zakiya',
    role: 'Host',
    image: '/presenters/mama_zakia.jpg',
    email: 'mama@swahilipot.fm',
    bio: 'Mama Zakiya is the co-host of the late night show, The Night Shift. Stay tuned as she keeps locked with good quotes and content on relationships.',
    showIds: ['the-night-shift'],
  },
  {
    id: 'tonny-omuga',
    name: 'Tonny Omuga',
    role: 'Host',
    image: '/presenters/tonny_omuga.jpg',
    email: 'tonny@swahilipot.fm',
    bio: 'Tonny Omuga is the host of the late night show, The Night Shift. Stay tuned as he keeps locked with good quotes and content on relationships.',
    showIds: ['beyond-the-ballot'],
  },
  {
    id: 'shufaa-yakut',
    name: 'Shufaa Yakut',
    role: 'Host',
    image: '/presenters/shufaa_yakut.jpg',
    email: 'shufaa@swahilipot.fm',
    bio: 'Shufaa Yakut is the host of Swahilipot Aroma, a show that explores the rich cultural heritage of the Swahili coast through music, stories, and interviews.',
    showIds: ['swahilipot-aroma'],
  },
];

export const getPresenterById = (id: string): Presenter | undefined => {
  return presenters.find((presenter) => presenter.id === id);
};

export const getPresentersByShowId = (showId: string): Presenter[] => {
  return presenters.filter((presenter) => presenter.showIds?.includes(showId));
};
