
//booleans
let downL = false;
let downM = false;
let downAcad = false;
let downISIL = false;
let downRS = false;

//classes
let main = document.querySelector('.specialites');
let main2 = document.querySelector('.specialites.two');
let mainacad = document.querySelector('.Palier.one');
let mainisil = document.querySelector('.Palier.two');
let mainrs = document.querySelector('.Palier.three');

// buttons 
let showP_M = document.querySelector('.Master');
let showP_L = document.querySelector('.License');
let showL_A = document.querySelector('.ACAD');
let showL_I = document.querySelector('.ISIL');
let showL_R = document.querySelector('.RS');
showP_L.addEventListener('click',
    function(){
        if(downL === false){
            main.classList.add('show');
            downL = true;
        }else{
            main.classList.remove('show');
            downL = false;
        }
        
    });        
showL_A.addEventListener('click',
    function(){
        if(downAcad === false){
            mainacad.classList.add('show');
            downAcad = true;
        }else{
            mainacad.classList.remove('show');
                downAcad = false;
        }
    });
showL_I.addEventListener('click',
    function(){
        if(downISIL === false){
            mainisil.classList.add('show');
            downISIL = true;
        }else{
            mainisil.classList.remove('show');
                downISIL = false;
        }
    });
showL_R.addEventListener('click',
    function(){
        if(downRS === false){
            mainrs.classList.add('show');
            downRS = true;
        }else{
            mainrs.classList.remove('show');
                downRS = false;
        }
    });

