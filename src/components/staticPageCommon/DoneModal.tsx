import { FunctionComponent } from "react";
import DoneText from "./DoneText";

export type DoneModalType = {
  className?: string;
  onClose?: () => void;
};

const DoneModal: FunctionComponent<DoneModalType> = ({
  className = "",
  onClose,
}) => {
  return (
    <div
      className={`relative rounded-3xs bg-aqua-deep flex flex-row items-center justify-center max-w-full max-h-full overflow-auto text-center text-29xl text-nero1 font-body-small-500 ${className}`}
    >
      <DoneText />
    </div>
  );
};

export default DoneModal;
