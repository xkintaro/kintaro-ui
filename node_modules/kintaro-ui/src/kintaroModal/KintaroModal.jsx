import KintaroButtonClose from '../kintaroButtonClose/KintaroButtonClose';
import KintaroTitle2 from '../kintaroTitle2/KintaroTitle2';
import './kintaroModal.css'

const KintaroModal = ({
    children,
    isOpen = false,
    onClose,
    title,
}) => {

    if (!isOpen) return null;

    return (
        <div className="kintaro-modal">

            <div
                className="kintaro-modal-overlay"
                onClick={onClose}
            />

            <div className="kintaro-modal-box">

                <div className="kintaro-modal-header">
                    <KintaroTitle2 title={title} />
                    <KintaroButtonClose
                        onClick={onClose}
                        title="Kapat"
                    />
                </div>

                <div className="kintaro-modal-content">
                    {children}
                </div>

            </div>
        </div >
    );
};

export default KintaroModal;