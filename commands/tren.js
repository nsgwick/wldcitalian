module.exports = {
    name: '.tren',
    description: 'Tren!',
    execute(msg, args) {
        const {google} = require('googleapis');
        const apiKey = "579bd4f236802db9469b9ab341c02b789ab1596f";
        var googleTranslate = require('google-translate')(apiKey, { concurrentLimit: 20 });
        google.translate(args, "it", function(err, translation) {
          console.log("Translated " + args + " to " + translation.translatedText);
          msg.reply(translation.translatedText);
        });
    },
  };
  