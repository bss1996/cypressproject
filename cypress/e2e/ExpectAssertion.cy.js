/// <reference types = 'Cypress' />

describe('Learn BDD Explicit Assertion',()=>{

    it('Validate Complex data using expect',()=>{

        cy.visit('www.google.com')



        /// Simple String Verification 
        let PageName = "Google Homepage"
        expect(PageName).to.not.equal('Google')
        expect(PageName).to.be.equal('Google Homepage') 
        expect(PageName).to.be.a('string')
        expect(PageName).to.have.length.of.at.most(15)



        /// Validating objects

        let Person = {
                firstName: "Bhawnai", lastName: "Singh"

        };
        
        expect(Person).to.deep.equal({
            firstName: "Bhawnai", lastName: "Singh"

    })
        expect(Person).to.have.property('lastName', 'Singh')

        //// Validating Arrays

        let EmployeeId = [1,2,3,4,5]
        expect(EmployeeId).to.have.ordered.members([1,2,3,4,5])
        expect(EmployeeId).to.include(2)
        expect(EmployeeId).to.include.members([4,5])
    })
})