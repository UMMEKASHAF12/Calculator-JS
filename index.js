let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let strings = "";
let arr = Array.from(buttons);
arr.forEach(buttons => {
    buttons.addEventListener('click', (e) => {
        if(e.target.innerHTML == '='){
                String = eval(string);
                input.value = string;
        }

        else if( e.target.innerHTML == 'AC' ){
            string = "";
            input.value= string;
        }

        else if( e.target.innerHTML == 'DEL' ){
            string = string.substring(0, )
            input.value= string;
        }

        else {
        string += e.target.innerHTML;
        input.value = string;
        }
    })
})