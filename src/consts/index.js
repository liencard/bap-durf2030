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

const THEMES = ['Eeenzaamheid rond corona', 'Ondernemingschap', 'Klimaat', 'Andere'];

export { ROUTES, THEMES, CATEGORIES };
