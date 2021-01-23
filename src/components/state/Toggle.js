import React,{Component} from 'react';


class Toggle extends Component {
    constructor(props) {
        super(props);
        this.state = {isActive: false}
    }



    changeStatus(){
        this.setState((state) => ({
            isActive: !state.isActive
        }));
        console.log(this.state)
    }


    render() {
        return(
            <button onClick={()=>this.changeStatus()} className={this.state.isActive ? 'is-active' : ''}>{this.state.isActive ? 'Включено' : 'Выключено'}</button>
        )
    }

}


export default Toggle;

//Классовый компонент где мы изменяем состояние как toggle