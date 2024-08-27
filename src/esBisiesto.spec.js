import esBisiesto from "./esBisiesto.js";

describe("Es Bisiestro", () => {
  it("El 4 deberia considerarse como año bisiestro", () => {
    expect(esBisiesto(4)).toEqual(true);
  });
  it("El 5 no deberia considerarse como año bisiestro", () => {
    expect(esBisiesto(5)).toEqual(false);
  });
  it("Todo año dividido entre 400 es año bisiestro", () => {
    expect(esBisiesto(2000)).toEqual(true);
  });
  it("Todo año dividido entre 100 pero no por 400 NO es año bisiestro", () => {
    expect(esBisiesto(1700)).toEqual(false);
  });
});

