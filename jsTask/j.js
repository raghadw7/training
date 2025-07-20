

function looping(start , end , breakNum , continueNum) {
if(start&&end&&breakNum&&continueNum){


    for(var i =start; i<=end ; i++){
if(i===breakNum)
    break;
else if(i===continueNum)
    continue;
else
    console.log(i)
}
}
else
    console.log('enter 4 numbers')

}


looping(1,7,5,3)