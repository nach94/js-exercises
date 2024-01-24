let firstDiv = document.querySelector('.first-div-child');
let secondDiv = document.querySelector('.second-div-child');

let firstDivParent = document.querySelector('.first-div-parent');
let secondDivParent = document.querySelector('.second-div-parent');

let btnAction = document.getElementById('action');
let btnRestore = document.getElementById('restore');

btnAction.addEventListener('click', function(){
    secondDivParent.appendChild(firstDiv);
});
btnRestore.addEventListener('click', function(){
    firstDivParent.appendChild(firstDiv);
});