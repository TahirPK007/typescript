const score: Array<number> = [];
const names: Array<string> = [];

function idone(val: boolean | number): boolean | number {
  return val;
}

function id2(val: any): any {
  return val;
}

function id3<Type>(val: Type): Type {
  return val;
}
id3(3);
