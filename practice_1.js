/**
 * Created by anavarro on 3/23/15.
 */
var GAP = GAP || {};


GAP.Validations = (function () {
    var textLength= 5;
    return {validateText: function (text) {
        return text.length > textLength;
    }}
})();

var test = GAP.Validations.validateText("hello world");
console.log(test);
