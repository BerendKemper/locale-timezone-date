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
    <li><a href="https://github.com/BerendKemper/locale-timezone-date#localetimezonedatemsstartofyearoptions">LocaleTimezoneDate.msStartOfYear([options])</a></li>
    <li><a href="https://github.com/BerendKemper/locale-timezone-date#localetimezonedatemsstartofmonthoptions">LocaleTimezoneDate.msStartOfMonth([options])</a></li>
    <li><a href="https://github.com/BerendKemper/locale-timezone-date#localetimezonedatemsstartofdateoptions">LocaleTimezoneDate.msStartOfDate([options])</a></li>
    <li><a href="https://github.com/BerendKemper/locale-timezone-date#examples">Examples</a></li>
</ul>

<pre><code>npm i locale-timezone-date
<br>
const LocaleTimezoneDate = require("locale-timezone-date");</code></pre>
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
<h3>localeTimezoneDate.msStartOfYear([options])</h3>
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
				If <code>true</code> the returned value from this method <code>msStartOfYear</code> is set to locale timezone and if <code>false</code> the returned value is set to UTC0.
			</details>
		</ul>
	</details>
	<details>
		<summary>
			Returns: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type">&lt;integer&gt;</a>
		</summary>
		The returned value from this method <code>msStartOfYear</code> is the time in milliseconds after Epoch of the start of the year from  <code>localeTimezoneDate</code>. The time in milliseconds after Epoch can be parsed into a correct JavaScript's native <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date">Date</a> instance.
	</details>
</ul>
<h3>localeTimezoneDate.msStartOfMonth([options])</h3>
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
				If <code>true</code> the returned value of this method <code>startMonthToMs</code> is set to locale timezone and if <code>false</code> the returned value is set to UTC0.
			</details>
		</ul>
	</details>
	<details>
		<summary>
			Returns: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type">&lt;integer&gt;</a>
		</summary>
		The returned value from this method <code>startMonthToMs</code> is the time in milliseconds after Epoch of the start of the month from  <code>localeTimezoneDate</code>. The time in milliseconds after Epoch can be parsed into a correct JavaScript's native <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date">Date</a> instance.
	</details>
</ul>
<h3>localeTimezoneDate.msStartOfDate([options])</h3>
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
				If <code>true</code> the returned value of this method <code>startDateToMs</code> is set to locale timezone and if <code>false</code> the returned value is set to UTC0.
			</details>
		</ul>
	</details>
	<details>
		<summary>
			Returns: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type">&lt;integer&gt;</a>
		</summary>
		The returned value from this method <code>startDateToMs</code> is the time in milliseconds after Epoch of the start of the day from  <code>localeTimezoneDate</code>. The time in milliseconds after Epoch can be parsed into a correct JavaScript's native <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date">Date</a> instance.
	</details>
</ul>
<h3>Examples</h3>

```javascript
const LocaleTimezoneDate = require("locale-timezone-date");
//
//
let localeDate = new LocaleTimezoneDate();
console.log(localeDate instanceof Date);
true
//
//
/////////////////////////////////////////////////
// toLocaleISOString
//
console.log(localeDate.toLocaleISOString());
"2021-03-03T11:19:32.333+0100"
console.log(new Date(localeDate.toLocaleISOString()).toISOString() === localeDate.toISOString());
true
//
//
/////////////////////////////////////////////////
// toFalsyLocaleISOString
//
console.log(localeDate.toFalsyLocaleISOString());
"2021-03-03T11:19:32.333Z"
console.log(new Date(localeDate.toFalsyLocaleISOString()).toISOString() === localeDate.toISOString());
false
//
//
/////////////////////////////////////////////////
// yyyymmdd - TIME UTC0 - HOUR 0
//
const H00_Z = "2020-08-06T00:00:00.000Z";
localeDate = new LocaleTimezoneDate(H00Z);
console.log(localeDate.yyyymmdd());
"2020-08-06"
console.log(localeDate.getUTCOffset());
{ hhmm: '+0200', hour: 2 }
//
// yyyymmdd - TIME UTC0 - HOUR 22
//
const H22_Z = "2020-08-06T22:00:00.000Z";
localeDate = new LocaleTimezoneDate(H22Z);
console.log(localeDate.yyyymmdd());
"2020-08-07"
console.log(localeDate.getUTCOffset());
{ hhmm: '+0200', hour: 2 }
//
//
/////////////////////////////////////////////////
// yyyymmdd - LOCALE TIME - HOUR 0
//
const H00_UTC2 = "2020-08-06T00:00:00.000+0200";
localeDate = new LocaleTimezoneDate(H00_UTC2);
console.log(localeDate.yyyymmdd());
"2020-08-06"
console.log(localeDate.getUTCOffset());
{ hhmm: '+0200', hour: 2 }
//
// yyyymmdd - LOCALE TIME - HOUR 22
//
const H22_UTC2 = "2020-08-06T22:00:00.000+0200";
localeDate = new LocaleTimezoneDate(H22_UTC2);
console.log(localeDate.yyyymmdd());
"2020-08-06"
console.log(localeDate.getUTCOffset());
{ hhmm: '+0200', hour: 2 }
//
//
/////////////////////////////////////////////////
// msStartOfYear - START OF THE YEAR - LOCALE
//
localeDate = new LocaleTimezoneDate();
const msStartOfYearLocale = localeDate.msStartOfYear();
console.log(new Date(msStartOfYearLocale).toISOString());
"2020-12-31T23:00:00.000Z"
console.log(new LocaleTimezoneDate(msStartOfYearLocale).toLocaleISOString());
"2021-01-01T00:00:00.000+0100"
//
// msStartOfYear - START OF THE YEAR - NOT LOCALE
//
const msStartOfYear = localeDate.msStartOfYear({ locale: false });
console.log(new Date(msStartOfYear).toISOString());
"2021-01-01T00:00:00.000Z"
console.log(new LocaleTimezoneDate(msStartOfYear).toLocaleISOString());
"2021-01-01T01:00:00.000+0100"
//
//
/////////////////////////////////////////////////
// msStartOfMonth - START OF THE MONTH - LOCALE
//
const msStartOfMonthLocale = localeDate.msStartOfMonth();
console.log(new Date(msStartOfMonthLocale).toISOString());
"2021-02-28T23:00:00.000Z"
console.log(new LocaleTimezoneDate(msStartOfMonthLocale).toLocaleISOString());
"2021-03-01T00:00:00.000+0100"
//
// msStartOfMonth - START OF THE MONTH - NOT LOCALE
//
const msStartOfMonth = localeDate.msStartOfMonth({ locale: false });
console.log(new Date(msStartOfMonth).toISOString());
"2021-03-01T00:00:00.000Z"
console.log(new LocaleTimezoneDate(msStartOfMonth).toLocaleISOString());
"2021-03-01T01:00:00.000+0100"
//
//
/////////////////////////////////////////////////
// msStartOfDate - START OF THE DAY - LOCALE
//
const msStartOfDateLocale = localeDate.msStartOfDate();
console.log(new Date(msStartOfDateLocale).toISOString());
"2021-03-02T23:00:00.000Z"
console.log(new LocaleTimezoneDate(msStartOfDateLocale).toLocaleISOString());
"2021-03-03T00:00:00.000+0100"
//
// msStartOfDate - START OF THE DAY - NOT LOCALE
//
const msStartOfDate = localeDate.msStartOfDate({ locale: false });
console.log(new Date(msStartOfDate).toISOString());
"2021-03-03T00:00:00.000Z"
console.log(new LocaleTimezoneDate(msStartOfDate).toLocaleISOString());
"2021-03-03T01:00:00.000+0100"
```