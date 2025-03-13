var Person = function (name) {
	this._name = name;
};
Person.prototype.getName = function () {
	return this._name;
};

var suzi = new Person('Suzi');
suzi.__proto__.getName(); // undefined
Person.prototype === suzi.__proto__; //ture

var suzi = new Person('Suzi');
suzi.__proto__._name = 'SUZI.__proto__'
suzi.__proto__.getName();  // SUZI.__proto__

var suzi = new Person('Suzi', 28);
suzi.getName();  // Suzi
var iu = new Person('Jieun', 28);
iu.getName(); // Jieun