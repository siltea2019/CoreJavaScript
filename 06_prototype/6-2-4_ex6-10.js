var Grade = function () {
	var args = Array.prototype.slice.call(arguments);
	for (var i = 0; i < args.length; i++) {
		this[i] = args[i];
	}
	this.length = args.length;
};

var g = new Grade(100, 80);

Grade.prototype = [];

console.log(g); // Grade(2) [100, 80]
g.pop();
console.log(g); // Grade(1) [100]
g.push(90);
console.log(g); // Grade(3) [100, 90]
