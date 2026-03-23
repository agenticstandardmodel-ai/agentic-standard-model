export const siteNavItems = [
  { id: 'home', label: 'Home', href: '/' },
  { id: 'about', label: 'About', href: '/about/' },
  { id: 'tools', label: 'Tools', href: '/tools/' },
  { id: 'table', label: 'The Periodic Table', href: '/table/' },
  { id: 'molecules', label: 'Molecules', href: '/molecules/' },
  { id: 'contribute', label: 'Contribute', href: '/contribute/' }
] as const;

export type SiteNavId = (typeof siteNavItems)[number]['id'] | 'chapters';
