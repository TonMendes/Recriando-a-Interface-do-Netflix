$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

function assistir(){
    window.open("https://hbogo.com.br/authentication/login");
}

function trailer(){
    window.open("https://www.youtube.com/watch?v=gcTkNV5Vg1E&ab_channel=VERITASERUMUK");
}

function inicio(){
    window.location.href = "https://hbogo.com.br/home";
}

function series(){
    window.location.href = "https://hbogo.com.br/category/c00bb751-8b69-11e9-810e-0050569a010f/c00bb751-8b69-11e9-810e-0050569a010f/1";
}

function filmes(){
    window.location.href = "https://hbogo.com.br/category/a68afa24-8b69-11e9-810e-0050569a010f/a68afa24-8b69-11e9-810e-0050569a010f/0";
}

function documento(){
    window.location.href = "https://hbogo.com.br/category/e225fd20-8b69-11e9-810e-0050569a010f/e225fd20-8b69-11e9-810e-0050569a010f/1";
}