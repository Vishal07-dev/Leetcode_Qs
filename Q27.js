/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function(obj) {
    let result = []
    for(let item in obj)
    {
        if(Array.isArray(item[obj]))
        {
            if(!item[obj]){
                compactObject(obj.slice(item))
            }
            else
            {
                result.push(item)
            }
            
        }
        else
        {
            result.push(item)
            for(let item of result)
            {
                if(!item)
                {
                    result.splice(item)
                }
            }
            
        }
    } 
    return result
};

console.log(compactObject({"a": null, "b": [false, 1]}
))