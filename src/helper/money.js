
export const money = (value) => {
    
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    return formatter.format(value);
}

export const moneyTagStyle = (value) => {
   return (value <= 1000) ? {"is-success": true} : (value <= 32000) ? {"is-warning" : true} : {"is-danger" : true};  
}
