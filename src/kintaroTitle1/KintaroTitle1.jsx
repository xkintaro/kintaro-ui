import './kintaroTitle1.css'

const KintaroTitle1 = ({ title, color }) => {
    const style = color ? { color: color } : {};

    return (
        <h1
            className="kintaro-title-reset kintaro-title-1"
            title={title}
            style={style}
        >
            {title}
        </h1>
    );
};

export default KintaroTitle1;