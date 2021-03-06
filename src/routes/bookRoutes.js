const express = require('express');
const booksRouter = express.Router();
const Bookdata = require('../model/Bookdata');
function router(nav){
    var books = [
       {
            title:'Alice in Wonderland',
           author:'Lewis carrol',
           genre: 'Fantasy',
           img: "alice.jpg"
        },
        {
           title:'Harry potter',
           author:'J K Rowling',
          genre: 'Fantasy',
            img: "harry potter.jpg"
        },
        {
           title:'Pathummaude Aadu',
           author:'Basheer',
            genre: 'Drama',
           img: "basheer.jpg"
        }
   ]
    booksRouter.get('/',function(req,res){
        Bookdata.find()
        .then(function(books){
            res.render("books",{
                nav,
                title:'Library',books
            });
        })
      
    });
    booksRouter.get('/:id',function(req,res){
        const id = req.params.id
        Bookdata.findOne({_id:id})
        .then(function(book){

            res.render('book',{
                nav,
                title:'Library',
                book
            }); 
        }) 
     
    });

    booksRouter.get("/edit/:id", async (req,res)=>{
        const book = await Bookdata.findById(req.params.id);
          
         res.render('edit_book',{
              nav,
             title:'Library',
             book: book
           })
         })

    booksRouter.get("/delete/:no",(req,res)=>{
        const no = req.params.no;
        Bookdata.deleteOne({"_id":no})
        .then(()=>{
            res.redirect('/books')
        })
    });
    return booksRouter;
}

module.exports = router;