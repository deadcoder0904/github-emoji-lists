function handleData(data) {
	var emojis = $("#emojis:first");
	var arr = [];
	var c = 0;
  for(var key in data) {
		if(c % 3 == 0) {
			arr.push("<div class='mw9 center ph3-ns'>");
  		arr.push("<div class='cf ph2-ns'>");
  	}

		arr.push("<div class='fl w-100 w-third-ns pa2'>");
		arr.push("<div class='outline pv4'> <img class='pointer' src='" + data[key] + "' alt=':" + key + ":' /></div>");
	  arr.push("</div>");
  
		if((c + 1) % 3 == 0) {
  		arr.push("</div>");
			arr.push("</div>");	
  	}
  	c++;
  }
	emojis.append(arr.join(""));
}

$(document).ready(function() {
	$.ajax({
	  	url: "https://api.github.com/emojis"
		}).done(function(res) {
	   		handleData(res);
		}).catch(function(err) {
			$("#emojis").html("<h1 class='b white tc f1'>Request Error !! <i class='em em-frowning'></i>  <br /> Refresh the Webpage !! <i class='em em-smile'></i> </h1>");
		});
});