import React from 'react';



class Calculator extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      var1: 0,
      var2: 0,
      result: 0
    };


    this.textLabels = {
      expres: "Expression",
      operator: "OP",
      equal: "=",
      add: "+",
      sub: "-",
      mult: "*"
    };

    this.getVar1Handler = this.getVar1Handler.bind(this);
    this.getVar2Handler = this.getVar2Handler.bind(this);
    this.getInitialState = this.getIntStatePair.bind(this);
    this.addHandler = this.addHandler.bind(this);
    this.subHandler = this.subHandler.bind(this);
    this.multHandler = this.multHandler.bind(this);
  }

  getVar1Handler(event)
  {
    this.setState({
      var1: event.target.value
    });
  }

  getVar2Handler(event)
  {
    this.setState({
      var2: event.target.value
    });
  }

  addHandler(event)
  {
     var pair = this.getIntStatePair();
     this.setState({
       result: (pair.var1 + pair.var2)
     });
  }

  subHandler(event)
  {
    var pair = this.getIntStatePair();
    this.setState({
      result: pair.var1 - pair.var2
    });
  }

  multHandler(event)
  {
    var pair = this.getIntStatePair();
    this.setState({
      result: pair.var1 * pair.var2
    });
  }

  getIntStatePair()
  {
    var var1 = parseInt(this.state.var1);
    var var2 = parseInt(this.state.var2);
    return {
      var1: var1,
      var2: var2
    };
  }

  render(){
    return(
      <div>
        <div>
          {this.textLabels.expres}:
          <input type="number" className="variable" onChange={this.getVar1Handler}></input>
                      {this.textLabels.operator}
          <input type="number" className="variable" onChange={this.getVar2Handler}></input>
          <label className="variable">{this.textLabels.equal}</label>
          <label className="variable">{this.state.result}</label>
        </div>

        <div className="buttons">
          <button className="operator" onClick={this.addHandler}>{this.textLabels.add}</button>
          <button className="operator" onClick={this.subHandler}>{this.textLabels.sub}</button>
          <button className="operator" onClick={this.multHandler}>{this.textLabels.mult}</button>
        </div>

      </div>
    );
  }



}





export default Calculator;
