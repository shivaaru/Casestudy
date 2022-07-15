const express = require('express');
const adminRouter = express.Router();
const Bookdata = require('../model/Bookdata');
function router(nav){
    adminRouter.get('/',function(req,res){
        res.render('addBook',{
            nav,
            title:'Library'
        })
        
    })
    
    adminRouter.post('/add',function(req,res){
       var item = {
       title: req.body.title,
       author: req.body.author,
       genre: req.body.genre,
       image: req.body.image
       }
       
       
     var book = Bookdata(item);
     book.save();//saving to database
     res.redirect('/books');
    });
   

    adminRouter.post('/update',  (req,res)=>{
        var item = {
            title: req.body.title,
            author: req.body.author,
            genre: req.body.genre,
            image: req.body.image
           };

      let query = {_id:req.params.id};
      const update =  Bookdata.findOneAndUpdate(query,item,);
           if(update){
            console.log("updated successfully");
           
         
            res.redirect('/books');
          }
          return;
    
   });

    return adminRouter;
}


module.exports = router;