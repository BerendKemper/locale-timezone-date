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
/**
 * Regular Date String
 * @param {Date} date
 * @param {Function} callback (optional)
 * @returns {String} "yyyy-mm-dd"
 */
const notation_yyyymmdd = (date, callback = dt => dt) => callback(date.getFullYear() + "-" + pad2(date.getMonth() + 1) + "-" + pad2(date.getDate()));
/**
 * Start of the month Date String
 * @param {Date} date
 * @param {Function} callback (optional)
 * @returns {String} "yyyy-mm-01"
 */
const notation_yyyymm01 = (date, callback = dt => dt) => callback(date.getFullYear() + "-" + pad2(date.getMonth() + 1) + "-01");
/**
 * Calculate in UTC +0 the start-time of the date's year that have elapsed since the Unix epoch in milliseconds
 * @param {Date} date 
 * @param {Function} callback (optional)
 * @returns {Number} Number of milliseconds
 */
const utc0_startYearToMs = (date, callback = dt => dt) => {
    date.setHours(getUTCOffset(date).hour, 0, 0, 0);
    return callback(date.setMonth(0, 1));
};
/**
 * Calculate in UTC +0 the start-time of the date's month that have elapsed since the Unix epoch in milliseconds
 * @param {Date} date 
 * @param {Function} callback (optional)
 * @returns {Number} Number of milliseconds
 */
const utc0_startMonthToMs = (date, callback = dt => dt) => {
    date.setHours(getUTCOffset(date).hour, 0, 0, 0);
    return callback(date.setDate(1));
};
/**
 * Calculate in UTC +0 the start-time of the date's day that have elapsed since the Unix epoch in milliseconds
 * @param {Date} date 
 * @param {Function} callback (optional)
 * @returns {Number} Number of milliseconds
 */
const utc0_startDateToMs = (date, callback = dt => dt) => callback(date.setHours(getUTCOffset(date).hour, 0, 0, 0));
const localeTimezoneDate = Object.freeze({
    'toISOString': localeTimezoneDate_toISOString,
    'toFalseISOString': localeTimezoneDate_toFalseISOString
});
const notation = Object.freeze({
    'yyyymmdd': notation_yyyymmdd,
    'yyyymm01': notation_yyyymm01
});
const utc0 = Object.freeze({
    'startYearToMs': utc0_startYearToMs,
    'startMonthToMs': utc0_startMonthToMs,
    'startDateToMs': utc0_startDateToMs
});
module.exports = Object.freeze({ localeTimezoneDate, notation, utc0 });