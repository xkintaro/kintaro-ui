import './kintaroButton1.css'

const KintaroButton1 = ({ title, onClick, width, color, bgColor, hoverColor = 'var(--kintaro-hover)', }) => {
    return (
        <button
            className="kintaro-button-reset kintaro-button-1"
            title={title} onClick={onClick}
            style={{
                background: bgColor,
                color: color,
                '--kintaro-custom-hover': hoverColor,
                width: width
            }}>
            {title}
        </button>
    );
};

export default KintaroButton1;