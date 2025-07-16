import './kintaroTitle3.css'

const KintaroTitle3 = ({ title, color, textAlign, width }) => {

    return (
        <h1
            className="kintaro-title-reset kintaro-title-3"
            title={title}
            style={{
                textAlign: textAlign,
                color: color,
                maxWidth: width
            }}>
            {title}
        </h1>
    );
};

export default KintaroTitle3;