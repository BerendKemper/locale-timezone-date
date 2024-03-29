"use strict";
const pad2 = number => number < 10 ? "0" + number : number;
const pad3 = number => number < 10 ? "00" + number : number < 100 ? "0" + number : number;
class LocaleTimezoneDate extends Date {
    /**@returns {{hhmm:string hour:number}}*/
    getUTCOffset() {
        const hour = this.getTimezoneOffset() / -60;
        return { hhmm: "+" + pad2(hour) + "00", hour };
    };
    /**Get a Date ISO String from your locale timezone.
     * @param {{ms:boolean}} options (optional) @returns {String} "yyyy-mm-ddThh:mm:ss[.ms]+hhmm"*/
    toLocaleISOString(options = {}) {
        return pad2(this.getFullYear()) + "-" + pad2(this.getMonth() + 1) + "-" + pad2(this.getDate()) + "T" + pad2(this.getHours()) + ":" + pad2(this.getMinutes()) + ":" + pad2(this.getSeconds()) + (options?.ms !== false ? "." + pad3(this.getMilliseconds()) : "") + this.getUTCOffset().hhmm;
    };
    /**Get a Date ISO String from your locale timezone, it is falsy because it has a "Z" at the end of the string. A "Z" indicates the timezone UTC+0.
     * @param {{ms:boolean}} options (optional) @returns {String} "yyyy-mm-ddThh:mm:ss[.ms]Z"*/
    toFalsyLocaleISOString(options = {}) {
        return pad2(this.getFullYear()) + "-" + pad2(this.getMonth() + 1) + "-" + pad2(this.getDate()) + "T" + pad2(this.getHours()) + ":" + pad2(this.getMinutes()) + ":" + pad2(this.getSeconds()) + (options?.ms !== false ? "." + pad3(this.getMilliseconds()) : "") + "Z";
    };
    /**@returns {String} "yyyy-mm-dd"*/
    yyyymmdd() {
        return this.getFullYear() + "-" + pad2(this.getMonth() + 1) + "-" + pad2(this.getDate());
    };
    /**@returns {String} "yyyy-mm"*/
    yyyymm() {
        return this.getFullYear() + "-" + pad2(this.getMonth() + 1);
    };
    /**Calculate in UTC +0 the start-time of the date's year that have elapsed since the Unix epoch in milliseconds. Return an instance of LocaleTimezoneDate if "ms" is false.
     * @param {{ms:boolean locale:boolean}} options @returns {Number} Number of milliseconds*/
    startOfYear(options = {}) {
        const _this = new LocaleTimezoneDate(this);
        _this.setMonth(0, 1);
        const ms = _this.setHours(options?.locale === false ? _this.getUTCOffset().hour : 0, 0, 0, 0);
        return options?.ms === false ? _this : ms;
    };
    /**Calculate in UTC +0 the start-time of the date's month that have elapsed since the Unix epoch in milliseconds. Return an instance of LocaleTimezoneDate if "ms" is false.
     * @param {{ms:boolean locale:boolean}} options @returns {Number} Number of milliseconds*/
    startOfMonth(options = {}) {
        const _this = new LocaleTimezoneDate(this);
        _this.setDate(1);
        const ms = _this.setHours(options?.locale === false ? _this.getUTCOffset().hour : 0, 0, 0, 0);
        return options?.ms === false ? _this : ms;
    };
    /**Calculate in UTC +0 the start-time of the date's day that have elapsed since the Unix epoch in milliseconds. Return an instance of LocaleTimezoneDate if "ms" is false.
     * @param {{ms:boolean locale:boolean}} options @returns {Number} Number of milliseconds*/
    startOfDate(options = {}) {
        const _this = new LocaleTimezoneDate(this);
        const ms = _this.setHours(options?.locale === false ? _this.getUTCOffset().hour : 0, 0, 0, 0);
        return options?.ms === false ? _this : ms;
    };
};
module.exports = LocaleTimezoneDate;