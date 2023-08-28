const reqId = (req, res, next)=>{
    const {id} = req.params

    if(!id) throw new Error('Require id')
    next()
}

const idString = (req, res, next) => {
    const {id} = req.params 

    if(!typeof id == 'string') throw new Error('Your username must be a text')

    next()
}

const reqUser = (req, es, next) => {
    const { username } = req.body

    if(!username) throw new Error("require username")

    next()
}

const userString = (req, res, next) => {
    const {username} = req.body 

    if(!typeof username == 'string') throw new Error('Your username must be a text')

    next()
}

const LengthUser = (req, res, next) => {
    const { username } = req.body 

    if(username.length < 3) throw new Error('show username should be longer')

    next()
}

const reqMail = (req, res, next) => {
    const { email } = req.body

    if(!email) throw new Error('Require email')

    next()
}

const mailString = (req, res, next) => {
    const {email} = req.body 

    if(!typeof email == 'string') throw new Error('Your email must be a text')

    next()
}

const reqPass = (req, res, next) => {
    const { password } = req.body

    if(!password) throw new Error('require password')

    next()
}

const PassString = (req, res, next) => {
    const {password} = req.body 

    if(!typeof password == 'string') throw new Error('Your password must be a text')

    next()
}

const passLength = (req, res, next) => {
    const {password} = req.body 

    if(password.length < 5) throw new Error('show password should be longer')

    next()
}

module.exports = [reqId, idString, reqUser, userString, LengthUser, reqMail, mailString, reqPass, PassString, passLength]