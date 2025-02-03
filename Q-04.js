let expect = function(val)
{
    let object ={
        
        toBe:function(value1){
            if(val===value1)
            {
                  return true
            }
            else
            {
                throw new Error("Not Equal")
            }
        },
        notToBe:function(value2){
            if(val!==value2)
            {
                return true
            }
            else
            {
                throw new Error("Equal")
            }
        },
    }
    return object
}

console.log(expect(5).toBe(5))
console.log(expect(5).toBe(null))
console.log(expect(5).notToBe(5))

// link of questions == https://leetcode.com/problems/to-be-or-not-to-be/description/?envType=study-plan-v2&envId=30-days-of-javascript