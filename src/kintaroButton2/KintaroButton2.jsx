import './kintaroButton2.css'

const KintaroButton2 = ({ title, onClick, bgColor }) => {
    return (
        <button className="kintaro-button-reset kintaro-button-2" title={title} onClick={onClick} style={{ background: bgColor }}>
            {title}
        </button>
    );
};

export default KintaroButton2;