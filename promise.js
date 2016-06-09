function addPromise(a, b){
  return new Promise(function(resolve, reject){
    if(typeof a !== 'number'){
      reject('Not a number: ' + a);
    } else if(typeof b !== 'number'){
      reject('Not a number: ' + b);
    } else {
      resolve(a + b);
    }
  });
}

addPromise(1,2).then(function(val){ console.log(val); }, function(err){ console.log('ERROR: ' + err)});
addPromise('a',2).then(function(val){ console.log(val); }, function(err){ console.log('ERROR: ' + err)});
addPromise(1,'b').then(function(val){ console.log(val); }, function(err){ console.log('ERROR: ' + err)});
addPromise(1).then(function(val){ console.log(val); }, function(err){ console.log('ERROR: ' + err)});
