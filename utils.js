const formatNumber = (nStr, decSeperate, groupSeperate) => {
    nStr += '';
    let x = nStr.split(decSeperate);
    let x1 = x[0];
    let x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + groupSeperate + '$2');
    }
    return x1 + x2 + '₫';
}

export const moneyFormat = money => {
    return formatNumber((parseInt(money)/100), '.', ',');
    // return (parseInt(money)/100).toLocaleString('it-IT', {style : 'currency', currency : 'VND'});
}