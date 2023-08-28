const getUser =async(req, res, next)=>{
    const { username } = req.query
    const { id } = req.params;

    if(!username || !id) throw new Error('tu consulta por id o username no le ha llegado el dato')
   
    next()
}

module.exports = [getUser]