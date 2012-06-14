var pronet = {};

(function () {

	pronet.getData = function (callback) {

	$.ajax({
			url: "data.xml",
			type: "get"
		}).fail(function () {
            console.log("fail");
		}).success(function (xml) {
			console.log(xml);
			pronet._xml = xml;
			pronet.makeJSON();

			if (typeof callback === "function") {
				callback(pronet.data);
			}
		});		
	};

	pronet.makeJSON = function () {
		var xml = pronet.xml;
		var data = {};

		console.log(xml);

	};

	pronet.getData();
	
}());
