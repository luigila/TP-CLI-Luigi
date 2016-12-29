#!/usr/bin/env node
/*
const TDCG = require ('commander')
const db = require ('sqlite')
const program = require ('inquirer') 

//sqlite
db.open('database.db').then(() => {
  return console.log('chargement réussi')
  return db.run('CREATE TABLE IF NOT EXISTS bdd (pseudo, thème, question, réponse)')
}).then(() => {
  return db.all('SELECT * FROM bdd')
}).then((users) => {
  console.log(users)
}).catch((err) => {
  console.log('failed > ', err)


//commander 
program
	.version('1.0.0')
	.option('-u, --musique' , 'Thème musique')
	.option('-h, --hardware' , 'Thème hardware') 
	.option('-m, --mythologie', 'Thème mythologie')

program.parse(process.argv) 

if (program.world) {
	console.log('Thème musique') 
} else if (program.all) {
	console.log('Thème hardware')
} else if (program.someone) {
} else { 
	program.help()
}

//inquirer
inquirer.prompt ([
	{
	type: 'checkbox',
		message: 'Question 1',
		name: 'database',
		choices: [
	   	   'xoxo',
		   'xoxoxo', 
		   'xoxo'
	{
	type: 'checkbox',
		message: 'Question 2',
		name: 'database',
		choices: [
	   	   'xoxo',
		   'xoxoxo', 
		   'xoxo' 
	},{
		type: 'checkbox',
		message: 'Question 3',
		name: 'database',
		choices: [
	   	   'xoxo',
		   'xoxoxo', 
		   'xoxo'
		]
	   }
]}.then((answers) => {
	console.log(answers)
})
