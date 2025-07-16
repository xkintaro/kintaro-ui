import './kintaroTitle1.css'

const KintaroTitle1 = ({ title, color, textAlign, width }) => {

    return (
        <h1
            className="kintaro-title-reset kintaro-title-1"
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

export default KintaroTitle1;