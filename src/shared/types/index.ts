export type IconName = 'chevron-left' | 'chevron-right' | 'close' | 'menu';

export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export interface FooterLink {
  id: string;
  label: string;
  href: string;
}

export interface FooterLinkGroup {
  id: string;
  title: string;
  links: FooterLink[];
}

export interface SocialLink {
  id: string;
  label: string;
  href: string;
  abbreviation: string;
}
