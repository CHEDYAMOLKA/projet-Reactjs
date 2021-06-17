import ReactDOM from 'react-dom';
import React,{Component} from 'react';

class MyCars extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      firstname: '',
      lastname:''
   };
  }
  
  changeFirstName = ( event) => {
   
    this.setState({
      firstname: event.target.value
    });
  }

  changeLastName =(event) =>{
    this.setState({lastname: event.target.value});
  }
  render(){
    return(
        <form className="offset-3 col-6">
          
          <h1 className="text-primary text-center my-5">  Hello {this.state.firstname} {this.state.lastname}</h1>
          <div className="form-group">
          <label htmlFor="fist">first name :</label>
          <input type="string" id="firstname"  className="form-control" name="firstname" placeholder="Type your first name here" onChange="{this.changeFirstName()}"/>
           </div>   
    <div className="form-group">
    <label htmlFor="last">last name :</label>
    <input type="text" id="lastname" name="lastname"  className="form-control" placeholder="Type your last name here" onChange="{this.changeLastName()}"/>
</div>
    <button type="submit" className="btn btn-primary btn-block"  >Add</button>
      </form> 
    );
}


}

export default   MyCars;