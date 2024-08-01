import express from 'express'


servidor.get('/buscador', (req,resp) =>{
    resp.send('Hello World')
})
const servidor = express()
servidor.listen(5001, () => console.log(' API SUBIU COM SUCESSO!!!!!');)