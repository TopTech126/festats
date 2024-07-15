import { obj2query } from './utils';

type EventParams = Record<string, number | string | boolean>;

export enum SITE {
  lux = 'lux',
  mainSite = 'mainsite',
  mainApp = 'mainapp'
};

const domain = 'https://festats.debank.com';

const normalizeParams = (params: EventParams) => {
  const result: Record<string, string> = {};

  Object.keys(params).forEach((key) => {
    const value = params[key];
    if (typeof value === 'string') {
      result[key] = value
    } else {
      result[key] = JSON.stringify(value);
    }
  });

  return result;
}

export default class StatsReport {
  private site: SITE;

  constructor(site: SITE) {
    this.site = site;
  }

  report = (name: string, params: EventParams) => {
    const normalizedParams = normalizeParams(params);
    this.request(name, normalizedParams);
  }

  private request = (name: string, params: Record<string, string>) => {
    const url = `${domain}/${this.site}/${name}?${obj2query(params)}`;

    if (typeof fetch !== 'undefined') {
      fetch(url);
    } else {
      const xhr = new XMLHttpRequest();
      xhr.open('GET', url);
      xhr.send();
    }
  }
}
