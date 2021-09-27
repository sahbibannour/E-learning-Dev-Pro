var Formation =require('../Models/formation');


module.exports.AddFormation= function (req, res, callback) {
  let formation = new Formation();
  formation.Name=req.body.name
  formation.email=req.body.email;
  formation.description=req.body.description;
    formation.phone=req.body.phone;
 
    console.log(formation);
   
    formation.addFormation(formation,(err,user)=>{
   if(err){
        res.json({success:false , msg:"failed to register formation"});
   }else
   {
    res.json({success:true , msg:" formation registered "});
   }
  });
  
  }
  


module.exports.DeleteFormation= function (req, res, callback) {
  
}


module.exports.UpdateFormation= function (req, res, callback) {
  
}
  