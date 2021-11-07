const { getManager } = require("typeorm");
const scoredata = async(req,res) =>{
    try{
        let data;
        let email = req.body.email;
        let score = req.body.cs;
        await getManager().transaction(async (transactionalEntityManager) => {
            data = await getManager().query(`Select * FROM public.e_user($1 , $2)`, [email, score]);
        })
        res.send(data);
    }
    catch(error){
        console.log(error);
    }
}
module.exports={scoredata};