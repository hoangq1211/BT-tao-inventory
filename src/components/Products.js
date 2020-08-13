import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class Products extends Component {
  // eslint-disable-next-line react/state-in-constructor
  constructor(props) {
    super(props);
    this.state= {
        products: [],
        curPage: 1,
        onDeleteID: '',
    };
  }
  componentDidMount() {
    axios.get(`/api/tda/ims-be/products`)
      .then(res => {
        this.setState({products: res.data.data})
      })
      .catch(error => console.log(error));
  }

  prevPage = () => {
    this.state.curPage <=1? this.setState({curPage: 1}) :
      this.setState({curPage: this.state.curPage - 1}, () => {
        axios.get(`/api/tda/ims-be/products?page=` + this.state.curPage)
        .then(res => {
          this.setState({products: res.data.data})
        })
      })
  }

  nextPage = () => { 
    this.setState({curPage: this.state.curPage + 1}, () => {
      axios.get(`/api/tda/ims-be/products?page=` + this.state.curPage)
      .then(res => {
        this.setState({products: res.data.data})
      })
    })
  }

  onDelete = () => {
    console.log('a');
  }

  render() {
    return (
      <div>
        <h2>Product</h2>

        <Link to="/products/add">
          <button 
            type="button" 
            name="addButton" 
            className="btn btn-primary"
            style={{marginBottom: '5px'}}
          >
            Add
          </button>
        </Link>
        
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Product Name</th>
                <th scope="col">Option</th>
              </tr>
            </thead>
            <tbody>
              {this.state.products.map((product)=>{
                return (
                  <tr key = {product.id}>
                      <th scope="row">
                        <Link to='/products/edit/:id' onClick={() => {this.props.sendID(product.id)}}> 
                          {product.id}
                        </Link>
                      </th>
                      <td>{product.name}</td>
                      <td>
                        <button 
                        type="button" 
                        className="btn btn-danger" 
                        onClick={() => { 
                          //phần này ko có api delete nên e viết tạm như này thôi ạ 
                          axios.delete('/api/tda/ims-be/product/' + product.id)
                            .then(res => 
                              console.log(res.data));
                        }}>
                          Delete 
                        </button>
                      </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>

        <div>
          <button  
            type="button" 
            name="prevPage" 
            className="btn btn-secondary"
            onClick={this.prevPage}
          >
            Prev
          </button>
          <span> </span>
          <button 
            type="button" 
            name="nextPage" 
            className="btn btn-secondary"
            onClick={this.nextPage}
          >
            Next
          </button>
        </div>
      </div>
    );
  }
}

export default Products;
