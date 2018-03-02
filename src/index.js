module.exports = function longestConsecutiveLength(array) {

 array = array.sort(function (a, b) {return a-b});
  
 let counter = 0, helpcounter = 1;
 if(array.length == 0){
 	return 0;
 }
 if(array.length == 1){
 	return 1;
 }

 for(let i = 0; i < array.length; i++) {
  	
  	if(array[i+1] - array[i] == 1)
  	{
  		helpcounter++;
  		
  	}
  	else if (array[i+1] - array[i] == 0){
  		continue;
  	} 
  	else {  
  		if (helpcounter > counter) {
  			counter = helpcounter;
  		    }
  		  helpcounter = 1;
        }
    
  
}
return counter;
}


