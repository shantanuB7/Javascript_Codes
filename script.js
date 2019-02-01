//1. Write the function isEmpty(obj) which returns true if the object has no properties, otherwise false

//-------------------------------------------------------------------------------------------------------------------------------------------------

/*
function isEmpty(obj) {
    
    for( var prop in obj) {
        if(obj.hasOwnProperty(prop)) {
            return false;
        } 
    }
    
    return true;
}

let schedule = {};
alert(isEmpty(schedule));
schedule["8:30"] = "get up";
alert(isEmpty(schedule))




-----------------------------------------------------------------------------------------------------------------------------------------------------
*/

//---------------------------------------------------------------------------------------------------------------------------------------------------



//2. Write the code to sum all salaries and store in the variable sum. If salaries is empty, the result must be 0.


/*
function totSal(salaries) {
    
    var sum =0;
    
    for(var name in salaries) {
        if(salaries.hasOwnProperty(name)) {
            sum=0;

        }
    }
    
    for(var name in salaries) {
        sum += parseInt(salaries[name])
        
    }
    
    return sum;
    
    
    
}


let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

console.log(totSal(salaries))
*/

//-------------------------------------------------------------------------------------------------------------------------------------------------

//3. Create a function multiplyNumeric(obj) that multiplies all numeric properties of objects by 2.


/*
function multiplyNumeric(menu) {
    
    for(var prop in menu) {
       if(typeof menu[prop] === 'number') {
            
            menu[prop] = menu[prop]*2
       }
    }
    
    console.log(menu)
}


let menu = {
    width : 200,
    height : 300,
    title : "My menu"
}

multiplyNumeric(menu)

*/


//-------------------------------------------------------------------------------------------------------------------------------------------------

//4. Add a property to the following object so that the following usage of object works 

/*
    user = {
        name : "John",
        money : 1000,
        toString() {
            return this.name
        },
        
        valueOf() {
            return this.money
        }
    }

alert(user + 500)
*/

//-------------------------------------------------------------------------------------------------------------------------------------------------

//5. Add a property to the following object so that the following usage of object works 
    
    /*
    function User(name) {
        
        this.name = name;
    }
    

    
   
    
    console.log(user)
    
    */

//-------------------------------------------------------------------------------------------------------------------------------------------------

//6. Add a property to the following object so that the following usage of object works 



//-------------------------------------------------------------------------------------------------------------------------------------------------

//7.Create an object calculator with three methods


/*
calculator = {
    
    read() {
    var values= [];
    values[0] = prompt("Enter the first value:")
    values[1] = prompt("Enter the second value:")
    calculator.num1 = parseInt(values[0])
    calculator.num2 = parseInt(values[1])
    console.log(calculator.num1,calculator.num2)   
},
    sum() {
        var sum=0;
        sum = calculator.num1 + calculator.num2;
        return sum;
    },
    
    mul() {
        var product=0;
        product = calculator.num1*calculator.num2;
        
        return product;
    }
}

calculator.read()
console.log(calculator.sum())
console.log(calculator.mul())
*/


//-------------------------------------------------------------------------------------------------------------------------------------------------

//8. Make th function calls chainable


/*
let ladder = {
    step: 0,
    up() {
        this.step++;
        return ladder
    },
    down() {
        this.step--;
        
        return ladder;
    },
    showStep() {
        alert(this.step);
        
        return ladder;
    }
}


ladder.up().up().down().up().showStep();
*/


//-------------------------------------------------------------------------------------------------------------------------------------------------

//9. Create a constructor function that creates objects with methods

/*
function Calculator() {
    
    
        this.read = function() {
            var values= [];
            values[0] = prompt("Enter the first value:")
            values[1] = prompt("Enter the second value:")
            this.num1 = parseInt(values[0])
            this.num2 = parseInt(values[1])
            console.log(this.num1,this.num2)
        
    },
    
        this.sum = function() {
          var sum;
        sum = this.num1 + this.num2;
        return sum;
    },
    
    this.mul = function() {
        var product;
        product = this.num1*this.num2;
        
        return product;
    }  
        }



calculator = new Calculator()
calculator.read()
console.log(calculator.sum())
console.log(calculator.mul())
*/



//-------------------------------------------------------------------------------------------------------------------------------------------------

//10. Create a constructor function that creates objects with methods

/*
function Accumulator(startingValue) {
    this.value = startingValue,
    
        this.read = function() {
        
        this.value+= parseInt(prompt("Enter a value to add:"))
        
    }
    
    
    }
    
let accumulator = new Accumulator(1);
accumulator.read()
console.log(accumulator.value)
*/


//-------------------------------------------------------------------------------------------------------------------------------------------------

//11. Create a series using array.

/*
function series(arr) {
    
   for(var i=0;i<arr.length;i++) { 
    var temp = arr.splice(arr.length-1,1)
    arr.unshift(temp[0])
    console.log(arr)
   }
    
}


arr =[1,1,1,0,0,0,0];
series(arr)
*/


//-------------------------------------------------------------------------------------------------------------------------------------------------

//12. Camelize the string

/*
function camelize(str) {
    
    var arr=[];
    var camelized = "";
    
    arr = str.split("-")
    console.log(arr)
    var temp = "";
    var cha = ""
    
    for(i=0;i<arr.length;i++) {
        
        temp += arr[i].substring(0,1).toUpperCase() + arr[i].substring(1,arr[i].length);
    }
    
    if(arr[0] !== "") {
        
        cha = temp[0].toLowerCase()
    } else {
        cha = temp[0].toUpperCase()
    }
    
    camelized = cha + temp.substring(1)
    console.log(camelized)   
    
}

camelize("Background-color")
*/


//-------------------------------------------------------------------------------------------------------------------------------------------------

//13. Write a function that gets an array looks for numbers between a and b and returns an array of it.


/*
function filterRange(arr, a, b) {
    
    var filtered = [];
    
    for(i=0; i<arr.length; i++) {
          
      if((arr[i] >= a && arr[i] <= b) || (arr[i] <= a && arr[i] >= b)) {
          
          filtered.push(arr[i])
      }  
    }
    
    console.log(filtered)
    
}

let arr = [5,3,8,1]

filterRange(arr,4,1)

*/


//-------------------------------------------------------------------------------------------------------------------------------------------------

//14. Write a function that gets an array looks for numbers between a and b and returns an array of it.

/*
function filterRangeInPlace(arr, a, b) {
    
    var filtered = [];
    
    for(i=0; i<arr.length; i++) {
          
      if((arr[i] >= a && arr[i] <= b) || (arr[i] <= a && arr[i] >= b)) {
          
          filtered.push(arr[i])
      }  
    }
    
    arr = filtered
    console.log(arr)
    
}

let arr = [5,3,8,1]

filterRangeInPlace(arr,1,4)

*/


//-------------------------------------------------------------------------------------------------------------------------------------------------

//15. Rotate an array.

/*
function rotateArr(arr) {
    
    var temp = arr.splice(arr.length-1,1)
    arr.unshift(temp[0])
    console.log(arr)
}

let arr = [5,2,1,-10,8]
*/

//-------------------------------------------------------------------------------------------------------------------------------------------------

//16. Sort an array alphabetically.

/*
function copySorted(arr) {
    
    var sorted = [...arr]
    
    sorted.sort()
    
    console.log(sorted)
    console.log(arr)
}

let arr = ["HTML", "Javascript", "CSS"]

let sorted = copySorted(arr)

*/


//-------------------------------------------------------------------------------------------------------------------------------------------------

//17. Sort an array alphabetically.


//-------------------------------------------------------------------------------------------------------------------------------------------------

//18. Sort an array alphabetically.

/*
function sort(arr) {
    
    var names = [];
    
    for(i=0;i<arr.length;i++) {
        
        names[i] = arr[i].name
    }
    
    names.sort()
    
    return names;
}

let john = {name: "John", age:25}
let pete = {name: "Pete", age:25}
let mary = {name: "Mary", age:25}

let users = [john, pete, mary]
names = sort(users)
alert(names)
*/


//-------------------------------------------------------------------------------------------------------------------------------------------------

//19. Concatenate name and surname.

/*
function concat(users) {
    
    fullName = [];
    
    for(i=0;i<users.length;i++) {
        
        
        fullName[i] = {fullName : users[i].name + " " + users[i].surname, id : users[i].id }
    }
    
    return fullName;
}


let john = {name: "John", surname: "Smith", id:1}
let pete = {name: "Pete", surname: "Hunt", id:2}
let mary = {name: "Mary", surname: "Key", id:3}

let users = [john, pete, mary]

let usersMapped = concat(users)
    
console.log(usersMapped)
*/


//-------------------------------------------------------------------------------------------------------------------------------------------------

//20. Concatenate name and surname.


/*
function sortByName(users) {
    
    var names = [];
    
    users.sort(function(a,b) {
        
        var nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase();
        
        if(nameA < nameB) {
            
            return -1
        }
        
        if(nameA > nameB) {
            
            return 1
        }
        
        return 0
    })
    
console.log(users)
}



let john = {name: "John", age:25}
let pete = {name: "Pete", age:25}
let mary = {name: "Mary", age:25}

let users = [john, pete, mary]

sortByName(users)
*/

//-------------------------------------------------------------------------------------------------------------------------------------------------

//21. Create a function that should return an array with unique items of arr.


/* 1 solution
function unique(str) {
    
    var unique = str.filter(function(ele, pos) {
        
        return str.indexOf(ele) == pos;
    })
    
    return unique;
}




let strings = ["Hare", "Krishna","Hare", "Krishna","Krishna","Krishna","Hare","Hare", ":-O"]

console.log(unique(strings))

*/

/* 2nd Solution
function unique(arr) {
    
    let unqArr = [];
    
    len = arr.length;
    
    for(let i = 0; i<len;i++) {
        
       if(unqArr.indexOf(arr[i]) === -1) {
            unqArr.push(arr[i])
        }
    }
    
    return unqArr
}


let strings = ["Hare", "Krishna","Hare", "Krishna","Krishna","Krishna","Hare","Hare", ":-O"]

console.log(unique(strings))
*/



//-------------------------------------------------------------------------------------------------------------------------------------------------

//22. 

/*
let user = {
    name : "John",
    years : 30
}


alert(name);
alert(age)
alert(isAdmin)
*/



//-------------------------------------------------------------------------------------------------------------------------------------------------

//23. Create a function that returns the name of the top paid person.

/*
function topSalary(salaries) {
    
    var arr = []
    for(var name in salaries) {
        
       arr.push(salaries[name]) 
    }
    
    if(arr.length < 1) {
        
        return 0;
    }
    
    arr.sort();
    
    for(var name in salaries) {
        
        if(salaries[name] === arr[arr.length -1]) {
            
           return name;
        } 
    }
    console.log(arr[arr.length - 1])
    
}






let salaries = {
    
    "John" : 100,
    "Pete": 300,
    "Mary" : 250
}

console.log(topSalary(salaries))
*/


//-------------------------------------------------------------------------------------------------------------------------------------------------

//24. Create a function that returns the random integer within a given range.

/*
function randomInteger(min, max) {
    
    console.log(Math.floor(Math.random() * (max - min + 1)) + min)
} 

randomInteger(1, 5)
*/


//-------------------------------------------------------------------------------------------------------------------------------------------------

//25. Get week day from the date.

/*
function getWeekDay(date) {
    
    arr = ["SU", "MO", "TU", "WE","TH","FR","SA"]
    
    console.log(arr[date.getDay()])
    
    
}



let date = new Date(2012, 0, 3)
console.log(date)
getWeekDay(date)
*/


//-------------------------------------------------------------------------------------------------------------------------------------------------

//26. Get "European" week day from the date.

/*
function getWeekDay(date) {
    
    day = {
        1 : "Monday",
        2 : "Tuesday",
        3 : "Wednesday",
        4 : "Thursday",
        5 : "Friday",
        6 : "Saturday",
        7 : "Sunday"
          }
    for( num in day) {
        
        
        if(num == date.getDay()) {
            console.log(day[parseInt(num)])
            } 
        
        }
        if(date.getDay() === 0) {
            console.log(day[7])
        }
    }



let date = new Date(2012, 0, 9)
console.log(date)
getWeekDay(date)
*/


//-------------------------------------------------------------------------------------------------------------------------------------------------

//27. Get the date from days ago given.

/*
function getDateAgo(date, days) {
    
    
    
    
    var date1 = new Date(date);
    date1.setDate(date.getDate() - days)
    console.log(date1)
    console.log(date)
    
    
}

let date = new Date(2015, 0, 2)

getDateAgo(date, 365)
*/


//-------------------------------------------------------------------------------------------------------------------------------------------------

//28. Get the last day of month from given year.

/*
function getLastDayOfMonth(year, month) {
    
    var day31 = [0,2,4,6,7,9,11];
    var day30 = [3,5,8,10]
  
    if(month >= 0 && month <= 11) {
        if(month === 1) {

            if((year%4 === 0 && year%100 !== 0) || year%400 === 0) {

                return 29
            } else{ 
                return 28
            }


        } else if(day31.indexOf(month) === -1) {

            return 30
        } else {
            return 31
        }
    } else {
        return "Invalid Month"
    }
}

console.log(getLastDayOfMonth(1900, 1))
*/


//-------------------------------------------------------------------------------------------------------------------------------------------------

//29. Get total seconds till the time.

/*
function getSecondsToday() {

    date = new Date();
    var hour = date.getHours()
    var minutes = date.getMinutes()
    var sec = date.getSeconds()
    
    var seconds = hour*3600 + minutes*60 + sec
    
    console.log(seconds)
}

getSecondsToday()
*/


//-------------------------------------------------------------------------------------------------------------------------------------------------

//30. Get seconds left for tomorrow.

/*
function getSecondsToTomorrow() {
    
    date = new Date();
    var hour = date.getHours()
    var minutes = date.getMinutes()
    var sec = date.getSeconds()
    var totalSeconds = 24*3600
    
    var secondsToTomorrow = totalSeconds - (hour*3600 + minutes*60 + sec)
    
    console.log(secondsToTomorrow)
}

getSecondsToTomorrow()
*/


//-------------------------------------------------------------------------------------------------------------------------------------------------

//31. Write a function to format time as 'n' sec. ago or minutes ago.

/*
function formatDate(date) {
    
    console.log(date.getTime()
}

formatDate(new Date(new Date - 1))
*/


//-------------------------------------------------------------------------------------------------------------------------------------------------

//32. Write a function that returns the string with first character uppercase and lowercase after that.

/*
function ucFirst(str) {
    
    var ucStr = str.substr(0,1).toUpperCase() + str.substring(1,str.length)
    console.log(ucStr)
}

ucFirst("john")
*/


//-------------------------------------------------------------------------------------------------------------------------------------------------

//33. Write a function that returns true if the str contains 'viagra' or 'XXX'. The comparison must be case in-sensitive.

/*
function checkSpam(str) {
    
    
    var arr = ["viagra", "xxx"]
    
    for(var i =0;i<arr.length;i++) {
        
        if(str.match(/arr[i]/i) !== -1) {
            
            var
            return true
        } else 
            return false
    }
}

alert(checkSpam("get viAgRa now"))
*/


//-------------------------------------------------------------------------------------------------------------------------------------------------

//34. Write a function to truncate the string.

/*
function truncate(str, maxlength) {
    
    var len = str.length;
    
    if(len > maxlength) {
        
        var newStr = str.substr(0, maxlength - 1) + '...'
        
        console.log(newStr)
    } else {
        
        console.log(str)
    }
}

truncate("Hi Everyone!", 20)
*/


//-------------------------------------------------------------------------------------------------------------------------------------------------

//35. Create a function to extract a numeric value from string.


/*
function extractCurrencyValue(str) {
    
    var num = str.substr(str.indexOf('$') + 1, str.length)
    
    console.log(parseInt(num))
    
    return parseInt(num)
    
    
}

alert(extractCurrencyValue("$120") === 120)
*/



//-------------------------------------------------------------------------------------------------------------------------------------------------

//36. Create a function that should return an array with unique items of arr.

/*
function unique(arr) {
   
 unq = [... new Set(arr)]
 
    console.log(unq)
}

let strings = ["Hare", "Krishna","Hare", "Krishna","Krishna","Krishna","Hare","Hare", ":-O"]
unique(strings)
*/

//-------------------------------------------------------------------------------------------------------------------------------------------------

//37. Create a function that should return an array with unique items of arr.


//-------------------------------------------------------------------------------------------------------------------------------------------------

//38. Create a function that should return an array with unique items of arr.


//-------------------------------------------------------------------------------------------------------------------------------------------------

//39. Create a function that should return an array with unique items of arr.


//-------------------------------------------------------------------------------------------------------------------------------------------------

//40. Write a function to find second largest number.

/*
function getSecondLargest(nums) {
    
    var sorted = nums.sort()
    
    var unq = [...new Set(sorted)]
    
    console.log(unq[unq.length - 2])
}

let num = [2,3,6,6,5]
getSecondLargest(num)
*/


//-------------------------------------------------------------------------------------------------------------------------------------------------

//41. JSON.stringify problem.

/*
let room = {
    
    guest: "Spanidea",
    
    toString
}
JSON.stringify(room)
*/


//-------------------------------------------------------------------------------------------------------------------------------------------------

//42. Replacer function problem.

//-------------------------------------------------------------------------------------------------------------------------------------------------

//43. Array problem.

/*
function edArr(arr) {
    
    arr.push("Rock-n-roll")
    console.log(arr)
    
    var mid = Math.ceil(parseFloat(arr.length/2))
    
    
    arr[mid - 1] = "Classics"
    console.log(arr)
    
    arr.shift()
    console.log(arr)
    
    arr.unshift("Rap", "Raggae")
    console.log(arr)
}

let arr = ["Jazz", "Blues"]
edArr(arr)
*/


//-------------------------------------------------------------------------------------------------------------------------------------------------

//44. Sum input.

/*
function sumInput() {
    
    var num = parseInt(prompt("Enter a number: "));
    
    var arr = [];
    
    var sum = 0;
    
    
    while(!isNaN(num)) {
        
        arr.push(num)
        
        num = parseInt(prompt("Enter a number: "));
    }
    
        for(var i =0; i<arr.length;i++){
            
            sum+= arr[i]
        }
    
    console.log(sum)
    
    }

sumInput()
*/


//-------------------------------------------------------------------------------------------------------------------------------------------------

//45. Get max subarray sum.

/*
function getMaxSubSum(arr) {
    
    var subArr = [];
    var sumArr = [];
    
    var sum = 0;
    
    for(var i = 0;i<arr.length;i++) {
        
        for(var j = 0; j<arr.length;j++) {
           
        if(j >= i) {
           
            sum = 0;
            console.log(i,j)
            subArr = arr.slice(i , j+1);
            
            console.log(subArr)
            
            sum +=  subArr.reduce((a,b) => a+b,0)
            
            console.log(sum)
            
            sumArr.push(sum)
            
        }
            
        }
    }
    
    sumArr.sort()
    
    console.log(sumArr)
    
    console.log(sumArr[sumArr.length - 1])
}


getMaxSubSum([100,200,3,-9,11])
*/


//-------------------------------------------------------------------------------------------------------------------------------------------------

//46. Calculate sum of salaries in an object usinf for...of.

/*
function sumSalaries(salaries) {
    
    var total = 0;
    
    for(var value of Object.values(salaries)) {
        
        total+= value
    }
    console.log(total)
}



let Salaries = {
    
    John : 100,
    Pete : 300,
    Mary : 250
}

sumSalaries(Salaries)
*/


//-------------------------------------------------------------------------------------------------------------------------------------------------

//47. Calculate the properties in an object.

/*
function count(user) {
    
    console.log(Object.keys(user).length)
}

let user = {
    
    name : 'John',
    age : 3
}

count(user)
*/


//-------------------------------------------------------------------------------------------------------------------------------------------------

//48. Implement the function that raises 'number' to 'power'.

/*
function pow(number, power) {
    
    var product = 1;
    for(var i=1; i<=power;i++) {
        
        product*=number;
        
    }
    
    console.log(product)
}

pow(2, 4)
*/

/*
function pow(number, power) {
    
    return power === 0 ? 1 : number*pow(number, power - 1) 
}

console.log(pow(2, 4))
*/


//-------------------------------------------------------------------------------------------------------------------------------------------------

//49. Write a function to calculate the sum of salaries from the object.

function totSal(company) {
    
    for(var key in company) {
        
        for(var chKey in company[key]) {
            
            console.log(company[key][chKey])
        }
    }
}


let company = {
    
    sales : [{
        name : 'John',
        salary : 1000
    },
        {
            name : 'Alice',
            salary : 600
    }],
    
    development : {
        sites: [{
            name : 'Peter',
            salary : 2000
        }, {
            name : 'Alex',
            salary : 1800
        }],
        
        internals: [{
            name: 'Jack',
            salary : 1300
        }]
    }
}

totSal(company)