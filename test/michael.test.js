const response = await fetch('http://localhost:3000/michael');
  const name = await response.text();
  expect(name).toBe("michael");