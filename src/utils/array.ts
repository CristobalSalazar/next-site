export function getRandomArrEl<T>(arr: Array<T>): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function createArrayWithValue<T>(length: number, obj: T) {
  const arr = [];
  for (let i = 0; i < length; i++) {
    arr.push(obj);
  }
  return arr;
}
