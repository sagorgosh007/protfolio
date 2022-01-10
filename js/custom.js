let navbar = document.querySelector('header');
let menubar = document.querySelector('#menu-bar');
menubar.onclick =()=>{
        navbar.classList.toggle('active');
        menubar.classList.toggle('fa-times');
}

window.onscroll =() =>{
    navbar.classList.remove('active');
    menubar.classList.remove('fa-times');
}


let cursor1 = document.querySelector('.cursor-1');
let cursor2 = document.querySelector('.cursor-2');

window.onmousemove = (e) =>{
    cursor1.style.top = e.pageY + 'px';
    cursor1.style.left = e.pageX + 'px';
    cursor2.style.top = e.pageY + 'px';
    cursor2.style.left = e.pageX + 'px';
}

let links = document.querySelectorAll('a').forEach(links =>{
    links.onmouseenter = () =>{
        cursor1.classList.add('active');
        cursor2.classList.add('active');
    }
    links.onmouseleave = () =>{
        cursor1.classList.remove('active');
        cursor2.classList.remove('active');
    }
})

$('#html').LineProgressbar({
    percentage:90,
    radius: '5px',
    height: '10px',
    fillBackgroundColor: '#071e3d',
    });
    $('#css').LineProgressbar({
    percentage:85,
    radius: '5px',
    height: '10px',
    fillBackgroundColor: '#071e3d'
    });
    $('#sass').LineProgressbar({
    percentage:80,
    radius: '5px',
    height: '10px',
    fillBackgroundColor: '#071e3d'
    });
    $('#bootstrap').LineProgressbar({
    percentage:90,
    radius: '5px',
    height: '10px',
    fillBackgroundColor: '#071e3d'
    });
    $('#javascript').LineProgressbar({
    percentage:50,
    radius: '5px',
    height: '10px',
    fillBackgroundColor: '#071e3d'
    });
    $('#jquery').LineProgressbar({
    percentage:75,
    radius: '5px',
    height: '10px',
    fillBackgroundColor: '#071e3d'
    });

    AOS.init();
    var typed = new Typed('.element', {
        strings: ["sagor gosh.", "a web designer.","font-end developer"],
        typeSpeed: 100,
        backSpeed:100,
        loop:true,
      });