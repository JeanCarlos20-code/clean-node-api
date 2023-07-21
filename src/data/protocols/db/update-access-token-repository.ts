export interface UpdateAccessTokenRepository {
  update (id: string, TOKEN: string): Promise<void>
}
