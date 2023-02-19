// console.log("hello") ;
// (function(){

//     let  screen = document.querySelector('.screen') ;
//     let buttons = document.querySelectorAll('.btn') ;
//     let equal = document.querySelector('.btn-equal') ;
//     let clear = document.querySelector('.btn-clear') ;


//     buttons.forEach(function(button){
//         button.addEventListener('click' ,function(e){
//             let value = e.target.dataset.num;
//             screen.value += value ;

//         })
//     })


//     equal.addEventListener('click',function(e){
//         if(screen.value === ''){
//             screen.value = "";

//         } else{
//             let answer = eval(screen.value);
//             screen.value = answer ;
//         }
//     })


//     clear.addEventListener('click', function(e){
//         screen.value = "" ;

//     })


// })();

let string = " ";
let buttons = document.querySelectorAll('.btn');
Array.from(buttons).forEach((btn) => {
    btn.addEventListener('click', (e) => {

        if (e.target.innerHTML == '=') {
            string = eval(string);
            document.querySelector('input').value = string;

        }
        else if (e.target.innerHTML == 'AC') {
            string = " ";
            document.querySelector('input').value = string;

        }
        else {
            console.log(e.target);
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;

        }

    })
})