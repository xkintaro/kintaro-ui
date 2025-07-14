import './kintaroButton2.css'

const KintaroButton2 = ({ title, onClick, color, borderColor }) => {
    return (
        <button
            className="kintaro-button-reset kintaro-button-2"
            title={title}
            onClick={onClick}
            style={{
                border: `1px solid ${borderColor}`,
                color: color,
                '--kintaro-custom-hover': borderColor
            }}>
            {title}
        </button>
    );
};

export default KintaroButton2; 