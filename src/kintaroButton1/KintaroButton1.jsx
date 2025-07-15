import './kintaroButton1.css'

const KintaroButton1 = ({ children, title, onClick, width, color, bgColor, hoverColor = 'var(--kintaro-hover)', }) => {
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
            {children}
            {title}
        </button>
    );
};

export default KintaroButton1;