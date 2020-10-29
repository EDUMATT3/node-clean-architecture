export class MissingParamError extends Error {
  constructor (paramName: string) {
    super(`Missing param name: ${paramName}`)
    this.name = 'MissingParamError'
  }
}
