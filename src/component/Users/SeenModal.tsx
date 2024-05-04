import React from 'react';
import "./SeenModal.css"
import { IoMdClose } from "react-icons/io";

const seenModal: React.FC<any> = ({setSeenModalFlag,ntCode}) => {
    return (
        <div className="seenModal">
            <div className="seenModal-container">
                <div className="seenModal-flex">
                    <div className="editModal-header">
                        <IoMdClose id='seenModal-icon' onClick={() => { setSeenModalFlag(false) }} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default seenModal;