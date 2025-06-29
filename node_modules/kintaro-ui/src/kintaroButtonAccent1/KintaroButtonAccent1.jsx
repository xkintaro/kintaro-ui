import './kintaroButtonAccent1.css'

const KintaroButtonAccent1 = ({ title, onClick }) => {
    return (
        <button className="kintaro-button-reset kintaro-button-accent-1" title={title} onClick={onClick}>
            {title}
        </button>
    );
};

export default KintaroButtonAccent1;