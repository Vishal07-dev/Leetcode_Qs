/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function(functions) {
    return new Promise((res,rej)=>{
    let newarr=[]
    let count=0
    functions.forEach((fn,index)=>{
        fn()
    .then((result)=>{
        newarr[index]=result
        count++
        if(count == functions.length)
        {
            res(newarr)
        }
    })
    .catch((err)=>{
        rej(err)
    })

    })

     })
    
};


  const promise = promiseAll([() => new Promise(res => res(42))])
  promise.then(console.log); // [42]
 