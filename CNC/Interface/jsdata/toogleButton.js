/*
Erkennt Buttons durch .getElementById anhand der ID welche in Filltable
durchnummeriert wird.
.innerHTML wird zum prüfen des inhaltes genutzt und zum verändern des
Selbigen.
Desweiteren wird eine farbliche änderung bei klick erwirkt
*/
function toogleButton(button_id){ 
	var taste = document.getElementById(button_id);
	var stutssen = new XMLHttpRequest();
	var intid = parseInt(button_id);
	//stutssen.open('POST','http://botnet.artificial.engineering:8080/api/Status/');
	stutssen.open('POST','http://localhost:3000/api/Status/:'+ intid);
	stutssen.responseType = 'json';
	stutssen.setRequestHeader('content-type','application/json');
	stutssen.setRequestHeader('Token','8d5e8be2efb2756510f8daf76b1094b2');
	intid += 1;
	var statusdate = {
		id: intid,
		status: true
	};
	if(taste.innerHTML == 'Start'){
		taste.innerHTML = 'Stop';
		taste.style.backgroundColor = 'red';
		statusdate.status = true;
	}
	else{
		taste.innerHTML = 'Start';
		taste.style.backgroundColor = 'green';
		statusdate.status = false;
	}
	 stutssen.send(JSON.stringify(statusdate));
};