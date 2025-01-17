
const arr=[1,2,3,4,5]
let size =3
let chunk = function(arr,size)
{

    const chunk=[]
    for(let i=0;i<arr.length;i+=size)
    {
        chunk.push(arr.slice(i,i+size));
    }
    return chunk
}
console.log(chunk([1,2,3,4,5],1))// test case 1
console.log(chunk([1,2,3,4,5],3))// test case 2
console.log(chunk([1,2,3,4,5],6))// test case 3


