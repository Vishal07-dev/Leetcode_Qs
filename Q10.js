/**
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 */
var argumentsLength = function(...args) {
    let count=args
    
     return console.log(count.length);
    
    
};

argumentsLength(1, 2, 3);

  ; // 3
 