function arrayToObj(arr) {
   // your code goes here  

   return arr.reduce((a, [b, c]) => (a[b] = c, a), {});

    
};


module.exports = arrayToObj;
