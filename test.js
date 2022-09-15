
//for ***MENU***

const sect = document.querySelector('.hidden');
const btn = document.querySelector('.mike');
const g = document.querySelector('.app');
const f = document.querySelector('.cont');
const c = document.querySelector('.text');
const d = document.querySelector('.list');
const j = document.querySelector('.third');
const y = document.querySelector('.fourth');
const z = document.querySelector('.jav');
const a = document.querySelector('.javv');
const b = document.querySelector('footer');
btn.addEventListener('click', function(){
    if (sect.style.display == 'none') {
        sect.style.display='block'
        g.style.display='none'
        f.style.display='none'
        c.style.display='none'
        d.style.display='none'
        j.style.display='none'
        y.style.display='none'
        z.style.display='none'
        a.style.display='none'
        b.style.display='none'
    } else {
        sect.style.display='none'
        f.style.display='block'
        c.style.display='block'
        d.style.display='block'
        j.style.display='block'
        y.style.display='block'
        z.style.display='block'
        a.style.display='block'
        b.style.display='block'

    x=document.getElementById('john');
    x.style.display='none';
    x=document.getElementById('john1');
    x.style.display='none';
    x=document.getElementById('john2');
    x.style.display='none';
    x=document.getElementById('john3');
    x.style.display='none';
    x=document.getElementById('john4');
    x.style.display='none';
    x=document.getElementById('john5');
    x.style.display='none';
    x=document.getElementById('port1');
    x.style.display='flex';
    x=document.getElementById('port2');
    x.style.display='flex';
    x=document.getElementById('port3');
    x.style.display='flex';
    x=document.getElementById('port4');
    x.style.display='flex';
    x=document.getElementById('port5');
    x.style.display='flex';
    x=document.getElementById('port6');
    x.style.display='flex';

    mq = window.matchMedia('(min-width: 700px)');
    if (mq.matches) {
        g.style.display='inline-flex'
    } else{
        g.style.display='none'
    }
    }
});



//for ***STUDY***

function tiMe(){
    x=document.getElementById('john');

    if (x.style.display == 'none') {

        x.style.display='block';

        const mq = window.matchMedia('(min-width: 1200px)');
        if (mq.matches) {
            x=document.getElementById('port1');
            x.style.display='flex';

            x=document.getElementById('port2');
            x.style.display='flex';

            x=document.getElementById('port3');
            x.style.display='flex';

            x=document.getElementById('port4');
            x.style.display='flex';

            x=document.getElementById('port5');
            x.style.display='flex';

            x=document.getElementById('port6');
            x.style.display='flex';

            x=document.getElementById('john1');
            x.style.display='none';

            x=document.getElementById('john2');
            x.style.display='none';

            x=document.getElementById('john3');
            x.style.display='none';

            x=document.getElementById('john4');
            x.style.display='none';

            x=document.getElementById('john5');
            x.style.display='none';

            x=document.querySelector('.app');
            x.style.display='none';

            x=document.querySelector('.grid');
            x.style.display='none';

            x=document.querySelector('.text');
            x.style.display='none';
        }else{
            x=document.getElementById('port1');
            x.style.display='none';

            x=document.getElementById('port2');
            x.style.display='none';

            x=document.getElementById('port3');
            x.style.display='none';

            x=document.getElementById('port4');
            x.style.display='none';

            x=document.getElementById('port5');
            x.style.display='none';

            x=document.getElementById('port6');
            x.style.display='none';
        }    
    } else {
        x.style.display='none';

        x=document.querySelector('.app');
        x.style.display='inline-flex';

        x=document.querySelector('.grid');
        x.style.display='flex';

        x=document.querySelector('.text');
        x.style.display='block';
    }
};

//For the red background click
function cMe2(){
    x=document.getElementById('john');
    x.style.display='none';

    x=document.getElementById('port1');
    x.style.display='flex';

    x=document.getElementById('port2');
    x.style.display='flex';

    x=document.getElementById('port3');
    x.style.display='flex';

    x=document.getElementById('port4');
    x.style.display='flex';

    x=document.getElementById('port5');
    x.style.display='flex';

    x=document.getElementById('port6');
    x.style.display='flex';
};



//for ***RESEARCH***

function tiMe1(){
    x=document.getElementById('john1');

    if (x.style.display == 'none') {

        x.style.display='block';

        const mq = window.matchMedia('(min-width: 1200px)');
        if (mq.matches) {
            x=document.getElementById('port1');
            x.style.display='flex';

            x=document.getElementById('port2');
            x.style.display='flex';

            x=document.getElementById('port3');
            x.style.display='flex';

            x=document.getElementById('port4');
            x.style.display='flex';

            x=document.getElementById('port5');
            x.style.display='flex';

            x=document.getElementById('port6');
            x.style.display='flex';

            x=document.getElementById('john');
            x.style.display='none';
            
            x=document.getElementById('john2');
            x.style.display='none';

            x=document.getElementById('john3');
            x.style.display='none';

            x=document.getElementById('john4');
            x.style.display='none';

            x=document.getElementById('john5');
            x.style.display='none';

            x=document.querySelector('.app');
            x.style.display='none';

            x=document.querySelector('.grid');
            x.style.display='none';

            x=document.querySelector('.text');
            x.style.display='none';
        }else{
            x=document.getElementById('port1');
            x.style.display='none';

            x=document.getElementById('port2');
            x.style.display='none';

            x=document.getElementById('port3');
            x.style.display='none';

            x=document.getElementById('port4');
            x.style.display='none';

            x=document.getElementById('port5');
            x.style.display='none';

            x=document.getElementById('port6');
            x.style.display='none';
        }    
    } else {
        x.style.display='none';

        x=document.querySelector('.app');
        x.style.display='inline-flex';

        x=document.querySelector('.grid');
        x.style.display='flex';

        x=document.querySelector('.text');
        x.style.display='block';
    }
};

//For the red background click
function cMe21(){
    x=document.getElementById('john1');
    x.style.display='none';

    x=document.getElementById('port1');
    x.style.display='flex';

    x=document.getElementById('port2');
    x.style.display='flex';

    x=document.getElementById('port3');
    x.style.display='flex';

    x=document.getElementById('port4');
    x.style.display='flex';

    x=document.getElementById('port5');
    x.style.display='flex';

    x=document.getElementById('port6');
    x.style.display='flex';
};



//for ***CURRENT STUDENT***

function tiMe2(){
    x=document.getElementById('john2');

    if (x.style.display == 'none') {

        x.style.display='block';

        const mq = window.matchMedia('(min-width: 1200px)');
        if (mq.matches) {
            x=document.getElementById('port1');
            x.style.display='flex';

            x=document.getElementById('port2');
            x.style.display='flex';

            x=document.getElementById('port3');
            x.style.display='flex';

            x=document.getElementById('port4');
            x.style.display='flex';

            x=document.getElementById('port5');
            x.style.display='flex';

            x=document.getElementById('port6');
            x.style.display='flex';

            x=document.getElementById('john');
            x.style.display='none';

            x=document.getElementById('john1');
            x.style.display='none';
        
            x=document.getElementById('john3');
            x.style.display='none';

            x=document.getElementById('john4');
            x.style.display='none';

            x=document.getElementById('john5');
            x.style.display='none';

            x=document.querySelector('.app');
            x.style.display='none';

            x=document.querySelector('.grid');
            x.style.display='none';

            x=document.querySelector('.text');
            x.style.display='none';
        }else{
            x=document.getElementById('port1');
            x.style.display='none';

            x=document.getElementById('port2');
            x.style.display='none';

            x=document.getElementById('port3');
            x.style.display='none';

            x=document.getElementById('port4');
            x.style.display='none';

            x=document.getElementById('port5');
            x.style.display='none';

            x=document.getElementById('port6');
            x.style.display='none';
        }    
    } else {
        x.style.display='none';

        x=document.querySelector('.app');
        x.style.display='inline-flex';

        x=document.querySelector('.grid');
        x.style.display='flex';

        x=document.querySelector('.text');
        x.style.display='block';
    }
};

//For the red background click
function cMe22(){
    x=document.getElementById('john2');
    x.style.display='none';

    x=document.getElementById('port1');
    x.style.display='flex';

    x=document.getElementById('port2');
    x.style.display='flex';

    x=document.getElementById('port3');
    x.style.display='flex';

    x=document.getElementById('port4');
    x.style.display='flex';

    x=document.getElementById('port5');
    x.style.display='flex';

    x=document.getElementById('port6');
    x.style.display='flex';
};



//for ***ALUMNI AND SUPPORTERS***

function tiMe3(){
    x=document.getElementById('john3');

    if (x.style.display == 'none') {

        x.style.display='block';

        const mq = window.matchMedia('(min-width: 1200px)');
        if (mq.matches) {
            x=document.getElementById('port1');
            x.style.display='flex';

            x=document.getElementById('port2');
            x.style.display='flex';

            x=document.getElementById('port3');
            x.style.display='flex';

            x=document.getElementById('port4');
            x.style.display='flex';

            x=document.getElementById('port5');
            x.style.display='flex';

            x=document.getElementById('port6');
            x.style.display='flex';

            x=document.getElementById('john');
            x.style.display='none';

            x=document.getElementById('john1');
            x.style.display='none';

            x=document.getElementById('john2');
            x.style.display='none';
            
            x=document.getElementById('john4');
            x.style.display='none';

            x=document.getElementById('john5');
            x.style.display='none';

            x=document.querySelector('.app');
            x.style.display='none';

            x=document.querySelector('.grid');
            x.style.display='none';

            x=document.querySelector('.text');
            x.style.display='none';
        }else{
            x=document.getElementById('port1');
            x.style.display='none';

            x=document.getElementById('port2');
            x.style.display='none';

            x=document.getElementById('port3');
            x.style.display='none';

            x=document.getElementById('port4');
            x.style.display='none';

            x=document.getElementById('port5');
            x.style.display='none';

            x=document.getElementById('port6');
            x.style.display='none';
        }    
    } else {
        x.style.display='none';

        x=document.querySelector('.app');
        x.style.display='inline-flex';

        x=document.querySelector('.grid');
        x.style.display='flex';

        x=document.querySelector('.text');
        x.style.display='block';
    }
};

//For the red background click
function cMe23(){
    x=document.getElementById('john3');
    x.style.display='none';

    x=document.getElementById('port1');
    x.style.display='flex';

    x=document.getElementById('port2');
    x.style.display='flex';

    x=document.getElementById('port3');
    x.style.display='flex';

    x=document.getElementById('port4');
    x.style.display='flex';

    x=document.getElementById('port5');
    x.style.display='flex';

    x=document.getElementById('port6');
    x.style.display='flex';
};



//for ***NEWS AND EVENTS***

function tiMe4(){
    x=document.getElementById('john4');

    if (x.style.display == 'none') {

        x.style.display='block';

        const mq = window.matchMedia('(min-width: 1200px)');
        if (mq.matches) {
            x=document.getElementById('port1');
            x.style.display='flex';

            x=document.getElementById('port2');
            x.style.display='flex';

            x=document.getElementById('port3');
            x.style.display='flex';

            x=document.getElementById('port4');
            x.style.display='flex';

            x=document.getElementById('port5');
            x.style.display='flex';

            x=document.getElementById('port6');
            x.style.display='flex';

            x=document.getElementById('john');
            x.style.display='none';

            x=document.getElementById('john1');
            x.style.display='none';

            x=document.getElementById('john2');
            x.style.display='none';

            x=document.getElementById('john3');
            x.style.display='none';
            
            x=document.getElementById('john5');
            x.style.display='none';

            x=document.querySelector('.app');
            x.style.display='none';

            x=document.querySelector('.grid');
            x.style.display='none';

            x=document.querySelector('.text');
            x.style.display='none';
        }else{
            x=document.getElementById('port1');
            x.style.display='none';

            x=document.getElementById('port2');
            x.style.display='none';

            x=document.getElementById('port3');
            x.style.display='none';

            x=document.getElementById('port4');
            x.style.display='none';

            x=document.getElementById('port5');
            x.style.display='none';

            x=document.getElementById('port6');
            x.style.display='none';
        }    
    } else {
        x.style.display='none';

        x=document.querySelector('.app');
        x.style.display='inline-flex';

        x=document.querySelector('.grid');
        x.style.display='flex';

        x=document.querySelector('.text');
        x.style.display='block';
    }
};

//For the red background click
function cMe24(){
    x=document.getElementById('john4');
    x.style.display='none';

    x=document.getElementById('port1');
    x.style.display='flex';

    x=document.getElementById('port2');
    x.style.display='flex';

    x=document.getElementById('port3');
    x.style.display='flex';

    x=document.getElementById('port4');
    x.style.display='flex';

    x=document.getElementById('port5');
    x.style.display='flex';

    x=document.getElementById('port6');
    x.style.display='flex';
};



//for ***ABOUT US***

function tiMe5(){
    x=document.getElementById('john5');

    if (x.style.display == 'none') {

        x.style.display='block';

        const mq = window.matchMedia('(min-width: 1200px)');
        if (mq.matches) {
            x=document.getElementById('port1');
            x.style.display='flex';

            x=document.getElementById('port2');
            x.style.display='flex';

            x=document.getElementById('port3');
            x.style.display='flex';

            x=document.getElementById('port4');
            x.style.display='flex';

            x=document.getElementById('port5');
            x.style.display='flex';

            x=document.getElementById('port6');
            x.style.display='flex';

            x=document.getElementById('john');
            x.style.display='none';

            x=document.getElementById('john1');
            x.style.display='none';

            x=document.getElementById('john2');
            x.style.display='none';

            x=document.getElementById('john3');
            x.style.display='none';
            
            x=document.getElementById('john4');
            x.style.display='none';

            x=document.querySelector('.app');
            x.style.display='none';

            x=document.querySelector('.grid');
            x.style.display='none';

            x=document.querySelector('.text');
            x.style.display='none';
        }else{
            x=document.getElementById('port1');
            x.style.display='none';

            x=document.getElementById('port2');
            x.style.display='none';

            x=document.getElementById('port3');
            x.style.display='none';

            x=document.getElementById('port4');
            x.style.display='none';

            x=document.getElementById('port5');
            x.style.display='none';

            x=document.getElementById('port6');
            x.style.display='none';
        }    
    } else {
        x.style.display='none';

        x=document.querySelector('.app');
        x.style.display='inline-flex';

        x=document.querySelector('.grid');
        x.style.display='flex';

        x=document.querySelector('.text');
        x.style.display='block';
    }
};

function cMe25(){
    x=document.getElementById('john5');
    x.style.display='none';

    x=document.getElementById('port1');
    x.style.display='flex';

    x=document.getElementById('port2');
    x.style.display='flex';

    x=document.getElementById('port3');
    x.style.display='flex';

    x=document.getElementById('port4');
    x.style.display='flex';

    x=document.getElementById('port5');
    x.style.display='flex';

    x=document.getElementById('port6');
    x.style.display='flex';
};



//These functions is in relation to the footer.

//for ***STUDENT INFORMATION***
function click0(){
    x = document.getElementById('one');
    x.style.display='block';

    x = document.getElementById('show');
    x.style.display='block';

    x = document.getElementById('two');
    x.style.display='none';
}

function close0(){
    x = document.getElementById('one');
    x.style.display='none';

    x = document.getElementById('show');
    x.style.display='none';

    x = document.getElementById('two');
    x.style.display='block';
}

//for ***OUR SERVICES***
function click1(){
    x = document.getElementById('one1');
    x.style.display='block';

    x = document.getElementById('show1');
    x.style.display='block';

    x = document.getElementById('two1');
    x.style.display='none';
}

function close1(){
    x = document.getElementById('one1');
    x.style.display='none';

    x = document.getElementById('show1');
    x.style.display='none';

    x = document.getElementById('two1');
    x.style.display='block';
}

//for ***MORE INFORMATION***
function click2(){
    x = document.getElementById('one2');
    x.style.display='block';

    x = document.getElementById('show2');
    x.style.display='block';

    x = document.getElementById('two2');
    x.style.display='none';
}

function close2(){
    x = document.getElementById('one2');
    x.style.display='none';

    x = document.getElementById('show2');
    x.style.display='none';

    x = document.getElementById('two2');
    x.style.display='block';
}

//for ***QUICK LINKS***
function click3(){
    x = document.getElementById('one3');
    x.style.display='block';

    x = document.getElementById('show3');
    x.style.display='block';

    x = document.getElementById('two3');
    x.style.display='none';
}

function close3(){
    x = document.getElementById('one3');
    x.style.display='none';

    x = document.getElementById('show3');
    x.style.display='none';

    x = document.getElementById('two3');
    x.style.display='block';
}