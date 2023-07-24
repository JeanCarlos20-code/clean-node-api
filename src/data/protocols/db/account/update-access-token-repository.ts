export interface UpdateAccessTokenRepository {
  updateAccessToken (id: string, TOKEN: string): Promise<void>
}
