// UC-1//
let a= Math.floor(Math.random()*1000)+1;
let b= Math.floor(Math.random()*1000)+1;
let c= Math.floor(Math.random()*1000)+1;
let d= Math.floor(Math.random()*1000)+1;
let e= Math.floor(Math.random()*1000)+1;

console.log("Number a is"+" "+a)
console.log("Number b is"+" "+b)
console.log("Number c is"+" "+c)
console.log("Number d is"+" "+d)
console.log("Number e is"+" "+e)

if((a>=b) && (a>=c) && (a>=d) && (a>=e)){
console.log("Maxium Number is"+" "+a);
} else if ((a<=b) &&(a<=c) && (a<=d) && (a<=e)){
    console.log("Minimum Number is"+" "+a);
}else{
    console.log("Number is neither Maxium nor Minimum");
}

//UC-2//
let year=2000;
console.log("Year is"+" "+year);
let x=year%4;
let y=year%400;
let z=year%100;
if ((x==0) && (y==0) && (z==0)){
console.log(year+" "+"is a Leap Year");
}else{
    console.log(year+" "+"is not a Leap Year");
}

//UC-3

let filipCoin= (Math.floor(Math.random()*2) );
console.log("Coin is"+" "+filipCoin);
if(filipCoin==0){
    console.log("Filip Coin is head");
}else{
    console.log("Filip Coin is Tail");
}

//UC1// if-else-if

let number=Math.floor((Math.random()*10)+1);
if(number==1){
    console.log(number+" "+"Number is One");

}else if(number==2){
    console.log(number+" "+"Number is Two");

}else if (number==3){
    console.log(number+" "+"Number is Three");

}else if (number==4){
    console.log(number+" "+"Number is Four");

}else if (number==5){
    console.log(number+" "+"Number is Five");

}else if (number==6){
    console.log(number+" "+"Number is Six");
}else if (number==7){
    console.log(number+" "+"Number is Seven");

}else if (number==8){
    console.log(number+" "+"Number is Eight");

}else if (number==9){
    console.log(number+" "+"Number is Nine");

}
//UC2// 

let weekdays= Math.floor((Math.random()*7)+1);
if (weekdays==1){
    console.log(weekdays+" "+"Sunday");

}else if (weekdays==2){
    console.log(weekdays+" "+"Monday");

}else if (weekdays==3){
    console.log(weekdays+" "+"Tuesday");

}else if (weekdays==4){
    console.log(weekdays+" "+"Wednesday");

}else if (weekdays==5){
    console.log(weekdays+" "+"Thursday");

}else if (weekdays==6){
    console.log(weekdays+" "+"Friday");

}else if (weekdays==7){
    console.log(weekdays+" "+"saturday");
}


let n =13000;
if (n> 99999){
    console.log("Number is greater than 5 digit")
}else{
    console.log("Number is not greater than 5 digit")
}
let tenThousand=n/10000;
console.log("TenThousand digit is"+tenThousand);
let thousand = (n/1000)%10;
console.log("Thousand Digit is: "+thousand);
let hundered = (n%1000)/100;
console.log("Hundredth Digit is: "+hundered);
let tens = (n%100)/10;
console.log("Tenth Digit is: "+tens);
let ones= (n%10);
console.log("Ones Digit is: "+ones);


//UC-Case Statement-//

let n1=Math.floor((Math.random()*10)+1);
switch (n1) {
    case 1:
    console.log(n1+": Number is One");
    break;
    case 2:
    console.log(n1+": Number is Two");
    break;
    case 3:
    console.log(n1+ ": Number is Three");
    break;
    case 4:
    console.log(n1+ ": Number is four");
    break;
    case 5:
    console.log(n1+ ": Number is Five");
    break;
    case 6:
    console.log(n1+ ": Number is Six");
    break; 
    case 7:
    console.log(n1+ ": Number is Seven");
    break;
    case 8:
    console.log(n1+ ": Number is Eight");
    break;
    case 9:
    console.log(n1+ ": Number is Nine");      
    break;

    default:
    console.log("Number is greater than Single Digit");
        break;
}

let allWeekdays= Math.floor((Math.random()*7)+1);
switch (allWeekdays) {
    case 1:
    console.log("Sunday: "+allWeekdays);        
        break;
    case 2:
    console.log("Monday: "+allWeekdays);
        break;
    case 3:
    console.log("Tuesday: "+allWeekdays);
        break;
    case 4:
    console.log("Wednesday: "+allWeekdays);
        break;
    case 5:
    console.log("Thursday: "+allWeekdays);
        break;
    case 6:
    console.log("Friday: "+allWeekdays);
        break;
    case 7:
    console.log("Saturday: "+allWeekdays);
        break;
    default:
    console.log("None");
        break;
}

//For-Loop//

let n2=9;
let harmonic =1;

for (let i=2; i<=n2; i++){
    harmonic +=1/i;
    console.log(i);
}

let n3 =60;
console.log("The factor of number"+" "+n3+"are")
for (let i =1; i<=n3; i++){
    if (n3%i==0)
    console.log(i+" ");
}

let n4=7;
let primeNumber;
for(let i=2; i<n4; i++){
    if(n4%i==0){
    primeNumber=false;
    }else{
        primeNumber=true;
    }
    
}
console.log(primeNumber);

//While loops//

function exponentiate (base, power) {
    let count = 0
    let result = 1;
    if (power === 0){
      return 1
    }
  
    // while loop 
    while (count < power){  
  
      result *= base
      count += 1
    }

    return result 
  }
  
  console.log(exponentiate(2, 8))

  function degreeConversionToFarenite(degF, degC){
    return (degF= (degC*9/5)+32);
  }
  let degreefarenite= degreeConversionToFarenite(50, 60)
  console.log(degreefarenite);

function degreeConversionToCelsius(degC, degF){
    return (degC = (degF-32)*5/9);
}
let degreeCelsius= degreeConversionToCelsius(55,35)
console.log(degreeCelsius);