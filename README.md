# localeTimezoneDate
JavaScript locale time zone Date module

<h3>Table of Contents</h3>
<ul>
    <li><a href="https://github.com/BerendKemper/locale-timezone-date#localetimezonedatetoisostringdateoptionscallback">localeTimezoneDate.toISOString(date[,options][,callback])</a></li>
    <li><a href="https://github.com/BerendKemper/locale-timezone-date#localetimezonedatetofalseisostringdateoptionscallback">localeTimezoneDate.toFalseISOString(date[,options][,callback])</a></li>
    <li><a href="https://github.com/BerendKemper/locale-timezone-date#notationyyyymmdddatecallback">dateNotation.yyyymmdd(date[,callback])</a></li>
    <li><a href="https://github.com/BerendKemper/locale-timezone-date#notationyyyymmdatecallback">dateNotation.yyyymm(date[,callback])</a></li>
    <li><a href="https://github.com/BerendKemper/locale-timezone-date#utc0startyeartomsdatecallback">utc0.startYearToMs(date[,callback])</a></li>
    <li><a href="https://github.com/BerendKemper/locale-timezone-date#utc0startmonthtomsdatecallback">utc0.startMonthToMs(date[,callback])</a></li>
    <li><a href="https://github.com/BerendKemper/locale-timezone-date#utc0startdatetomsdatecallback">utc0.startDateToMs(date[,callback])</a></li>
    <li><a href="https://github.com/BerendKemper/locale-timezone-date#examples">Examples</a></li>
</ul>

<pre><code>npm i locale-timezone-date

const { localeTimezoneDate, dateNotation, utc0 } = require("locale-timezone-date");</code></pre>

<h3>localeTimezoneDate.toISOString(date[,options][,callback])</h3>
<ul>
    <li><code>date</code> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date">&lt;Date></a></li>
    <li><code>options</code> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object">&lt;Object&gt;</a></li>
    <ul>
        <li><code>ms</code> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type">&lt;Boolean&gt;</a> Default: <code>true</code></li>
    </ul>
    <li><code>callback</code> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function">&lt;Function&gt;</a></li>
    <ul>
        <li><code>iso</code> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type">&lt;string&gt;</a> | <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error">&lt;Error&gt;</a></li>
    </ul>
    <li>Returns: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type">&lt;string&gt;</a> | <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error">&lt;Error&gt;</a> | <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Undefined_type">&lt;undefined&gt;</a></li>
</ul>
<pre><code>const localeISOString = localeTimezoneDate.toISOString(new Date());
// returns "2020-08-06T13:06:50.261+0200"
//
const regulatISOString = new Date(localeISOString).toISOString();
// returns "2020-08-06T11:06:50.261Z"
//
new Date(regulatISOString).getTime() === new Date(localeISOString).getTime()
// returns true</code></pre>
<h3>localeTimezoneDate.toFalseISOString(date[,options][,callback])</h3>
<ul>
    <li><code>date</code> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date">&lt;Date></a></li>
    <li><code>options</code> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object">&lt;Object&gt;</a></li>
    <ul>
        <li><code>ms</code> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type">&lt;Boolean&gt;</a> Default: <code>true</code></li>
    </ul>
    <li><code>callback</code> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function">&lt;Function&gt;</a></li>
    <ul>
        <li><code>iso</code> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type">&lt;string&gt;</a> | <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error">&lt;Error&gt;</a></li>
    </ul>
    <li>Returns: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type">&lt;string&gt;</a> | <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error">&lt;Error&gt;</a> | <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Undefined_type">&lt;undefined&gt;</a></li>
</ul>
<pre><code>const localeFalseISOString = localeTimezoneDate.toISOString(new Date());
// returns "2020-08-06T13:06:50.261+0200"
//
const regulatISOString = new Date(localeISOString).toISOString();
// returns "2020-08-06T11:06:50.261Z"
//
(new Date(regulatISOString).getTime()
    === new Date(localeISOString).getTime())
// returns false</code></pre>
<h3>dateNotation.yyyymmdd(date[,callback])</h3>
<ul>
    <li><code>date</code> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date">&lt;Date></a></li>
    <li><code>callback</code> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function">&lt;Function&gt;</a></li>
    <ul>
        <li><code>dt</code> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type">&lt;string&gt;</a> | <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error">&lt;Error&gt;</a></li>
    </ul>
    <li>Returns: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type">&lt;string&gt;</a> | <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error">&lt;Error&gt;</a> | <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Undefined_type">&lt;undefined&gt;</a></li>
</ul>
<pre><code>let date;
// Notice that my timezone is UTC +2 hours
// ...
date = new Date("2020-08-06T00:00:00.000Z");
console.log(dateNotation.yyyymmdd(date));  // returns "2020-08-06"
date = new Date("2020-08-06T22:00:00.000Z");
console.log(dateNotation.yyyymmdd(date));  // returns "2020-08-07"
// ...
date = new Date("2020-08-06T00:00:00.000+0200");
console.log(dateNotation.yyyymmdd(date));  // returns "2020-08-06"
date = new Date("2020-08-06T22:00:00.000+0200");
console.log(dateNotation.yyyymmdd(date));  // returns "2020-08-06"</code></pre>
<h3>dateNotation.yyyymm(date[,callback])</h3>
<ul>
    <li><code>date</code> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date">&lt;Date></a></li>
    <li><code>callback</code> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function">&lt;Function&gt;</a></li>
    <ul>
        <li><code>dt</code> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type">&lt;string&gt;</a> | <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error">&lt;Error&gt;</a></li>
    </ul>
    <li>Returns: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type">&lt;string&gt;</a> | <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error">&lt;Error&gt;</a> | <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Undefined_type">&lt;undefined&gt;</a></li>
</ul>
<h3>utc0.startYearToMs(date[,callback])</h3>
<ul>
    <li><code>date</code> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date">&lt;Date></a></li>
    <li><code>callback</code> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function">&lt;Function&gt;</a></li>
    <ul>
        <li><code>ms</code> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type">&lt;integer&gt;</a> | <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error">&lt;Error&gt;</a></li>
    </ul>
    <li>Returns: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type">&lt;integer&gt;</a> | <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error">&lt;Error&gt;</a> | <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Undefined_type">&lt;undefined&gt;</a></li>
</ul>
<pre><code>new Date(utc0.startYearToMs(new Date()))
// Wed Jan 01 2020 02:00:00 GMT+0100 (Central European Standard Time)</code></pre>
<h3>utc0.startMonthToMs(date[,callback])</h3>
<ul>
    <li><code>date</code> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date">&lt;Date></a></li>
    <li><code>callback</code> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function">&lt;Function&gt;</a></li>
    <ul>
        <li><code>ms</code> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type">&lt;integer&gt;</a> | <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error">&lt;Error&gt;</a></li>
    </ul>
    <li>Returns: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type">&lt;integer&gt;</a> | <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error">&lt;Error&gt;</a> | <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Undefined_type">&lt;undefined&gt;</a></li>
</ul>
<pre><code>new Date(utc0.startMonthToMs(new Date()))
// Sat Aug 01 2020 02:00:00 GMT+0200 (Central European Summer Time)</code></pre>
<h3>utc0.startDateToMs(date[,callback])</h3>
<ul>
    <li><code>date</code> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date">&lt;Date></a></li>
    <li><code>callback</code> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function">&lt;Function&gt;</a></li>
    <ul>
        <li><code>ms</code> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type">&lt;integer&gt;</a> | <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error">&lt;Error&gt;</a></li>
    </ul>
    <li>Returns: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type">&lt;integer&gt;</a> | <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error">&lt;Error&gt;</a> | <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Undefined_type">&lt;undefined&gt;</a></li>
</ul>
<pre><code>new Date(utc0.startDateToMs(new Date()))
// Mon Aug 10 2020 02:00:00 GMT+0200 (Central European Summer Time)
//
date = new Date("2020-08-06T00:00:00.000Z");
console.log(utc0.startDateToMs(date)); // returns 1596672000000
date = new Date("2020-08-06T22:00:00.000Z");
console.log(utc0.startDateToMs(date)); // returns 1596758400000
//
date = new Date("2020-08-06T00:00:00.000+0200");
console.log(utc0.startDateToMs(date)); // returns 1596672000000
date = new Date("2020-08-06T22:00:00.000+0200");
console.log(utc0.startDateToMs(date)); // returns 1596672000000</code></pre>

<h3>Examples</h3>
<pre><code>
let oneDayMs = 1000*60*60*24; // 86400000
let now = new Date();
// Mon Aug 10 2020 22:26:33 GMT+0200 (Central European Summer Time)
(utc0.startDateToMs(now) / oneDayMs) // 18484
(utc0.startMonthToMs(now) / oneDayMs) // 18475
(utc0.startYearToMs(now) / oneDayMs) // 18262
//
localeTimezoneDate.toISOString(new Date(), iso => {
    console.log(iso); // returns "2020-08-06T13:06:50.261+0200"
});
//
let cheat = iso => console.log("cheated!...", iso);
cheat.ms = false;
localeTimezoneDate.toISOString(new Date(), cheat);
// returns "cheated!... 2020-08-06T13:06:50+0200"
</code></pre>
