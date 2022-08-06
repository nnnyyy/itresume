const tsConfigPaths = require('tsconfig-paths')
tsConfigPaths.register({
    baseUrl: './dist/',
    paths: {
        '@modules/*': ['./modules/*']
    }
})

import express from 'express'
import {test} from '@modules/test'
console.log(test)

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