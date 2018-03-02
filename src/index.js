module.exports = function longestConsecutiveLength(array) {
  
  array.sort((a, b) => a-b)
  let counter = 0;;
  let helpcounter = 1;
  if (array.length == 0){
  	return counter;
  }
  if (array.length == 1){
  	return helpcounter;
  }
  for(let i = 0; i < array.length;) {
  	let helpcounter = 1;

  	if(array[i+1]- array[i] == 1)
  	{
  		helpcounter++;
  		i++
  	} else if (array[i] = array[i+1]){
  		continue;
  	} else {
  		if (helpcounter > counter) {
  		
  		counter = helpcounter;
  		helpcounter = 1;
  	}
  }
}

  return counter;
}
