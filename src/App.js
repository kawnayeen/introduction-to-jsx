import React, {Component} from 'react';
import './App.css';

function customComponent(props) {
    return <div> Hello {props.name}</div>;
}

function defaultTrueValue(props) {
    let flag = props.flag;
    if (flag)
        return <div>It's true</div>
    else
        return <div>It's false</div>
}

class App extends Component {
    render() {
        return this._0_sayHelloJSX();
        //return this._0_thisIsHowSayHelloInterpreted();
        //return this._1_embeddingExpression(3, 4);
        //return this._2_JSXItselfAnExpression();
        //return this._3_specifyingAttribute();
        //return this._4_customComponentShouldBeCapitalized();
        //return this._5_stringLiteral();
        //return this._6_defaultPropsValueIsTrue();
    }

    _0_sayHelloJSX() {
        return <h1>Hello, world!</h1>;
    }

    _0_thisIsHowSayHelloInterpreted() {
        return React.createElement('h1', null, 'Hello, world : Interpreted!');
    }

    _1_embeddingExpression(num1, num2) {
        return <p>Sum of {num1} and {num2} is {num1 + num2} </p>;
    }

    _2_JSXItselfAnExpression() {
        return <div>Lets do some some {this._1_embeddingExpression(5, 4)}</div>
    }

    _3_specifyingAttribute() {
        // 1. property name should follow camelCase convention (e.g. className, tabIndex)
        // 2. property value either expression of qoutes (for string values)
        const cefaloLogo = "http://www.basis.org.bd/logo/48fc89ebea6b98cb856231a5e9d9ff73.png";
        return <img src={cefaloLogo}/>;
    }

    _4_customComponentShouldBeCapitalized() {
        //return <customComponent name="Cefalo"/>;
        const CustomComponent = customComponent;
        return <CustomComponent name="Cefalo"/>;
    }

    _5_stringLiteral() {
        const CustomComponent = customComponent;

        return (
            <div>
                <CustomComponent name="<3"/>
                <CustomComponent name={'<3'}/>
                <CustomComponent name="&lt;3"/>
            </div>
        );
    }

    _6_defaultPropsValueIsTrue() {
        const DefaultTrueValue = defaultTrueValue;
        return <DefaultTrueValue flag />;
    }
}

export default App;
