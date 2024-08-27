import esBisiestro from "./esBisiestro.js";

describe("Es Bisiestro", () => {
  it("El 4 deberia considerarse como año bisiestro", () => {
    const result = esBisiestro(4);
    expect(result).toEqual(true);
  });
});

