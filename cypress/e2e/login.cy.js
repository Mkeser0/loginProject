describe('Login Test', () => {
    beforeEach(() => {
        cy.visit("http://localhost:5173");
      });
    
    it('Başarılı form doldurulduğunda submit edebiliyorum:', () => {
     
      cy.get('input[name="email"]').type('test@example.com');
      cy.get('input[name="password"]').type('Password123');
      cy.get('button[type="submit"]').click();
      cy.url().should('include', '/home'); 
    });

    it('email yanlış girdim:', () => {
        
        cy.get('input[name="email"]').type('hfhf@');
        cy.get('[data-cy="error-message"]').should("have.length", 1);
        cy.get('button[type="submit"]').should('be.disabled');
    })

    it('email ve password yanlış girdim:', () => {
        
        cy.get('input[name="email"]').type('hfhf@');
        cy.gety('input[name="password"]').type('123');
        cy.get('[data-cy="error-message"]').should("have.length", 2);
        cy.get('button[type="submit"]').should('be.disabled');
    })

    it('email ve password doğru ama kuralları kabul etmedim:', () => {
        
        cy.get('input[name="email"]').type('test@example.com');
        cy.gety('input[name="password"]').type('Password123');
        cy.get('input[name="terms"]').uncheck();
        cy.get('[data-cy="error-message"]').should("have.length", 1);
        cy.get('button[type="submit"]').should('be.disabled');
    })
  });



