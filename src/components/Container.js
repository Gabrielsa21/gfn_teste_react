import React, { Component } from 'react';
import '../index.css';
import Map from '../containers/map/Map';
import Table from '../containers/table/data_table/DataTable';

class Container extends Component {
    render() {
        return (
            <div class="container">
                <Map/>
                <Table/>
            </div>
        )
    }
}

export default Container;