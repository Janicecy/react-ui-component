import React, {
  useState,
  FunctionComponent,
  ReactElement,
  ReactNode,
} from "react";
import "./modal.scss";

interface ModalProps {
  cancelText?: ReactNode;
  title?: ReactNode;
  okText?: ReactNode;
  visible?: boolean;
  closeIcon?: ReactNode;
  onCancel?: (...args: any[]) => any;
  onOk?: (...args: any[]) => any;
  onClose?: (...args: any[]) => any;
}


// TODO: Add animation 
const Modal: FunctionComponent<ModalProps> = ({
  cancelText = "Cancel",
  title = "Title",
  okText = "OK",
  visible = true,
  closeIcon,
  onCancel,
  onOk,
  onClose,
  ...props
}): ReactElement => {
  const [_visible, set_visible] = useState(visible);

  const handleCancel = (e: React.MouseEvent<HTMLButtonElement>) => {
    onCancel?.(e);
    set_visible(false);
  };

  const handleOk = (e: React.MouseEvent<HTMLButtonElement>) => {
    onOk?.(e);
    set_visible(false);
  };

  const handleClose = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClose?.(e);
    set_visible(false);
  };

  return (
    <div className="modal-mask" style={{ display: !_visible && "none" }}>
      <div className="modal">
        <div className="modal-header">
          <div className="title">{title}</div>
          <button onClick={handleClose} className="modal-close">
            {closeIcon || <span>&times;</span>}
          </button>
        </div>
        <div className="modal-body">{props.children || ""}</div>
        <div className="modal-footer">
          <button onClick={handleCancel} className="modal-cancel">
            {cancelText}
          </button>

          <button onClick={handleOk} className="modal-ok">
            {okText || "Ok"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
