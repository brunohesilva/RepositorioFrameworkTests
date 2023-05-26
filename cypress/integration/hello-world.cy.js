/describe('Hello World Test', () => {
it('Displays "Hello, World!"', () => {
  cy.visit('https://www.example.com'); // Altere para o URL desejado

  cy.contains('Hello, World!'); // Altere para o texto esperado
});
}); /
