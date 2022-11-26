/**
 * Returns an integer value from a string or boolean
 *
 * @param value - Required - The value to be converted
 * @param maxValue - Optional - The maximum value to be returned
 *
 * @returns - The integer value
 *
 * @example - getNumber('1') returns 1
 * @example - getNumber('11', 9) returns 9
 * @example - getNumber(false) returns 0
 * @example - getNumber('string') returns 0
 *
 * @author Nathan O'Donnell
 * @date 27-11-2022
 * @version 1.0
 */
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

/**
 * Returns a boolean value from a string or boolean
 *
 * @param value - Required - The value to be converted
 *
 * @returns - The boolean value
 *
 * @example - getBoolean(true) returns true
 * @example - getBoolean(false) returns false
 * @example - getBoolean('true') returns true
 * @example - getBoolean('random') returns false
 *
 * @author Nathan O'Donnell
 * @date 27-11-2022
 * @version 1.0
 */
export function getBoolean(value: string | boolean): boolean {
  if (typeof value === 'string') {
    return value === 'true';
  }
  return value;
}
