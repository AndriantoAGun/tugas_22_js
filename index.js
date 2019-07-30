function displayStr(){
	var str = "Saya ingin belajar bersama";

	// konversi string menjadi array
	var arr = str.split(" ");

	// looping foreach array
	arr.forEach(function(item, index, array){
		console.log("Item : " + item + " Index ke " + index);
	})
}

displayStr();
