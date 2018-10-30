import React, { Component } from 'react';
import '../../index.css';
import GoogleMapReact from 'google-map-react';
import { callMapApi } from '../../redux/actions/MapAction';

class Map extends Component {
    render() {
        {this.props.dispatch(callMapApi())}
        return (
            <div class="container__map">
                <GoogleMapReact
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}>
                </GoogleMapReact>
            </div>
        )
    }
}

export default Map;

// export default connect ({
//     dados: state.dados
// })(Map);

//por algum motivo não conseguir usar o connect para utilizar o estado "dados"
