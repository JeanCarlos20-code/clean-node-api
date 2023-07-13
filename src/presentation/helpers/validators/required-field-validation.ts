import { MissingParamError } from "../../errors";
import { Validation } from "./validation";

export class RequiredFieldValidation implements Validation {
  private readonly fieldName: string

  constructor(fieldNmae: string) {
    this.fieldName = fieldNmae
  }

  validate(input: any): Error {
    if (!input[this.fieldName]) {
      return new MissingParamError(this.fieldName)
    }
  }
}
