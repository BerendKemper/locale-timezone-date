# localeTimezoneDate
JavaScript locale time zone Date module
<br>
<h3>Table of Contents</h3>
<ul>
    <li><a href="https://github.com/BerendKemper/locale-timezone-date#localetimezonedate">LocaleTimezoneDate</a></li>
    <li><a href="https://github.com/BerendKemper/locale-timezone-date#localetimezonedatetolocaleisostringoptions">LocaleTimezoneDate.toLocaleISOString([options]])</a></li>
    <li><a href="https://github.com/BerendKemper/locale-timezone-date#localetimezonedatetofalsylocaleisostringoptions">LocaleTimezoneDate.toFalsyLocaleISOString([options])</a></li>
    <li><a href="https://github.com/BerendKemper/locale-timezone-date#localetimezonedateyyyymmdd">LocaleTimezoneDate.yyyymmdd()</a></li>
    <li><a href="https://github.com/BerendKemper/locale-timezone-date#localetimezonedateyyyymm">LocaleTimezoneDate.yyyymm()</a></li>
    <li><a href="https://github.com/BerendKemper/locale-timezone-date#localetimezonedatestartofyearoptions">LocaleTimezoneDate.startOfYear([options])</a></li>
    <li><a href="https://github.com/BerendKemper/locale-timezone-date#localetimezonedatestartofmonthoptions">LocaleTimezoneDate.startOfMonth([options])</a></li>
    <li><a href="https://github.com/BerendKemper/locale-timezone-date#localetimezonedatestartofdateoptions">LocaleTimezoneDate.startOfDate([options])</a></li>
    <li><a href="https://github.com/BerendKemper/locale-timezone-date#examples">Examples</a></li>
</ul>
<pre><code>npm i locale-timezone-date</code></pre>

```javascript
const LocaleTimezoneDate = require("locale-timezone-date");
```
<h2>Class: <code>LocaleTimezoneDate</code></h2>
All of <code>LocaleTimezoneDate</code> prototype methods from default return values that are locale to the timezone of where the method has been invoked. This means that the UTC offset has been taken into account. In a certain range of the year the UTC offset changes with 1 hour, these methods provided in <code>LocaleTimezoneDate</code> take such hour shifting into account. There are examples below
<h3>localeTimezoneDate.toLocaleISOString([options]])</h3>
<ul>
	<details>
		<summary>
			<code>options</code> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object">&lt;Object&gt;</a> optional
		</summary>
		<ul>
			<details>
				<summary>
					<code>ms</code> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type">&lt;Boolean&gt;</a> Default: <code>true</code>
				</summary>
				If <code>true</code> the returned value follows the notation <b>YYYY-MM-DDThh:mm:ss.ms+UTCOffset</b> and if <code>false</code> the value will follow the notation <b>YYYY-MM-DDThh:mm:ss+UTCOffset</b>.
			</details>
    	</ul>
	</details>
	<details>
		<summary>
			Returns: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type">&lt;string&gt;</a>
		</summary>
		The returned value from this method <code>toLocaleISOString</code> is a date ISO string similair to the returned value from <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date">Date</a>.<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString">ToISOString</a>. The returned value from this method <code>toLocaleISOString</code> can be parsed by JavaScript's native <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date">Date</a> class. The string follows the notation <b>YYYY-MM-DDThh:mm:ss[.ms]+UTCOffset</b>.
	</details>
</ul>
<h3>localeTimezoneDate.toFalsyLocaleISOString([options])</h3>
<ul>
	<details>
		<summary>
			<code>options</code> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object">&lt;Object&gt;</a> optional
		</summary>
		<ul>
			<details>
				<summary>
					<code>ms</code> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type">&lt;Boolean&gt;</a> Default: <code>true</code>
				</summary>
				If <code>true</code> the returned value follows the notation <b>YYYY-MM-DDThh:mm:ss.msZ</b> and if <code>false</code> the value will follow the notation <b>YYYY-MM-DDThh:mm:ssZ</b>.
			</details>
		</ul>
	</details>
	<details>
		<summary>
			Returns: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type">&lt;string&gt;</a>
		</summary>
		The returned value from this method <code>toFalsyLocaleISOString</code> is a date ISO string similair to the returned value from <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date">Date</a>.<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString">ToISOString</a>. However, it returnes an incorrect date ISO string because the string ends with a "Z" instead of a "+UTCOffset". A "Z" indicates the timezone offset is set to UTC0 but the string is locale and therefore it returns an incorrect value. The string follows the notation <b>YYYY-MM-DDThh:mm:ss[.ms]Z</b>.
	</details>
</ul>
<h3>localeTimezoneDate.yyyymmdd()</h3>
<ul>
	<details>
		<summary>
			Returns: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type">&lt;string&gt;</a>
		</summary>
		The returned value from this method <code>yyyymmdd</code> is a string following the notation <b>YYYY-MM-DD</b>.
	</details>
</ul>
<h3>localeTimezoneDate.yyyymm()</h3>
<ul>
	<details>
		<summary>
			Returns: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type">&lt;string&gt;</a>
		</summary>
		The returned value from this method <code>yyyymm</code> is a string following the notation <b>YYYY-MM</b>.
	</details>
</ul>
<h3>localeTimezoneDate.startOfYear([options])</h3>
<ul>
	<details>
		<summary>
			<code>options</code> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object">&lt;Object&gt;</a> optional
		</summary>
		<ul>
			<details>
				<summary>
					<code>locale</code> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type">&lt;Boolean&gt;</a> Default: <code>true</code>
				</summary>
				If <code>locale</code> is set to <code>false</code> the returned value is UTC0, otherwise is locale to the timezone.
			</details>
			<details>
				<summary>
					<code>ms</code> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type">&lt;Boolean&gt;</a> Default: <code>true</code>
				</summary>
				If <code>ms</code> is set to <code>false</code> the returned value is a <code>localeTimezoneDate</code>, otherwise in milliseconds after Unix Epoch.
			</details>
		</ul>
	</details>
	<details>
		<summary>
			Returns: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type">&lt;integer&gt;</a> | &lt;localeTimezoneDate&gt;
		</summary>
		Default this method behaves with <code>locale</code> <code>true</code> and <code>ms</code> <code>true</code>.
	</details>
</ul>
<h3>localeTimezoneDate.startOfMonth([options])</h3>
<ul>
	<details>
		<summary>
			<code>options</code> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object">&lt;Object&gt;</a> optional
		</summary>
		<ul>
			<details>
				<summary>
					<code>locale</code> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type">&lt;Boolean&gt;</a> Default: <code>true</code>
				</summary>
				If <code>locale</code> is set to <code>false</code> the returned value is UTC0, otherwise is locale to the timezone.
			</details>
			<details>
				<summary>
					<code>ms</code> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type">&lt;Boolean&gt;</a> Default: <code>true</code>
				</summary>
				If <code>ms</code> is set to <code>false</code> the returned value is a <code>localeTimezoneDate</code>, otherwise in milliseconds after Unix Epoch.
			</details>
		</ul>
	</details>
	<details>
		<summary>
			Returns: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type">&lt;integer&gt;</a> | &lt;localeTimezoneDate&gt;
		</summary>
		Default this method behaves with <code>locale</code> <code>true</code> and <code>ms</code> <code>true</code>.
	</details>
</ul>
<h3>localeTimezoneDate.startOfDate([options])</h3>
<ul>
	<details>
		<summary>
			<code>options</code> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object">&lt;Object&gt;</a> optional
		</summary>
		<ul>
			<details>
				<summary>
					<code>locale</code> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type">&lt;Boolean&gt;</a> Default: <code>true</code>
				</summary>
				If <code>locale</code> is set to <code>false</code> the returned value is UTC0, otherwise is locale to the timezone.
			</details>
			<details>
				<summary>
					<code>ms</code> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type">&lt;Boolean&gt;</a> Default: <code>true</code>
				</summary>
				If <code>ms</code> is set to <code>false</code> the returned value is a <code>localeTimezoneDate</code>, otherwise in milliseconds after Unix Epoch.
			</details>
		</ul>
	</details>
	<details>
		<summary>
			Returns: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type">&lt;integer&gt;</a> | &lt;localeTimezoneDate&gt;
		</summary>
		Default this method behaves with <code>locale</code> <code>true</code> and <code>ms</code> <code>true</code>.
	</details>
</ul>
<h3>Examples</h3>

```javascript
const LocaleTimezoneDate = require("locale-timezone-date");
//
//
let localeDate = new LocaleTimezoneDate();
console.log(localeDate instanceof Date);
// true
//
//
/////////////////////////////////////////////////
// toLocaleISOString
//
console.log(localeDate.toLocaleISOString());
// "2021-04-09T09:15:43.062+0200"
console.log(new Date(localeDate.toLocaleISOString()).toISOString() === localeDate.toISOString());
// true
//
//
/////////////////////////////////////////////////
// toFalsyLocaleISOString
//
console.log(localeDate.toFalsyLocaleISOString());
// "2021-04-09T09:15:43.062Z"
console.log(new Date(localeDate.toFalsyLocaleISOString()).toISOString() === localeDate.toISOString());
// false
//
//
/////////////////////////////////////////////////
// yyyymmdd - TIME UTC0 - HOUR 0
//
const H00_Z = "2020-08-06T00:00:00.000Z";
localeDate = new LocaleTimezoneDate(H00_Z);
console.log(localeDate.yyyymmdd());
// "2020-08-06"
console.log(localeDate.getUTCOffset());
// { hhmm: '+0200', hour: 2 }
//
// yyyymmdd - TIME UTC0 - HOUR 22
//
const H22_Z = "2020-08-06T22:00:00.000Z";
localeDate = new LocaleTimezoneDate(H22_Z);
console.log(localeDate.yyyymmdd());
// "2020-08-07"
console.log(localeDate.getUTCOffset());
// { hhmm: '+0200', hour: 2 }
//
//
/////////////////////////////////////////////////
// yyyymmdd - LOCALE TIME - HOUR 0
//
const H00_UTC2 = "2020-08-06T00:00:00.000+0200";
localeDate = new LocaleTimezoneDate(H00_UTC2);
console.log(localeDate.yyyymmdd());
// "2020-08-06"
console.log(localeDate.getUTCOffset());
// { hhmm: '+0200', hour: 2 }
//
// yyyymmdd - LOCALE TIME - HOUR 22
//
const H22_UTC2 = "2020-08-06T22:00:00.000+0200";
localeDate = new LocaleTimezoneDate(H22_UTC2);
console.log(localeDate.yyyymmdd());
// "2020-08-06"
console.log(localeDate.getUTCOffset());
// { hhmm: '+0200', hour: 2 }
//
//
/////////////////////////////////////////////////
// msStartOfYear - START OF THE YEAR - LOCALE
//
localeDate = new LocaleTimezoneDate();
const startOfYearLocale = localeDate.startOfYear({ ms: false });
console.log(startOfYearLocale.toISOString());
// "2020-12-31T23:00:00.000Z"
console.log(startOfYearLocale.toLocaleISOString());
// "2021-01-01T00:00:00.000+0100"
//
// msStartOfYear - START OF THE YEAR - NOT LOCALE
//
const startOfYear = localeDate.startOfYear({ ms: false, locale: false });
console.log(startOfYear.toISOString());
// "2021-01-01T00:00:00.000Z"
console.log(startOfYear.toLocaleISOString());
// "2021-01-01T01:00:00.000+0100"
//
//
/////////////////////////////////////////////////
// msStartOfMonth - START OF THE MONTH - LOCALE
//
const startOfMonthLocale = localeDate.startOfMonth({ ms: false });
console.log(startOfMonthLocale.toISOString());
// "2021-03-31T22:00:00.000Z"
console.log(startOfMonthLocale.toLocaleISOString());
// "2021-04-01T00:00:00.000+0200"
//
// msStartOfMonth - START OF THE MONTH - NOT LOCALE
//
const startOfMonth = localeDate.startOfMonth({ ms: false, locale: false });
console.log(startOfMonth.toISOString());
// "2021-04-01T00:00:00.000Z"
console.log(startOfMonth.toLocaleISOString());
// "2021-04-01T02:00:00.000+0200"
//
//
/////////////////////////////////////////////////
// msStartOfDate - START OF THE DAY - LOCALE
//
const startOfDateLocale = localeDate.startOfDate({ ms: false });
console.log(startOfDateLocale.toISOString());
// "2021-04-08T22:00:00.000Z"
console.log(startOfDateLocale.toLocaleISOString());
// "2021-04-09T00:00:00.000+0200"
//
// msStartOfDate - START OF THE DAY - NOT LOCALE
//
const startOfDate = localeDate.startOfDate({ ms: false, locale: false });
console.log(startOfDate.toISOString());
// "2021-04-09T00:00:00.000Z"
console.log(startOfDate.toLocaleISOString());
// "2021-04-09T02:00:00.000+0200"
```