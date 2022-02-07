const description= document.querySelector('p') // it grabs the 
description.textContent = 'he is the great swami vivekananda'

// const para1= document.querySelector('p')
// para1.textContent = 'He was a great influencer'

// let myVariable= "BOB";

// console.log(myVariable);

// myVariable= "TEJAS";

// console.log(myVariable);

// let listvar= [1, 'BOB', 2, 'hello'];
// console.log('first element is ',listvar[0]);

// console.log(3 === 5, 3!== 5);

// function addition(num1, num2) {
//     return num1 + num2;
// }

// console.log(addition(3, 6))

// document.querySelector('h1').addEventListener('click', function () { alert('Jai Shree Ram')})
// document.querySelector('body').addEventListener('click', function () { alert('Hare Ram Hare RAM')})
// //  nameless function is called anonymous function

// document.querySelector('p').addEventListener('click', () => { alert('Hare Krishna Hare Krishna')})

let myImage= document.querySelector('img') // selecting the element

myImage.onclick = function () {
    let mySrc= myImage.getAttribute('src') // getting the attribute source i.e. src
    console.log(mySrc)
    if (mySrc == 'Swamiji.jpg') {
        myImage.setAttribute('src', 'Swamiji2.jpg') // setting the attribute or changing the attribute
    }
    else {
        myImage.setAttribute('src', 'Swamiji.jpg')
    }
}


let mylink= document.querySelector('a')

let newlink= 'https://www.toppr.com/ask/question-set/structure-of-the-atom-410759/easy/'

mylink.onclick= function () { // auxclick means click on roller of mouse

    mylink.setAttribute('href', newlink);
    mylink.textContent = 'TOppr Study';

}


let myButton= document.querySelector('button')
let myHeading= document.querySelector('h1')

function Setusername() {
    let myName= prompt('Enter your name')
    if (!myName) {
        Setusername();
    }
    localStorage.setItem('name', myName)
    myHeading.textContent= 'I am Cool' + myName
}

if(!localStorage.getItem('name')) {
    Setusername();
  } else {
    let storedName = localStorage.getItem('name')
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
    Setusername();
}

