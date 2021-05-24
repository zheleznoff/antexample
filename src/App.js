import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Layout} from 'antd';



import  'antd/dist/antd.css';

// components
import { SideMenu } from './components/layout/SideMenu'
import { ClientList } from './components/clients/ClientList';
import { BookList } from './components/books/BookList';
import { SuppliersList } from './components/suppliers/SuppliersList';
import { AddBook } from './components/books/AddBook'

const { Content } = Layout;

class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      collapsed: false
    }
  }

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    return (
      <Router>
        <Layout style={{ minHeight: '100vh' }}>
          <SideMenu/>
          <Layout className="site-layout">
            <Content style={{ margin: '0 16px' }}>
              <Route exact path="/" component={ BookList } />
              <Route path="/clients" component={ ClientList } />
              <Route path="/suppliers" component={ SuppliersList } />
              <Route path="/book/add" component={ AddBook } />
            </Content>
          </Layout>
        </Layout>
      </Router>
    );
  }
}

export default App;
