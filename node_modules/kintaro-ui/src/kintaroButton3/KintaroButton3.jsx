import './kintaroButton3.css';

const KintaroButtonSuccess3 = ({ title, onClick }) => {
    return (
        <button className="kintaro-button-reset kintaro-button-3" onClick={onClick} title={title}>
            {title}
        </button>
    );
};

export default KintaroButtonSuccess3;