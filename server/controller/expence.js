const ExpenseData = require('../model/expense')

exports.getExpenceData=(req,res,next)=>{
    ExpenseData.findAll().then(result=>{
        res.send(result)
    }).catch(err=>console.log(err))
}

exports.postExpenceData = (req,res,next)=>{
    console.log(req.body)
    let name = req.body.name
    let amount = req.body.amount
    let des = req.body.des
    let cata = req.body.cat
ExpenseData.create({
    name : name ,
    amount:amount ,
    des : des,
    cata : cata
}).then((result)=>{
    res.send('success!!')
}).catch(err=>console.log(err))

}

exports.editExpenseData =(req,res,next)=>{
    let name = req.body.name
    let amount = req.body.amount
    let des = req.body.des
    let cata = req.body.cat
    let id = req.params.id;
    ExpenseData.findbypk(id).then(result=>{
        result.name = name;
        result.amount = amount;
        result.des = des;
        result.cata = cata
        result.save()
    }).then(result=>{
        console.log(result,'EditData')
        res.send('Data Succfullfy Edited')
    }).catch(err=>console.log(err))
}

exports.deleteExpenseData =(req,res,next)=>{
let id = req.params.id
ExpenseData.findByPk(id).then(result=>{
    result.destroy()
}).then(ressult=>{
    res.send('Data Deleted')
}).catch(err=>console.log(err))
}