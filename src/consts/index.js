const ROUTES = {
  home: '/',
  login: '/login',
  register: '/register',
  projects: '/projecten',
  detail: { path: '/projecten/:id', to: '/projecten/' },
  edit: { path: '/bewerk-project/:id', to: '/bewerk-project/' },
  create: '/maak-project',
  profile: '/profiel',
  admin: '/admin',
  adminProjects: '/admin/projecten-beheer',
  adminSettings: '/admin/settings',
};

const CATEGORIES = [
  'Muziek',
  'Sociaal',
  'Kinderen',
  'Kunst',
  'Theater',
  'Technologie',
  'Dans',
  'Audiovisueel',
  'Natuur',
  'Divers',
];

const THEMES = [
  'Eenzaamheid rond corona',
  'Ondernemingschap',
  'Klimaat',
  'Andere',
];

const MATERIALTYPES = [
  'Bouwmateriaal',
  'Eten & Drinken',
  'Infrastructuur',
  'Knutselmateriaal',
  'Speelgoed',
  'Andere',
];

const SERVICETYPES = ['Creatieve hulp', 'Fysieke hulp', 'Andere'];

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

export { ROUTES, THEMES, CATEGORIES, MATERIALTYPES, SERVICETYPES, AWARDS };
