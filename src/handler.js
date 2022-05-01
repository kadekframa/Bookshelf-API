const { nanoid } = require("nanoid");
const books = require('./books');

const addBookHandler = (request, h) => {
    const { name, year, author, summary, publisher, pageCount, readPage, reading } = request.payload;

    const id = nanoid(16);
    const insertedAt = new DataTransfer().toISOString();
    const updatedAt = new insertedAt;
    let finished;

    const newBook = {
        name, year, author, summary, publisher, pageCount, readPage, reading, id, finished, insertedAt, updatedAt,
    }

    if(newBook.hasOwnPropery("name") && newBook.readPage <= newBook.pageCount){
        if(newBook.pageCount === newBook.readPage){
            newBook.finished = true;
            books.push(newBook);
        }else{
            newBook.finished = false;
            books.push(newBook);
        }
    }
    
    const isSuccess = books.filter((book) => book.id).length > 0;

    if(isSuccess){
        const response = h.response({
            status: 'success',
            message: 'Buku berhasil ditambahkan',
            data: {
                bookId: id,
            },
        });
        response.code(201);
        return response;
    }

    const response = h.response({
        status: 'fail',
        message: 'Buku gagal ditambahkan',
    });
    response.code(500);
    return response;

    // if(newBook.readPage > newBook.pageCount){

    //     const response = h.response({

    //       status: 'fail',

    //       message: 'Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount',

    //     });

    //     response.code(400);

    //     return response;

    //   };

    //   if(!newBook.hasOwnProperty(name)){

    //     const response = h.response({

    //       status: 'fail',

    //       message: 'Gagal menambahkan buku. Mohon isi nama buku',

    //     });

    //     response.code(400);

    //     return response;

    //   };
};

module.exports = { addBookHandler };