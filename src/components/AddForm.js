import React, { Component } from 'react';
import axios from 'axios';

class Addform extends Component {
  constructor(props) {
    super(props);
    this.state= {
        name: '',
    };
  }

  onChange = (event) => {
    this.setState({name: event.target.value});
  }

  onSubmit = (event) => {
    event.preventDefault();
    
    axios.post(`/api/tda/ims-be/product`, {name: this.state.name, status: true,})
      .then(res => {
        console.log(res);
      })
      .catch(error => console.log(error));

    alert('Successfully Add');
  }

  render() {
    return (
      <div>
        <h2>Add product</h2>
        <form onSubmit={this.onSubmit}>
          <div className='row'>
              <div className='col-sm-2'>
                  <label htmlFor='addproductname'>* Name</label>
              </div>
              <div className='col-sm-10'>
                  <div className="form-group">
                    <input 
                      type="text"
                      className="form-control" 
                      name="addproductname" 
                      placeholder="Enter the product name .."
                      onChange={this.onChange}
                    />
              </div>
              </div> 
          </div>
          
          <div className='text-center'>
          {/* <Link to='/products/'> */}
              <button 
                type="submit" 
                name="" 
                className="btn btn-success"
              >
                  Submit
                </button>
          {/* </Link> */}
          </div>
        </form>
      </div>
    );
  }
}

export default Addform;
