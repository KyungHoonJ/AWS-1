export interface ICount {
  getCount(): number;
  increment(): number;
}

// Closures
function setCount(): ICount {
  let count: number = 0;
  return {
    getCount: (): number => count,
    increment: (): number => ++count,
  };
}
export default setCount() as ICount;
