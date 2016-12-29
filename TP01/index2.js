#!/usr/bin/env node

// On invoque les mods ainsi que leur alias
const TDCG = require('commander')
const inquirer = require ('inquirer')
const db = require('sqlite')
const nb = 5


// Creation des options de commande

TDCG.version('1.0.0')
	.option('-u, --musique','questionnaire musique')
	.option('-m, --mythologie','questionnaire mythologie')
	.option('-a, --hardware','questionnaire hardware')

	

TDCG.parse(process.argv)

if (TDCG.musique) {
	launcher(1) // commence à l'Id 1
} else if (TDCG.mythologie) {
	launcher(6) // commence à l'Id 6
} else if (TDCG.hardware) {
	launcher(11) // commence à l'Id 11
} else {
	TDCG.help()
}


// partie questionnaire

function launcher(id){
	db.open('./bdd.db')
	.then(() => {
	return bdd(id)
	}).then((score) => {
	console.log('Score actuel : ',score)
	})
}


// boucle de question

function bdd(id,score) {
	if (score === undefined){
		score = 0
	}
    return db.get('SELECT * FROM bdd WHERE id = (?)', id)
    .then((question) => {
    return inquirer.prompt({
		type:'list',
		message: question['question'],
		name: 'q',
		choices:[
		question['choix1'],
		question['choix2'],
		question['choix3']],
	}).then((answer) => {
		console.log('reponse : '+answer.q)
		let juste = false
	if (answer.q == question['reponse']){
		juste = true
		score += 1
		console.log('bien joué !')
	}else{
		console.log('Faux, la réponse était : '+question['reponse']+'.')}
	if (id < 5){
		return bdd(id + 1,score)}
		return score
		})
    })
	
}