import React from 'react';
import Layout from '../../components/layout/Layout';
import AddForm from '../../components/addUser/AddForm';
import { useSelector } from 'react-redux';

class Home extends React.Component{
    constructor() {
        super();
        this.state = {
            user: []
        }
    }

    componentDidMount() {

    }
    
    render() {
        return(
            <Layout>
                <div className="container-fluid container-min-max-width">
                    <div className="row">
                        <AddForm/>
                    </div>
                </div>
            </Layout>
        );
    }
}

export default Home;