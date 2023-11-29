import express from 'express'
import type { Request, Response, NextFunction } from 'express'

const app = express()

function middleware(req: Request, res: Response, next: NextFunction) {
  console.log("middleware running")
  next()
}

app.use(middleware)

app.get('/', function (req, res) {
  res.send('Hello World')
})

export default app