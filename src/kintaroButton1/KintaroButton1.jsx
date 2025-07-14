import './kintaroButton1.css'

const KintaroButton1 = ({ title, onClick, color, bgColor, hoverColor }) => {
    return (
        <button
            className="kintaro-button-reset kintaro-button-1"
            title={title} onClick={onClick}
            style={{
                background: bgColor,
                color: color,
                '--kintaro-custom-hover': hoverColor
            }}>
            {title}
        </button>
    );
};

export default KintaroButton1;