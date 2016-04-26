/*
zu erst wird eine Json erstellt
dann wird per je nach button status per XHR eine post request auf den server gestertet
als inhalt wird die zu beginn genutzte JSon übergeben
*/
function senden(button_id){ 
	var zahl;
	var art;
	var inhalt;
	var json = {
	id: zahl,
	type: art,
	data: {
		inhalt
	}
};
	var sen = null;
	if(sen == null){
		sen = new XMLHttpRequest();
	}
	var taste = document.getElementById(button_id);
	if(taste.innerHTML == 'Start'){
		sen.open('POST', 'http://botnet.artificial.engineering:8080/api/Status', true);
		sen.send(json);
	}
	else{
		sen.open('POST', 'http://botnet.artificial.engineering:8080/api/Status', true);
		sen.send(json);
	}
};
