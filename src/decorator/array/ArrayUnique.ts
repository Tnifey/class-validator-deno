import { ValidationOptions } from "../ValidationOptions.ts";
import { buildMessage, ValidateBy } from "../common/ValidateBy.ts";

export const ARRAY_UNIQUE = "arrayUnique";

/**
 * Checks if all array's values are unique. Comparison for objects is reference-based.
 * If null or undefined is given then this function returns false.
 */
export function arrayUnique(array: unknown) {
  if (!(array instanceof Array)) return false;

  const uniqueItems = array.filter((a, b, c) => c.indexOf(a) === b);
  return array.length === uniqueItems.length;
}

/**
 * Checks if all array's values are unique. Comparison for objects is reference-based.
 * If null or undefined is given then this function returns false.
 */
export function ArrayUnique(
  validationOptions?: ValidationOptions,
): PropertyDecorator {
  return ValidateBy(
    {
      name: ARRAY_UNIQUE,
      validator: {
        validate: (value, args) => arrayUnique(value),
        defaultMessage: buildMessage(
          (eachPrefix) =>
            eachPrefix + "All $property's elements must be unique",
          validationOptions,
        ),
      },
    },
    validationOptions,
  );
}
