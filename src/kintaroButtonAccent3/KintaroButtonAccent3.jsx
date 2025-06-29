import './kintaroButtonAccent3.css'

const KintaroButtonAccent3 = ({ title, onClick }) => {
    return (
        <button className="kintaro-button-reset kintaro-button-accent-3" title={title} onClick={onClick}>
            {title}
        </button>
    );
};

export default KintaroButtonAccent3;