const formatearDinero = (valor) => {
    const formatter =new Intl.NumberFormat('en-US',{
        style: 'currency',
        currency:'USD'
    })
    return formatter.format(valor)
}

const calcularTotalPagar = (cantidad, plaza) =>{
    let total;
    //mientras mayoe es la cantidad, menor el interes
    if(cantidad < 500){
        total = cantidad * 1.5;
    }else if(cantidad >= 5000 && cantidad < 1000){
        total = cantidad * 1.4;
    }else if(cantidad >= 10000 && cantidad < 15000){
        total = cantidad * 1.3;
    }else{
        total = cantidad * 1.2;
    }

    //plazo - mas plazo, mayor interes
    if (plaza === 6 ){
        total *= 1.1;
    }else if(plaza === 12){
        total *= 1.2;
    }else{
        total *= 1.3;
    }
    return total
}

export {
    formatearDinero,
    calcularTotalPagar
}