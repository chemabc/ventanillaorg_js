window.onload = function () {
	//Recuperando JSON 
	var data = JSON.parse(jotason); //require('../dataJson/test.json'); //with path
	console.log("Data length: " + data.length);

	/**********************************
	 * 	 GRAPH TIEMPO 
	 **********************************/
	max = -99999;

	for(i = 0; i < data.length; i++){
		if (data[i].tiempo >= max){
			//console.log("New max = " + data[i].tiempo)
			max = data[i].tiempo;
		}
	}
	console.log("Tiempo Max: " + max);
	//Hacer un escalado del eje X
	var x = d3.scale.linear()
		.domain([0, max])
		.range([0, 900]);
	
	d3.select(".chartTime")
		.selectAll("div")
		.data(data)
		.enter()
		.append("div")
		.style("width", function(d){return x(d.tiempo)+"px";})
		.text(function(d){return d.tiempo;});
	
	
}
