import { FunctionComponent } from 'react';

export type ReviewCardType = {
  className?: string;
  image?: string;
  nameOfIdentity?: string;
  identity?: string;
  review?: string;
};

const ReviewCard: FunctionComponent<ReviewCardType> = ({
  className = '',
  image,
  nameOfIdentity,
  identity,
  review,
}) => {
  return (
    <div
      className={`w-[380px] shadow-[0px_1px_3px_rgba(0,_0,_0,_0.1)] rounded bg-gray1-100 box-border flex flex-col items-start justify-start p-[15px] gap-[15px] text-left text-lg text-footer-header font-body-large-600 border-[1px] border-solid border-footer-header ${className}`}
    >
      <div className="self-stretch flex flex-row flex-wrap items-center justify-start gap-[30px]">
        <div className="flex flex-row items-start justify-start">
          <img
            className="w-[100px] relative rounded-100xl h-[100px] object-cover"
            alt=""
            src={image}
          />
        </div>
        <div className="flex-1 flex flex-col items-start justify-start gap-[5px]">
          <div className="self-stretch flex flex-row items-center justify-start">
            <div className="flex-1 relative leading-[150%] font-semibold">
              {nameOfIdentity}
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-start text-md">
            <div className="flex-1 relative leading-[150%]">{identity}</div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start text-center text-md">
        <div className="flex-1 relative leading-[150%]">{review}</div>
      </div>
    </div>
  );
};

export default ReviewCard;
