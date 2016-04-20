/*

*/
function senden(button_id){ 
	var sen = null;
	if(sen == null){
		sen = new XMLHttpRequest();
	}
	var taste = document.getElementById(button_id);
	if(taste.innerHTML == 'Start'){
		sen.open('POST', 'http://botnet.artificial.engineering:8080/api/Status', true);
		sen.send('ID, stop');
	}
	else{
		sen.open('POST', 'http://botnet.artificial.engineering:8080/api/Status', true);
		sen.send('ID, start');
	}
};