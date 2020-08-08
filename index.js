"use strict";
const pad2 = number => number < 10 ? "0" + number : number;
const pad3 = number => number < 10 ? "00" + number : number < 100 ? "0" + number : number;
const getUTCOffset = date => {
    const hour = date.getTimezoneOffset() / -60;
    return { hhmm: "+" + pad2(hour) + "00", hour };
};
/**
 * Locale time zone Date ISO String
 * @param {Date} date 
 * @param {Object} options (optional) 
 * @param {Boolean} options.ms
 * @param {Function} callback (optional)
 * @returns {String} "yyyy-mm-ddThh:mm:ss[.ms]+hhmm"
 */
const localeTimezoneDate_toISOString = (date, options = { ms: true }, callback = iso => iso) => {
    if (typeof options === "function")
        callback = options;
    return callback(pad2(date.getFullYear()) + "-" + pad2(date.getMonth() + 1) + "-" + pad2(date.getDate()) + "T" + pad2(date.getHours()) + ":" + pad2(date.getMinutes()) + ":" + pad2(date.getSeconds()) + (options.ms !== false ? "." + pad3(date.getMilliseconds()) : "") + getUTCOffset(date).hhmm);
};
/**
 * Locale time zone Date false ISO String
 * @param {Date} date 
 * @param {Object} options (optional) 
 * @param {Boolean} options.ms
 * @param {Function} callback (optional)
 * @returns {String} "yyyy-mm-ddThh:mm:ss[.ms]Z"
 */
const localeTimezoneDate_toFalseISOString = (date, options = { ms: true }, callback = iso => iso) => {
    if (typeof options === "function")
        callback = options;
    return callback(pad2(date.getFullYear()) + "-" + pad2(date.getMonth() + 1) + "-" + pad2(date.getDate()) + "T" + pad2(date.getHours()) + ":" + pad2(date.getMinutes()) + ":" + pad2(date.getSeconds()) + (options.ms !== false ? "." + pad3(date.getMilliseconds()) : "") + "Z");
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
const yyyymmdd_toString = (date, callback = dt => dt) => callback(pad2(date.getFullYear()) + "-" + pad2(date.getMonth() + 1) + "-" + pad2(date.getDate()));
/**
 * Locale time zone start time of the date in milliseconds
 * @param {Date} date 
 * @param {Function} callback (optional)
 * @returns {Number} Number of milliseconds that have elapsed since the Unix epoch
 */
const yyyymmdd_toMs = (date, callback = ms => ms) => callback(date.setHours(getUTCOffset(date).hour, 0, 0, 0));
const yyyymmdd = Object.freeze({
    'toString': yyyymmdd_toString,
    'toMs': yyyymmdd_toMs
});
module.exports = Object.freeze({ localeTimezoneDate, yyyymmdd });