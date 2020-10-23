import 'cypress-file-upload';
import { PusherMock } from "pusher-js-mock";

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

		cy.get('.loading')


		cy.window()
		.then((win) => {
			const uuid = win.uuid
			// initializing PusherMock
			const pusher = new PusherMock();
			// subscribing to a Pusher channel
			const channel = pusher.subscribe(`pie-${uuid}`);
			// emitting an event
			const payload = {
				"repo": {
					"name": "vendor/package",
					"url": "repo url"
				},
				"issues": [
					{
						"url": "",
						"title": "issue title",
						"description": "",
						"author": "",
						"status": "open/closed",
						"tags": [
							"hacktoberfest",
							"cheaters"
						],
						"id": "",
						"date_opened": ""
					}
				]
			}
			channel.emit("event-name", payload);
		})

	})
	
})

