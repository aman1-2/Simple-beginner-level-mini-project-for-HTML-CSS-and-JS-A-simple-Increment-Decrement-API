/*So Before Incrementing or decrementing our value we first have to fetch out the numeric 
value present at the current time.
And that we can do by numerous ways either with the help of querySelector() or with the help
of getElementById() method */

//Extracting the value from my div...
const contentValue=document.querySelector( "#contentValue" );

//Incrementing Funcion....
const increment= ()=>{
    /*The value whixh we have Extracted is in string format and before incrementing or
    decrementing it we first need to convert it in integer format.
    
    But actually we haven't extarcted the value insted we have extarcted the whole id div
    and we can have its .innerText with the help of this method.
    
    which we can convert it into int with the help of parseInt function.*/
    let value = parseInt(contentValue.innerText);
    value+=1; //Here we have incremented the value.

    /*Now we have Replaced our contentValue with the value(variable) to have new display 
    value in our browser window*/
    contentValue.innerText=value;
}

//Decrement Function....
const decrement= ()=>{
     /*The value whixh we have Extracted is in string format and before incrementing or
    decrementing it we first need to convert it in integer format.
    
    But actually we haven't extarcted the value insted we have extarcted the whole id div
    and we can have its .innerText with the help of this method.
    
    which we can convert it into int with the help of parseInt function.*/
    let value = parseInt(contentValue.innerText);
    value-=1; //Here we have incremented the value.

    /*Now we have Replaced our contentValue with the value(variable) to have new display 
    value in our browser window*/
    contentValue.innerText=value;
}


/*The actual logic code we have used is:-
(i) Extracting the value. 
(ii) Then writing Increment or Decrement function.
(iii) At the end displaying it.*/