const ROUTES = {
  home: '/',
  login: '/login',
  register: '/register',
  projects: '/projecten',
  detail: { path: '/projecten/:id', to: '/projecten/' },
  admin: '/admin',
  adminProjects: '/admin/projecten-beheer',
  adminSettings: '/admin/settings',
};

export { ROUTES };
