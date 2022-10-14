//for ***MENU***

const btn = document.querySelector('.mikee');
const sect = document.querySelector('.hidden');
const page = document.querySelectorAll('.uol');
const g = document.querySelector('.app');
    
btn.addEventListener('click', function() {
    
    if (sect.style.display == 'none') {
        sect.style.display = 'block'
        g.style.display='none'
        page.forEach((moth) => {
            moth.style.display = "none";
        });
    } else {
        sect.style.display = 'none';
        page.forEach((moth) => {
            moth.style.display = "block";
        });

        x=document.querySelectorAll('.port');
        x.forEach((port) => {
            port.style.display = 'none';
        });

        x=document.querySelectorAll('.nav-disp');
        x.forEach((navdisp) => {
            navdisp.style.display = 'flex';
        });

        mq = window.matchMedia('(min-width: 700px)');
        if (mq.matches) {
            g.style.display='inline-flex';
        } else {
            g.style.display='none';
        }     
    }    
});


//For the footer
const disp = document.querySelectorAll('.disp');
disp.forEach((portal) => {
    portal.onclick = function(){
        let item = this.nextElementSibling;
        if (item.style.display == 'none'){
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }  
    };
});



//for ***STUDY***

function tiMe(){
    x=document.getElementById('john');

    if (x.style.display == 'none') {

        x.style.display='block';

        const mq = window.matchMedia('(min-width: 1200px)');
        if (mq.matches) {
            x=document.querySelectorAll('.nav-disp');
            x.forEach((navdisp) => {
                navdisp.style.display = 'flex';
            });

            x=document.querySelectorAll('.port');
            x.forEach((port) => {
                port.style.display = 'none';
            });

            x=document.getElementById('john');
            x.style.display='block';

            x=document.querySelector('.app');
            x.style.display='none';

            x=document.querySelector('.grid');
            x.style.display='none';

            x=document.querySelector('.text');
            x.style.display='none';
        }else{
            x=document.querySelectorAll('.nav-disp');
            x.forEach((navdisp) => {
                navdisp.style.display = 'none';
            });
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


//for ***RESEARCH***

function tiMe1(){
    x=document.getElementById('john1');

    if (x.style.display == 'none') {

        x.style.display='block';

        const mq = window.matchMedia('(min-width: 1200px)');
        if (mq.matches) {
            x=document.querySelectorAll('.nav-disp');
            x.forEach((navdisp) => {
                navdisp.style.display = 'flex';
            });

            x=document.querySelectorAll('.port');
            x.forEach((port) => {
                port.style.display = 'none';
            });

            x=document.getElementById('john1');
            x.style.display='block';

            x=document.querySelector('.app');
            x.style.display='none';

            x=document.querySelector('.grid');
            x.style.display='none';

            x=document.querySelector('.text');
            x.style.display='none';
        }else{
            x=document.querySelectorAll('.nav-disp');
            x.forEach((navdisp) => {
                navdisp.style.display = 'none';
            });
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


//for ***CURRENT STUDENT***

function tiMe2(){
    x=document.getElementById('john2');

    if (x.style.display == 'none') {

        x.style.display='block';

        const mq = window.matchMedia('(min-width: 1200px)');
        if (mq.matches) {
            x=document.querySelectorAll('.nav-disp');
            x.forEach((navdisp) => {
                navdisp.style.display = 'flex';
            });

            x=document.querySelectorAll('.port');
            x.forEach((port) => {
                port.style.display = 'none';
            });

            x=document.getElementById('john2');
            x.style.display='block';

            x=document.querySelector('.app');
            x.style.display='none';

            x=document.querySelector('.grid');
            x.style.display='none';

            x=document.querySelector('.text');
            x.style.display='none';
        }else{
            x=document.querySelectorAll('.nav-disp');
            x.forEach((navdisp) => {
                navdisp.style.display = 'none';
            });
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


//for ***ALUMNI AND SUPPORTERS***

function tiMe3(){
    x=document.getElementById('john3');

    if (x.style.display == 'none') {

        x.style.display='block';

        const mq = window.matchMedia('(min-width: 1200px)');
        if (mq.matches) {
            x=document.querySelectorAll('.nav-disp');
            x.forEach((navdisp) => {
                navdisp.style.display = 'flex';
            });

            x=document.querySelectorAll('.port');
            x.forEach((port) => {
                port.style.display = 'none';
            });

            x=document.getElementById('john3');
            x.style.display='block';

            x=document.querySelector('.app');
            x.style.display='none';

            x=document.querySelector('.grid');
            x.style.display='none';

            x=document.querySelector('.text');
            x.style.display='none';
        }else{
            x=document.querySelectorAll('.nav-disp');
            x.forEach((navdisp) => {
                navdisp.style.display = 'none';
            });
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


//for ***NEWS AND EVENTS***

function tiMe4(){
    x=document.getElementById('john4');

    if (x.style.display == 'none') {

        x.style.display='block';

        const mq = window.matchMedia('(min-width: 1200px)');
        if (mq.matches) {
            x=document.querySelectorAll('.nav-disp');
            x.forEach((navdisp) => {
                navdisp.style.display = 'flex';
            });

            x=document.querySelectorAll('.port');
            x.forEach((port) => {
                port.style.display = 'none';
            });

            x=document.getElementById('john4');
            x.style.display='block';

            x=document.querySelector('.app');
            x.style.display='none';

            x=document.querySelector('.grid');
            x.style.display='none';

            x=document.querySelector('.text');
            x.style.display='none';
        }else{
            x=document.querySelectorAll('.nav-disp');
            x.forEach((navdisp) => {
                navdisp.style.display = 'none';
            });
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


//for ***ABOUT US***

function tiMe5(){
    x=document.getElementById('john5');

    if (x.style.display == 'none') {

        x.style.display='block';

        const mq = window.matchMedia('(min-width: 1200px)');
        if (mq.matches) {
            x=document.querySelectorAll('.nav-disp');
            x.forEach((navdisp) => {
                navdisp.style.display = 'flex';
            });

            x=document.querySelectorAll('.port');
            x.forEach((port) => {
                port.style.display = 'none';
            });

            x=document.getElementById('john5');
            x.style.display='block';

            x=document.querySelector('.app');
            x.style.display='none';

            x=document.querySelector('.grid');
            x.style.display='none';

            x=document.querySelector('.text');
            x.style.display='none';
        }else{
            x=document.querySelectorAll('.nav-disp');
            x.forEach((navdisp) => {
                navdisp.style.display = 'none';
            });
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

//For the reverse button with the red background.
const backBtn = document.querySelectorAll('.undered');
backBtn.forEach((reverse) => {
    reverse.addEventListener('click', () => {
        x=document.querySelectorAll('.port');
        x.forEach((port) => {
            port.style.display = 'none';
        });

        x=document.querySelectorAll('.nav-disp');
        x.forEach((navdisp) => {
            navdisp.style.display = 'flex';
        });
    });
});