import './kintaroButtonAccent2.css'

const KintaroButtonAccent2 = ({ title, onClick }) => {
    return (
        <button className="kintaro-button-reset kintaro-button-accent-2" title={title} onClick={onClick}>
            {title}
        </button>
    );
};

export default KintaroButtonAccent2;