import './kintaroTitle1.css'

const KintaroTitle1 = ({ title }) => {
    return (
        <h1 className="kintaro-title-reset kintaro-title-1" title={title}>
            {title}
        </h1>
    );
};

export default KintaroTitle1;