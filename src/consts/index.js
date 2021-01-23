const ROUTES = {
  home: '/',
  login: '/login',
  register: '/register',
  projects: '/projects',
  detail: { path: '/projects/:id', to: '/projects/' },
};

export { ROUTES };
