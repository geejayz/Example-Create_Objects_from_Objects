var carObject = {
	make: "audi",
	model: "a3",
	year: 2014,
	depreciation: function() { return (2016 - this.year) + "%";},
	color: "black"
};


var bmw = Object.create(carObject);
bmw.make = "BMW";
bmw.model = "M5";
bmw.year = 2011;

console.log(bmw.depreciation());
