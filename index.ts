const express = require('express')
import cors from 'cors'
import { webHookRout } from './src/routes'

const PORT = process.env.PORT ?? 5000

const app = express()
app.use(express.json())
app.use(cors())
app.use(webHookRout)

app.listen(PORT, () => {
    console.log('server started on port ', PORT)
})

app.get('/', (_: any, res: any) => {
    res.status(200).send('SaluteJS')
})
