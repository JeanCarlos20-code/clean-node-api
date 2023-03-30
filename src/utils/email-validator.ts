import { EmailValidator } from "../presentation/protocols/IEmailValidator";

export class EmailValidatorAdapter implements EmailValidator {
  isValid(email: string): boolean {
    return false;
  }
}
