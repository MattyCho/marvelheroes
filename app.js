let userName = prompt('Please enter your name: ');
console.log(userName);
document.write('<h3>' + 'Welcome Agent ' + userName + '</h3>');

let userAnswer = prompt('Hail Hydra?');
console.log(userAnswer);

if (userAnswer == 'Hail Hydra'){
    document.write('<h3>' + 'Hail Hydra' + '</h3>')
    document.write('<img src="https://i.pinimg.com/originals/2a/ce/b9/2aceb93edc1dd3423f1cdcfdf83850c7.png"/>')
}
else {
    document.write('<h3>' + 'S.H.I.E.L.D HQ' + '</h3>')
}
