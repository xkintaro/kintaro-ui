import './kintaroButtonSuccess1.css';

const KintaroButtonSuccess1 = ({ title, onClick }) => {
    return (
        <button className="kintaro-button-reset kintaro-success-button-1" onClick={onClick} title={title}>
            {title}
        </button>
    );
};

export default KintaroButtonSuccess1;