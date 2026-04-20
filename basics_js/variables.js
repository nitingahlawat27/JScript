const accountId = 1;
let accountHolder = "Nitin";
var password = "password";

accountCity = "jaipur";
let accountState;

// accountId = 2; // can't change it

/*   prefer not to use var because of issue in block scope and functional scope                */

console.log(accountId);

console.table([accountId, password, accountCity, accountHolder, accountState]);