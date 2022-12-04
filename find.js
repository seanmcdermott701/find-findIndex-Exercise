// Function #1
const findUserByUsername = (arr, key) => {
    return arr.find((obj) => {
        return obj['username'] == key;
    })
};

// Function #2
const removeUser = (arr, str) => {
    let userIndex = arr.find((user) => {
        return user['username'] == str;
    })
    if (userIndex !== -1){
        return arr.splice(userIndex, 1)[0];
    } else return
};