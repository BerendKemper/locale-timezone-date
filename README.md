# localeTimezoneDate
JavaScript locale time zone Date module
<br>
<pre><code>npm i locale-timezone-date</code></pre>

```javascript
const LocaleTimezoneDate = require("locale-timezone-date");
```
<h2>Class: <code>LocaleTimezoneDate</code></h2>
All of <code>LocaleTimezoneDate</code> prototype methods from default return values that are locale to the timezone of where the method has been invoked. This means that the UTC offset has been taken into account. In a certain range of the year the UTC offset changes with 1 hour, these methods provided in <code>LocaleTimezoneDate</code> take such hour shifting into account. There are examples below
<h3>localeTimezoneDate.toLocaleISOString([options])</h3>
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
<h3>localeTimezoneDate.yyyymmdd</h3>
<ul>
	<details>
		<summary>
			Returns: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type">&lt;string&gt;</a>
		</summary>
		The returned value from this property is a string following the notation <b>YYYY-MM-DD</b>.
	</details>
</ul>
<h3>localeTimezoneDate.yyyymm</h3>
<ul>
	<details>
		<summary>
			Returns: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type">&lt;string&gt;</a>
		</summary>
		The returned value from this property is a string following the notation <b>YYYY-MM</b>.
	</details>
</ul>
<h3>localeTimezoneDate.hhmmssms</h3>
<ul>
	<details>
		<summary>
			Returns: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type">&lt;string&gt;</a>
		</summary>
		The returned value from this property is a string following the notation <b>hh:mm:ss.ms</b>.
	</details>
</ul>
<h3>localeTimezoneDate.hhmmss</h3>
<ul>
	<details>
		<summary>
			Returns: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type">&lt;string&gt;</a>
		</summary>
		The returned value from this property is a string following the notation <b>hh:mm:ss</b>.
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
				If <code>locale</code> is set to <code>false</code> the returned Date is the start of UTC+0, by default the start of locale timezone.
			</details>
		</ul>
	</details>
	<details>
		<summary>
			Returns: &lt;localeTimezoneDate&gt;
		</summary>
		By default this method behaves with <code>locale</code> set to <code>true</code>.
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
				If <code>locale</code> is set to <code>false</code> the returned Date is the start of UTC+0, by default the start of locale timezone.
			</details>
		</ul>
	</details>
	<details>
		<summary>
			Returns: &lt;localeTimezoneDate&gt;
		</summary>
		By default this method behaves with <code>locale</code> set to <code>true</code>.
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
				If <code>locale</code> is set to <code>false</code> the returned Date is the start of UTC+0, by default the start of locale timezone.
			</details>
		</ul>
	</details>
	<details>
		<summary>
			Returns: &lt;localeTimezoneDate&gt;
		</summary>
		By default this method behaves with <code>locale</code> set to <code>true</code>.
	</details>
</ul>
<h3>localeTimezoneDate.utcOffset</h3>
<ul>
	<details>
		<summary>
			Returns: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type">&lt;Number&gt;</a>
		</summary>
		Returns number of hours offset from UTC+0.
	</details>
</ul>
<h3>localeTimezoneDate.clone</h3>
<ul>
	<details>
		<summary>
			Returns: &lt;localeTimezoneDate&gt;
		</summary>
		Easy clone a Date object to prevent configuring time will lead to mutation of the original Date object.
	</details>
</ul>
<h3>Examples</h3>

```javascript
const LocaleTimezoneDate = require('locale-timezone-date');

new LocaleTimezoneDate().toLocaleISOString();
> '2025-04-29T14:46:18.874+0200'

new LocaleTimezoneDate().toISOString();
> '2025-04-29T12:46:18.875Z'

new Date().toISOString();
> '2025-04-29T12:46:18.875Z'

new LocaleTimezoneDate().startOfYear().toLocaleISOString();
> '2025-01-01T00:00:00.000+0100'

new LocaleTimezoneDate().startOfYear().toISOString();
> '2024-12-31T23:00:00.000Z'

new LocaleTimezoneDate().startOfYear({locale:false}).toLocaleISOString();
> '2025-01-01T01:00:00.000+0100'

new LocaleTimezoneDate().startOfYear({locale:false}).toISOString();
> '2025-01-01T00:00:00.000Z'
```