import {useState} from "react";

interface ModalProps {
    title: string;
    body: string;
}

function Modal(props: ModalProps) {
    return (
        <div className="modal" tabIndex={-1}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{props.title}</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <p>{props.body}</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        {/*<button type="button" className="btn btn-primary">Save changes</button>*/}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal;