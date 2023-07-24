import { EmailValidation, RequiredFieldValidation, ValidationComposite, CompareFieldValidation } from "../../../presentation/helpers/validators/index"
import { Validation } from "../../../presentation/protocols/IValidator"
import { EmailValidatorAdapter } from "../../adapters/validators/email-validator-adapater"

export const makeSignUpValidation = (): ValidationComposite => {
  const validations: Validation[] = []
    for (const field of ['name', 'email', 'password', 'passwordConfirmation']) {
      validations.push(new RequiredFieldValidation(field))
    }
  validations.push(new CompareFieldValidation('password', 'passwordConfirmation'))
      validations.push(new EmailValidation('email', new EmailValidatorAdapter))
  return new ValidationComposite(validations)
}
