import React,{useState} from 'react';



function FuncStaticState(){

    const [subscribe,setSubscribe] = useState(false);

    //Переключатель
    // const subscribeAdd = ()=>{
    //     setSubscribe(!subscribe)
    // }


    // один раз выполняеться смена состояний
    const subscribeAdd = ()=>{
        setSubscribe(true)
    }


    return(
        <div className='center'>
            <h1>{subscribe ? 'Спасибо': 'Подписаться на рассылку'}</h1>
            <button onClick={()=> subscribeAdd()} className={subscribe ? 'btn btn-success': 'btn btn-primary'}>{subscribe ? 'Спасибо за подписку' : 'Подписаться'}</button>
        </div>
    );
}

export default FuncStaticState;