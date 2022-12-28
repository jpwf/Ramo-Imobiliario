import Router from 'express'

const route = Router()

route.get('/register', (req, res) => {
    return res.send('Hello world');
})

route.post('/register', (req, res) => {
    return res.send('Hello world');
})

export default route
