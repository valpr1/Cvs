import clsx from "clsx";
import svgPaths from "./svg-q7yljsxltp";
import imgNoise from "figma:asset/ceec6d4133057bd7262aeedaccaadb856f6dc93d.png";
import imgLine from "figma:asset/1cf774419e6597f6831de5c1a1cb74faeba1c2ba.png";
import imgRectangle from "figma:asset/bff4c8b64131c988c5a2dfc2c3772344e6a05703.png";
import imgRectangle1 from "figma:asset/1eead43f1242735bf16377e6c4772f2ea864a8fb.png";
import { cvData } from "../app/components/cv-data";
type CvLightTemplateBackgroundImageProps = {
  additionalClassNames?: string;
};

function CvLightTemplateBackgroundImage({ children, additionalClassNames = "" }: React.PropsWithChildren<CvLightTemplateBackgroundImageProps>) {
  return (
    <div style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties} className={clsx("absolute flex items-center justify-center left-[610px] w-0", additionalClassNames)}>
      <div className="-rotate-90 flex-none">{children}</div>
    </div>
  );
}

function EllipseBackgroundImage2({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="col-1 ml-[12px] mt-[12px] relative row-1 size-[40px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        {children}
      </svg>
    </div>
  );
}

function GroupBackgroundImage2({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[60px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 60">
        <g id="Group">{children}</g>
      </svg>
    </div>
  );
}
type VectorBackgroundImageProps = {
  additionalClassNames?: string;
};

function VectorBackgroundImage({ children, additionalClassNames = "" }: React.PropsWithChildren<VectorBackgroundImageProps>) {
  return (
    <div className={clsx("absolute", additionalClassNames)}>
      <div className="absolute inset-[-7.41%_-5.56%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 15.5">
          {children}
        </svg>
      </div>
    </div>
  );
}

function BackgroundImage1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Group">{children}</g>
      </svg>
    </div>
  );
}

function BackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="h-[18px] relative shrink-0 w-[106px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 106 18">
        <g id="Group">{children}</g>
      </svg>
    </div>
  );
}
type Group41RectangleBackgroundImageProps = {
  additionalClassNames?: string;
};

function Group41RectangleBackgroundImage({ additionalClassNames = "" }: Group41RectangleBackgroundImageProps) {
  return (
    <div className={clsx("h-px rounded-[40px] w-[128px]", additionalClassNames)}>
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[40px] size-full" src={imgRectangle1} />
    </div>
  );
}

function EllipseBackgroundImage1() {
  return (
    <div className="col-1 ml-0 mt-0 relative row-1 size-[32px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <circle cx="16" cy="16" fill="var(--fill-0, #F43054)" id="Ellipse" r="16" />
      </svg>
    </div>
  );
}
type FrameBackgroundImageAndText4Props = {
  text: string;
};

function FrameBackgroundImageAndText4({ text }: FrameBackgroundImageAndText4Props) {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start justify-center relative shrink-0 w-full">
      <p className="font-['Manrope:SemiBold',sans-serif] font-semibold leading-none relative shrink-0 text-[#2f2f2f] text-[18px] tracking-[0.18px]">{text}</p>
      <BackgroundImage>
        <path d={svgPaths.p3dd58900} fill="var(--fill-0, #F43054)" id="Star" />
        <path d={svgPaths.p7b6e900} fill="var(--fill-0, #F43054)" id="Star_2" />
        <path d={svgPaths.p3461b800} fill="var(--fill-0, #F43054)" id="Star_3" />
        <path d={svgPaths.p394ec900} fill="var(--fill-0, #F43054)" id="Star_4" />
        <path d={svgPaths.p28d74000} id="Star_5" stroke="var(--stroke-0, #F43054)" strokeWidth="0.564706" />
      </BackgroundImage>
    </div>
  );
}
type FrameBackgroundImageAndText3Props = {
  text: string;
};

function FrameBackgroundImageAndText3({ text }: FrameBackgroundImageAndText3Props) {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start justify-center relative shrink-0 w-full">
      <p className="font-['Manrope:SemiBold',sans-serif] font-semibold leading-none relative shrink-0 text-[#2f2f2f] text-[18px] tracking-[0.18px]">{text}</p>
      <BackgroundImage>
        <path d={svgPaths.p3dd58900} fill="var(--fill-0, #F43054)" id="Star" />
        <path d={svgPaths.p7b6e900} fill="var(--fill-0, #F43054)" id="Star_2" />
        <path d={svgPaths.p3461b800} fill="var(--fill-0, #F43054)" id="Star_3" />
        <path d={svgPaths.p394ec900} fill="var(--fill-0, #F43054)" id="Star_4" />
        <path d={svgPaths.p26ee1d80} fill="var(--fill-0, #F43054)" id="Star_5" />
      </BackgroundImage>
    </div>
  );
}
type FrameBackgroundImageAndText2Props = {
  text: string;
  additionalClassNames?: string;
};

function FrameBackgroundImageAndText2({ text, additionalClassNames = "" }: FrameBackgroundImageAndText2Props) {
  return (
    <div className={clsx("bg-[#606366] col-1 content-stretch flex items-center justify-center px-[16px] py-[8px] relative rounded-[8px] row-1", additionalClassNames)}>
      <p className="font-['Manrope:SemiBold',sans-serif] font-semibold leading-none relative shrink-0 text-[#fdf5ea] text-[20.329px] text-center tracking-[0.2033px]">{text}</p>
    </div>
  );
}
type FrameBackgroundImageAndText1Props = {
  text: string;
  additionalClassNames?: string;
};

function FrameBackgroundImageAndText1({ text, additionalClassNames = "" }: FrameBackgroundImageAndText1Props) {
  return (
    <div className={clsx("bg-[#606366] col-1 content-stretch flex items-center justify-center mt-0 px-[16px] py-[8px] relative rounded-[8px] row-1", additionalClassNames)}>
      <p className="font-['Manrope:SemiBold',sans-serif] font-semibold leading-none relative shrink-0 text-[#fdf5ea] text-[20px] text-center tracking-[0.2px]">{text}</p>
    </div>
  );
}
type Group15VectorBackgroundImageProps = {
  additionalClassNames?: string;
};

function Group15VectorBackgroundImage({ additionalClassNames = "" }: Group15VectorBackgroundImageProps) {
  return (
    <div className={clsx("absolute", additionalClassNames)}>
      <div className="absolute inset-[-13.33%_-1px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 9.5">
          <path d="M1 1V8.5" id="Vector" stroke="var(--stroke-0, #FDF5EA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </svg>
      </div>
    </div>
  );
}

function EllipseBackgroundImage() {
  return (
    <div className="col-1 ml-0 mt-0 relative row-1 size-[64px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64 64">
        <circle cx="32" cy="32" id="Ellipse" r="31.5" stroke="var(--stroke-0, #606366)" />
      </svg>
    </div>
  );
}
type FrameBackgroundImageAndTextProps = {
  text: string;
  additionalClassNames?: string;
};

function FrameBackgroundImageAndText({ text, additionalClassNames = "" }: FrameBackgroundImageAndTextProps) {
  return (
    <div className={clsx("absolute content-stretch flex gap-[6px] items-center left-[544px]", additionalClassNames)}>
      <div className="flex flex-col font-['Manrope:ExtraBold',sans-serif] font-extrabold justify-center leading-[0] opacity-50 relative shrink-0 text-[#606366] text-[16px] tracking-[0.48px] w-[48px]">
        <p className="leading-none whitespace-pre-wrap">{text}</p>
      </div>
      <BackgroundImage1>
        <circle cx="12" cy="12" fill="var(--fill-0, #606366)" id="Ellipse" r="12" />
        <circle cx="12" cy="12" fill="var(--fill-0, #F43054)" id="Ellipse_2" r="6" />
      </BackgroundImage1>
    </div>
  );
}
type FrameBackgroundImageProps = {
  text: string;
  text1: string;
};

function FrameBackgroundImage({ text, text1 }: FrameBackgroundImageProps) {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start leading-[0] relative shrink-0 w-[644px]">
      <div className="flex flex-col font-['Manrope:ExtraBold',sans-serif] font-extrabold justify-center relative shrink-0 text-[#2f2f2f] text-[18px] tracking-[0.72px] uppercase w-full">
        <p className="leading-none whitespace-pre-wrap">{text}</p>
      </div>
      <div className="flex flex-col font-['Manrope:Light',sans-serif] font-light h-[16px] justify-center relative shrink-0 text-[#606366] text-[16px] tracking-[0.16px] w-full">
        <p className="leading-none whitespace-pre-wrap">{text1}</p>
      </div>
    </div>
  );
}

function GroupBackgroundImage1() {
  return (
    <BackgroundImage1>
      <circle cx="12" cy="12" fill="var(--fill-0, #606366)" id="Ellipse" r="12" />
      <circle cx="12" cy="12" fill="var(--fill-0, #00C0AA)" id="Ellipse_2" r="6" />
    </BackgroundImage1>
  );
}
type GroupBackgroundImageProps = {
  text: string;
  text1: string;
};

function GroupBackgroundImage({ text, text1 }: GroupBackgroundImageProps) {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] opacity-50 place-items-start relative shrink-0">
      <div className="col-1 flex flex-col font-['Manrope:ExtraBold',sans-serif] font-extrabold justify-center ml-0 mt-0 relative row-1 text-[#606366] text-[16px] tracking-[0.48px] w-[48px]">
        <p className="leading-none whitespace-pre-wrap">{text}</p>
      </div>
      <div className="col-1 flex flex-col font-['Manrope:ExtraBold',sans-serif] font-extrabold justify-center ml-0 mt-[33px] relative row-1 text-[#606366] text-[16px] tracking-[0.48px] w-[48px]">
        <p className="leading-none whitespace-pre-wrap">{text1}</p>
      </div>
      <div className="col-1 h-px ml-0 mt-[24px] relative row-1 w-[48px]" data-name="Rectangle">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle} />
      </div>
    </div>
  );
}

export default function CvLightTemplate() {
  return (
    <div className="bg-[#fdf5ea] overflow-clip relative rounded-[32px] size-full" data-name="cv-light-template">
      <div className="absolute flex h-[2000px] items-center justify-center left-0 mix-blend-darken top-0 w-[1440px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-scale-y-100 flex-none rotate-90">
          <div className="bg-size-[412px_660px] bg-top-left h-[1440px] opacity-10 w-[2000px]" data-name="Noise" style={{ backgroundImage: `url('${imgNoise}')` }} />
        </div>
      </div>
      <CvLightTemplateBackgroundImage additionalClassNames="h-[266px] top-[1684px]">
        <div className="h-0 relative w-[266px]" data-name="Line">
          <div className="absolute inset-[-1px_-0.38%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 268 2">
              <path d="M1 1H267" id="Line" stroke="url(#paint0_linear_1_484)" strokeDasharray="0.06 3.39" strokeLinecap="round" strokeMiterlimit="1.30541" strokeWidth="2" />
              <defs>
                <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_484" x1="267" x2="1" y1="2.01219" y2="2.01219">
                  <stop stopColor="#F7EBDA" />
                  <stop offset="0.107674" stopColor="#94394B" />
                  <stop offset="0.841161" stopColor="#D9405D" />
                  <stop offset="1" stopColor="#F7EBDA" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </CvLightTemplateBackgroundImage>
      <CvLightTemplateBackgroundImage additionalClassNames="h-[1085px] top-[519px]">
        <div className="h-0 relative w-[1085px]" data-name="Line">
          <div className="absolute inset-[-1px_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1087 2">
              <path d="M1 1H1086" id="Line" stroke="url(#paint0_linear_1_380)" strokeDasharray="0.06 3.39" strokeLinecap="round" strokeMiterlimit="1.30541" strokeWidth="2" />
              <defs>
                <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_380" x1="1086" x2="1" y1="2.01219" y2="2.01222">
                  <stop stopColor="#00C0AA" />
                  <stop offset="0.96875" stopColor="#D9405D" />
                  <stop offset="1" stopColor="#F7EBDA" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </CvLightTemplateBackgroundImage>
      <div className="absolute bg-gradient-to-l from-[#f5eee4] h-[2000px] left-0 to-[#fcf4e9] top-0 w-[480px]" data-name="Devider" />
      <div className="absolute h-px left-[544px] top-[390px] w-[816px]" data-name="Line">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLine} />
      </div>
      <div className="absolute contents left-[544px] top-[447px]" data-name="Info 3">
        <div className="absolute contents left-[544px] top-[544px]" data-name="Group">
          <div className="absolute content-stretch flex gap-[6px] items-center left-[544px] top-[1554px]" data-name="Frame">
            <GroupBackgroundImage text="JUL" text1="2022" />
            <GroupBackgroundImage1 />
          </div>
          <div className="absolute content-stretch flex gap-[6px] items-center left-[544px] top-[1373px]" data-name="Frame">
            <GroupBackgroundImage text="JUL" text1="2023" />
            <GroupBackgroundImage1 />
          </div>
          <div className="absolute content-stretch flex gap-[6px] items-center left-[544px] top-[1191px]" data-name="Frame">
            <GroupBackgroundImage text="APR" text1="2024" />
            <GroupBackgroundImage1 />
          </div>
          <div className="absolute content-stretch flex gap-[6px] items-center left-[544px] top-[944px]" data-name="Frame">
            <GroupBackgroundImage text="JUN" text1="2024" />
            <GroupBackgroundImage1 />
          </div>
          <div className="absolute content-stretch flex flex-col gap-[40px] items-start left-[666px] top-[559px] w-[710px]" data-name="Frame">
            <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0" data-name="Frame">
              <FrameBackgroundImage text="PIONNIERS PROGRAM – START-UP MANAGER JR" text1="Le Connecteur (France)" />
              <p className="font-['Manrope:Light',sans-serif] font-light leading-[1.7] min-w-full relative shrink-0 text-[#2f2f2f] text-[20px] w-[min-content] whitespace-pre-wrap">TBD</p>
            </div>
            <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0" data-name="Frame">
              <FrameBackgroundImage text="PIONNIERS PROGRAM – OPEN INNOVATION" text1="Crédit Agricole SA. x Le Connecteur (France)" />
              <p className="font-['Manrope:Light',sans-serif] font-light leading-[1.7] min-w-full relative shrink-0 text-[#2f2f2f] text-[20px] w-[min-content] whitespace-pre-wrap">Open Innovation programme solving real-world challenges for Crédit Agricole through innovation. Multidisciplinary teamwork, benchmarking, functional prototyping, and business plan development.</p>
            </div>
            <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0" data-name="Frame">
              <FrameBackgroundImage text="LOGISTICS WAREHOUSE ASSISTANT" text1="Action Logistic Warehouse (France)" />
              <p className="font-['Manrope:Light',sans-serif] font-light leading-[1.7] min-w-full relative shrink-0 text-[#2f2f2f] text-[20px] w-[min-content] whitespace-pre-wrap">Managed shipping services, scanning and loading operations. Ensured efficiency and accuracy in a fast-paced warehouse environment.</p>
            </div>
            <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0" data-name="Frame">
              <FrameBackgroundImage text="PRIVATE MATH TUTOR" text1="Freelance" />
              <p className="font-['Manrope:Light',sans-serif] font-light leading-[1.7] min-w-full relative shrink-0 text-[#2f2f2f] text-[20px] w-[min-content] whitespace-pre-wrap">Provided math tutoring for middle and high school students over 2 years. Developed personalized teaching methods adapted to each student's needs.</p>
            </div>
            <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0" data-name="Frame">
              <FrameBackgroundImage text="INTERNSHIP – DIVE CENTER" text1="Dive Point Zanzibar (Matemwe, Tanzania)" />
              <p className="font-['Manrope:Light',sans-serif] font-light leading-[1.7] min-w-full relative shrink-0 text-[#2f2f2f] text-[20px] w-[min-content] whitespace-pre-wrap">{"Maintained diving center equipment, provided customer service, assisted in diving activities, and participated in the \"Linda Bahari\" coral reef restoration project."}</p>
            </div>
            <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0" data-name="Frame">
              <FrameBackgroundImage text="HOSPITALITY ASSISTANT" text1="Abbaye des Capucins, Hotel Spa Resort (France)" />
              <p className="font-['Manrope:Light',sans-serif] font-light leading-[1.7] min-w-full relative shrink-0 text-[#2f2f2f] text-[20px] w-[min-content] whitespace-pre-wrap">Preparation, setup, restocking, and cleaning of the breakfast buffet. Customer service and greeting guests in a prestigious hotel environment.</p>
            </div>
          </div>
          <div className="absolute content-stretch flex gap-[6px] items-center left-[544px] top-[694px]" data-name="Frame">
            <GroupBackgroundImage text="FEB" text1="2025" />
            <GroupBackgroundImage1 />
          </div>
          <div className="absolute content-stretch flex gap-[6px] items-center left-[544px] top-[544px]" data-name="Frame">
            <GroupBackgroundImage text="JAN" text1="2026" />
            <GroupBackgroundImage1 />
          </div>
        </div>
        <div className="absolute contents left-[544px] top-[1612px]" data-name="Group">
          <div className="absolute contents left-[544px] top-[1721px]" data-name="Group">
            <FrameBackgroundImageAndText text="2024" additionalClassNames="top-[1721px]" />
            <div className="absolute content-stretch flex flex-col gap-[40px] items-start left-[666px] text-[#2f2f2f] top-[1724px]" data-name="Frame">
              <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0" data-name="Frame">
                <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[18px] tracking-[0.72px] uppercase whitespace-nowrap">
                  <p className="leading-none">ESTIA School of Engineering</p>
                </div>
                <p className="font-['Manrope:Light',sans-serif] font-light leading-[1.7] relative shrink-0 text-[20px] w-[633px] whitespace-pre-wrap">Engineering Cycle (1st year) and Integrated Preparatory Course (2022-2024) in science and engineering fundamentals.</p>
              </div>
              <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0" data-name="Frame">
                <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[18px] tracking-[0.72px] uppercase whitespace-nowrap">
                  <p className="leading-none">Pierre Marie Théas High School</p>
                </div>
                <p className="font-['Manrope:Light',sans-serif] font-light leading-[1.7] relative shrink-0 text-[20px] w-[384px] whitespace-pre-wrap">High School Diploma (General) with Honors and European Mention – 2022</p>
              </div>
            </div>
            <FrameBackgroundImageAndText text="2022" additionalClassNames="top-[1871px]" />
          </div>
          <div className="absolute content-stretch flex gap-[24px] items-center left-[578px] top-[1612px] w-[798px]" data-name="Frame">
            <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Group">
              <EllipseBackgroundImage />
              <EllipseBackgroundImage2>
                <circle cx="20" cy="20" fill="var(--fill-0, #F43054)" id="Ellipse" r="20" />
              </EllipseBackgroundImage2>
              <div className="col-1 ml-[20px] mt-[20px] relative row-1 size-[24px]" data-name="Bank">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                  <g id="Vector" />
                </svg>
                <div className="absolute inset-[12.5%_9.38%_62.5%_9.38%]" data-name="Vector">
                  <div className="absolute inset-[-16.67%_-5.13%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.5002 8">
                      <path d={svgPaths.p383e3100} id="Vector" stroke="var(--stroke-0, #FDF5EA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                  </div>
                </div>
                <Group15VectorBackgroundImage additionalClassNames="inset-[37.5%_78.13%_31.25%_21.88%]" />
                <Group15VectorBackgroundImage additionalClassNames="inset-[37.5%_59.38%_31.25%_40.63%]" />
                <Group15VectorBackgroundImage additionalClassNames="inset-[37.5%_40.63%_31.25%_59.38%]" />
                <Group15VectorBackgroundImage additionalClassNames="inset-[37.5%_21.88%_31.25%_78.13%]" />
                <div className="absolute inset-[68.75%_12.5%_31.25%_12.5%]" data-name="Vector">
                  <div className="absolute inset-[-1px_-5.56%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 2">
                      <path d="M1 1H19" id="Vector" stroke="var(--stroke-0, #FDF5EA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                  </div>
                </div>
                <div className="absolute inset-[81.25%_6.25%_18.75%_6.25%]" data-name="Vector">
                  <div className="absolute inset-[-1px_-4.76%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 2">
                      <path d="M1 1H22" id="Vector" stroke="var(--stroke-0, #FDF5EA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <p className="flex-[1_0_0] font-['Manrope:ExtraBold',sans-serif] font-extrabold leading-none min-h-px min-w-px relative text-[#2f2f2f] text-[26px] tracking-[1.3px] uppercase whitespace-pre-wrap">EDUCATION</p>
          </div>
        </div>
        <div className="absolute content-stretch flex gap-[24px] items-center left-[578px] top-[447px] w-[798px]" data-name="Frame">
          <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Group">
            <EllipseBackgroundImage />
            <EllipseBackgroundImage2>
              <circle cx="20" cy="20" fill="var(--fill-0, #00C0AA)" id="Ellipse" r="20" />
            </EllipseBackgroundImage2>
            <div className="col-1 ml-[20px] mt-[20px] relative row-1 size-[24px]" data-name="Briefcase">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                <g id="Vector" />
              </svg>
              <VectorBackgroundImage additionalClassNames="inset-[28.13%_12.5%_15.63%_12.5%]">
                <path d={svgPaths.p3e2165b0} id="Vector" stroke="var(--stroke-0, #FDF5EA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </VectorBackgroundImage>
              <div className="absolute inset-[15.63%_34.38%_71.88%_34.38%]" data-name="Vector">
                <div className="absolute inset-[-33.33%_-13.33%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.5 5">
                    <path d={svgPaths.p3f92e100} id="Vector" stroke="var(--stroke-0, #FDF5EA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </svg>
                </div>
              </div>
              <div className="absolute inset-[49.34%_12.5%_40.62%_12.5%]" data-name="Vector">
                <div className="absolute inset-[-41.51%_-5.56%_-41.5%_-5.56%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.0003 4.4096">
                    <path d={svgPaths.pb4a7200} id="Vector" stroke="var(--stroke-0, #FDF5EA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </svg>
                </div>
              </div>
              <div className="absolute inset-[46.88%_45.31%_53.13%_45.31%]" data-name="Vector">
                <div className="absolute inset-[-1px_-44.44%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.25 2">
                    <path d="M1 1H3.25" id="Vector" stroke="var(--stroke-0, #FDF5EA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <p className="flex-[1_0_0] font-['Manrope:ExtraBold',sans-serif] font-extrabold leading-none min-h-px min-w-px relative text-[#2f2f2f] text-[26px] tracking-[1.3px] uppercase whitespace-pre-wrap">WORK EXPERIENCE</p>
        </div>
      </div>
      <div className="absolute content-stretch flex flex-col gap-[32px] items-start left-[544px] text-[#2f2f2f] top-[80px] w-[832px] whitespace-pre-wrap" data-name="Info 2">
        <p className="font-['Manrope:ExtraBold',sans-serif] font-extrabold leading-none relative shrink-0 text-[26px] tracking-[1.3px] uppercase w-full">ABOUT ME</p>
        <p className="font-['Manrope:Light',sans-serif] font-light leading-[1.7] relative shrink-0 text-[20px] w-full">Motivated and curious 21-year-old engineering student passionate about mathematics, IT, and innovation. Eager to contribute to collaborative projects and grow through hands-on professional experience. Driven by a strong interest in Web3, AI, and digital technology, I combine technical skills with teamwork and creativity to build impactful solutions.</p>
      </div>
      <div className="absolute content-stretch flex flex-col gap-[56px] items-start left-[48px] top-[658px]" data-name="Info 1">
        <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full" data-name="Frame">
          <p className="font-['Manrope:ExtraBold',sans-serif] font-extrabold leading-none relative shrink-0 text-[#2f2f2f] text-[26px] tracking-[1.3px] uppercase w-[422px] whitespace-pre-wrap">software</p>
          <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Group">
            <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="Group">
              <FrameBackgroundImageAndText1 text="FIGMA" additionalClassNames="ml-0" />
              <FrameBackgroundImageAndText1 text="NOTION" additionalClassNames="ml-[102px]" />
              <FrameBackgroundImageAndText1 text="CURSOR" additionalClassNames="ml-[215px]" />
            </div>
            <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-[52px] place-items-start relative row-1" data-name="Group">
              <FrameBackgroundImageAndText2 text="HTML/CSS/JS" additionalClassNames="ml-0 mt-0" />
              <FrameBackgroundImageAndText2 text="PYTHON" additionalClassNames="ml-[175px] mt-0" />
            </div>
            <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-[104px] place-items-start relative row-1" data-name="Group">
              <FrameBackgroundImageAndText2 text="GIT" additionalClassNames="ml-0 mt-0" />
              <FrameBackgroundImageAndText2 text="SOLIDWORKS" additionalClassNames="ml-[72px] mt-0" />
            </div>
            <FrameBackgroundImageAndText2 text="DESIGN FICTION" additionalClassNames="ml-0 mt-[156px]" />
            <p className="col-1 font-['Manrope:SemiBold',sans-serif] font-semibold leading-none ml-[195px] mt-[164px] relative row-1 text-[#2f2f2f] text-[20px] tracking-[0.2px]">{`& MORE`}</p>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full" data-name="Frame">
          <p className="font-['Manrope:ExtraBold',sans-serif] font-extrabold leading-none min-w-full relative shrink-0 text-[#2f2f2f] text-[26px] tracking-[1.3px] uppercase w-[min-content] whitespace-pre-wrap">SOFT SKILLS</p>
          <div className="content-stretch flex gap-[16px] items-start relative shrink-0" data-name="Frame">
            <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[160px]" data-name="Frame">
              <FrameBackgroundImageAndText3 text="Teamwork" />
              <FrameBackgroundImageAndText3 text="Innovation" />
              <FrameBackgroundImageAndText4 text="Adaptability" />
            </div>
            <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[160px]" data-name="Frame">
              <FrameBackgroundImageAndText3 text="Communication" />
              <div className="content-stretch flex flex-col gap-[12px] items-start justify-center relative shrink-0 w-full" data-name="Frame">
                <p className="font-['Manrope:SemiBold',sans-serif] font-semibold leading-none relative shrink-0 text-[#2f2f2f] text-[18px] tracking-[0.18px]">Organization</p>
                <BackgroundImage>
                  <path d={svgPaths.p3dd58900} fill="var(--fill-0, #F43054)" id="Star" />
                  <path d={svgPaths.p7b6e900} fill="var(--fill-0, #F43054)" id="Star_2" />
                  <path d={svgPaths.p3461b800} fill="var(--fill-0, #F43054)" id="Star_3" />
                  <path d={svgPaths.p36a1b0f0} id="Star_4" stroke="var(--stroke-0, #F43054)" strokeWidth="0.564706" />
                  <path d={svgPaths.p28d74000} id="Star_5" stroke="var(--stroke-0, #F43054)" strokeWidth="0.564706" />
                </BackgroundImage>
              </div>
              <FrameBackgroundImageAndText4 text="Problem Solving" />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0" data-name="Frame">
          <p className="font-['Manrope:ExtraBold',sans-serif] font-extrabold leading-none min-w-full relative shrink-0 text-[#2f2f2f] text-[26px] tracking-[1.3px] uppercase w-[min-content] whitespace-pre-wrap">INTERESTS / HOBBIES</p>
          <div className="content-stretch flex gap-[27px] items-start relative shrink-0" data-name="Frame">
            <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0" data-name="Frame">
              <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-name="Frame">
                <GroupBackgroundImage2>
                  <circle cx="30" cy="30" id="Ellipse" r="29.5" stroke="var(--stroke-0, #606366)" />
                  <path d={svgPaths.p386f180} fill="var(--fill-0, #2F2F2F)" id="route" />
                </GroupBackgroundImage2>
                <div className="flex flex-col font-['Manrope:Light',sans-serif] font-light justify-center leading-[0] relative shrink-0 text-[#2f2f2f] text-[18px] tracking-[0.36px] w-[120px]">
                  <p className="leading-none whitespace-pre-wrap">Travelling</p>
                </div>
              </div>
              <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-name="Frame">
                <GroupBackgroundImage2>
                  <circle cx="30" cy="30" id="Ellipse" r="29.5" stroke="var(--stroke-0, #606366)" />
                  <path d={svgPaths.p19789580} fill="var(--fill-0, #2F2F2F)" id="head-side-brain" />
                </GroupBackgroundImage2>
                <div className="flex flex-col font-['Manrope:Light',sans-serif] font-light justify-center leading-[0] relative shrink-0 text-[#2f2f2f] text-[18px] tracking-[0.36px] w-[120px]">
                  <p className="leading-none whitespace-pre-wrap">Web3 / Crypto</p>
                </div>
              </div>
              <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-name="Frame">
                <GroupBackgroundImage2>
                  <circle cx="30" cy="30" id="Ellipse" r="29.5" stroke="var(--stroke-0, #606366)" />
                  <path d={svgPaths.p7b8c680} fill="var(--fill-0, #2F2F2F)" id="pencil-paintbrush" />
                </GroupBackgroundImage2>
                <div className="flex flex-col font-['Manrope:Light',sans-serif] font-light justify-center leading-[0] relative shrink-0 text-[#2f2f2f] text-[18px] tracking-[0.36px] w-[120px]">
                  <p className="leading-none whitespace-pre-wrap">{`Innovation & AI`}</p>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0" data-name="Frame">
              <div className="content-stretch flex gap-[20px] items-center relative shrink-0" data-name="Frame">
                <GroupBackgroundImage2>
                  <circle cx="30" cy="30" id="Ellipse" r="29.5" stroke="var(--stroke-0, #606366)" />
                  <path d={svgPaths.p1acca180} fill="var(--fill-0, #2F2F2F)" id="baby" />
                </GroupBackgroundImage2>
                <div className="flex flex-col font-['Manrope:Light',sans-serif] font-light justify-center leading-[0] relative shrink-0 text-[#2f2f2f] text-[18px] tracking-[0.36px] w-[120px]">
                  <p className="leading-none whitespace-pre-wrap">Padel</p>
                </div>
              </div>
              <div className="content-stretch flex gap-[20px] items-center relative shrink-0" data-name="Frame">
                <GroupBackgroundImage2>
                  <circle cx="30" cy="30" id="Ellipse" r="29.5" stroke="var(--stroke-0, #606366)" />
                  <path d={svgPaths.p1246fa00} fill="var(--fill-0, #2F2F2F)" id="atom" />
                </GroupBackgroundImage2>
                <div className="flex flex-col font-['Manrope:Light',sans-serif] font-light justify-center leading-[0] relative shrink-0 text-[#2f2f2f] text-[18px] tracking-[0.36px] w-[120px]">
                  <p className="leading-none whitespace-pre-wrap">MMA</p>
                </div>
              </div>
              <div className="content-stretch flex gap-[20px] items-center relative shrink-0" data-name="Frame">
                <GroupBackgroundImage2>
                  <circle cx="30" cy="30" id="Ellipse" r="29.5" stroke="var(--stroke-0, #606366)" />
                  <path d={svgPaths.p3e956100} fill="var(--fill-0, #2F2F2F)" id="utensils" />
                </GroupBackgroundImage2>
                <div className="flex flex-col font-['Manrope:Light',sans-serif] font-light justify-center leading-[0] relative shrink-0 text-[#2f2f2f] text-[18px] tracking-[0.36px] w-[120px]">
                  <p className="leading-none whitespace-pre-wrap">Basketball</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full" data-name="Frame">
          <p className="font-['Manrope:ExtraBold',sans-serif] font-extrabold leading-none min-w-full relative shrink-0 text-[#2f2f2f] text-[26px] tracking-[1.3px] uppercase w-[min-content] whitespace-pre-wrap">CONTACT</p>
          <div className="content-stretch flex flex-col gap-[24px] items-start leading-[0] relative shrink-0 w-[382px]" data-name="Frame">
            <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0 w-full" data-name="Group">
              <p className="col-1 font-['Manrope:Regular',sans-serif] font-normal leading-none ml-[48px] mt-[7px] relative row-1 text-[#2f2f2f] text-[18px] tracking-[0.18px] w-[334px] whitespace-pre-wrap">+33 622 271 759</p>
              <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="Group">
                <EllipseBackgroundImage1 />
                <div className="col-1 ml-[4px] mt-[4px] relative row-1 size-[24px]" data-name="Phone">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                    <g id="Vector" />
                  </svg>
                  <div className="absolute inset-[12.63%_12.63%_15.63%_15.63%]" data-name="Vector">
                    <div className="absolute inset-[-5.81%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.2185 19.2185">
                        <path d={svgPaths.p3be75700} id="Vector" stroke="var(--stroke-0, #FDF5EA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0 w-full" data-name="Group">
              <p className="col-1 font-['Manrope:Regular',sans-serif] font-normal leading-none ml-[48px] mt-[7px] relative row-1 text-[#2f2f2f] text-[18px] tracking-[0.18px] w-[334px] whitespace-pre-wrap">valentin.portal@etu.estia.fr</p>
              <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="Group">
                <EllipseBackgroundImage1 />
                <div className="col-1 ml-[4px] mt-[4px] relative row-1 size-[24px]" data-name="EnvelopeSimple">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                    <g id="Vector" />
                  </svg>
                  <VectorBackgroundImage additionalClassNames="inset-[21.88%_12.5%]">
                    <path d={svgPaths.p3b3c340} id="Vector" stroke="var(--stroke-0, #FDF5EA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </VectorBackgroundImage>
                  <div className="absolute inset-[21.88%_12.5%_43.75%_12.5%]" data-name="Vector">
                    <div className="absolute inset-[-12.12%_-5.56%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 10.25">
                        <path d={svgPaths.p172f7500} id="Vector" stroke="var(--stroke-0, #FDF5EA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0 w-full" data-name="Group">
              <p className="col-1 font-['Manrope:Regular',sans-serif] font-normal leading-none ml-[48px] mt-[7px] relative row-1 text-[#2f2f2f] text-[18px] tracking-[0.18px] w-[334px] whitespace-pre-wrap">3 rue docteur Voulgre, Bayonne</p>
              <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="Group">
                <EllipseBackgroundImage1 />
                <div className="col-1 ml-[4px] mt-[4px] relative row-1 size-[24px]" data-name="FacebookLogo">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                    <g id="Vector" />
                  </svg>
                  <div className="absolute inset-[12.5%]" data-name="Vector">
                    <div className="absolute inset-[-5.56%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                        <path d={svgPaths.p157b3400} id="Vector" stroke="var(--stroke-0, #FDF5EA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute bottom-[12.5%] left-1/2 right-[34.38%] top-[34.37%]" data-name="Vector">
                    <div className="absolute inset-[-7.84%_-26.67%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.75002 14.75">
                        <path d={svgPaths.p20db0da0} id="Vector" stroke="var(--stroke-0, #FDF5EA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute inset-[56.25%_37.5%_43.75%_37.5%]" data-name="Vector">
                    <div className="absolute inset-[-1px_-16.67%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 2">
                        <path d="M1 1H7" id="Vector" stroke="var(--stroke-0, #FDF5EA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0 w-full" data-name="Group">
              <p className="col-1 font-['Manrope:Regular',sans-serif] font-normal leading-none ml-[48px] mt-[7px] relative row-1 text-[#2f2f2f] text-[18px] tracking-[0.18px] w-[334px] whitespace-pre-wrap">Bayonne, France</p>
              <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="Group">
                <EllipseBackgroundImage1 />
                <div className="col-1 ml-[4px] mt-[4px] relative row-1 size-[24px]" data-name="InstagramLogo">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                    <g id="Vector" />
                  </svg>
                  <div className="absolute inset-[34.38%]" data-name="Vector">
                    <div className="absolute inset-[-13.33%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.5 9.5">
                        <path d={svgPaths.pbc2f100} id="Vector" stroke="var(--stroke-0, #FDF5EA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute inset-[14.06%]" data-name="Vector">
                    <div className="absolute inset-[-5.8%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.25 19.25">
                        <path d={svgPaths.p11982e40} id="Vector" stroke="var(--stroke-0, #FDF5EA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute bottom-[65.63%] left-[65.63%] right-1/4 top-1/4" data-name="Vector">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.25 2.25">
                      <path d={svgPaths.p3edb5980} fill="var(--fill-0, #FDF5EA)" id="Vector" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute h-[594px] left-0 top-0 w-[480px]" data-name="Image">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute max-w-none object-cover w-full h-full" src={cvData.photo} />
        </div>
      </div>
      <div className="absolute contents left-[24px] top-[516px]" data-name="Name">
        <div className="absolute backdrop-blur-[16px] h-[80px] left-[24px] rounded-[32px] top-[507px] w-[432px]" data-name="Rectangle" style={{ backgroundImage: "linear-gradient(170.714deg, rgba(71, 79, 87, 0.3) 0%, rgba(247, 235, 218, 0.06) 100%)" }}>
          <div aria-hidden="true" className="absolute border border-[#53555e]/30 border-solid inset-[-1px] pointer-events-none rounded-[33px]" />
        </div>
        <div className="absolute flex h-[80px] items-center justify-center left-[24px] mix-blend-overlay top-[507px] w-[432px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
          <div className="-scale-y-100 flex-none rotate-90">
            <div className="bg-size-[412px_660px] bg-top-left h-[432px] opacity-10 rounded-[32px] w-[80px]" data-name="Noise" style={{ backgroundImage: `url('${imgNoise}')` }} />
          </div>
        </div>
        <div className="absolute contents left-[54px] top-[540px]" data-name="Group">
          <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Manrope:ExtraBold',sans-serif] font-extrabold justify-center leading-[0] left-[240px] text-[#fdf5ea] text-[36px] text-center text-shadow-[0px_3px_8px_rgba(0,0,0,0.08)] top-[535px] tracking-[4.32px] whitespace-nowrap">
            <p className="leading-none">VALENTIN PORTAL</p>
          </div>
          <div className="absolute contents left-[57px] top-[601px]" data-name="Group">
            <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] left-[240px] text-[#fdf5ea] text-[17px] text-center text-shadow-[0px_1px_4px_rgba(0,0,0,0.08)] top-[565px] tracking-[0.17px] whitespace-nowrap">
              <p className="leading-none">Engineering Student</p>
            </div>
            <Group41RectangleBackgroundImage additionalClassNames="absolute left-[57px] top-[564px]" />
            <div className="absolute flex h-px items-center justify-center left-[325px] top-[564px] w-[128px]">
              <div className="-scale-y-100 flex-none rotate-180">
                <Group41RectangleBackgroundImage additionalClassNames="relative" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}