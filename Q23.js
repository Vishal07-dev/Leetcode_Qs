/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function(fn) {
    let obj = {} 
     this.map((item)=>{
       let key = fn(item)
       obj[key]=obj[key]||[]
       obj[key] ? obj[key].push(item) : obj[key] = item
    })
     return obj
    };
    
    /**
     * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
     */