import { FunctionComponent } from "react";

export type FooterType = {
  className?: string;
};

const Footer: FunctionComponent<FooterType> = ({ className = "" }) => {
  const currentYear = new Date().getFullYear();

  return (
    <div
      className={`self-stretch flex flex-col items-center justify-start z-[999] text-center md:text-left sm:text-left text-sm text-black1 font-body-large-600 ${className}`}
    >
      <img
        className="self-stretch relative max-w-full overflow-hidden h-[108px] shrink-0 object-cover"
        alt=""
        src="/subscribe-section-background1@2x.png"
      />
      <div className="self-stretch bg-footer-header flex flex-col items-center justify-start py-2.5 px-5 gap-[44px] lg:flex-col sm:gap-[5px]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[14px] !mb-[40px]">
          <div className="self-stretch flex flex-row items-start justify-start">
            <div className="h-[38px] flex-1 relative leading-[120%] font-semibold inline-block text-4xl text-center md:text-left sm:text-2xl">
              CodeskInnovations
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start h-auto text-lg text-nero sm:text-xs">
            <div className="h-auto flex-1 relative leading-[150%] inline-block md:text-left sm:text-left">
              The CoDesk is on a mission to inspire school kids in Nepal to fall
              in love with coding. Coding is proven to develop creativity,
              logical thinking, and problem-solving skills in kids. It's an
              essential skill for the future, with more than 60% of all jobs in
              STEM-related fields requiring knowledge of code. Kids who start
              learning to code at a young age are guaranteed to become leaders,
              creators, and entrepreneurs of the future.
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-center justify-center gap-[5px] text-right md:text-left sm:text-left text-md text-nero lg:flex-row md:flex-col sm:flex-col">
          <div className="flex-1 flex flex-col items-start justify-start gap-[10px] md:flex-[unset] md:self-stretch sm:!mb-[40px] sm:flex-[unset] sm:self-stretch">
            <div className="self-stretch flex flex-row items-start justify-start text-xl sm:text-sm">
              <div className="flex-1 relative leading-[150%] font-semibold md:text-left sm:text-left">
                Company
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start sm:text-xs">
              <a
                className="[text-decoration:none] h-6 flex-1 relative leading-[150%] text-[inherit] inline-block sm:text-left"
                href="https://cooked-throne-941.notion.site/CoDesk-Lab-15c6b9d282bc4ab2a8dfa1e307665e3c"
                target="_blank"
              >
                Documentation
              </a>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start sm:text-xs">
              <a
                className="[text-decoration:none] flex-1 relative leading-[150%] text-[inherit] sm:text-left"
                href="https://cooked-throne-941.notion.site/CoDesk-Lab-15c6b9d282bc4ab2a8dfa1e307665e3c"
                target="_blank"
              >
                Change Log
              </a>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start sm:text-xs">
              <a
                className="[text-decoration:none] flex-1 relative leading-[150%] text-[inherit] sm:text-left"
                href="/privacy-policy"
              >
                Privacy Policy
              </a>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start sm:text-xs">
              <a
                className="[text-decoration:none] flex-1 relative leading-[150%] text-[inherit] sm:text-left"
                href="/terms"
              >
                Terms & Conditions
              </a>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[10px] text-center md:text-left sm:text-left md:flex-[unset] md:self-stretch sm:!mb-[40px] sm:flex-[unset] sm:self-stretch">
            <div className="self-stretch flex flex-row items-start justify-start text-xl sm:text-sm">
              <div className="flex-1 relative leading-[150%] font-semibold md:text-left sm:text-left">
                Community
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start sm:text-xs">
              <a
                className="[text-decoration:none] flex-1 relative leading-[150%] text-[inherit] sm:text-left"
                href="https://cooked-throne-941.notion.site/CoDesk-Lab-15c6b9d282bc4ab2a8dfa1e307665e3c"
                target="_blank"
              >
                Join Us On Discord
              </a>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start sm:text-xs">
              <a
                className="[text-decoration:none] flex-1 relative leading-[150%] text-[inherit] sm:text-left"
                href="https://cooked-throne-941.notion.site/CoDesk-Lab-15c6b9d282bc4ab2a8dfa1e307665e3c"
                target="_blank"
              >
                Explore A Hackathon
              </a>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start sm:text-xs">
              <a
                className="[text-decoration:none] flex-1 relative leading-[150%] text-[inherit] sm:text-left"
                href="https://cooked-throne-941.notion.site/CoDesk-Lab-15c6b9d282bc4ab2a8dfa1e307665e3c"
                target="_blank"
              >
                Code Of Conduct
              </a>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start sm:text-xs">
              <a
                className="[text-decoration:none] flex-1 relative leading-[150%] text-[inherit] sm:text-left"
                href="https://cooked-throne-941.notion.site/CoDesk-Lab-15c6b9d282bc4ab2a8dfa1e307665e3c"
                target="_blank"
              >
                Brand Assets
              </a>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[10px] text-left md:flex-[unset] md:self-stretch sm:flex-[unset] sm:self-stretch">
            <div className="self-stretch flex flex-row items-start justify-start text-xl sm:text-sm">
              <div className="flex-1 relative leading-[150%] font-semibold">
                Support
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start sm:text-xs">
              <a
                className="[text-decoration:none] flex-1 relative leading-[150%] text-[inherit]"
                href="https://cooked-throne-941.notion.site/CoDesk-Lab-15c6b9d282bc4ab2a8dfa1e307665e3c"
                target="_blank"
              >
                Help
              </a>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start sm:text-xs">
              <a
                className="[text-decoration:none] flex-1 relative leading-[150%] text-[inherit]"
                href="https://cooked-throne-941.notion.site/CoDesk-Lab-15c6b9d282bc4ab2a8dfa1e307665e3c"
                target="_blank"
              >
                Refund Policy
              </a>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start sm:text-xs">
              <a
                className="[text-decoration:none] flex-1 relative leading-[150%] text-[inherit]"
                href="https://cooked-throne-941.notion.site/CoDesk-Lab-15c6b9d282bc4ab2a8dfa1e307665e3c"
                target="_blank"
              >
                Status
              </a>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start sm:text-xs">
              <a
                className="[text-decoration:none] flex-1 relative leading-[150%] text-[inherit]"
                href="https://cooked-throne-941.notion.site/CoDesk-Lab-15c6b9d282bc4ab2a8dfa1e307665e3c"
                target="_blank"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
        <div className="self-stretch border-t border-nero/20 mt-4 pt-3">
          <div className="text-sm text-nero space-y-1">
            <p>
              <span className="font-medium">Address:</span> Ward No. 16, , Kathmandu, Metropolitan, Bagmati, 44600, NP
            </p>

            <p>
              <span className="font-medium">Email:</span>{" "}
              <a
                href="mailto:support@codeskinnovations.com.np"
                className="text-nero hover:underline"
              >
                support@codeskinnovations.com.np
              </a>
            </p>

            <p>
              <span className="font-medium">Phone:</span>{" "}
              <a
                href="tel:+9779868296800"
                className="text-nero hover:underline"
              >
                +977 9868 296800
              </a>
            </p>
          </div>
        </div>

        <div className="self-stretch border-t border-nero/20 mt-4 pt-3">
          <p className="text-sm text-nero text-center">
            © {currentYear} Codesk Innovations Private Limited. All rights
            reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
