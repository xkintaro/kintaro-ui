import './kintaroButton2.css'

const KintaroButton2 = ({ title, onClick, color }) => {
    return (
        <button className="kintaro-button-reset kintaro-button-2" title={title} onClick={onClick} style={{ border: `1px solid ${color}` }}>
            {title}
        </button>
    );
};

export default KintaroButton2; 