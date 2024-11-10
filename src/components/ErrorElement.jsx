import React from 'react';

const ErrorElement = () => {
    return (
        <div className='min-h-screen grid place-items-center'>
            <div className='text-center'>
                <h1 className='text-3xl font-bold'>404</h1>
                <h1 className='text-xl font-semibold'>Route Doesn't Exist!</h1>
            </div>
        </div>
    );
};

export default ErrorElement;