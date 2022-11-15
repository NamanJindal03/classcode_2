function RedisStore(){
    let db = {};
    this.push= function(key, value, ttl){
        db[key] = value;
        // console.log(`Key - ${key}, value - ${value} pair got pushed in db`)
        if(ttl){
            setTimeout(()=>{
                delete redisStore[key]
                console.log(`${key} has been deleted succesfully`)
            }, ttl)
        }
    }
    this.get = function(key){
        let isRes = db[key];
        if(isRes){
            console.log(isRes)
            return;
        }
        console.log('key not found')
    }

}



const redisStore = new RedisStore();
redisStore.push('fruit', 'apple', 1000); //internally will be appending onto the DB -> obj, <clg>Key val pair appended</clg>
redisStore.get('fruit') //apple
redisStore.get('toy') //Not Found
redisStore.push('toy', 'action figure', 5000);
redisStore.get('toy'); //action figure
redisStore.push('movie', 'marvel', 2000);
//deleted fruit
//deletd marvel
//deleted toy


//redisStore.remove()
//redisStore.update()
//redusStore


//Generators -> 
//iterators -> 

//try catch -> 