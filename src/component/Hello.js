import React,{Component} from 'react';
import{connect} from 'react-redux'
import {add,qurest} from '../actions'

class Hello extends Component{
    change=()=>{
            this.props.add({text:'你点我我就变成了，你想要的样子~~~~~~~~~~',color:"red"})  
            console.log(this.props)
    }
        request=()=>{

                this.props.qurest()
                console.log(this.props.data)
        }
        render(){
                return(
                        <div>
                          <div>
                              {
                                  this.props.data.map(item=>{
                                        return(
                                            <div key={item.id}>
                                                 <img src={item.url} alt=""/>
                                            </div>
                                               
                                        )
                                  })
                              }
                          </div>
                           <p style={{color:this.props.color}}>{this.props.text}</p> 
                            <button onClick={this.change}>点击改变仓库☞</button>
                            <button onClick={this.request}>我要请求数据</button>
                        </div> 
                )
        }
}
const mapDispatchToProps={
    add,
    qurest,

}
function mapState(state){
        let {text,color,data}=state
        return{
                text,color,data
        }
}
export default connect(mapState,mapDispatchToProps)(Hello)