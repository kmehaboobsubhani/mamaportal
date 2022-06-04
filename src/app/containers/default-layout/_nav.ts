import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'cil-speedometer',
    // badge: {
    //   variant: 'info',
    //   text: 'NEW',
    // },
  },

  {
    name: 'Merchant',
    url: '/theme',
    icon: 'cib-maxcdn',
    children: [
      {
        name: 'Merchant',
        url: '/merchant',
      },
      
    ],
  },

  {
    name: 'Users',
    url: '/theme',
    icon: 'cil-group',
    children: [
      {
        name: 'Users',
        url: '/tables/tables',
      },
      
    ],
  },

  {
    name: 'Machines',
    url: '/theme',
    icon: 'cil-mobile',
    children: [
      {
        name: 'Machines',
        url: '/machines',
      },
      {
        name: 'New Machine',
        url: '/configuration',
      },
    ],
  },

  {
    name: 'Lockers',
    url: '/theme',
    icon: 'cil-lock-locked',
    children: [
      {
        name: 'Locker',
        url: '/lockers',
      },
      
    ],
  },

  {
    name: 'Calendar',
    url: '/theme',
    icon: 'cil-calendar',
    children: [
      {
        name: 'Calendar',
        url: '/plugins/fullcalendar',
      },
      
    ],
  },

  {
    name: 'Inventory',
    url: '/theme',
    icon: 'cil-line-style ',
    children: [
      {
        name: 'Stock Management',
        url: '/stocks',
      },
      {
        name: 'Item Master',
        url: '/items',
      },
      // {
      //   name: 'product Master',
      //   url: '/products',
      // },
    ],
  },
  {
    name: 'Locations',
    url: '/theme',
    icon: 'cil-map',
    children: [
      {
        name: 'Location',
        url: '/google-maps',
      },
      
    ],
  },

  {
    name: 'Trips',
    url: '/theme',
    icon: 'cil-garage',
    children: [
      {
        name: 'Trip',
        url: '/theme/typography',
      },
      
    ],
  },
 
  {
    name: 'Routes',
    url: '/theme',
    icon: 'cil-compress',
    children: [
      {
        name: 'Routes',
        url: '/theme/typography',
      },
      
    ],
  },
 
  //  {
  //    name: 'Configuration',
  //    url: 'businesstechnical',
  //  },
 
  {
    name: 'Video Library',
    url: '/theme',
    icon: 'cil-movie',
    children: [
      {
        name: 'Video Library',
        url: '/base/media-objects',
      },
      
    ],
  },
];
