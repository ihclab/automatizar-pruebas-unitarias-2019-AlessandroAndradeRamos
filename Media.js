function mediaAritmetica () {

    let prima = [19, 18, 13, 11];
    let veta = 0;
    for(let i = prima.length -1 ; i >= 0; i--) {
        veta += prima[i];
        console.log(prima[i]);
        
    }
    veta = veta/prima.length;
    console.log(veta);
}

mediaAritmetica();