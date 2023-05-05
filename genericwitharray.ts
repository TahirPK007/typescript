function getpro<T>(products: T[]): T {
  const myindex = 3;
  return products[myindex];
}

//with arrow function
const getmore = <T>(pros: T[]): T => {
  return pros[3];
};
