let arr1 = [{"id":1,"b":{"b": 94},"v":[4,3],"y":48}]
let arr2 = [{"id":1,"b":{"c": 84},"v":[1,3]}]
let uniqueMap = new Map(arr1.map(item => [item.id, item]));


arr2.forEach(item => {
    if (uniqueMap.has(item.id)) {
        // Merge properties instead of replacing
        let existing = uniqueMap.get(item.id);
        console.log(existing);
        
        uniqueMap.set(item.id, { ...existing, ...item });
        console.log(uniqueMap);
        
    } else {
        uniqueMap.set(item.id, item);
    }
});

let mergedArray = Array.from(uniqueMap.values());
// console.log(mergedArray);
