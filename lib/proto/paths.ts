import { join } from 'node:path'

export const PROTO_PATHS = {
  AUTH: join(__dirname, './contracts/auth.proto'),
  ACCOUNT: join(__dirname, './contracts/account.proto'),
  USER: join(__dirname, './contracts/user.proto'),
  BALANCE: join(__dirname, './contracts/balance.proto')
} as const
