"use strict";

let Races = require("./races");


function Warrior () {
	this.health += Math.floor(Math.random() * (80 - 60) + 60);
	this.attack += Math.floor(Math.random() * (20 - 10) + 10);
	this.class = "Warrior";
}
// Place holder for event listner
Warrior.prototype = new Races.Human();

function Mage () {
	this.health += Math.floor(Math.random() * (60 - 40) + 40);
	this.attack += Math.floor(Math.random() * (40 - 30) + 30);
	this.class = "Mage";
}
// Place holder for event listner
Mage.prototype = new Races.Human();

function Archer () {
	this.health += Math.floor(Math.random() * (70 - 50) + 50);
	this.attack += Math.floor(Math.random() * (30 - 20) + 20);
	this.class = "Archer";
}
// Place holder for event listner
Archer.prototype = new Races.Elf();

function Wizard () {
	this.health += Math.floor(Math.random() * (55 - 45) + 45);
	this.attack += Math.floor(Math.random() * (35 - 25 ) + 25);
	this.class = "Wizard";
}
// Place holder for event listner
Wizard.prototype = new Races.Elf();

function Beserker () {
	this.health += Math.floor(Math.random() * (75 - 55) + 55);
	this.attack += Math.floor(Math.random() * (25 - 15) + 15);
	this.class = "Beserker";
}
// Place holder for event listner
Beserker.prototype = new Races.Orc();

function Shaman () {
	this.health += Math.floor(Math.random() * (70 - 50) + 50);
	this.attack += Math.floor(Math.random() * (30 - 20) + 20);
	this.class = "Shaman";
}
// Place holder for event listner
Shaman.prototype = new Races.Orc();

function Fire () {
	this.health += Math.floor(Math.random() * (100 - 75) + 75);
	this.attack += Math.floor(Math.random() * (40 - 15) + 15);
	this.class = "Fire";
	this.name = "Fire Dragon";
}
// Place holder for event listner
Fire.prototype = new Races.Dragon();

function Ice () {
	this.health += Math.floor(Math.random() * (100 - 75) + 75);
	this.attack += Math.floor(Math.random() * (40 - 15) + 15);
	this.class = "Ice";
	this.name = "Ice Dragon";
	this.boss = true;
	this.equipment = "Ice Breath";
}
// Place holder for event listner
Ice.prototype = new Races.Dragon();


module.exports = {Warrior, Mage, Archer, Wizard, Beserker, Shaman, Fire, Ice};