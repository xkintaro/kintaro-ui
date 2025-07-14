import './kintaroButton3.css'

const KintaroButton3 = ({ title, onClick, bgColor }) => {
    return (
        <button className="kintaro-button-reset kintaro-button-3" title={title} onClick={onClick} style={{ background: bgColor }}>
            {title}
        </button >
    );
};

export default KintaroButton3;