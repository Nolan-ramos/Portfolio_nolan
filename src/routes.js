import About from './views/about/About';
import Contact from './views/contact/Contact';
import Experience from './views/experience/Experience';
import Portfolio from './views/portfolio/Portfolio';

const routes = [
  {
    path: '/',
    label: 'About',
    component: About
  },
  {
    path: '/contact',
    label: 'Contact',
    component: Contact
  },
  {
    path: '/experience',
    label: 'Experience',
    component: Experience
  },
  {
    path: '/portfolio',
    label: 'Portfolio',
    component: Portfolio
  }
];

export default routes;
