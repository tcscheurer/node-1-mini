const bc = require('./controllers/books_controller')

module.exports = app => {
    app.get('/api/books',bc.read);
    app.post('/api/books',bc.create);
    app.put('/api/books/:id', bc.update);
    app.delete('/api/books/:id', bc.delete);
}