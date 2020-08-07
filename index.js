"use strict";
const pad2 = number => number < 10 ? "0" + number : number;
const pad3 = number => number < 10 ? "00" + number : number < 100 ? "0" + number : number;
const getUTCOffset = date => {
    const hour = date.getTimezoneOffset() / -60;
    return { hhmm: "+" + pad2(hour) + "00", hour };
};
const defaultOptions_toISOString = { ms: true };
const defaultCallback = (err, data) => data || err;
/**
 * Locale time zone Date ISO String
 * @param {Date} date 
 * @param {{ Boolean }} options.ms (optional) default true
 * @param {Function} callback (optional)
 * @returns {String} "yyyy-mm-ddThh:mm:ss[.ms]+hhmm"
 */
const localeTimezoneDate_toISOString = (date, options = defaultOptions_toISOString, callback = defaultCallback) => {
    if (typeof options === "function") {
        callback = options;
        options = defaultOptions_toISOString;
    }
    if (date instanceof Date)
        return callback(null, pad2(date.getFullYear()) + "-" + pad2(date.getMonth() + 1) + "-" + pad2(date.getDate()) + "T" + pad2(date.getHours()) + ":" + pad2(date.getMinutes()) + ":" + pad2(date.getSeconds()) + (options.ms === true ? "." + pad3(date.getMilliseconds()) : "") + getUTCOffset(date).hhmm);
    else
        return callback(new TypeError("date must be a Date"), null);
};
/**
 * Locale time zone Date false ISO String
 * @param {Date} date 
 * @param {{Object}} options.ms (optional) default true
 * @param {Function} callback (optional)
 * @returns {String} "yyyy-mm-ddThh:mm:ss[.ms]Z"
 */
const localeTimezoneDate_toFalseISOString = (date, options = defaultOptions_toISOString, callback = defaultCallback) => {
    if (typeof options === "function") {
        callback = options;
        options = defaultOptions_toISOString;
    }
    if (date instanceof Date)
        return callback(null, pad2(date.getFullYear()) + "-" + pad2(date.getMonth() + 1) + "-" + pad2(date.getDate()) + "T" + pad2(date.getHours()) + ":" + pad2(date.getMinutes()) + ":" + pad2(date.getSeconds()) + (options.ms === true ? "." + pad3(date.getMilliseconds()) : "") + "Z");
    else
        return callback(new TypeError("date must be a Date"), null);
};
const localeTimezoneDate = Object.freeze({
    'toISOString': localeTimezoneDate_toISOString,
    'toFalseISOString': localeTimezoneDate_toFalseISOString
});
/**
 * Locale time zone Date String
 * @param {Date} date
 * @param {Function} callback (optional)
 * @returns {String} "yyyy-mm-dd"
 */
const yyyymmdd_toString = (date, callback = defaultCallback) => {
    if (date instanceof Date)
        return callback(null, pad2(date.getFullYear()) + "-" + pad2(date.getMonth() + 1) + "-" + pad2(date.getDate()));
    else
        return callback(new TypeError("date must be a Date"), null);
};
/**
 * Locale time zone start time of the date in milliseconds
 * @param {Date} date 
 * @param {Function} callback (optional)
 * @returns {Number} Number of milliseconds that have elapsed since the Unix epoch
 */
const yyyymmdd_toMs = (date, callback = defaultCallback) => {
    if (date instanceof Date)
        return callback(null, date.setHours(getUTCOffset(date).hour, 0, 0, 0));
    else
        return callback(new TypeError("date must be a Date"), null);
};
const yyyymmdd = Object.freeze({
    'toString': yyyymmdd_toString,
    'toMs': yyyymmdd_toMs
});
module.exports = Object.freeze({ localeTimezoneDate, yyyymmdd });