import './kintaroButton4.css';

const KintaroButton4 = ({ title, onClick, color, hoverColor = 'var(--kintaro-hover)' }) => {
    return (
        <button
            className="kintaro-button-reset kintaro-button-4"
            onClick={onClick}
            title={title}
            style={{
                color: color,
                '--kintaro-custom-hover': hoverColor
            }}>
            {title}
        </button>
    );
};

export default KintaroButton4;