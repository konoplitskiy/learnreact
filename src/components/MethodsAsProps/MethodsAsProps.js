import React,{useState} from 'react';


const HelloGuest = (props)=>{
    return (
        <div className='center'>
            <h1>Привет незнакомец</h1>
            <button className='btn btn-primary' onClick={props.hendlerEntry}>Войти</button>
        </div>
    )
}


const HelloBro = ()=> <h1 className='center'>Привет Бро, как хорошо что ты вернулся</h1>



const WhoisLogin = (props)=> {
    const [login,setLogin] = useState(false);

    const changeEntry = (props)=>{
        setLogin(!login);
    }

    if(login){
       return <HelloBro/>
    }

    return <HelloGuest hendlerEntry = {changeEntry}/>
}

export default WhoisLogin;