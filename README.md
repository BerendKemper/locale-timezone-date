# localeTimezoneDate
JavaScript locale time zone Date module

<code>npm i locale-timezone-date</code>

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

<h3>yyyymmdd.toString(date[,callback])</h3>
<ul>
    <li><code>date</code> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date">&lt;Date></a></li>
    <li><code>callback</code> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function">&lt;Function&gt;</a></li>
    <ul>
        <li><code>dt</code> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type">&lt;string&gt;</a> | <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error">&lt;Error&gt;</a></li>
    </ul>
    <li>Returns: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type">&lt;string&gt;</a> | <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error">&lt;Error&gt;</a> | <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Undefined_type">&lt;undefined&gt;</a></li>
</ul>

<h3>yyyymmdd.toMs(date[,callback])</h3>
<ul>
    <li><code>date</code> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date">&lt;Date></a></li>
    <li><code>callback</code> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function">&lt;Function&gt;</a></li>
    <ul>
        <li><code>ms</code> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type">&lt;integer&gt;</a> | <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error">&lt;Error&gt;</a></li>
    </ul>
    <li>Returns: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type">&lt;integer&gt;</a> | <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error">&lt;Error&gt;</a> | <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Undefined_type">&lt;undefined&gt;</a></li>
</ul>

<h3>Examples</h3>
<pre>
<code class="language-javascript">const { localeTimezoneDate, yyyymmdd } = require("locale-time-zone-date");

const localeISOString = localeTimezoneDate.toISOString(new Date());
// returns "2020-08-06T13:06:50.261+0200"
const regulatISOString = new Date(localeISOString).toISOString();
// returns "2020-08-06T11:06:50.261Z"
new Date(regulatISOString).getTime() === new Date(localeISOString).getTime()
// returns true

// Notice that my timezone is UTC +2 hours
let date;
date = new Date("2020-08-06T00:00:00.000Z");
console.log(yyyymmdd.toString(date)); // returns "2020-08-06"
console.log(yyyymmdd.toMs(date));     // returns 1596672000000
date = new Date("2020-08-06T22:00:00.000Z");
console.log(yyyymmdd.toString(date)); // returns "2020-08-07"
console.log(yyyymmdd.toMs(date));     // returns 1596758400000

date = new Date("2020-08-06T00:00:00.000+0200");
console.log(yyyymmdd.toString(date)); // returns "2020-08-06"
console.log(yyyymmdd.toMs(date));     // returns 1596672000000
date = new Date("2020-08-06T22:00:00.000+0200");
console.log(yyyymmdd.toString(date)); // returns "2020-08-06"
console.log(yyyymmdd.toMs(date));     // returns 1596672000000

localeTimezoneDate.toISOString(new Date(), iso => {
    console.log(iso); // returns "2020-08-06T13:06:50.261+0200"
});

let cheat = iso => console.log("cheated!...", iso);
cheat.ms = false;
localeTimezoneDate.toISOString(new Date(), cheat);
// returns "cheated!... 2020-08-06T13:06:50+0200"
</code>
</pre>
