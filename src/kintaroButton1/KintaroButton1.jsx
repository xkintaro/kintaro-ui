import './kintaroButton1.css'

const KintaroButton1 = ({ title, onClick, bgColor }) => {
    return (
        <button className="kintaro-button-reset kintaro-button-1" title={title} onClick={onClick} style={{ background: bgColor }}>
            {title}
        </button>
    );
};

export default KintaroButton1;