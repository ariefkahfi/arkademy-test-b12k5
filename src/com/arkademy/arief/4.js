const thirdHighest = arr =>{
    try {
        const lArr = arr.length
        if (typeof  arr === 'string') {
            throw new Error("Parameter should be an array!");
        }
        if(lArr < 3) {
            throw new Error("Minimal array length is 3!");
        }
        
        
        
        const r = arr
           .filter(v=> typeof v === 'number')
           .sort((a,b)=> b - a)
   
        
        console.log(r[2])
        
    } catch (e) {
        console.error(e.message);
    }

}

thirdHighest([1,2,3,4,5,6])
thirdHighest("bukan");
thirdHighest([1,2]);
thirdHighest([107,1,-4,'a','true',0, -77])