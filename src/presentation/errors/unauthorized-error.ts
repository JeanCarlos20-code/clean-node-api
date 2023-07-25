export class UnauthorizedError extends Error {
  constructor () {
    super('Internal server error')
    this.message = 'UnauthorizedError'
  }
}
