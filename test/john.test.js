const fetch = require( "node-fetch2" ) ;

it( "Should match my name", async () => {
    const response = await fetch('http://localhost:3000/john');
    const name = await response.text();
    expect(name).toBe("Hello John");
} ) ;