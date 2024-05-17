import { FunctionComponent } from "react";

export type DoneModalType = {
  onClose?: () => void;
};

const DoneModal: FunctionComponent<DoneModalType> = ({ onClose }) => {
  return (
    <div className="w-[297px] rounded-3xs bg-aqua-deep h-[298px] max-w-full max-h-full overflow-auto" />
  );
};

export default DoneModal;
