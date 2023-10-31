const fetch = require( "node-fetch2" ) ;

it( "Should match my name", async () => {
    const response = await fetch( "http://localhost:3000/miguel" ) ;
    const result = await response.text() ;
    expect( result ).toBe( "Hello Miguel!" ) ;
} ) ;