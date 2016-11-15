function createAGrid(arr,url,text) {
	arr.push("<div class='fl w-100 w-third-ns pa2'>");
	arr.push("<div class='outline pv4'> <img src='" + url + "' alt=':" + text + ":'/></div>");
  arr.push("</div>");
}

function handleData(data) {
	var emojis = $("#emojis:first");
	var arr = [];
	arr.push("<div class='mw9 center ph3-ns'>");
  arr.push("<div class='cf ph2-ns'>");
  
  for(var key in data)
		createAGrid(arr,data[key],key);

  arr.push("</div>");
	arr.push("</div>");	
	
	emojis.append(arr);
}

$(document).ready(function() {

	$.ajax({
	  	url: "https://api.github.com/emojis"
		}).done(function(res) {
	   		console.log(res);
	   		handleData(res);
		}).catch(function(err) {
			$("#emojis").html("<h1 class='b white tc f1'>Request Error !! <i class='em em-frowning'></i>  <br /> Refresh the Webpage !! <i class='em em-smile'></i> </h1>");
		});
});