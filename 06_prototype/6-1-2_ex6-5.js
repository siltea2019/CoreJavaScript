var Person = function (name) {
	this._name = name;
};

var p1 = new Person('사람1');
var p1Proto = Object.getPrototypeOf(p1);
var p2 = new Person.prototype.constructor('사람2');
var p3 = new p1Proto.constructor('사람3');
var p4 = new p1.__proto__.constructor('사람4');
var p5 = new p1.constructor('사람5');

[p1, p2, p3, p4, p5].forEach(function (p) {
	console.log(p, p instanceof Person);
});

// 동일한 대상을 가리킴
[Constructor][instance].__proto__.constructor[instance].constructor;
// 모두 동일한 객체(prototype)에 접근
Object.getPrototypeOf([instance]).constructor[Constructor].prototype.constructor[Constructor]
	.prototype[instance].__proto__[instance];
Object.getPrototypeOf([instance]);
