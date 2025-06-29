import KintaroButton3 from './KintaroButton3';
import KintaroButtonSuccess1 from './KintaroButtonSuccess1';
import KintaroButtonClose from './KintaroButtonClose';
import KintaroDescription from './KintaroDescription';
import KintaroTitle2 from './KintaroTitle2';
import './kintaroModal.css'

const KintaroModal = ({
    isOpen = false,
    onClose,
    title,
    message,
    confirmText,
    cancelText,
    onConfirm,
    showCancel = true
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
                    <KintaroDescription
                        text={message}
                        showToggleButton={true}
                    />
                </div>

                <div className="kintaro-modal-footer">

                    {showCancel && (
                        <KintaroButton3
                            title={cancelText}
                            onClick={onClose}
                        />
                    )}

                    <KintaroButtonSuccess1
                        onClick={() => {
                            onConfirm();
                            onClose();
                        }}
                        title={confirmText}
                    />

                </div>
            </div>
        </div >
    );
};

export default KintaroModal;