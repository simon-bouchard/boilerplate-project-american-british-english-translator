'use strict';

const Translator = require('../components/translator.js');

module.exports = function (app) {
  

  app.route('/api/translate')
    .post((req, res) => {

		let {text, locale} = req.body;
		if (!text) {
			return res.json({error: 'No text to translate'})
		}

		if (!text || !locale) {
			return res.json({error: 'Required field(s) missing'})
		}

		if (locale !== 'american-to-british' && locale !== 'british-to-american') {
			return res.json({error: 'Invalid value for locale field'})
		}

		let translator = new Translator(text, locale);

		const translation = translator.translate(true);
		/*
		if (translation === text) {
			return res.json({text: text, translation: 'Everything looks good to me!'})
		}
		*/

		return res.json({text: text, translation: translation})
      
    });
};
