function reduce(arr, fn, initial) {
   // SOLUTION GOES HERE
   function recursion(initial,index){
     if (index < arr.length) {
       return recursion(fn(initial,arr[index],index,arr),index+1)
     }
     return initial
   }
   return recursion(initial,0)
   // return reduce(arr,fn,fn(initial,arr,index+1,arr))
 }

 module.exports = reduce

// reduce([],fn,initial) => initial
// reduce([1],fn,initial) => fn(initial,1,index+1,arr)
