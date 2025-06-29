import './kintaroButtonError1.css';

const KintaroButtonError1 = ({ title, onClick }) => {
    return (
        <button className="kintaro-button-reset kintaro-error-button-1" onClick={onClick} title={title}>
            {title}
        </button>
    );
};

export default KintaroButtonError1;