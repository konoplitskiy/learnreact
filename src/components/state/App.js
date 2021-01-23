import React,{Component} from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        message: 'Нажмите кнопку для подписки',
        subscribe: false
    };
  }

  subscribe(){
      this.setState({
          message: 'Спасибо за подписку',
          subscribe:true
      });
  }

  render() {
    return (
       <div className='center'>
         <h1>{this.state.message}</h1>
         <button onClick={()=>this.subscribe()}>{this.state.subscribe ? 'Вы уже подписались' : 'Подписаться' } </button>
       </div>
    )
  }
}

export default App;

//Классовый компонент где мы изменяем состояние один раз