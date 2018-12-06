function friend(friends){
    let myFriends = [];
    for(let i = 0; i < friends.length; i++){
        if(friends[i].length == 4){
            myFriends.push(friends[i]);
        }
    }
    return myFriends;
}

/*
Test Results:
Test Passed: Value == '[\'Ryan\', \'Mark\']'
Test Passed: Value == '[\'Ryan\']'
Test Passed: Value == '[\'Jimm\', \'Cari\', \'aret\']'
Test Passed: Value == '[\'Love\', \'Your\', \'Face\']'
*/
