import validator from "validator";
import { EmailValidator } from "../presentation/protocols/IEmailValidator";

export class EmailValidatorAdapter implements EmailValidator {
  isValid(email: string): boolean {
    return validator.isEmail(email);
  }
}
