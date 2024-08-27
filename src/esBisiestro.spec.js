import esBisiestro from "./esBisiestro.js";

describe("Es Bisiestro", () => {
  it("El 4 deberia considerarse como año bisiestro", () => {
    //const result = esBisiestro(4);
    expect(esBisiestro(4)).toEqual(true);
  });
  it("El 5 no deberia considerarse como año bisiestro", () => {
    //const result = esBisiestro(5);
    expect(esBisiestro(5)).toEqual(false);
  });
});

