import { join } from 'node:path'

export const PROTO_PATHS = {
  AUTH: join(__dirname, './contracts/auth.proto'),
  ACCOUNT: join(__dirname, './contracts/account.proto'),
  USER: join(__dirname, './contracts/user.proto'),
  BALANCE: join(__dirname, './contracts/balance.proto'),
  ODD: join(__dirname, './contracts/odd.proto'),
  BETTING: join(__dirname, './contracts/betting.proto'),
  BONUS: join(__dirname, './contracts/bonus.proto'),
  MEDIA: join(__dirname, './contracts/media.proto'),
} as const
