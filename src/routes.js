const { handler } = require('@hapi/hapi/lib/cors');
const { addBookHandler, getAllBookHandler, getBookByIdHandler, editBookByIdHandler } = require('./handler');

const routes = [
    {
        method: 'POST',
        path: '/books',
        handler: addBookHandler,
    },
    {
        method: 'GET',
        path: '/books',
        handler: getAllBookHandler,
    },
    {
        method: 'GET',
        path: '/books/{bookId}',
        handler: getBookByIdHandler,
    },
];

module.exports = routes;