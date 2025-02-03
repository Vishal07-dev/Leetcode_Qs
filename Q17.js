/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function(fn, t) {
    
    return async function(...args) {
     return new Promise((res,rej)=>{

            Promise.resolve(fn(...args))
            .then((result)=>{
                clearTimeout(timer)
                res(result)
            })
            // .catch(()=>{

            // })
             .catch((err) => {
                    clearTimeout(timer); 
                    rej(err); 
                });

            let timer = setTimeout(()=>
             {
                rej("Time Limit Exceeded")
            },t)
     })   
    }
};

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */s