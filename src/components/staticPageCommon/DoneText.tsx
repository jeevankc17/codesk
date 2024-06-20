import { FunctionComponent } from "react";

const DoneText: FunctionComponent = ({ className = "" }) => {
  return (
    <div
      className={`w-[127px] text-29xl leading-[120%] font-semibold font-body-small-500 text-nero1 text-center inline-block ${className}`}
    >
      Done
    </div>
  );
};

export default DoneText;
