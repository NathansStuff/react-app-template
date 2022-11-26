export function getNumber(value: string | boolean, maxValue?: number): number {
  //
  let intValue = 0;
  if (typeof value === 'string') {
    intValue = parseInt(value, 10);
  }
  if (isNaN(intValue)) {
    intValue = 0;
  }
  if (maxValue && intValue > maxValue) return maxValue;

  return intValue;
}

export function getBoolean(value: string | boolean): boolean {
  if (typeof value === 'string') {
    return value === 'true';
  }
  return value;
}
