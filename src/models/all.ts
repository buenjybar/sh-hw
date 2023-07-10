export interface Order {
  id: number;
  lastName: string;
  firstName: string;
  trackers: Tracker[];
}

export interface Tracker {
  id: number;
  status: string;
}
