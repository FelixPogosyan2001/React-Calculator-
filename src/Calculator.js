import React,{Component} from 'react';
import ReactDOM from 'react-dom';
export class Calculator extends Component {
  state={
    result:'0',
  }
  render(){
    return(
      <div classNmae="main">
        <img src="https://www.freeiconspng.com/uploads/iphone-png-16.png" style={{height:"500px",position:'relative',left:'400px',zIndex:1}} />
        <div style={{width:"192.5px",height:'340px',position:'relative',bottom:'388px',left:'554px',zIndex:8,overflow:'hidden'}}>
        <p maxlength="5" id="result" style={{color:'white',maxWidth:'178px',overflow:'hidden',paddingLeft:'8px',fontSize:'35px'}} ref="result">{this.state.result}</p>
        <input type="button" value="C" onClick={this.remove} style={{height:'48px',width:'48px',border:'0.2px solid #4d4d4d'}} />
        <input type="button" value="+/-" onClick={()=>this.symbol('-')} style={{height:'48px',width:'48px',border:'0.2px solid #4d4d4d'}}/>
        <input type="button" value="%" onClick={()=>this.enter('%')} style={{height:'48px',width:'48px',border:'0.2px solid #4d4d4d'}} number="%"/>
        <input type="button" value=":" onClick={()=>this.enter('/')} style={{height:'48px',width:'48px',backgroundColor:'#ff8000',border:'0.1px solid #4d4d4d',color:'white'}} number=':'/>
        <input type="button" value="7" onClick={()=>this.enter('7')} style={{height:'48px',width:'48px',border:'0.2px solid #4d4d4d'}} number='7'/>
        <input type="button" value="8" onClick={()=>this.enter('8')} style={{height:'48px',width:'48px',border:'0.2px solid #4d4d4d'}} number='8'/>
        <input type="button" value="9" onClick={()=>this.enter('9')} style={{height:'48px',width:'48px',border:'0.2px solid #4d4d4d'}} number="9"/>
        <input type="button" value="X" onClick={()=>this.enter('*')} style={{height:'48px',width:'48px',backgroundColor:'#ff8000',border:'0.1px solid #4d4d4d',color:'white'}} number='X'/>
        <input type="button" value="4" onClick={()=>this.enter('4')} style={{height:'48px',width:'48px',border:'0.2px solid #4d4d4d'}} number='4'/>
        <input type="button" value="5" onClick={()=>this.enter('5')} style={{height:'48px',width:'48px',border:'0.2px solid #4d4d4d'}} number='5'/>
        <input type="button" value="6" onClick={()=>this.enter('6')} style={{height:'48px',width:'48px',border:'0.2px solid #4d4d4d'}} number="6"/>
        <input type="button" value="-" onClick={()=>this.enter('-')} style={{height:'48px',width:'48px',backgroundColor:'#ff8000',border:'0.1px solid #4d4d4d',color:'white'}} number='-'/>
        <input type="button" value="1" onClick={()=>this.enter('1')} style={{height:'48px',width:'48px',border:'0.2px solid #4d4d4d'}} number='1'/>
        <input type="button" value="2" onClick={()=>this.enter('2')} style={{height:'48px',width:'48px',border:'0.2px solid #4d4d4d'}} number='2'/>
        <input type="button" value="3" onClick={()=>this.enter('3')} style={{height:'48px',width:'48px',border:'0.2px solid #4d4d4d'}} number="3"/>
        <input type="button" value="+" onClick={()=>this.enter('+')} style={{height:'48px',width:'48px',backgroundColor:'#ff8000',border:'0.1px solid #4d4d4d',color:'white'}} number='+'/>
        <input type="button" value="0" onClick={()=>this.enter('0')} style={{height:'48px',width:'96px',border:'0.2px solid #4d4d4d'}}/>
        <input type="button" onClick={()=>this.enter('.')} style={{height:'48px',width:'48px',border:'0.2px solid #4d4d4d'}} value=','/>
        <input type="button" onClick={this.data} style={{height:'48px',width:'48px',backgroundColor:'#ff8000',border:'0.2px solid #4d4d4d',color:'white'}} value='='/>
        </div>
      </div>
    )
  }
  symbol=(value)=>{
    var regV = /-/;
    var result =this.refs.result.innerHTML.match(regV);
    if(!result && this.refs.result.innerHTML!=='0'){
    this.refs.result.innerHTML= value+this.refs.result.innerHTML
  }
    else if(result){
    var old=this.refs.result.innerHTML;
    var next = old.replace('-',' ');
    this.refs.result.innerHTML=next

  }
  console.log(result)
  }
  enter=(value)=>{
    if(this.refs.result.innerHTML==' 0' && value!=='.' && value!=='*' && value!=='%' && value!=='-' && value!=='+' && value!=='*' && value!=='/' || this.refs.result.innerHTML=='0' &&value!=='.' && value!=='%' && value!=='-' && value!=='+' && value!=='*' && value!=='/'){
      this.refs.result.innerHTML=null
    }
    this.refs.result.innerHTML= this.refs.result.innerHTML+value
  }
  remove=()=>{
    this.refs.result.innerHTML='0'
  }
  data=()=>{
    var value =this.refs.result.innerHTML;
    if(value!==null){
      this.refs.result.innerHTML=eval(value)
    }
  }
}
