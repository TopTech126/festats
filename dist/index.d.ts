declare type EventParams = Record<string, number | string | boolean>;
export declare enum SITE {
    lux = "lux",
    mainSite = "mainsite",
    mainApp = "mainapp"
}
export default class StatsReport {
    private site;
    constructor(site: SITE);
    report: (name: string, params: EventParams) => void;
    private request;
}
export {};
