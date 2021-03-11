class Writer {
  constructor() {}
}

type Log<T> = [T, string[]];

function addTwoNumbers(numbers: { one: number; two: number }): number {
  return numbers.one + numbers.two;
}

function getHalf(value: number) {
  return value / 2;
}

function compose<TInput, TIntermediate, TOutput>(
  f: (i: TIntermediate) => TOutput,
  g: (i: TInput) => TIntermediate
): (i: TInput) => TOutput {
  return (i: TInput) => f(g(i));
}

function addTwoNumbersWithLogging(numbers: { one: number; two: number }) {
  return [addTwoNumbers(numbers), "added two numbers"];
}

function bind<TInput, TOutput>(
  f: (i: TInput) => TOutput,
  comment: string
): (i: TInput) => Log<TOutput> {
  return (i: TInput) => [f(i), [comment]];
}

const addAndDivide = compose(getHalf, addTwoNumbers);

const addWithLogging = bind(addTwoNumbers, "added two numbers");

const value = addAndDivide({ one: 50, two: 34 });

const addTwoResult = addTwoNumbersWithLogging({ one: 34, two: 34 });

console.log(value);
console.log(addTwoResult);
