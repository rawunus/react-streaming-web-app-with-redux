import React from "react";
import ReactDom from "react-dom";


const Modal = ({title, content, actions, onDismiss}) =>{
    return ReactDom.createPortal(
        <div
            onClick={onDismiss}
            className="ui dimmer modals visible active"
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className="ui standard modal visible active"
            >
                <div className="header">{title}</div>
                <div className="content">
                    <p>{content}</p>
                </div>
                <div className="actions">
                    {actions}
                </div>
            </div>
        </div>,
        document.getElementById("modal")
    );
}
export default Modal;