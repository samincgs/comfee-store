type Links = {
  label: string;
  href: string;
};

export const links: Links[] = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'About',
    href: '/about',
  },
  {
    label: 'Products',
    href: '/products',
  },
  {
    label: 'Favorites',
    href: '/favorites',
  },
  {
    label: 'Reviews',
    href: '/reviews',
  },
  {
    label: 'Cart',
    href: '/cart',
  },
  {
    label: 'Orders',
    href: '/orders',
  },
  {
    label: 'Dashboard',
    href: '/admin/sales',
  },
];

export const adminLinks: Links[] = [
  {
    label: 'Sales',
    href: '/admin/sales',
  },
  {
    label: 'My Products',
    href: '/admin/products',
  },
  {
    label: 'Create Product',
    href: '/admin/products/create',
  },
];
