const express = require('express');
const adminRouter1 = express.Router();
const Authordata = require('../model/Authordata');
function router(nav){
    adminRouter1.get('/',function(req,res){
        res.render('addAuthor',{
            nav,
            title:'Library'
        })
      
       
    })
    
    
    adminRouter1.post('/adds',function(req,res){
       var item = {
       name: req.body.name,
       book: req.body.book,
       dob: req.body.dob,
       image: req.body.image
       }
       
       
     var author = Authordata(item);
     author.save();//saving to database
     res.redirect('/authors');
    });
   
    adminRouter1.post('/update',  (req,res)=>{
        var item = {
            name: req.body.name,
            book: req.body.book,
            dob: req.body.dob,
            image: req.body.image
           };

      let query = {_id:req.params.id};
      const update =  Authordata.findOneAndUpdate(query,item,);
           if(update){
            console.log("updated successfully");
           
         
            res.redirect('/books');
          }
          return;
    
   });


    return adminRouter1;
}


module.exports = router;