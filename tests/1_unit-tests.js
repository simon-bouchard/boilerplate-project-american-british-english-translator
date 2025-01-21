const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');

suite('Unit Tests', () => {

	test('Translate a phrase to British English', () => {

		const phrase = 'Mangoes are my favorite fruit.'
		const response = 'Mangoes are my favourite fruit.'
		const locale = 'american-to-british'

		const translator = new Translator(phrase, locale);
		assert.equal(translator.translate(), response, `Should answer with "${response}" when "${phrase} is entered`);
	});

	test('Translate a phrase to British English', () => {

		const phrase = 'I ate yogurt for breakfast.';
		const response = 'I ate yoghurt for breakfast.';
		const locale = 'american-to-british';

		const translator = new Translator(phrase, locale);
		assert.equal(translator.translate(), response, `Should answer with "${response}" when "${phrase}" is entered`);
	});

	test('Translate a phrase to British English', () => {

		const phrase = "We had a party at my friend's condo.";
		const response = "We had a party at my friend's flat.";
		const locale = 'american-to-british';

		const translator = new Translator(phrase, locale);
		assert.equal(translator.translate(), response, `Should answer with "${response}" when "${phrase}" is entered`);
	});

	test('Translate a phrase to British English', () => {

		const phrase = "Can you toss this in the trashcan for me?";
		const response = "Can you toss this in the bin for me?";
		const locale = 'american-to-british';

		const translator = new Translator(phrase, locale);
		assert.equal(translator.translate(), response, `Should answer with "${response}" when "${phrase}" is entered`);
	});

	test('Translate a phrase to British English', () => {

		const phrase = "The parking lot was full.";
		const response = "The car park was full.";
		const locale = 'american-to-british';

		const translator = new Translator(phrase, locale);
		assert.equal(translator.translate(), response, `Should answer with "${response}" when "${phrase}" is entered`);
	});

	test('Translate a phrase to British English', () => {

		const response = "Like a high tech Heath Robinson device.";
		const phrase = "Like a high tech Rube Goldberg machine.";
		const locale = 'american-to-british';

		const translator = new Translator(phrase, locale);
		assert.equal(translator.translate(), response, `Should answer with "${response}" when "${phrase}" is entered`);
	});

	test('Translate a phrase to British English', () => {

		const phrase = "To play hooky means to skip class or work.";
		const response = "To bunk off means to skip class or work.";
		const locale = 'american-to-british';

		const translator = new Translator(phrase, locale);
		assert.equal(translator.translate(), response, `Should answer with "${response}" when "${phrase}" is entered`);
	});

	test('Translate a phrase to British English', () => {

		const phrase = "No Mr. Bond, I expect you to die.";
		const response = "No Mr Bond, I expect you to die.";
		const locale = 'american-to-british';

		const translator = new Translator(phrase, locale);
		assert.equal(translator.translate(), response, `Should answer with "${response}" when "${phrase}" is entered`);
	});

	test('Translate a phrase to British English', () => {

		const phrase = "Dr. Grosh will see you now.";
		const response = "Dr Grosh will see you now.";
		const locale = 'american-to-british';

		const translator = new Translator(phrase, locale);
		assert.equal(translator.translate(), response, `Should answer with "${response}" when "${phrase}" is entered`);
	});

	test('Translate a phrase to British English', () => {

		const phrase = "Lunch is at 12:15 today.";
		const response = "Lunch is at 12.15 today.";
		const locale = 'american-to-british';

		const translator = new Translator(phrase, locale);
		assert.equal(translator.translate(), response, `Should answer with "${response}" when "${phrase}" is entered`);
	});

	test('Translate a phrase to American English', () => {

		const phrase = "We watched the footie match for a while.";
		const response = "We watched the soccer match for a while.";
		const locale = 'british-to-american';

		const translator = new Translator(phrase, locale);
		assert.equal(translator.translate(), response, `Should answer with "${response}" when "${phrase}" is entered`);
	});

	test('Translate a phrase to American English', () => {

		const phrase = "Paracetamol takes up to an hour to work.";
		const response = "Tylenol takes up to an hour to work.";
		const locale = 'british-to-american';

		const translator = new Translator(phrase, locale);
		assert.equal(translator.translate(), response, `Should answer with "${response}" when "${phrase}" is entered`);
	});

	test('Translate a phrase to American English', () => {

		const phrase = "First, caramelise the onions.";
		const response = "First, caramelize the onions.";
		const locale = 'british-to-american';

		const translator = new Translator(phrase, locale);
		assert.equal(translator.translate(), response, `Should answer with "${response}" when "${phrase}" is entered`);
	});

	test('Translate a phrase to American English', () => {

		const phrase = "I spent the bank holiday at the funfair.";
		const response = "I spent the public holiday at the carnival.";
		const locale = 'british-to-american';

		const translator = new Translator(phrase, locale);
		assert.equal(translator.translate(), response, `Should answer with "${response}" when "${phrase}" is entered`);
	});

	test('Translate a phrase to American English', () => {

		const phrase = "I had a bicky then went to the chippy.";
		const response = "I had a cookie then went to the fish-and-chip shop.";
		const locale = 'british-to-american';

		const translator = new Translator(phrase, locale);
		assert.equal(translator.translate(), response, `Should answer with "${response}" when "${phrase}" is entered`);
	});

	test('Translate a phrase to American English', () => {

		const phrase = "I've just got bits and bobs in my bum bag.";
		const response = "I've just got odds and ends in my fanny pack.";
		const locale = 'british-to-american';

		const translator = new Translator(phrase, locale);
		assert.equal(translator.translate(), response, `Should answer with "${response}" when "${phrase}" is entered`);
	});

	test('Translate a phrase to American English', () => {

		const phrase = "The car boot sale at Boxted Airfield was called off.";
		const response = "The swap meet at Boxted Airfield was called off.";
		const locale = 'british-to-american';

		const translator = new Translator(phrase, locale);
		assert.equal(translator.translate(), response, `Should answer with "${response}" when "${phrase}" is entered`);
	});

	test('Translate a phrase to American English', () => {

		const phrase = "Have you met Mrs Kalyani?";
		const response = "Have you met Mrs. Kalyani?";
		const locale = 'british-to-american';

		const translator = new Translator(phrase, locale);
		assert.equal(translator.translate(), response, `Should answer with "${response}" when "${phrase}" is entered`);
	});

	test('Translate a phrase to American English', () => {

		const phrase = "Prof Joyner of King's College, London.";
		const response = "Prof. Joyner of King's College, London.";
		const locale = 'british-to-american';

		const translator = new Translator(phrase, locale);
		assert.equal(translator.translate(), response, `Should answer with "${response}" when "${phrase}" is entered`);
	});

	test('Translate a phrase to American English', () => {

		const phrase = "Tea time is usually around 4 or 4.30.";
		const response = "Tea time is usually around 4 or 4:30.";
		const locale = 'british-to-american';

		const translator = new Translator(phrase, locale);
		assert.equal(translator.translate(), response, `Should answer with "${response}" when "${phrase}" is entered`);
	});

	test('Highlight translations in a phrase', () => {

		const phrase = "Mangoes are my favorite fruit.";
		const response = 'Mangoes are my <span class="highlight">favourite</span> fruit.';
		const locale = 'american-to-british';

		const translator = new Translator(phrase, locale);
		assert.equal(translator.translate(true), response, `Should answer with "${response}" when "${phrase}" is entered`);
	});

	test('Highlight translations in a phrase', () => {

		const phrase = "I ate yogurt for breakfast.";
		const response = 'I ate <span class="highlight">yoghurt</span> for breakfast.';
		const locale = 'american-to-british';

		const translator = new Translator(phrase, locale);
		assert.equal(translator.translate(true), response, `Should answer with "${response}" when "${phrase}" is entered`);
	});

	test('Highlight translations in a phrase', () => {

		const phrase = "We watched the footie match for a while.";
		const response = 'We watched the <span class="highlight">soccer</span> match for a while.';
		const locale = 'british-to-american';

		const translator = new Translator(phrase, locale);
		assert.equal(translator.translate(true), response, `Should answer with "${response}" when "${phrase}" is entered`);
	});

	test('Highlight translations in a phrase', () => {

		const phrase = "Paracetamol takes up to an hour to work.";
		const response = '<span class="highlight">Tylenol</span> takes up to an hour to work.';
		const locale = 'british-to-american';

		const translator = new Translator(phrase, locale);
		assert.equal(translator.translate(true), response, `Should answer with "${response}" when "${phrase}" is entered`);
	});


});
