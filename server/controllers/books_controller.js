let books = [];
let id = 0;

module.exports = {
    create: (req,res)=>{
        let {title,author} = req.body;
        books.push({id,author,title});
        id++;
        res.status(200).send(books);
    },
    read: (req,res)=>{
        res.status(200).send(books);
    },
    update: (req,res)=>{
        const updateID = req.params.id;
        let index = books.findIndex(book => book.id == updateID)
        let {title,author} = req.body;
        books[index]={
           id: books[index].id,
           title: title || books[index].title,
           author: author || books[index].author
        }
        res.status(200).send(books);
    },
    delete: (req,res)=>{
        const updateID = req.params.id;
        let index = books.findIndex(book => book.id == updateID)
        books.splice(index,1);
        res.status(200).send(books);
    }
}