/*
Diese funktion aktualisiert alle 5 sekunden die tabellen
*/

var aktualisieren = function(){
	setInterval(function () {tabelleFuellen();}, 5000);
	setInterval(function () {tasktTabelleFuellen;}, 5000);
};