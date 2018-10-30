import React, { PureComponent } from 'react';
// import EditTable from '../../../../components/table/EditableTable';
// import Pagination from '../../../../components/Pagination';
import { getInfoTable } from '../../../../redux/actions/TableAction';

export default class DataTable extends PureComponent {

  constructor(props) {
    super(props);
    this.heads = [
      {
        key: 'loja',
        name: 'Loja',
      },
      {
        key: 'faturamento',
        name: 'Faturamento',
      },
    ];

    this.state = {
      rows: this.createRows(23),
      pageOfItems: []
    };
    this.createRows = this.createRows.bind(this);
    this.getRandomDate = this.getRandomDate.bind(this);
    this.onChangePage = this.onChangePage.bind(this);
  }

  onChangePage(pageOfItems) {
    this.setState({ pageOfItems: pageOfItems });
  }


  createRows = (numberOfRows) => {
    let rows = [];
    for (let i = 1; i < numberOfRows + 1; i++) {
      rows.push({
        id: i,
        loja: this.props.dados.name,
        faturamento: this.props.dados.revenue,
      });
    }
    return rows;
  };



  render() {
    { this.props.dispatch(getInfoTable(this.rows)) }
    return (
      // {/* <EditTable heads={this.heads} rows={this.state.rows} /> */ }
            // {/* <Pagination items={this.state.rows} onChangePage={this.onChangePage} /> */ }
         <div></div>
    )
  }
}

// export default connect({
//   dados: state.dados
// })(Map);