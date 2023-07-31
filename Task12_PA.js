const user={
    username:'mee',
    lastUserActivityTime : '11th of may'
}



function createpost(post){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            user.push(post);

            const error = false;

            if(!error){
                resolve();
            }else{
                reject('Errorwa');
            }
        },2000);
    });
}

function updateLastActivityTime(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            user.lastUserActivityTime = new Date().getTime();
            resolve(user.lastUserActivityTime)
        },1000)
    })
}