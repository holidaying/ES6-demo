document.write("let array = [1, 4, -5, 10].find((n) => n < 0)"+'<br>');
let array = [1, 4, -5, 10].find((n) => n < 0)
document.write("array:", array+'<br>');
document.write("let array = [1, 5, 10, 15].find(function(value, index, arr) {if(value>10) return index;}) "+'<br>');
let arrayIndx = [1, 5, 10, 15].findIndex(function(value, index, arr) {
	if(value>10)
  	return index;
}) 
document.write("arrayIndex:"+arrayIndx);  // 10