var twoSum = function(nums, target) {
    let res = []
    for(let i=0;i<nums.length; i++){
        for(let j=i+1;j<nums.length; j++){
            if(nums[i] + nums[j] == target){
                res.push(i,j);
                return res;
            }
        }
    }
};
console.log(twoSum([1,2,3,4,5,6],9))