import 'cypress-file-upload';

const { createPartiallyEmittedExpression } = require("typescript")

describe('My First Test', () => {
	it('Visits the app root url header', () => {
		cy.visit('/')
		cy.contains('h1', 'Should we make some pies?')
	})


	it('Input label and button', () => {
		cy.visit('/')
		//cy.get('.upload > p:nth-child(1)').should('have.text', 'Drag your package.json into the oven or add it manually')
		cy.get('input').should('be.visible')
	})


	it('Upload file', () => {
		cy.visit('/')
		const yourFixturePath = 'package_example.json';
		cy.get('input').attachFile(yourFixturePath);


	})
})
