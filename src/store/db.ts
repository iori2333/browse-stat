import Dexie from 'dexie';

export const VERSION = 1;
export const NAME = '__stat_db';

class StatDatabase extends Dexie {
  links!: Dexie.Table<LinkEntry, EntryKey>;
  active!: Dexie.Table<IntervalEntry, EntryKey>;
  inactive!: Dexie.Table<IntervalEntry, EntryKey>;
  history!: Dexie.Table<HistoryEntry, EntryKey>;
  errors!: Dexie.Table<ErrorEntry, EntryKey>;

  constructor() {
    super(NAME);
    this.version(VERSION).stores({
      links: '++id, &url, host',
      active: '++id, date, url, interval',
      inactive: '++id, date, url, interval',
      history: '++id, date, url, from',
      errors: '++id, date, url, message'
    });
  }
}

export const db = new StatDatabase();

export type EntryKey = number;

export interface LinkEntry {
  id?: EntryKey;
  url: string;
  host: string;
}

export interface IntervalEntry {
  id?: EntryKey;
  date: number;
  url: EntryKey;
  interval: number;
}

export interface HistoryEntry {
  id?: EntryKey;
  date: number;
  url: EntryKey;
  from?: number;
}

export interface ErrorEntry {
  id?: EntryKey;
  date: number;
  url: EntryKey;
  message: string;
}

export default db;
