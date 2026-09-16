import type { LucideIcon } from 'lucide-react';

export interface Solucao {
  id: string;
  number: string;
  name: string;
  description: string;
  highlights: string[];
  href: string;
  icon: LucideIcon;
}
