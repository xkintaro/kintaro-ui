import './kintaroButtonError3.css';

const KintaroButtonError3 = ({ title, onClick }) => {
    return (
        <button className="kintaro-button-reset kintaro-error-button-3" onClick={onClick} title={title}>
            {title}
        </button>
    );
};

export default KintaroButtonError3;