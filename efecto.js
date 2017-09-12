var writing = str => {
    let arrFromStr = str.split('');
    let  i = 0;
    let printStr = setInterval(function(){
        if(arrFromStr[i] === ' '){
            document.body.innerHTML += arrFromStr[i ];
            document.body.innerHTML += arrFromStr[i + 1];
            i += 2;



        }else{
            document.body.innerHTML += arrFromStr[i];
            i++;
        }
        document.body.innerHTML += arrFromStr[i];
        i++;

        if (i === arrFromStr.length ){
            clearInterval(printStr);
            document.body.style.color = "steelblue"

        }
    },120); // 120 es el tiempo que yo le asigné, pueden cambiarlo para que sea más rápido o lento
};
writing('Bienvenido, soy una máquina de escribir en JS');


// efectos

// autor:  Alejandro Velásquez M  || https://github.com/vant3x
