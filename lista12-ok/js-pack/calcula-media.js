module.exports = function calculaMedia(arr) {
    var soma = 0;
    for (var i = 0; i < arr.length; i++) {
        soma = arr[i] + soma;
    }
    var div = soma / arr.length;
    return div;
}

module.exports = function calculaMediaIdade(arr) {
    var soma = 0;
    for (var i = 0; i < arr.length; i++) {
        soma = arr[i].idade + soma;
    }
    var div = soma / arr.length;
    return div;
}