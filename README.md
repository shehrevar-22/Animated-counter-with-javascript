# Animated-counter-with-javascript
You would have already seen animated numbers counters on some fancy websites. These are numbers counters that instead of directly showing the number, are animated and show the number in a smooth manner as they increase.<br>
 <b>HTML Structure :</b><br>
1. Use <main> tag and create the main container of the application by giving it class counter-container.<br>
2. Use the <div> element to create a container for the social media presence counter.<br>
3. Within this element, create 3 elements:<br>
A. Social Icon - This section contains the social icon for social media applications created using font-awesome.<br>
B. Counter name - This section contains the what counter is for, like Facebook likes, Twitter followers, Youtube subscribers, and LinkedIn connections.<br>
C. Counter value - It is actual number that is shown on the counter.<br>
<b> Paste font-awesome library in head of your HTML file</b><br>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"> <br>
<b>JavaScript Structure:</b><br>
First, select all the counter elements and store them in a variable using the querySelectorAll method.<br>
It will select all the elements with the class counter and store them in a variable as a node list.<br>
The function updateCounter will do the following things:<br>
* Get the target value of the counter stored as a data-count attribute.<br>
* Get the current value of the counter.<br>
* Starting from 0, if we increase the current value by 1, it will take a long time to reach the target value for larger numbers. So create a variable increment that will increase the counter by 100th part of the remaining target value every time the function is called. i.e increment = (target - current) / 100.,br>
* Now, check if the current value is less than the target value and increment > 0. If yes, then increment the current value by increment and call the function again.<br>
* If the increment becomes 0 then simply set the current value to the target value.<br>
