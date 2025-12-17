
export interface ItineraryItem {
  time: string;
  title: string;
  description: string;
  badge?: string;
  nightTag?: boolean;
  accent?: boolean;
  image?: string;
}

export interface DayPlan {
  day: number;
  title: string;
  subtitle: string;
  items: ItineraryItem[];
  isBusan?: boolean;
}

export interface ChecklistItem {
  id: number;
  text: string;
  done: boolean;
}

export interface AppState {
  checklist: ChecklistItem[];
  memo: string;
  exchangeRate: number;
}
