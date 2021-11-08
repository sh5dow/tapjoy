import React, { Component } from 'react';
import { DataGrid } from '@mui/x-data-grid';

export default class ResultGrid extends Component{

    columns = [
        { field: 'id', headerName: 'Line', width: 120, sortable: false, filterable: false, resizable: false },
        { field: 'text', headerName: 'String line', flex: 1,  sortable: false, filterable: false, resizable: false }
    ];

    render() {
        const rows = this.props.text.map((item) => ({id: item.line, text: item.text}));
        return (
            <div style={{ display: 'flex', height: '256px' }}>
                <div style={{ flexGrow: 1 }}>
                    <DataGrid
                        rows={rows}
                        columns={this.columns}
                        pageSize={100}
                        rowsPerPageOptions={[100]}
                    />
                </div>
            </div>
        )
    }
}
