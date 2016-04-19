/*
Liest Tabellen durch .querySelector

*/
var sortierenTabelle = function(){
	//einzelne segmente aus der klar holen
	//kop = head; ko = body; z = zeile; s = spalte; i = zelleninhalt; n = anzahl
	var kopfi = document.querySelector('#status-overview thead tr th');
	var koz = [].slice.call(document.querySelectorAll('#status-overview tbody tr'));
	console.log(typeof koz.forEach);
	console.log(koz);
	console.log(koz.length);
	var nkoz = 0;
	koz.forEach(function(tr) {
		nkoz++;
	});
	console.log(nkoz);
	//Testfall
	if(nkoz == 0){
		console.log('es gibt nur eine oder weniger zeilen');
		return;
	}
	//da ich array sort nutzen möchte erstelle ich jetzt ein array
	var inhalt = new Array(nkoz);
	
	
	console.log('aktuell läuft er durch');
};

/*
Hier soll mal ein sortieralgorythmuss ohne Fremd framework draus werden...
(das ist nerviger als erwartet...)
*/