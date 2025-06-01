
export interface RoadmapPhase {
  id: string;
  title: string;
  description: string;
  details: string[];
  icon?: React.ReactNode;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface NavItem {
  label: string;
  href: string;
}
