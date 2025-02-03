var TimeLimitedCache = function() {
    this.map = new Map();
};

/** 
* @param {number} key
* @param {number} value
* @param {number} duration time until expiration in ms
* @return {boolean} if un-expired key already existed
*/
TimeLimitedCache.prototype.set = function(key, value, duration) {

 let haveval =  this.map.has(key);
if(haveval) clearTimeout(this.map.get(key).timer);



let timer= setTimeout(()=>{
    this.map.delete(key)
},duration)


   this.map.set(key, { value, timer });


return haveval


};

/** 
* @param {number} key
* @return {number} value associated with key
*/
TimeLimitedCache.prototype.get = function(key) {

const stored = this.map.get(key)

if(stored)
{
return stored.value
}
else
{
return -1
}
};

/** 
* @return {number} count of non-expired keys
*/
TimeLimitedCache.prototype.count = function() {
return this.map.size
};

/**
* const timeLimitedCache = new TimeLimitedCache()
* timeLimitedCache.set(1, 42, 1000); // false
* timeLimitedCache.get(1) // 42
* timeLimitedCache.count() // 1
*/