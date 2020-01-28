function insert(num) {
    document.querySelector('input').value = document.querySelector('input').value + num;
}

function equal() {
    let exp = document.querySelector('input').value;
    if(exp) {
        document.querySelector('input').value = eval(exp);
    }
}

function clean() {
    document.querySelector('input').value = '';
}

function back() {
    let exp = document.querySelector('input').value;
    document.querySelector('input').value = exp.substring(0, exp.length - 1);
}