import { EmailValidation, RequiredFieldValidation, ValidationComposite } from '../../../presentation/helpers/validators/index'
import { Validation } from '../../../presentation/protocols/IValidator'
import { EmailValidatorAdapter } from '../../adapters/validators/email-validator-adapater'

export const makeLoginValidation = (): ValidationComposite => {
  const validations: Validation[] = []
  for (const field of ['email', 'password']) {
    validations.push(new RequiredFieldValidation(field))
  }
  validations.push(new EmailValidation('email', new EmailValidatorAdapter()))
  return new ValidationComposite(validations)
}
