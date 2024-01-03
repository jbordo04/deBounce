export function randomKey(): string {
  const abc = "abcdefghijklmnopqrstuvyxwzABCEDEFGHIJKLMNOPQRSTUVYWXZ0123456789";
  const max = abc.length;
  function key(arg1: string, i: number) {
    if (i == 6) return arg1;
    const index = Math.floor(Math.random() * max);
    const letter = abc[index];
    arg1 += letter;
    return key(arg1, ++i);
  }

  try {
    return key("", 0);
  } catch (e) {
    return "ko";
  }
}

export function deBounce<T extends (...args: Parameters<T>) => void>(
  func: T,
  timeout: number
) {
  // let timer: NodeJS.Timeout ;
  let timer: ReturnType<typeof setTimeout>;

  return function (this: ThisParameterType<T>, ...args: Parameters<T>) {
    clearTimeout(timer);

    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}

// const result = deBounce(() => {
//   const res = randomKey();
//   console.log(res);
// }, 1000);

// result()
