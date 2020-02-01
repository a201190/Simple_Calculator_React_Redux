import React from 'react';
import {connect} from 'react-redux'
import './App.css';
import {TextInput, parseCalculationString, calculate, calculatedValue} from './actions/index';
import { bindActionCreators } from 'redux';
function App(props) {
  let {actions}=props
  return (
    <div className="calculator card">
    <input className="calculator-screen"  type="text"  value={props.calculatedValue.substr(0, 16)}  disabled/>
    <input className="calculator-screen " type="text" disabled value={props.input}  />
    <div className="calculator-keys">
                {props.noOfButtons.map((data, i)=>{
                  return(
                    <button key={i} type={data.type}
                      onClick={(ev)=>{
                        if(data.value==='AC'){
                          actions.TextInput('')
                          actions.calculatedValue('')

                        }
                        else if(data.value==='='){
                          console.log(props.input)
                          let nval=calculate(parseCalculationString(props.input))
                          if(isNaN(nval)){
                            actions.TextInput('')
                            actions.calculatedValue('')

                          }else{
                            actions.calculatedValue(JSON.stringify(nval))
                          }
                        }
                        else if(data.svalue==="+/-"){
                          // console.log('ddd')
                          props.input===''?actions.TextInput(props.input+ev.target.value):actions.TextInput(props.input)
                        }
                        else{
                          actions.TextInput(props.input+ev.target.value)
                        }
                      }} className={data.className} value={data.value} dangerouslySetInnerHTML={{__html:data.svalue}}></button>
                  )
                })}
        </div>
    </div>
  );
}
const mapStateToProps = state => ({
  input:state.appmain.input,
  noOfButtons:state.appmain.noOfButtons,
  calculatedValue:state.appmain.calculatedValue
})
const ActionCreators = Object.assign(
  {TextInput, calculatedValue},
);
const mapDispatchToProps = dispatch => {
  return ({
    actions:bindActionCreators(ActionCreators, dispatch)
})}
export default connect(mapStateToProps,mapDispatchToProps)(App);
