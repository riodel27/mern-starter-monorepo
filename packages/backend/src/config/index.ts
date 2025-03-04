import dotenv from 'dotenv'

// Set the NODE_ENV to 'development' by default
process.env.NODE_ENV = process.env.NODE_ENV || 'development'

const envFound = dotenv.config()
if (envFound.error) {
   // This error should crash whole process

   throw new Error("⚠️  Couldn't find .env file  ⚠️")
}

export default {
   port: parseInt(<string>process.env.PORT, 10),
   databaseURL: <string>process.env.MONGODB_URI,
   logs: {
      level: process.env.LOG_LEVEL || 'silly',
   },
   api: {
      prefix: '/api',
   },
   redis: {
      url: process.env.REDIS_URL,
      secret: <string>process.env.SESSION_SECRET,
   },
   whitelist: <string>process.env.WHITE_LIST,
}
