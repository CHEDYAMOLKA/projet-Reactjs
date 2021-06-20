import React,{Component} from 'react';



class Test  extends Component{
    state = {
        name:"chedya"
    }
    render(){
        return(
<div>
      <Header></Header>
</div>

        )

        
    }
}
class Header extends Component{
    render(){
        return(
<Header>{this.state.name}</Header>
          
        )  
    }
}
export default Test ;