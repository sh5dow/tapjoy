import React, { Component } from 'react';
import { DropzoneArea } from 'material-ui-dropzone';
import { files, resultObj } from '../../models/constants';


export default class Dropzone extends Component{
    constructor(props){
        super(props);
        this.state = {
            files: [],
            dropzoneText: 'Drag and drop a file here or click'
        };
    }

    handleChange(files){
        this.setState({
            files: files,
            dropzoneText: files.length > 0 ? 'Submit file for check' : 'Drag and drop a file here or click'
        });

        if(files.length > 0) {
            this.props.setCheckEnabled(true);
            this.props.updateTotalDone({...resultObj});
            this.props.setFileData(files[0]);
        }
    }

    onDrop() {
        this.setState({
            files: [],
            dropzoneText: 'Uploading...'
        });

        this.props.updateTotalDone({...resultObj});
        this.props.setCheckEnabled(false);
    }

    onDelete() {
        this.props.updateTotalDone({...resultObj});
        this.props.setCheckEnabled(false);
    }

    render(){
        return (
            <DropzoneArea
                dropzoneText={this.state.dropzoneText}
                alertSnackbarProps={{anchorOrigin: {horizontal: 'center', vertical: 'bottom'}}}
                showFileNamesInPreview={true}
                acceptedFiles={['text/plain']}
                filesLimit={1}
                maxFileSize={files.MAX_SIZE}
                onDrop={() => this.onDrop()}
                onDelete={() => this.onDelete()}
                onChange={(event) => this.handleChange(event)}
            />
        )
    }
}
