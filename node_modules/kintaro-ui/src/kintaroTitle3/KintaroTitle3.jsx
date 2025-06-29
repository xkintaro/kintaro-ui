import './kintaroTitle3.css'

const KintaroTitle3 = ({ title, color }) => {
    const style = color ? { color: color } : {};

    return (
        <h1
            className="kintaro-title-reset kintaro-title-3"
            title={title}
            style={style}
        >
            {title}
        </h1>
    );
};

export default KintaroTitle3;