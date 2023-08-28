const idReq = (req, res, next) => {
    const { id } = req.params

    if(!id) throw new Error('require id')

    next()
}

const idText = (req, res, next) => {
    const { id } = req.params
    const idValidate = +id

    if(typeof idValidate == 'string') throw new Error('Your id must be a string')

    next()
}

const idLength = (req, res, next) => {
    const {id} = req.params

    if(id.length < 8) throw new Error('show username should be longer')

    next()
}

const validate = (req, res, next) => {
    
    const { username, email, password } = req.body;

    if(!username || !email || !password) throw new Error('You need an element to change')

    next()
}

module.exports = [idReq, idText, idLength, validate]