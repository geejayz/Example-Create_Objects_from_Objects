var carObject = {
	make: "audi",
	model: "a3",
	year: 2014,
	depreciation: function() { return (2016 - this.year) + "%";},
	color: "black"
};


var bmw = Object.create(carObject);
bmw.make = "bmw";
bmw.model = "M5";
bmw.year = 2011;

console.log(bmw.depreciation());

carObject.notes = "Leather Interior";  
// This still gets copied over to any new objects created from this object
console.log(bmw.notes);

bmw.special = "4WD";
//The following however will return an error
console.log(carObject.special);


for (var key in bmw) {
	//Show everything that hasn't been inherited from the source
	if(bmw.hasOwnProperty(key)) {
		console.log(key + " : " + bmw[key]);
	}
}
