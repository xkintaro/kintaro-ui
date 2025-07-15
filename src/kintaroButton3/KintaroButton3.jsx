import './kintaroButton3.css'

const KintaroButton3 = ({ children, title, onClick, width, color, bgColor, hoverColor = 'var(--kintaro-hover)' }) => {
    return (
        <button
            className="kintaro-button-reset kintaro-button-3"
            title={title}
            onClick={onClick}
            style={{
                background: bgColor,
                color: color,
                '--kintaro-custom-hover': hoverColor,
                width: width
            }}>
            {children}
            {title}
        </button >
    );
};

export default KintaroButton3;