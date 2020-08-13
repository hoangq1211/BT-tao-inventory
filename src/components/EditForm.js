import React, { Component } from 'react';
import axios from 'axios';

class EditForm extends Component {
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
    
    axios.put(`/api/tda/ims-be/product/update/` + this.props.id, {name: this.state.name})

    alert('Successfully Edit');
  }

  render() {
    return (
      <div>
        <h2>Product ID #{this.props.id}</h2>
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
            <button 
              type="submit" 
              name="" 
              className="btn btn-success"
            >
                Submit
              </button>
        </div>
        </form>
      </div>
    );
  }
}

export default EditForm;
