let maxSubArray = function (num){
    // it store current sum
    let curSum=0;
    // it store maxium sum
    let maxSum=0;
     for(let i=0;i<num.length;i++){
        curSum+=num[i]
        maxSum=Math.max(maxSum,curSum)
        if(curSum<0){
            curSum=0
        }
    }
    // here we willget the max value
    return  maxSum;
}
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));