import { deBounce, randomKey } from "../src/function";

jest.useFakeTimers();

describe("Test para verficiar las funciones", () => {
  test("Generar una llave random", () => {
    const key = randomKey();
    expect(key.length).toBe(6);
  });
  test("Llamar por DeBounce a randomDeBounce", () => {
    const callback = jest.fn();
    const deBounceF = deBounce(callback, 3000);
    deBounceF();
    setTimeout(() => deBounceF, 500);
    setTimeout(() => deBounceF, 1000);
    jest.runAllTimers();

    expect(callback).toHaveBeenCalledTimes(1);
  });
  // test("Generar un error en el test", () => {
  //   const callback = jest.fn();
  //   const deBounceF = deBounce(callback, 3000);
  //   deBounceF();
  //   setTimeout(() => deBounceF, 500);
  //   setTimeout(() => deBounceF, 1000);
  //   jest.runAllTimers();

  //   expect(callback).toHaveBeenCalledTimes(3);
  // });
});
