"use strict";
const pad2 = number => number < 10 ? "0" + number : number;
const pad3 = number => number < 10 ? "00" + number : number < 100 ? "0" + number : number;
class LocaleTimezoneDate extends Date {
	/**
	 * @returns {Object} {shhmm, hour}
	 */
	getUTCOffset() {
		const hour = this.getTimezoneOffset() / -60;
		return { hhmm: "+" + pad2(hour) + "00", hour };
	};
	/**Get a Date ISO String from your locale timezone.
	 * @param {Object} options (optional) 
	 * @param {Boolean} options.ms
	 * @returns {String} "yyyy-mm-ddThh:mm:ss[.ms]+hhmm"
	 */
	toLocaleISOString(options = {}) {
		return pad2(this.getFullYear()) + "-" + pad2(this.getMonth() + 1) + "-" + pad2(this.getDate()) + "T" + pad2(this.getHours()) + ":" + pad2(this.getMinutes()) + ":" + pad2(this.getSeconds()) + (options.ms !== false ? "." + pad3(this.getMilliseconds()) : "") + this.getUTCOffset().hhmm;
	};
	/**Get a Date ISO String from your locale timezone, it is falsy because it has a "Z" at the end of the string. A "Z" indicates the timezone UTC+0.
	 * @param {Object} options (optional) 
	 * @param {Boolean} options.ms
	 * @returns {String} "yyyy-mm-ddThh:mm:ss[.ms]Z"
	 */
	toFalsyLocaleISOString(options = {}) {
		return pad2(this.getFullYear()) + "-" + pad2(this.getMonth() + 1) + "-" + pad2(this.getDate()) + "T" + pad2(this.getHours()) + ":" + pad2(this.getMinutes()) + ":" + pad2(this.getSeconds()) + (options.ms !== false ? "." + pad3(this.getMilliseconds()) : "") + "Z";
	};
	/**Get 
	 * @returns {String} "yyyy-mm-dd"
	 */
	yyyymmdd() {
		return this.getFullYear() + "-" + pad2(this.getMonth() + 1) + "-" + pad2(this.getDate());
	};
	/**Start of the month Date String
	 * @returns {String} "yyyy-mm"
	 */
	yyyymm() {
		return this.getFullYear() + "-" + pad2(this.getMonth() + 1);
	};
	/**Calculate in UTC +0 the start-time of the date's year that have elapsed since the Unix epoch in milliseconds
	 * @returns {Number} Number of milliseconds
	 */
	msStartOfYear() {
		const _this = new LocaleTimezoneDate(this);
		_this.setMonth(0, 1);
		return _this.setHours(_this.getUTCOffset().hour, 0, 0, 0);
	};
	/**Calculate in UTC +0 the start-time of the date's month that have elapsed since the Unix epoch in milliseconds
	 * @returns {Number} Number of milliseconds
	 */
	msStartOfMonth() {
		const _this = new LocaleTimezoneDate(this);
		_this.setDate(1);
		return _this.setHours(_this.getUTCOffset().hour, 0, 0, 0);
	};
	/**Calculate in UTC +0 the start-time of the date's day that have elapsed since the Unix epoch in milliseconds
	 * @returns {Number} Number of milliseconds
	 */
	msStartOfDate() {
		const _this = new LocaleTimezoneDate(this);
		return _this.setHours(_this.getUTCOffset().hour, 0, 0, 0);
	};
};
module.exports = LocaleTimezoneDate;