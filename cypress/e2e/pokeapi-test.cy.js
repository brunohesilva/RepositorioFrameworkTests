describe('API Test 1', () => {
  it('Fetches Pokémon data', () => {
    cy.request('GET', 'https://pokeapi.co/api/v2/pokemon/1')
      .then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('name', 'bulbasaur');
        expect(response.body).to.have.property('height', 7);
        expect(response.body).to.have.property('weight', 69);
      });
  });
});

describe('API Test 2', () => {
  it('Fetches Pokémon abilities', () => {
    cy.request('GET', 'https://pokeapi.co/api/v2/ability/1')
      .then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('name', 'stench');
        expect(response.body).to.have.property('effect_entries').to.be.an('array').that.is.not.empty;
      });
  });
});

describe('API Test 3', () => {
  it('Fetches Pokémon types', () => {
    cy.request('GET', 'https://pokeapi.co/api/v2/type')
      .then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('count').to.be.greaterThan(0);
        expect(response.body).to.have.property('results').to.be.an('array').that.is.not.empty;
      });
  });
});
