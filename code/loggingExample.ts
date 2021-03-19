class Writer<T> {
  constructor(public value: T, public statements: string[]) {}

  static bind<TBind, TOutput>(f: (i: TBind) => TOutput, statement: string) {
    return (w: Writer<TBind>) => {
      const value = w.value;
      const statements = w.statements;
      return new Writer(f(value), [...statements, statement]);
    };
  }

  static unit<T>(item: T): Writer<T> {
    return new Writer(item, []);
  }
}

type numbers = [number, number];

function addTwoNumbers(numbers: numbers): number {
  const [a, b] = numbers;
  return a + b;
}

function divideByTwo(n: number) {
  return n / 2;
}

function compose<TInput, TMiddle, TOutput>(
  f: (i: TMiddle) => TOutput,
  g: (i: TInput) => TMiddle
): (i: TInput) => TOutput {
  return (i) => f(g(i));
}

const addWithLogging = Writer.bind(addTwoNumbers, "adding two numbers");
const divideWithLogging = Writer.bind(divideByTwo, "divide by 2");

const addAndDivideWithLogging = compose(divideWithLogging, addWithLogging);

const addAndDivide = compose(divideByTwo, addTwoNumbers);

console.log(addAndDivideWithLogging(Writer.unit([54, 30])));
