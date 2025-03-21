// 메서드 오버라이드
var Person = function (name) {
	this.name = name;
};

Person.prototype.getName = function () {
	return this.name;
};

var iu = new Person('지금');
iu.getName = function () {
	return '바로' + this.name;
};

console.log(iu.getName()); // 바로 지금

console.log(iu.__proto__.getName()); // undefined

Person.prototype.name = '이지금';
console.log(iu.__proto__.getName()); // 이지금

console.log(iu.__proto__.getName.call(iu)); // 이지금
