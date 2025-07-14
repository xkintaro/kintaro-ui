import './kintaroButton3.css'

const KintaroButton3 = ({ title, onClick, color, bgColor, hoverColor }) => {
    return (
        <button
            className="kintaro-button-reset kintaro-button-3"
            title={title}
            onClick={onClick}
            style={{
                background: bgColor,
                color: color,
                '--kintaro-custom-hover': hoverColor
            }}>
            {title}
        </button >
    );
};

export default KintaroButton3;