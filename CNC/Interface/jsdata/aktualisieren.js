/*
Diese funktion aktualisiert jede sekunden halbe sekunde (möglichst life) die tabellen
*/

var aktualisieren = function(){
	setInterval(function () {tabelleninhalt();}, 5000);
	setInterval(function () {taskTabelleninhalt();}, 5000);
};