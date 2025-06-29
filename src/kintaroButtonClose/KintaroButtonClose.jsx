import { IoIosClose } from "react-icons/io";
import './kintaroButtonClose.css';

const KintaroCloseButton = ({ onClick, title }) => {
    return (
        <IoIosClose className="kintaro-button-reset kintaro-close-button" onClick={onClick} title={title} />
    );
};

export default KintaroCloseButton;