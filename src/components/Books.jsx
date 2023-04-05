import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Books = () => {
    const { books } = useLoaderData();
    console.log(books);

    return (
        <div className='my-container'>
            <div className="grid gap-6 mb-8 lg:grid-cols-4 sm:grid-cols-2">
                {
                    books.map(book => (
                        <div className="overflow-hidden">
                            <img src={book.image} alt="book cover" className='object-cover w-full h-56 md:h-64 ' />
                           
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Books;