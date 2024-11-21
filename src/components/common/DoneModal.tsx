import { FunctionComponent } from 'react';

export type DoneModalType = {
  className?: string;
  onClose?: () => void;
};

const DoneModal: FunctionComponent<DoneModalType> = ({
  className = '',
  onClose,
}) => {
  return (
    <div
      className={`w-[300px] relative rounded-3xs bg-aqua-deep h-[300px] max-w-full max-h-full overflow-auto ${className}`}
    />
  );
};

export default DoneModal;
