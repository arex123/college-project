//method 01
const arr = [123,22,345,310,456,77,56]

const findMaxInArray =(findMax)=>{
    let max = arr[0];
    for(let i=1;i<arr.length;i++){
        if(arr[i]>max){
            max = arr[i];
        }
    }
    return max;
}

console.log(findMaxInArray(arr));