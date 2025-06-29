import './kintaroButtonSuccess2.css';

const KintaroButtonSuccess2 = ({ title, onClick }) => {
    return (
        <button className="kintaro-button-reset kintaro-success-button-2" onClick={onClick} title={title}>
            {title}
        </button>
    );
};

export default KintaroButtonSuccess2;