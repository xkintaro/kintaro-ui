import './kintaroButton2.css'

const KintaroButton2 = ({ title, onClick }) => {
    return (
        <button className="kintaro-button-reset kintaro-button-2" title={title} onClick={onClick}>
            {title}
        </button>
    );
};

export default KintaroButton2;