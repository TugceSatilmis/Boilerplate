//gibt an welcher art von sortierung gewünscht ist
var asc = true;
//die kopfzeile der status tabelle
var kopf = document.querySelector('#status-overview thead');
//inhalt der kopf zeile
var inhaltkopf = '';

/*
Steuerungs funktion der sortierung
*/
var sortierenTabelle = function(spalte){
	if(asc == true) {
        tabelData.sort(SortAsc(spalte));
		asc = false;
    }
    else {
        tabelData.sort(SortDesc(spalte));
		asc = true;
    }
	tabelleFuellen();
};

/*
Eigendlicher sortierungs algorytmuss für ASC
*/
var SortAsc = function(prop) {
    return function(a,b) {
            if (typeof a[prop] === 'string' || a[prop] instanceof String){
                return a[prop].localeCompare(b[prop]);
            }else{
                return a[prop] - b[prop];
            }
    };
};

/*
Eigendlicher sortierungs algorytmuss für DESC
*/
var SortDesc = function(prop) {
    return function (a, b) {
            if (typeof a[prop] === 'string' || a[prop] instanceof String){
                return b[prop].localeCompare(a[prop]);
            }else{
                return b[prop] - a[prop];
            }
    };
};