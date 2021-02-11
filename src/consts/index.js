const ROUTES = {
  home: '/',
  login: '/login',
  register: '/register',
  projects: '/projecten',
  detail: { path: '/projecten/:id', to: '/projecten/' },
  edit: { path: '/bewerk-project/:id', to: '/bewerk-project/' },
  create: { start: '/maak-project', onboarding: '/maak-project/info' },
  profile: '/profiel',
  admin: '/admin',
  adminProjects: '/admin/projecten-beheer',
  adminProject: {
    path: '/admin/projecten-beheer:id',
    to: '/admin/projecten-beheer/',
  },
  adminSettings: '/admin/instellingen',
  adminAwards: '/admin/awards',
};

const CATEGORIES = [
  'muziek',
  'sociaal',
  'kinderen',
  'kunst',
  'theater',
  'technologie',
  'dans',
  'audiovisueel',
  'natuur',
  'divers',
];

const THEMES = ['eenzaamheid rond corona', 'ondernemingschap', 'klimaat', 'andere'];

const MATERIALTYPES = ['Bouwmateriaal', 'Eten & Drinken', 'Infrastructuur', 'Knutselmateriaal', 'Speelgoed', 'Andere'];

const SERVICETYPES = ['Creatieve hulp', 'Fysieke hulp', 'Andere'];

const CITIES = ['Aalbeke', 'Bellegem', 'Bissegem', 'Heule', 'Kooigem', 'Kortrijk', 'Marke', 'Rollegem'];

const AWARDS = [
  {
    name: 'Creatieveling',
    img: '/badges-awards/creatieveling.png',
  },
  {
    name: 'Harde werker',
    img: '/badges-awards/hardewerker.png',
  },
];

const BADGES = [
  {
    name: 'Chatter',
    levelOne: '/badges-awards/c1.png',
    levelTwo: '/badges-awards/c2.png',
    levelThree: '/badges-awards/c3.png',
  },
  {
    name: 'Liker',
    levelOne: '/badges-awards/h1.png',
    levelTwo: '/badges-awards/h2.png',
    levelThree: '/badges-awards/h3.png',
  },
  {
    name: 'Uitvinder',
    levelOne: '/badges-awards/l1.png',
    levelTwo: '/badges-awards/l2.png',
    levelThree: '/badges-awards/l3.png',
  },
];

export { ROUTES, THEMES, CATEGORIES, MATERIALTYPES, SERVICETYPES, CITIES, AWARDS, BADGES };
