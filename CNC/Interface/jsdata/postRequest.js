/*
zu erst wird eine Json erstellt
dann wird per je nach button status per XHR eine post request auf den server gestertet
als inhalt wird die zu beginn genutzte JSon übergeben
*/
//8d5e8be2efb2756510f8daf76b1094b2   token

var sendata;
  
var senden = function(type, comand) {
  var sen = new XMLHttpRequest();
  sen.open('POST', 'http://botnet.artificial.engineering:8080/api/Tasks');
  sen.responseType = 'json';
  sen.setRequestHeader('Content-type', 'application/json; charset=UTF-8');
  sen.setRequestHeader('TOKEN', '8d5e8be2efb2756510f8daf76b1094b2');
  sen.onload = function() {
	//für später
  };
  sendata = {"action": comand , "type": type};
  sen.send(sendata);
  return true;
};
