import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Container } from 'reactstrap';
import Home from './components/Home';
import Header from './components/Header';
import Products from './components/Products';
import Iventory from './components/Iventory';
import AddForm from './components/AddForm';
import EditForm from './components/EditForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state= {
        addName: '',
        id: '',
    };
  }
  getID = (id) => {
    this.setState({id: id})
  }

  render() {
    return (
      <Container>
        <Router>
          <div>
            <Header />
            <Switch>
              {/* <Route path="/" exact component={Home}/>
              <Route path="/products" exact component={Products}/>
              <Route path="/iventory" exact component={Iventory}/>
              <Route path="/products/add" exact component={AddForm}/>
              <Route path="/products/edit/:id" exact component={EditForm}/> */}
              <Route path="/products" exact component={Products}>
                <Products sendID={this.getID}/>
              </Route>
              <Route path="/iventory" exact component={Iventory}>
                <Iventory />
              </Route>
              <Route path="/" exact component={Home}>
                <Home />
              </Route>
              <Route path="/products/add" exact component={AddForm}>
                <AddForm />
              </Route>
              <Route path="/products/edit/:id" exact component={EditForm}> 
                <EditForm id={this.state.id}/>
              </Route>
            </Switch>
          </div>
        </Router>
      </Container>
    );
  }
}

export default App;
