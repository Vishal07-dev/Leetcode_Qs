let createCounter=function(val){

  let counter = val

  return function()
  {
    return counter++
  }

}

const counter = createCounter(10)
console.log(counter());
console.log(counter());
console.log(counter());

// link of question = https://leetcode.com/problems/counter/?envType=study-plan-v2&envId=30-days-of-javascript




