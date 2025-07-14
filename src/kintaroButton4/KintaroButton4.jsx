import './kintaroButton4.css';

const KintaroButton4 = ({ title, onClick, color }) => {
    return (
        <button className="kintaro-button-reset kintaro-button-4" onClick={onClick} title={title} style={{ color: color }}>
            {title}
        </button>
    );
};

export default KintaroButton4;