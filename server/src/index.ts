import express from 'express'
const app = express();

app.post('/api/init', (req,res)=> {
    console.log('app initialize')
    res.send({ret: 0})
})

app.post('/api/test', (req,res)=> {
    console.log('test')
    res.send({ret: 0})
})

app.listen(3000, ()=> {
    console.log('web server listening...')
})