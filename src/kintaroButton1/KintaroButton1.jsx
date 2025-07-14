import './kintaroButton1.css'

const KintaroButton1 = ({ title, onClick, color, bgColor, hoverColor = 'var(--kintaro-hover)' }) => {
    return (
        <button
            className="kintaro-button-reset kintaro-button-1"
            title={title} onClick={onClick}
            style={{
                background: bgColor,
                color: color,
                '--kintaro-hover': hoverColor
            }}>
            {title}
        </button>
    );
};

export default KintaroButton1;