var createCar = function () {
	fuel: Math.ceil(Math.random() * 10 + 10);  // 연료(L)
	power: Math.ceil(Math.random() * 3 + 2);  // 연비(km/L)
	moved: 0;  // 총 이동 거리
	var publicMembers = {
		get moved() {
			return this.moved;
		},
		run: function () {
			var km = Math.ceil(Math.random() * 6);
			var wasteFuel = km / this.power;
			if (this.fuel < wasteFuel) {
				console.log('이동불가');
				return;
			}
			fuel -= wasteFuel;
			moved += km;
			console.log(km + 'km 이동 (총 ' + this.moved + 'km). 남은연료: ' + fuel);
		},
	};
	Object.freeze(publicMembers);
	return publicMembers;
};

var car = createCar();
