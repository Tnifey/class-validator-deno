import { ValidationOptions } from "../ValidationOptions.ts";
import { buildMessage, ValidateBy } from "../common/ValidateBy.ts";
import validator from "../../validator.ts";

export const IS_JWT = "isJwt";

/**
 * Checks if the string is valid JWT token.
 * If given value is not a string, then it returns false.
 */
export function isJWT(value: unknown): boolean {
  return typeof value === "string" && validator.isJWT(value);
}

/**
 * Checks if the string is valid JWT token.
 * If given value is not a string, then it returns false.
 */
export function IsJWT(
  validationOptions?: ValidationOptions,
): PropertyDecorator {
  return ValidateBy(
    {
      name: IS_JWT,
      validator: {
        validate: (value, args) => isJWT(value),
        defaultMessage: buildMessage(
          (eachPrefix) => eachPrefix + "$property must be a jwt string",
          validationOptions,
        ),
      },
    },
    validationOptions,
  );
}
