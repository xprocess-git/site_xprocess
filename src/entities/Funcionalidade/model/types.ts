import type { LucideIcon } from 'lucide-react';

export interface Funcionalidade {
  id: string;
  name: string;
  description: string;
  highlights: string[];
  icon: LucideIcon;
}
