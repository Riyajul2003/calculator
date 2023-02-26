(function(){
    let screen = document.querySelector('.screen');
    let butt = document.querySelectorAll('.btn');
    let clear = document.querySelector('.btn-clear');
    let equal = document.querySelector('.btn-equal');

    butt.forEach(function(button){
        button.addEventListener('click',function(e){
            let value = e.target.dataset.name;
            screen.value += value;
        })
    })
    equal.addEventListener('click',function(e){
        if(screen.value ===''){
            screen.value ="please enter data";

        } else{
            let answer = eval(screen.value);
            screen.value = answer;

        }
    })
    clear.addEventListener('click',function(e){
        screen.value = clear="";
    }
    )

    
     
    
})();