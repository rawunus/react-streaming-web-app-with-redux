import React from "react";
import { connect } from "react-redux";
import _ from "lodash";
import { fetchStream, editStream } from "../../actions";
import StremForm from "./streamForm";

class StreamEdit extends React.Component{
    componentDidMount(){
        this.props.fetchStream(this.props.match.params.id)
    }

    onSubmit = (formValues)=>{
        this.props.editStream(this.props.match.params.id, formValues);
    }
    render(){
        
        if(!this.props.stream){
            return <div>Loading....</div>
        }
        return (
            <div className="ui container">
                <h1>Edit Stream</h1>
                <StremForm
                    initialValues={_.pick(this.props.stream, "title", "description")}
                    onSubmit={this.onSubmit}
                />
            </div>
        );
    }
};

const mapStateToProps = (state, ownProps)=>{
    return { stream: state.streams[ownProps.match.params.id]}
}

export default connect(mapStateToProps, { fetchStream, editStream })(
    StreamEdit
);
