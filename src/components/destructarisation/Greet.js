import React from 'react';


//мы можем прям в параметрах функции сразу сделать деструктаризацию

// 1 вариант

// const Greet = ({name,hero})=>{
//     return (
//         <div className='center'>
//             <h1>Hello {name} aka {hero}</h1>
//         </div>
//     )
// }


// 2 вариант
const Greet = (props)=>{
    const {name,hero} = props;
    return (
        <div className='center'>
            <h1>Hello1 {name} aka {hero}</h1>
        </div>
    )
}


export  default Greet;