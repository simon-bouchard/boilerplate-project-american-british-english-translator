const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
const server = require('../server.js');

chai.use(chaiHttp);

let Translator = require('../components/translator.js');

suite('Functional Tests', () => {

	test('Translation with text and locale field', (done) => {

		const text = 'Paracetamol takes up to an hour to work.'
		const response = '<span class="highlight">Tylenol</span> takes up to an hour to work.'
		const locale = 'british-to-american'

		chai
			.request(server)
			.keepOpen()
			.post('/api/translate/')
			.send({
				text: text,
				locale: locale
			})
			.end((err, res) => {
				assert.equal(res.status, 200, 'Status should be 200'),
				assert.equal(res.body.text, text, 'Text on request and response should match'),
				assert.equal(res.body.translation, response, 'Translation should be correct'),	
				done()
			})
	})

	test('Translation with text and invalid locale field', (done) => {

		const text = 'Paracetamol takes up to an hour to work.'
		const locale = 'lalalal'

		chai
			.request(server)
			.keepOpen()
			.post('/api/translate/')
			.send({
				text: text,
				locale: locale
			})
			.end((err, res) => {
				assert.equal(res.status, 200, 'Status should be 200'),
				assert.equal(res.body.error, 'Invalid value for locale field', 'Error msg should match'),
				done()
			})
	})

	test('Translation with missing text field', (done) => {

		const locale = 'british-to-american'

		chai
			.request(server)
			.keepOpen()
			.post('/api/translate/')
			.send({
				locale: locale
			})
			.end((err, res) => {
				assert.equal(res.status, 200, 'Status should be 200'),
				assert.equal(res.body.error, 'Required field(s) missing', 'Error message should match'),
				done()
			})
	})

	test('Translation with missing locale field', (done) => {

		const text = 'Paracetamol takes up to an hour to work.'

		chai
			.request(server)
			.keepOpen()
			.post('/api/translate/')
			.send({
				text: text,
			})
			.end((err, res) => {
				assert.equal(res.status, 200, 'Status should be 200'),
				assert.equal(res.body.error, 'Required field(s) missing', 'Error message should match'),
				done()
			})
	})

	test('Translation with empty text field', (done) => {

		const locale = 'british-to-american'

		chai
			.request(server)
			.keepOpen()
			.post('/api/translate/')
			.send({
				text: '',
				locale: locale
			})
			.end((err, res) => {
				assert.equal(res.status, 200, 'Status should be 200'),
				assert.equal(res.body.error, 'No text to translate', 'Error message should match'),
				done()
			})
	})

	test('Translation with text that needs no translation', (done) => {

		const text = 'Paracetamol takes up to an hour to work.'
		const response = 'Everything looks good to me!'
		const locale = 'american-to-british'

		chai
			.request(server)
			.keepOpen()
			.post('/api/translate/')
			.send({
				text: text,
				locale: locale
			})
			.end((err, res) => {
				assert.equal(res.status, 200, 'Status should be 200'),
				assert.equal(res.body.text, text, 'Text on request and response should match'),
				assert.equal(res.body.translation, response, 'Response should be correct'),	
				done()
			})
	})


});
