import { createContext } from "react";

export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export interface NavCategory {
  category: string;
  items: NavItem[];
}

export type SideBarNavigation = NavCategory[];

export const SideBarNavigationContext = createContext<SideBarNavigation | null>(null);
