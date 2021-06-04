import React from "react";
import {connect} from "react-redux";
import {createStream} from "../../actions"
import StreamForm from "./streamForm";

class StreamCreate extends React.Component {
   
    onSubmit= (formValues) => {
        this.props.createStream(formValues);
    }
    render() {
        console.log(this.props);
        return (
            <div className="ui container">
                <h1>Create Stream</h1>
                <StreamForm onSubmit={this.onSubmit} />
            </div>
        );
    }
};

export default connect(null, { createStream })(StreamCreate);
