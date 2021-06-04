import React from "react";
import {connect} from "react-redux";

import Modal from "../modal";
import history from "../../history";
import {fetchStream, deleteStream} from "../../actions";
import { Link } from "react-router-dom";

class StreamDelete extends React.Component{

    componentDidMount(){
        this.props.fetchStream(this.props.match.params.id);
    }

    renderActions () {
        const {id} = this.props.match.params;
        return (
            <>
                <div onClick={()=> this.props.deleteStream(id)} className="ui negative button">Delete</div>
                <Link to="/" className="ui cancel button">Cancel</Link>
            </>
        );
    }

    renderContent(){
        if(!this.props.stream){
            return "Are you sure you want to delete the stream"
        }
        return `Are you sure you want to delete this stream: ${this.props.stream.title}`
    }

    render(){
        return (
            <div className="ui container">
                <Modal
                    title="Delete Stream"
                    content={this.renderContent()}
                    actions={this.renderActions()}
                    onDismiss={() => history.push("/")}
                />
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps)=>{
    return {stream: state.streams[ownProps.match.params.id]}
}

export default connect(mapStateToProps, { fetchStream, deleteStream })(StreamDelete);
