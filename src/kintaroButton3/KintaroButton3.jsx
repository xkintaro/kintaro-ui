import './kintaroButton3.css'

const KintaroButton3 = ({ title, onClick, color, bgColor, hoverColor = 'var(--kintaro-hover)' }) => {
    return (
        <button
            className="kintaro-button-reset kintaro-button-3"
            title={title}
            onClick={onClick}
            style={{
                background: bgColor,
                color: color,
                '--kintaro-hover': hoverColor
            }}>
            {title}
        </button >
    );
};

export default KintaroButton3;