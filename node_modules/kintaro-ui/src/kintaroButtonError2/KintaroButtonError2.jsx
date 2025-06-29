import './kintaroButtonError2.css';

const KintaroButtonError2 = ({ title, onClick }) => {
    return (
        <button className="kintaro-button-reset kintaro-error-button-2" onClick={onClick} title={title}>
            {title}
        </button>
    );
};

export default KintaroButtonError2;