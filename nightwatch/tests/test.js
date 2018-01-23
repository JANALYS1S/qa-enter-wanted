const selectors = require('../support/css_selectors')
const data = require('../support/test_data')
const functions = require('../support/test_functions')

module.exports = {
    beforeEach: browser => {
        browser.url('http://localhost:3000')
    },
    after: browser => {
        browser.end()
    },

    'I can put in information and get a good text message as a result': browser => {
        functions.enterFields(selectors.fields, data.goodData.input, browser)
        browser
            //I've set all the fields, time to submit
            .click(selectors.buttons.submit)
            .pause(100)
        //now I'll check that all the expected results are correct
        browser.expect.element(selectors.messages.header).text.to.equal(data.goodData.output.header)
        browser.expect.element(selectors.messages.errorList).text.to.equal('')
        browser.expect.element(selectors.messages.queryTitle).text.to.equal(data.goodData.output.queryTitle)
        browser.expect.element(selectors.messages.assembledQuery).text.to.equal(data.goodData.output.assembledQuery)
    },

    'If I put in good data, but only one of a set of optional fields, I get an error': browser => {
        functions.enterFields(selectors.fields, data.badData.input, browser)
        browser
            //I've set all the fields, time to submit
            .click(selectors.buttons.submit)
            .pause(100)
        //now I'll check that all the expected results are correct
        browser.expect.element(selectors.messages.header).text.to.equal(data.badData.output.header)
        //this transaction only has one error message to check, so I don't need to repeat the check
        browser.expect.element(selectors.messages.errorList).text.to.contain(data.badData.output.errorList.oln)
        browser.expect.element(selectors.messages.queryTitle).text.to.equal(data.badData.output.queryTitle)
        browser.expect.element(selectors.messages.assembledQuery).text.to.equal(data.badData.output.assembledQuery)
    },

    'If I put in data that is shorter than the minimum requirements, I get an error for each field effected.': browser => {
        functions.enterFields(selectors.fields, data.badData2.input, browser)
        browser
            //I've set all the fields, time to submit
            .click(selectors.buttons.submit)
            .pause(100)
        //now I'll check that all the expected results are correct
        browser.expect.element(selectors.messages.header).text.to.equal(data.badData2.output.header)
        //checks that each error message that is listed in the data has been printed
        functions.enterLists(selectors.messages.errorList, data.badData2.output.errorList, browser)
        browser.expect.element(selectors.messages.queryTitle).text.to.equal(data.badData2.output.queryTitle)
        browser.expect.element(selectors.messages.assembledQuery).text.to.equal(data.badData2.output.assembledQuery)
    },

    'If I put in data that is longer than the maximum allowed, I get an error for each field effected.': browser => {
        functions.enterFields(selectors.fields, data.badData3.input, browser)
        browser
            //I've set all the fields, time to submit
            .click(selectors.buttons.submit)
            .pause(100)
        //now I'll check that all the expected results are correct
        browser.expect.element(selectors.messages.header).text.to.equal(data.badData3.output.header)
        //checks that each error message that is listed in the data has been printed
        functions.enterLists(selectors.messages.errorList, data.badData3.output.errorList, browser)
        browser.expect.element(selectors.messages.queryTitle).text.to.equal(data.badData3.output.queryTitle)
        browser.expect.element(selectors.messages.assembledQuery).text.to.equal(data.badData3.output.assembledQuery)
    }
}