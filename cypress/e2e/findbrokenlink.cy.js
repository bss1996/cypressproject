describe('Broken Links Check', () => {
    it('should find and log broken links', () => {
      cy.visit('https://www.automationteststore.com/');
  
      let totalLinks = 0;
      let brokenLinks = 0;
  
      // Find all links on the page
      cy.get('a').each((link) => {
        const url = link.attr('href');
  
        // Skip if the link does not have an href attribute
        if (!url) {
          return;
        }
  
        totalLinks++;
  
        // Make an HTTP request to check the status
        cy.request({
          url,
          failOnStatusCode: false,
        }).then((response) => {
          // Log broken links
          if (response.status !== 200 && response.status !== 0) {
            cy.log(`Broken link found: ${url} - Status Code: ${response.status}`);
            brokenLinks++;
          }
        });
      }).then(() => {
        // Log total numbers
        cy.log(`Total Links: ${totalLinks}`);
        cy.log(`Total Broken Links: ${brokenLinks}`);
        
        // You can also assert on the numbers if needed
        // cy.expect(brokenLinks).to.eq(0); // Assert that there are no broken links
      });
    });
  });
  