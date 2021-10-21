var greetInLang = require('./langData.json');

var greetEnglish = function() {
    console.log(greetInLang.en);
}

module.exports = greetEnglish;
