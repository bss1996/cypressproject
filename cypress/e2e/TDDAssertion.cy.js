/// <reference types = 'Cypress' />

describe('Validate complex data using Assert',()=>{

    it('Assert Functionality',()=>{
        cy.visit('https://www.google.com')

        // Asserting strings

        let firstName = 'Bhawanisingh'
        assert.equal(firstName,'Bhawanisingh')
        assert.include(firstName, 'Bhawani')
        assert.typeOf(firstName, 'String')
        assert.notTypeOf(firstName,'Integer')


        // Asserting Objects

        let personn = {

            firstName:"Bhawani", lastName: "Singh"
        };

        assert.property(personn, 'lastName')
        assert.isObject(personn)
        assert.deepPropertyVal(personn, 'lastName','Singh')
        assert.deepEqual(personn, {

            firstName:"Bhawani", lastName: "Singh"
        })

        ////  Asserting Arrays

        let employeeIdss = [1,2,3,4,5,6]
        assert.isArray(employeeIdss)
        assert.includeDeepMembers(employeeIdss, [2,3])
        assert.includeDeepOrderedMembers(employeeIdss,[1,2,3,4,5,6])
        assert.typeOf(employeeIdss, 'Array')
    })
})