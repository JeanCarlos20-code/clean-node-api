import { CompareFieldValidation } from "../../../presentation/helpers/validators/compare-field-validation"
import { EmailValidation } from "../../../presentation/helpers/validators/email-validation"
import { RequiredFieldValidation } from "../../../presentation/helpers/validators/required-field-validation"
import { Validation } from "../../../presentation/protocols/IValidator"
import { ValidationComposite } from "../../../presentation/helpers/validators/validation-composite"
import { EmailValidatorAdapter } from "../../../utils/email-validator-adapater"

export const makeSignUpValidation = (): ValidationComposite => {
  const validations: Validation[] = []
    for (const field of ['name', 'email', 'password', 'passwordConfirmation']) {
      validations.push(new RequiredFieldValidation(field))
    }
  validations.push(new CompareFieldValidation('password', 'passwordConfirmation'))
      validations.push(new EmailValidation('email', new EmailValidatorAdapter))
  return new ValidationComposite(validations)
}
