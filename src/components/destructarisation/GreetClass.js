import React,{Component} from 'react';



class GreetClass extends  Component {
    constructor(props) {
        super(props);
    }

    render() {
        //Деструктаризация в классе
        const {name, hero} = this.props;
        // const {state1, state2} = this.state;
        return(
            <div>
                <h1>Hello {name} aka {hero}</h1>
            </div>
        )
    }
}

export default GreetClass;