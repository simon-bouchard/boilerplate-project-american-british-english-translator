const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js")
const britishOnly = require('./british-only.js')

class Translator {

	constructor(phrase = '', locale) {
		this.phrase = phrase;

		if (locale === 'american-to-british') {
			this.translationMaps = [
				americanToBritishSpelling,
				americanToBritishTitles,
				americanOnly
			]
			this.timeTranslation = {
				pattern: /(\d{1,2}):(\d{2})/,
				replacement: '$1.$2'
			}

		} else if (locale === 'british-to-american') {
			this.translationMaps = [
				this.flipMapping(americanToBritishSpelling),
				this.flipMapping(americanToBritishTitles),
				britishOnly,
			]
			this.timeTranslation = {
				pattern: /(\d{1,2})\.(\d{2})/,
				replacement: '$1:$2'
			}
		}
	}

	flipMapping(mapping) {
    	let flipped = {};
		for (let key in mapping) {
			flipped[mapping[key]] = key;
		}
		return flipped;
	}

	translate(highlightTranslations=false) {
    	let translatedPhrase = this.phrase;

	   	 for (let map of this.translationMaps) {
   	 	 	const pattern = new RegExp(
				`\\b(${Object.keys(map).map(key => key.replace(/\./g, '\\.')).join('|')})(?=\\s|$|[.,!?])`,
        		'gi'
      		);

      		translatedPhrase = translatedPhrase.replace(pattern, (match) => {
        		const lowerMatch = match.toLowerCase();
        		let replacement = map[lowerMatch];

        		if (match[0] === match[0].toUpperCase()) {
          			replacement = replacement[0].toUpperCase() + replacement.slice(1);
        		}

				if (highlightTranslations) {
					replacement = '<span class="highlight">' + replacement + '</span>'
				}

        		return replacement;
      		});
    	}

		let timeTranslation = this.timeTranslation;
		if (highlightTranslations) {
			timeTranslation.replacement = '<span class=highlight>' + timeTranslation.replacement + '</span>'
		}

		translatedPhrase = translatedPhrase.replace(this.timeTranslation.pattern, this.timeTranslation.replacement)

		if (!translatedPhrase || translatedPhrase === this.phrase) {
			return 'Everything looks good to me!'
		}

    	return translatedPhrase
  	}

}

module.exports = Translator;
