import { Config } from '../interfaces/interfaces';
import { AosOptions } from 'aos';

export const LANGUAGES: Config[] = [
  { name: 'Spanish', selector: 'es', translate: 'LANG.ES' },
  { name: 'English', selector: 'en', translate: 'LANG.EN' },
  { name: 'Català', selector: 'cat', translate: 'LANG.CAT' }
];


export const THEMES: Config[] = [
  { name: 'Default', selector: 'default', translate: 'THEME.DEFAULT' },
  { name: 'Deep Blue', selector: 'deepblue', translate: 'THEME.DEEPBLUE' },
  { name: 'Deep Green', selector: 'deepgreen', translate: 'THEME.DEEPGREEN' },
  { name: 'Dark Red', selector: 'darkred', translate: 'THEME.DARKRED' },
  { name: 'Sky Blue', selector: 'skyblue', translate: 'THEME.SKYBLUE' },
  { name: 'Super Orange', selector: 'superorange', translate: 'THEME.SUPERORANGE' }
];

export const PAGE_BG = {
  about: 'assets/img/page_bg/about.mp4',
  advantages: 'assets/img/page_bg/advantages.mp4',
  article: 'assets/img/page_bg/article.mp4',
  articles: 'assets/img/page_bg/articles.mp4',
  categories: 'assets/img/page_bg/categories.mp4',
  collaborate: 'assets/img/page_bg/collaborate.mp4',
  contact: 'assets/img/page_bg/contact.mp4',
  create: 'assets/img/page_bg/create.mp4',
  help: 'assets/img/page_bg/help.mp4',
  politics: 'assets/img/page_bg/politics.mp4',
  profile: 'assets/img/page_bg/profile.mp4',
  public: 'assets/img/page_bg/public.mp4',
  search: 'assets/img/page_bg/search.mp4',
  support: 'assets/img/page_bg/support.mp4',
  users: 'assets/img/page_bg/users.mp4',
  works: 'assets/img/page_bg/works.mp4',
  test: 'assets/img/page_bg/test.mp4'
};

export const CONDITIONS: string[] = [
  'TERMS.ONE',
  'TERMS.TWO',
  'TERMS.THREE',
  'TERMS.FOUR',
  'TERMS.FIVE',
];

// AOS Settings
export const AOS_SETTINGS: AosOptions = {
  disable: 'mobile',
  startEvent: 'DOMContentLoaded',
  initClassName: 'aos-init',
  animatedClassName: 'aos-animate',
  useClassNames: false,
  disableMutationObserver: false,
  debounceDelay: 50,
  throttleDelay: 99,
  offset: 175,
  delay: 200,
  duration: 700,
  easing: 'ease-in-out',
  once: false,
  mirror: false,
  anchorPlacement: 'top-bottom',
};

