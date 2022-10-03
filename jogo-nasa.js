function neve(){
    
    var url = "imgs/fundo-neve.jpg";
    a = document.getElementById("body")

    a.style.backgroundImage = `url(${url})`;


    let pop =  document.getElementById("popup1")
    var transicao, t;
    clearInterval(transicao);

    if(pop.style.display == 'none'){
        pop.style.opacity = "0";
        pop.style.display = 'block';
        var x = .1;
    }else{
        var x = .9;
        t = true;
    }

    transicao = setInterval(function(){
        pop.style.opacity = x;
        x+= t ? -.1 : .1;
        if( (x >= 1 && !t) || (x <= 0 && t)){
        clearInterval(transicao);
        if(x <= 0) pop.style.display = 'none';
        }
    }, 30);





    document.getElementById("popup2").style.display = "none"
}

function fogo(){
    
    var url = "imgs/fundo-fogo.jpg";
    a = document.getElementById("body")

    a.style.backgroundImage = `url(${url})`;





    let pop =  document.getElementById("popup2")
    var transicao, t;
    clearInterval(transicao);

    if(pop.style.display == 'none'){
        pop.style.opacity = "0";
        pop.style.display = 'block';
        var x = .1;
    }else{
        var x = .9;
        t = true;
    }

    transicao = setInterval(function(){
        pop.style.opacity = x;
        x+= t ? -.1 : .1;
        if( (x >= 1 && !t) || (x <= 0 && t)){
        clearInterval(transicao);
        if(x <= 0) pop.style.display = 'none';
        }
    }, 30);






    document.getElementById("popup1").style.display = "none"
}

function reset(){
    
    var url = "imgs/fundo.jpg";
    t = document.getElementById("body")

    t.style.backgroundImage = `url(${url})`;






    document.getElementById("popup1").style.display = "none"
    document.getElementById("popup2").style.display = "none"
}





function fecharNeve(){
    document.getElementById("popup1").style.display = "none"
}

function fecharFogo(){
    document.getElementById("popup2").style.display = "none"
}