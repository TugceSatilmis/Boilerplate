/*
Das hier ist unser eigener CNC server (es gibt viele server aber dieser ist unsrer, Full Metal Jacket)
Er macht das selbe wie auch der server von Chris
*/
//Framework
var express = require('express');
var app = express();
//Vermittler/übersetzer für CORS Headers
var cors = require('cors');
//file reader
var fs = require('fs');
//Vermittler/übersetzer für Json und URL encoded data
var bodyParser = require('body-parser');

//die arrays für status bzw. Tasks
var statusArray = [];
var taskArray = [];
//unser token
var unserToken = '8d5e8be2efb2756510f8daf76b1094b2';

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

consolee.log('server lebt!')


//Hier starten die funktionen des servers

//Get API für status
//Ganze status Tabelle als Array
app.get('/api/status'), (req, res) => {
	fs.readFile('./speicher/status.json', 'utf8', (err, data) => {
		if(err) throw err;
		console.log('Status liste wurde abgerufen.');
		statusArray = JSON.parse(data);
		res.json(JSON.parse(data));
	});
};

//Nur ein Status als Objekt
app.get('/api/status/:id'), (req, res) => {
	arrayFuellen();
	if(sucheElement(req, statusArray) != 0){
		res.send(JSON.stringify(sucheElement(req, statusArray)));
		console.log('eine gültige ID wurde in der statustabelle abgefragt');
	}else{
		console.log('eine ungültige ID wurde in der statustabelle abgefragt');
	}
};

//Post API für status
app.post('/api/status/:id', (req,res) => {
	arrayFuellen();
	if(tokenTester(req.get('Token'))){
		if(sucheElement(req, statusArray) != 0){
			statusArray[sucheElement(req, statusArray).id-1].workload = req.body.workload;
			var eingabe = JSON.stringify(statusArray);
			fs.writeFile('./speicher/status.json', eingabe, (err) => {
				if (err) throw err;
				console.log("erfolgreich in status gepostet"); 
			});
			res.send(JSON.stringify({message: 'OK'}));
		}else{
			res.send(JSON.stringify({message: 'NOT OK'}));
		}
	}else{
		res.send(JSON.stringify('Fehler: Illegaler Token'));
	}
});

//Get API für Tasks
//Ganze Task Tabelle als Array
app.get('/api/task'), (req, res) => {
	fs.readFile('./speicher/task.json', 'utf8', (err, data) => {
		if(err) throw err;
		console.log('task liste wurde abgerufen.');
		taskArray = JSON.parse(data);
		res.json(JSON.parse(data));
	});
};

//nur einen Task als Objekt
app.get('/api/task/:id'), (req, res) => {
	arrayFuellen();
	if(sucheElement(req, taskArray) != 0){
		res.send(JSON.stringify(sucheElement(req, taskArray)));
		console.log('eine gültige ID wurde in der tasktabelle abgefragt');
	}else{
		console.log('eine ungültige ID wurde in der tasktabelle abgefragt');
	}
};

//Post API für Tasks
app.post('/api/tasks/:id', (req,res) => {
		arrayFuellen();
	if(tokenTester(req.get('Token'))){
		if(sucheElement(req, taskArray) != 0){
			console.log('Ein bereits bestehender Task wird verändert');
			taskArray.forEach((punkt)=> {
				if (punkt.id == req.body.id) {
					punkt.type = req.body.type;
					punkt.data = req.body.data;
					item.data.output = 'wird vom bot erstellt';
				}
			});	
		}else{
			console.log('Ein neuer task wurde erstellt');
			var neueId = taskArray.length + 1;
			taskArray.push(
				{
					id: neueId,
					type: req.body.type,
					data: {
						input: req.body.data.input,
						output: 'wird vom bot erstellt'
					}
				}
			);
		}
		fs.writeFile('./speicher/task.json', JSON.stringify(taskArray));
	}else{
		res.send(JSON.stringify('Fehler: Illegaler Token'));
		console.log('Erstellen/bearbeiten eines Tasks war erfolgreich');
	}
});




//Delete API für Tasks









//Hier starten die Hilfsfunktionen des servers

//Durchsucht das entsprechende JSON nach dem elemet mit der gewünschten ID und gibt dieses zurück
var sucheElement = function (req, ziel){
	var idAlsNummer = req.params.id.replace(":", "");
	if(idAlsNummer < 1){
		return 0;
	}else{
		for(var i = 0; i < ziel.length; i++){
			if(ziel[i] == idAlsNummer){
				return ziel[i];
			}
		}
	}
	return 0;
}

//initiales füllen der arrays
var arrayFuellen = function (){
	fs.readFile('./speicher/status.json', 'utf8', (err, data) => {
		if(err) throw err;
		statusArray = JSON.parse(data);
	});
	fs.readFile('./speicher/tasks.json', 'utf8', (err, data) => {
		if(err) throw err;
		taskArray = JSON.parse(data);
	});
};

//überprüft ob der Token unser token ist und returnt einen boolean
var tokenTester = function (token){
	if(token === unserToken){
		console.log('Postrequest hatte den richtigen token.');
		return true;
	}else{
		console.log('Eine nicht Autorisierte person wollte einen post request machen.');
		return false;
	}
};


//zuweisung des server Listener ports
app.listen(3000), () => {
	console.log('Listener laeuft auf port 3000');
};

//ausführen
arrayFuellen();



//DELETE button für Interface


/*
Danksagungen:
Danke an Dire Straits, Metallica und Eric Clapton für die musikalische untermalung beim Basteln ihr seit die besten
*/