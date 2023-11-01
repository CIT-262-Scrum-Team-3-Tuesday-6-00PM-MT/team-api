const fetch = require("node-fetch2");

it ("Should match my name", async () => {
    const response = await fetch("hettp://localhost:3000/riley")
    const result = await response.text();
    expect(result).toBe("Hello Riley");
});