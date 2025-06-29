import './kintaroButton1.css'

const KintaroButton1 = ({ title, onClick }) => {
    return (
        <button className="kintaro-button-reset kintaro-button-1" title={title} onClick={onClick}>
            {title}
        </button>
    );
};

export default KintaroButton1;