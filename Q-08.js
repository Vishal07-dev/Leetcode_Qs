/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    let res=init
    for(const element of nums)
    {
        res = fn(res,element)
    }

     return res
};

let nums = [1,2,3,4]
let fn = function sum(accum, curr) { return accum + curr; }
let init = 0

console.log(reduce(nums,fn,init));
