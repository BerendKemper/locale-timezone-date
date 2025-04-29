"use strict";
class LocaleTimezoneDate extends Date {
    get hhmmssms() {
        return `${this.hhmmss}.${String(this.getUTCMilliseconds()).padStart(3, 0)}`;
    }
    get hhmmss() {
        return `${String(this.getHours()).padStart(2, 0)}:${String(this.getMinutes()).padStart(2, 0)}:${String(this.getSeconds()).padStart(2, 0)}`;
    }
    /**@returns {String} "yyyy-mm-dd"*/
    get yyyymmdd() {
        return `${this.yyyymm}-${String(this.getDate()).padStart(2, 0)}`;
    };
    /**@returns {String} "yyyy-mm"*/
    get yyyymm() {
        return `${String(this.getFullYear()).padStart(4, 0)}-${String(this.getMonth() + 1).padStart(2, 0)}`;
    };
    get utcOffset() {
        return this.getTimezoneOffset() / -60;
    }
    get clone() {
        return new this.constructor(this);
    }
    /**Returns the ISO String from the locale timezone.
     * @param {{ms:boolean}} options (optional) @returns {String} `yyyy-mm-ddThh:mm:ss[.ms]+hhmm`*/
    toLocaleISOString(options = {}) {
        const utcOffset = String(this.utcOffset).padStart(2, 0).padEnd(4, 0);
        return `${this.yyyymmdd}T${options?.ms !== false ? this.hhmmssms : this.hhmmss}+${utcOffset}`;
    };
    /**Returns locale start of the year. If option `locale` is `false` returns the UTC+0 start of the year.
     * @param {{locale:boolean}} options */
    startOfYear(options = {}) {
        this.setMonth(0, 0);
        return this.startOfDate(options);
    };
    /**Returns locale start of the month. If option `locale` is `false` returns the UTC+0 start of the month.
     * @param {{locale:boolean}} options */
    startOfMonth(options = {}) {
        this.setDate(1);
        return this.startOfDate(options);
    };
    /**Returns locale start of the date. If option `locale` is `false` returns the UTC+0 start of the date.
     * @param {{locale:boolean}} options */
    startOfDate(options = {}) {
        this.setHours((options?.locale === false ? this.utcOffset : 0), 0, 0, 0);
        return this;
    };
};
module.exports = LocaleTimezoneDate;