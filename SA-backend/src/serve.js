import express from 'express'

const app = express()
const PORT = 3000
app.use(express.json())

app.use()

app.listen(PORT, ()=>{
    console.log('API rodsndo em: http://localhost:3000')
})