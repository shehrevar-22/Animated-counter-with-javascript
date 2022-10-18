<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta http-equiv="Content-Style-Type" content="text/css">
  <title></title>
  <meta name="Generator" content="Cocoa HTML Writer">
  <meta name="CocoaVersion" content="2113.6">
  <style type="text/css">
    p.p1 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px Helvetica}
    p.p2 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px Helvetica; min-height: 14.0px}
  </style>
</head>
<body>
<p class="p1">// select the element</p>
<p class="p1">const counters = document.querySelectorAll('.counter');</p>
<p class="p2"><br></p>
<p class="p1">// iterate through all the counter elements</p>
<p class="p1">counters.forEach(counter =&gt; {</p>
<p class="p1"><span class="Apple-converted-space">  </span>// function to increment the counter</p>
<p class="p1"><span class="Apple-converted-space">  </span>function updateCount() {</p>
<p class="p1"><span class="Apple-converted-space">    </span>const target = +counter.getAttribute('data-count');</p>
<p class="p1"><span class="Apple-converted-space">    </span>const count = +counter.innerHTML;</p>
<p class="p2"><br></p>
<p class="p1"><span class="Apple-converted-space">    </span>const inc = Math.floor((target - count) / 100);</p>
<p class="p2"><br></p>
<p class="p1"><span class="Apple-converted-space">    </span>if (count &lt; target &amp;&amp; inc &gt; 0) {</p>
<p class="p1"><span class="Apple-converted-space">      </span>counter.innerHTML = (count + inc);</p>
<p class="p1"><span class="Apple-converted-space">      </span>// repeat the function</p>
<p class="p1"><span class="Apple-converted-space">      </span>setTimeout(updateCount, 1);</p>
<p class="p1"><span class="Apple-converted-space">    </span>}</p>
<p class="p1"><span class="Apple-converted-space">    </span>// if the count not equal to target, then add remaining count</p>
<p class="p1"><span class="Apple-converted-space">    </span>else {</p>
<p class="p1"><span class="Apple-converted-space">      </span>counter.innerHTML = target;</p>
<p class="p1"><span class="Apple-converted-space">    </span>}</p>
<p class="p1"><span class="Apple-converted-space">  </span>}</p>
<p class="p1"><span class="Apple-converted-space">  </span>updateCount();</p>
<p class="p1">});</p>
</body>
</html>
