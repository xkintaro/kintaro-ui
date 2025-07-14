import './kintaroButton1.css'

const KintaroButton1 = ({ title, onClick, color, hoverColor = 'var(--kintaro-input-color-hover)' }) => {
    return (
        <button
            className="kintaro-button-reset kintaro-button-1"
            title={title} onClick={onClick}
            style={{
                background: color,
                '--hover-background': hoverColor
            }}>
            {title}
        </button>
    );
};

export default KintaroButton1;