const obj2query = (obj) => {
    return Object.keys(obj)
        .map(function (key) {
        return encodeURIComponent(key) + "=" + encodeURIComponent(obj[key]);
    })
        .join("&");
};

var SITE;
(function (SITE) {
    SITE["lux"] = "lux";
    SITE["mainSite"] = "mainsite";
    SITE["mainApp"] = "mainapp";
})(SITE || (SITE = {}));
const domain = 'https://festats.debank.com';
const normalizeParams = (params) => {
    const result = {};
    Object.keys(params).forEach((key) => {
        const value = params[key];
        if (typeof value === 'string') {
            result[key] = value;
        }
        else {
            result[key] = JSON.stringify(value);
        }
    });
    return result;
};
class StatsReport {
    constructor(site) {
        this.report = (name, params) => {
            const normalizedParams = normalizeParams(params);
            this.request(name, normalizedParams);
        };
        this.request = (name, params) => {
            const url = `${domain}/${this.site}/${name}?${obj2query(params)}`;
            if (typeof fetch !== 'undefined') {
                fetch(url);
            }
            else {
                const xhr = new XMLHttpRequest();
                xhr.open('GET', url);
                xhr.send();
            }
        };
        this.site = site;
    }
}

export { SITE, StatsReport as default };
