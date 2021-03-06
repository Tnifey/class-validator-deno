import { ValidationOptions } from "../ValidationOptions.ts";
import { buildMessage, ValidateBy } from "../common/ValidateBy.ts";
import validator from "../../validator.ts";

export const IS_ETHEREUM_ADDRESS = "isEthereumAddress";

/**
 * Check if the string is an Ethereum address using basic regex. Does not validate address checksums.
 * If given value is not a string, then it returns false.
 */
export function isEthereumAddress(value: unknown): boolean {
  return typeof value === "string" && validator.isEthereumAddress(value);
}

/**
 * Check if the string is an Ethereum address using basic regex. Does not validate address checksums.
 * If given value is not a string, then it returns false.
 */
export function IsEthereumAddress(
  validationOptions?: ValidationOptions,
): PropertyDecorator {
  return ValidateBy(
    {
      name: IS_ETHEREUM_ADDRESS,
      validator: {
        validate: (value, args) => isEthereumAddress(value),
        defaultMessage: buildMessage(
          (eachPrefix) => eachPrefix + "$property must be an Ethereum address",
          validationOptions,
        ),
      },
    },
    validationOptions,
  );
}
