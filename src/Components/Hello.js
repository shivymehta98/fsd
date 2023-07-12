import React from 'react'; 
 const Hello = () => {
    return(
        <div className='dummyClass'>
            <h1>HELLO WORLD</h1>
        </div>
    )

    // return React.createElement('div', 
    // { id: 'hello', className: 'dummyClass'},
    // React.createElement('h1', null, 'This is not JSX')
    
    // )
}
export default Hello