import esBisiestro from "./esBisiestro.js";

describe("Es Bisiestro", () => {
  it("El 4 deberia considerarse como año bisiestro", () => {
    expect(esBisiestro(4)).toEqual(true);
  });
  it("El 5 no deberia considerarse como año bisiestro", () => {
    expect(esBisiestro(5)).toEqual(false);
  });
  it("Todo año dividido entre 400 es año bisiestro", () => {
    expect(esBisiestro(2000)).toEqual(true);
  });
  it("Todo año dividido entre 100 pero no por 400 NO es año bisiestro", () => {
    expect(esBisiestro(1700)).toEqual(false);
  });
});

