// Array Practice Problems//
let x;
let array=[484,494,595,329,485,674,393,798,568,560]
for(let i=0; i<array.length; i++){
for (let j=1; j<array.length; j++){
    if (array[i]<array[j]){
    x=array[i];
    array[i]=array[j];
    array[j]=x;
    }
}

}
console.log("second largest number is: "+ array[array.length-1]);

//UC-2
let y;
let arr=[484,494,595,329,485,674,393,798,568,560]
for(let i=0; i<arr.length; i++){
for (let j=1; j<arr.length; j++){
    if (arr[i]<arr[j]){
    y=arr[i];
    arr[i]=arr[j];
    arr[j]=y;
    }
}

}
console.log("second smallest number is: "+ arr[array.length-1]);


//UC -3 Prime Factors to store in Array////



let number=60;
console.log("The prime Factor of: "+number+" "+"are")

let arry=[];

for (let i=0; i<=number; i++){
    if (number%i==0)
    arry.push(i);
    
    }
    console.log(arry);

    //UC-4// Sum of Three Integer Zero

    let array1=[1,3,-2,1];

    for(let i=0; i<array1.length-2; i++){
        for(let j=i+1; j<=array1.length-1; j++){
            for (let k=j+1; k<array1.length; k++ ){
                if (array1[i]+array1[j]+array1[k]==0)
                    console.log(array1[i]+ " "+array1[j]+" "+array1[k]);
                
            }
        }
    }