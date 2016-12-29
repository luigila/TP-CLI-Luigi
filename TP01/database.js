#!/usr/bin/env node
const db = require ('sqlite')

//database
db.open('database.db').then(() => {
	return console.log('chargement réussi')
}).then(() => {
	return db.run('CREATE TABLE IF NOT EXISTS bdd (id, theme, question, reponse, possible)')
}).catch((err) =>{
    console.log('erreur de chargement >', err)
}).then(() => {
	let id = 1
	let theme = 'musique'
	let question = 'Comment nomme-t-on la musique electro ?'
	let reponse = 'EDM'
	let possible = ['EMD','AMD','EDM']
return db.run('INSERT INTO bdd VALUES (?, ?, ?, ?, ?, ?, ?)', id, theme, question, reponse)
}).then(() => {
	let id = 2
	let theme = 'musique'
	let question = 'En quelle année a été créé le groupe Panthera ?'
	let reponse = '1891'
	let possible = ['1981','1991','1978']
return db.run('INSERT INTO bdd VALUES (?, ?, ?, ?, ?, ?, ?)', id, theme, question, reponse)
}).then(() => {
	let id = 3
	let theme = 'musique'
	let question = 'Quelle est la base de la dubstep ?'
	let reponse = 'Oscillation'
	let possible = ['Oscillation','Samples','Basse']
return db.run('INSERT INTO bdd VALUES (?, ?, ?, ?, ?, ?, ?)', id, theme, question, reponse)
}).then(() => {
	let id = 4
	let theme = 'musique'
	let question = 'Qui a composé sa principale oeuvre en étant sourd ?'
	let reponse = 'Beethoven'
	let possible = ['Chopin','Beethoven','Bach']
return db.run('INSERT INTO bdd VALUES (?, ?, ?, ?, ?, ?, ?)', id, theme, question, reponse)
}).then(() => {
	let id = 5
	let theme = 'musique'
	let question = 'Quel type denceinte professionnelle est utilisé pendant la composition ?'
	let reponse = 'Monitoring'
	let possible = ['Subwoofer','LFO','Monitoring']
return db.run('INSERT INTO bdd VALUES (?, ?, ?, ?, ?, ?, ?)', id, theme, question, reponse)
}).then(() => {
	let id = 6
	let theme = 'mythologie'
	let question = 'Quel est la représentation Romaine du dieu du commerce ?'
	let reponse = 'Mercure'
	let possible = ['Hermès','Osiris','Mercure']
return db.run('INSERT INTO bdd VALUES (?, ?, ?, ?, ?, ?, ?)', id, theme, question, reponse)
}).then(() => {
	let id = 7
	let theme = 'mythologie'
	let question = 'Comment nomme-t-on la bête aux plusieurs têtes ?'
	let réponse = 'Hydre'
	let possible = ['Hydroponie','Hydre','Manticore']
return db.run('INSERT INTO bdd VALUES (?, ?, ?, ?, ?, ?, ?)', id, theme, question, reponse)
}).then(() => {
	let id = 8
	let theme = 'mythologie'
	let question = 'Qui est le père de tous dans la mythologie Grecque ?'
	let réponse = 'Ouranos'
	let possible = ['Kronos','Zeus','Ouranos']
return db.run('INSERT INTO bdd VALUES (?, ?, ?, ?, ?, ?, ?)', id, theme, question, reponse)
}).then(() => {
	let id = 9
	let theme = 'mythologie'
	let question = 'Quel est la representation du faucon chez les Égyptien ?'
	let réponse = 'Horus'
	let possible = ['Osiris','Horus','Sekhmet']
return db.run('INSERT INTO bdd VALUES (?, ?, ?, ?, ?, ?, ?)', id, theme, question, reponse)
}).then(() => {
	let id = 10
	let thème = 'mythologie'
	let question = 'Comment nomme-t-on la fin du monde chez les Nordiques ?'
	let reponse = 'Ragnarok'
	let possible = ['Ragnarok','Ragnar','Götterdämmerung']
return db.run('INSERT INTO bdd VALUES (?, ?, ?, ?, ?, ?, ?)', id, theme, question, reponse)
}).then(() => {
	let id = 11
	let theme = 'hardware'
	let question = 'Quel est le composant fédérateur dun ordinateur ?'
	let reponse = 'Motherboard'
	let possible = ['CPU','Motherboard','GPU']
return db.run('INSERT INTO bdd VALUES (?, ?, ?, ?, ?, ?, ?)', id, theme, question, reponse)
}).then(() => {
	let id = 12
	let theme = 'hardware'
	let question = 'Quel est lunité de mesure de mémoire du GPU'
	let reponse = 'VRAM'
	let possible = ['VRAM','RAM','Hertz']
return db.run('INSERT INTO bdd VALUES (?, ?, ?, ?, ?, ?, ?)', id, theme, question, reponse)
}).then(() => {
	let id = 13
	let theme = 'hardware'
	let question = 'Comment se nomme le lien entre deux composant ?'
	let reponse = 'Bus'
	let possible = ['Datalink','Chord','Bus']
return db.run('INSERT INTO bdd VALUES (?, ?, ?, ?, ?, ?, ?)', id, theme, question, reponse)
}).then(() => {
	let id = 14
	let theme = 'hardware'
	let question = 'Donnez le nom de la technique de double CG'
	let reponse = 'SLI'
	let possible = ['Firewire','Displayport','SLI']
return db.run('INSERT INTO bdd VALUES (?, ?, ?, ?, ?, ?, ?)', id, theme, question, reponse)
}).then(() => {
	let id = 15
	let theme = 'hardware'
	let question = 'Quel est lindice de temps de réponse sur de la RAM ?'
	let reponse = 'CAS'
	let possible = ['CAS','Hertz','Freq']
return db.run('INSERT INTO bdd VALUES (?, ?, ?, ?, ?, ?, ?)', id, theme, question, reponse)
}).then(() => {
	return db.all("SELECT * FROM bdd")
}).then((bdd) => {
	return console.log(bdd)
}).catch((err) =>{
    console.log('erreur decriture dans la base', err)
}).then(() => {
	return console.log('_____________________________________')
}).then(() => {
	var rand = Math.floor(Math.random() * 5) + 0
	return db.all('SELECT * FROM bdd WHERE id = (?)', rand)
}).then((bdd) => {
	return console.log(bdd)
}).catch((err) =>{
    console.log('erreur dans la base de données', err)
})