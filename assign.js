//Palindrome Function:
function palindr(word) {
    let lower = word.toLowerCase()
    let split = lower.split('').reverse().join('')
    if (lower === split) {
        console.log('Word is a Palindrome')
    } else {
        console.log('Word is not a Palindrome')
    }   
} 
console.log(palindr('tot'))
console.log(palindr('dolphin'))

//Removing duplicate names from an array:
names = ["John","Mary", "Alex", "Steve", "Mary", "John"]
 function dupeRemove(names) {
     let listNames = {}
     let updateNames = []
     for (let index = 0; index < names.length; index++) {
        if (!(names[index] in listNames)) {
            updateNames.push(names[index])
            listNames[names[index]] = true
        }
     }
     return updateNames
 }
let result = dupeRemove(names)
console.log(result)

//Create an app whichs returns true/false depending on if the item is in the array:
function itemMatch(word, array) {
    for (var i = 0; i < array.length; i++)
    if (word === array[i]) {
        return true;
    }
    else {
        return false;
    }
}
word = 'pizza'
array = ['pizza', 'pretzels', 'nuggets', 'bagels']
console.log(itemMatch(word, array))

//Create an app which finds the largest number in an array: 
function Maximum(numbers) {
    maxNum = -Infinity
    for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] > maxNum)
        maxNum = numbers[i];
    }     
    return maxNum
}
numbers = [1,37,5,86,90,13]
num = Maximum(numbers)
console.log(num)

//Create an app which finds the largest number in an array:
function Minimum(numbers) {
    minNum = Infinity
    for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] < minNum)
        minNum = numbers[i];
    }     
    return minNum
}
numbers = [1,37,5,86,13,90]
num = Minimum(numbers)
console.log(num)

//Create FizzBuzz app:
function fizzBuzz(number) {
    if (number%15 === 0) {
        console.log('Fizz Buzz')
    }
    else if (number%3 === 0) {
        console.log('Fizz')
    }
    else if (number%5 === 0) {
        console.log('Buzz')
    }
    
}
fizzBuzz(3)
fizzBuzz(30)

//Create an app which determines whether the number is even or odd
function evenOdd(number) {
    if (number%2==0) {
        console.log('Even Number')
    }
    else {
        console.log('Odd Number')
    }
}
evenOdd(25)
evenOdd(12)

//Take the array [3,4,56,7,8,1] and sort them in ascending and descending order. 


// function bankAccount(first, last, middle, account, balance, status) {
//     this.first = firstName
//     this.last = lastName
//     this.middle = middleName 
//     this.account = accountType
//     this.balance = balance
//     this.status = status
// }

// bankAccount.prototype.openAccount = function(deposit) {
//     if (deposit >= 100) {
//         console.log('You have opened an account with a balance of ' + deposit)
//     }
//     else {
//         console.log('Sorry, your deposit is not large enough to open an account')
//     }
// }
// let Account1 = new bankAccount('Ash', 'Mello', 'Melissa', 'checking', 0, 'opened')
// console.log(Account1)

