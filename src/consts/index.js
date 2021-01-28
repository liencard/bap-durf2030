const ROUTES = {
  home: '/',
  login: '/login',
  register: '/register',
  projects: '/projecten',
  detail: { path: '/projecten/:id', to: '/projecten/' },
  create: '/maak-project',
  profile: '/profiel',
  admin: '/admin',
  adminProjects: '/admin/projecten-beheer',
  adminSettings: '/admin/settings',
};

export { ROUTES };
