"use client";

import { motion } from "framer-motion";
import BackgroundPattern from "./ui/BackgroundPattern";
import SubtitleSection from "./ui/SubtitleSection";
import { ScrambleText } from "@/components/ui/scramble-text";
import BackgroundImages from "./ui/BackgroundImages";
import { Button } from "./ui/button";
import { PopupButton } from "@typeform/embed-react";

const TriangleBackground = () => (
  <div className="absolute h-[230px] md:h-[480px] inset-0 -translate-y-[27%] flex items-center justify-center">
    <svg
      width="515"
      height="453"
      viewBox="0 0 515 453"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M257.152 0L189.979 116.329L201.494 122.977L257.152 26.5925L312.797 122.977L324.311 116.329L257.152 0ZM67.1593 329.057L78.6738 335.705L23.0291 432.089H134.332V445.386H0L67.1593 329.057ZM435.611 335.705L447.126 329.057L514.285 445.386H379.953V432.089H491.256L435.611 335.705ZM318.588 232.695V219.399H391.505L355.046 282.556L343.532 275.908L368.476 232.695H318.588ZM159.316 282.556L170.831 275.908L145.887 232.695H195.775V219.399H122.845L159.316 282.556ZM232.234 382.267L257.178 425.479L282.135 382.267L293.649 388.915L257.178 452.072L220.719 388.915L232.234 382.267Z"
        fill="url(#paint0_radial_327_441)"
      />
      <defs>
        <radialGradient
          id="paint0_radial_327_441"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(256.336 242.769) rotate(90.1726) scale(353.368 1153.49)"
        >
          <stop offset="0.385226" stopColor="#878A8C" stopOpacity="0" />
          <stop offset="1" stopColor="#2B2D2E" />
        </radialGradient>
      </defs>
    </svg>
  </div>
);

const HeroSection = () => {
  return (
    <div className="relative min-h-[60vh] md:min-h-[70vh] bg-black flex flex-col items-center justify-center overflow-hidden">
      {/* Backgrounds */}
      <BackgroundPattern />
      {/* <BackgroundImages /> */}

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center gap-4 md:gap-7 px-4 w-full max-w-7xl mx-auto relative mb-16">
        <TriangleBackground />
        {/* Solana Logo */}
        <div className="relative w-full flex flex-center justify-between">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative z-10 w-full"
          >
            <svg
              viewBox="0 0 399 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full min-w-[100px] max-w-[130px] md:max-w-[320px] h-auto mx-auto"
            >
              <g clip-path="url(#clip0_195_273)">
                <mask
                  id="mask0_195_273"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="399"
                  height="60"
                >
                  <path
                    d="M398.85 0.0065918H0.186035V59.2507H398.85V0.0065918Z"
                    fill="white"
                  />
                </mask>
                <g mask="url(#mask0_195_273)">
                  <path
                    d="M67.1597 46.7164L56.2242 58.4418C55.9877 58.6965 55.7013 58.8998 55.3827 59.0388C55.0642 59.1779 54.7204 59.2499 54.3728 59.2502H2.53422C2.28698 59.2501 2.04514 59.1779 1.83832 59.0424C1.6315 58.9069 1.46868 58.7141 1.36978 58.4875C1.27089 58.2608 1.24022 58.0104 1.28153 57.7666C1.32284 57.5228 1.43433 57.2963 1.60236 57.115L12.5255 45.3896C12.762 45.1349 13.0485 44.9317 13.367 44.7926C13.6855 44.6535 14.0293 44.5815 14.3769 44.5811H66.2155C66.4648 44.576 66.7104 44.6448 66.9209 44.7788C67.1313 44.9128 67.298 45.1061 67.3985 45.3343C67.4997 45.5626 67.5306 45.8156 67.488 46.0616C67.4454 46.3075 67.3313 46.5353 67.1597 46.7164ZM56.2242 23.099C55.9868 22.8454 55.7002 22.643 55.3819 22.504C55.0635 22.365 54.7202 22.2924 54.3728 22.2906H2.53422C2.28698 22.2907 2.04514 22.3629 1.83832 22.4984C1.6315 22.6339 1.46868 22.8267 1.36978 23.0534C1.27089 23.28 1.24022 23.5305 1.28153 23.7742C1.32284 24.018 1.43433 24.2445 1.60236 24.4258L12.5255 36.1574C12.7629 36.4109 13.0496 36.6134 13.3679 36.7524C13.6862 36.8914 14.0296 36.964 14.3769 36.9658H66.2155C66.4624 36.9645 66.703 36.8914 66.9092 36.7555C67.1153 36.6195 67.277 36.4266 67.3751 36.2002C67.4732 35.9739 67.5034 35.7238 67.4615 35.4806C67.4201 35.2374 67.3091 35.0115 67.1412 34.8306L56.2242 23.099ZM2.53422 14.6752H54.3728C54.7204 14.6749 55.0642 14.6029 55.3827 14.4638C55.7013 14.3247 55.9877 14.1214 56.2242 13.8668L67.1597 2.14139C67.3313 1.96027 67.4454 1.73242 67.488 1.4865C67.5306 1.24059 67.4997 0.987583 67.3985 0.759333C67.298 0.531083 67.1313 0.337785 66.9209 0.203761C66.7104 0.0697377 66.4648 0.000976104 66.2155 0.00612918H14.3769C14.0293 0.00649504 13.6855 0.0784675 13.367 0.217559C13.0485 0.35665 12.762 0.559877 12.5255 0.814565L1.60236 12.5399C1.43433 12.7213 1.32284 12.9478 1.28153 13.1916C1.24022 13.4353 1.27089 13.6858 1.36978 13.9124C1.46868 14.139 1.6315 14.3319 1.83832 14.4673C2.04514 14.6029 2.28698 14.6751 2.53422 14.6752Z"
                    fill="url(#paint0_linear_195_273)"
                  />
                  <path
                    d="M67.1597 46.7164L56.2242 58.4418C55.9877 58.6965 55.7013 58.8998 55.3827 59.0388C55.0642 59.1779 54.7204 59.2499 54.3728 59.2502H2.53422C2.28698 59.2501 2.04514 59.1779 1.83832 59.0424C1.6315 58.9069 1.46868 58.7141 1.36978 58.4875C1.27089 58.2608 1.24022 58.0104 1.28153 57.7666C1.32284 57.5228 1.43433 57.2963 1.60236 57.115L12.5255 45.3896C12.762 45.1349 13.0485 44.9317 13.367 44.7926C13.6855 44.6535 14.0293 44.5815 14.3769 44.5811H66.2155C66.4648 44.576 66.7104 44.6448 66.9209 44.7788C67.1313 44.9128 67.298 45.1061 67.3985 45.3343C67.4997 45.5626 67.5306 45.8156 67.488 46.0616C67.4454 46.3075 67.3313 46.5353 67.1597 46.7164ZM56.2242 23.099C55.9868 22.8454 55.7002 22.643 55.3819 22.504C55.0635 22.365 54.7202 22.2924 54.3728 22.2906H2.53422C2.28698 22.2907 2.04514 22.3629 1.83832 22.4984C1.6315 22.6339 1.46868 22.8267 1.36978 23.0534C1.27089 23.28 1.24022 23.5305 1.28153 23.7742C1.32284 24.018 1.43433 24.2445 1.60236 24.4258L12.5255 36.1574C12.7629 36.4109 13.0496 36.6134 13.3679 36.7524C13.6862 36.8914 14.0296 36.964 14.3769 36.9658H66.2155C66.4624 36.9645 66.703 36.8914 66.9092 36.7555C67.1153 36.6195 67.277 36.4266 67.3751 36.2002C67.4732 35.9739 67.5034 35.7238 67.4615 35.4806C67.4201 35.2374 67.3091 35.0115 67.1412 34.8306L56.2242 23.099ZM2.53422 14.6752H54.3728C54.7204 14.6749 55.0642 14.6029 55.3827 14.4638C55.7013 14.3247 55.9877 14.1214 56.2242 13.8668L67.1597 2.14139C67.3313 1.96027 67.4454 1.73242 67.488 1.4865C67.5306 1.24059 67.4997 0.987583 67.3985 0.759333C67.298 0.531083 67.1313 0.337785 66.9209 0.203761C66.7104 0.0697377 66.4648 0.000976104 66.2155 0.00612918H14.3769C14.0293 0.00649504 13.6855 0.0784675 13.367 0.217559C13.0485 0.35665 12.762 0.559877 12.5255 0.814565L1.60236 12.5399C1.43433 12.7213 1.32284 12.9478 1.28153 13.1916C1.24022 13.4353 1.27089 13.6858 1.36978 13.9124C1.46868 14.139 1.6315 14.3319 1.83832 14.4673C2.04514 14.6029 2.28698 14.6751 2.53422 14.6752Z"
                    fill="white"
                  />
                  <path
                    d="M130.361 25.0549H102.627V15.9214H137.569V6.78798H102.535C101.337 6.7815 100.151 7.01082 99.0428 7.46286C97.9344 7.91497 96.9254 8.58091 96.075 9.42273C95.224 10.2646 94.547 11.2658 94.083 12.3691C93.6189 13.4726 93.3763 14.6566 93.3702 15.8536V25.1105C93.3751 26.3085 93.6158 27.4939 94.0793 28.5986C94.5427 29.7035 95.2191 30.7061 96.0701 31.5492C96.9217 32.3924 97.9307 33.0595 99.0397 33.5123C100.149 33.9652 101.337 34.1949 102.535 34.1884H130.305V43.3219H94.0305V52.4553H130.361C131.558 52.4619 132.744 52.2325 133.852 51.7804C134.961 51.3283 135.97 50.6624 136.82 49.8206C137.671 48.9787 138.348 47.9776 138.812 46.8742C139.276 45.7707 139.519 44.5867 139.525 43.3897V34.1328C139.52 32.9348 139.279 31.7495 138.816 30.6447C138.353 29.5398 137.676 28.5372 136.825 27.6941C135.973 26.8509 134.964 26.1839 133.856 25.731C132.747 25.2782 131.559 25.0484 130.361 25.0549Z"
                    fill="white"
                  />
                  <path
                    d="M184.087 6.78814H156.248C155.049 6.77839 153.86 7.00531 152.749 7.45594C151.638 7.90656 150.626 8.57195 149.773 9.41414C148.919 10.2563 148.24 11.2585 147.775 12.3636C147.309 13.4686 147.066 14.6547 147.059 15.8537V43.3899C147.066 44.589 147.309 45.7751 147.775 46.8801C148.24 47.9851 148.919 48.9874 149.773 49.8295C150.626 50.6717 151.638 51.3371 152.749 51.7877C153.86 52.2383 155.049 52.4653 156.248 52.4555H184.087C185.284 52.462 186.47 52.2327 187.579 51.7806C188.687 51.3285 189.696 50.6626 190.547 49.8207C191.398 48.9789 192.075 47.9777 192.539 46.8743C193.003 45.7709 193.245 44.5869 193.251 43.3899V15.8537C193.245 14.6568 193.003 13.4727 192.539 12.3693C192.075 11.266 191.398 10.2647 190.547 9.4229C189.696 8.58108 188.687 7.91514 187.579 7.46303C186.47 7.01099 185.284 6.78166 184.087 6.78814ZM184.019 43.322H156.316V15.9216H184.007L184.019 43.322Z"
                    fill="white"
                  />
                  <path
                    d="M281.592 6.78852H254.439C253.241 6.78204 252.055 7.01136 250.947 7.46341C249.839 7.91551 248.83 8.58145 247.979 9.42328C247.128 10.2651 246.451 11.2663 245.987 12.3697C245.523 13.4731 245.281 14.6571 245.274 15.8541V52.4559H254.531V37.4535H281.561V52.4559H290.818V15.8541C290.812 14.6519 290.568 13.4628 290.1 12.3553C289.632 11.2479 288.95 10.2439 288.092 9.40124C287.235 8.55862 286.219 7.89398 285.103 7.44557C283.987 6.99717 282.794 6.77389 281.592 6.78852ZM281.524 28.3201H254.494V15.922H281.524V28.3201Z"
                    fill="white"
                  />
                  <path
                    d="M389.684 6.78798H362.531C361.334 6.7815 360.147 7.01082 359.039 7.46286C357.931 7.91497 356.922 8.58091 356.071 9.42274C355.22 10.2646 354.543 11.2658 354.079 12.3691C353.615 13.4726 353.373 14.6566 353.366 15.8536V52.4553H362.623V37.453H389.592V52.4553H398.849V15.8536C398.842 14.6566 398.6 13.4726 398.136 12.3691C397.672 11.2658 396.995 10.2646 396.144 9.42274C395.293 8.58091 394.284 7.91497 393.176 7.46286C392.068 7.01082 390.882 6.7815 389.684 6.78798ZM389.592 28.3195H362.562V15.9214H389.592V28.3195Z"
                    fill="white"
                  />
                  <path
                    d="M335.899 43.3218H332.196L318.959 10.6141C318.505 9.48569 317.725 8.51859 316.717 7.83691C315.71 7.15517 314.522 6.7899 313.306 6.78792H305.092C304.293 6.78385 303.502 6.93708 302.764 7.23879C302.024 7.54057 301.352 7.9849 300.784 8.54648C300.217 9.10813 299.766 9.77592 299.457 10.5119C299.148 11.2478 298.987 12.0375 298.982 12.8358V52.4553H308.239V15.9214H311.942L325.173 48.6291C325.634 49.7553 326.421 50.7185 327.433 51.3956C328.443 52.0728 329.634 52.4331 330.851 52.4306H339.065C339.863 52.4347 340.655 52.2815 341.393 51.9797C342.133 51.678 342.805 51.2336 343.372 50.672C343.939 50.1104 344.391 49.4426 344.7 48.7067C345.009 47.9707 345.17 47.1811 345.174 46.3828V6.78792H335.899V43.3218Z"
                    fill="white"
                  />
                  <path
                    d="M210.685 6.78784H201.428V43.3896C201.434 44.5892 201.678 45.7758 202.144 46.8812C202.61 47.9866 203.289 48.9892 204.143 49.8314C204.998 50.6737 206.01 51.3389 207.122 51.7892C208.234 52.2394 209.424 52.4657 210.623 52.4552H238.394V43.3217H210.685V6.78784Z"
                    fill="white"
                  />
                </g>
              </g>
              <defs>
                <linearGradient
                  id="paint0_linear_195_273"
                  x1="6.8541"
                  y1="60.6635"
                  x2="61.2106"
                  y2="-0.617185"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.08" stop-color="#9945FF" />
                  <stop offset="0.3" stop-color="#8752F3" />
                  <stop offset="0.5" stop-color="#5497D5" />
                  <stop offset="0.6" stop-color="#43B4CA" />
                  <stop offset="0.72" stop-color="#28E0B9" />
                  <stop offset="0.97" stop-color="#19FB9B" />
                </linearGradient>
                <clipPath id="clip0_195_273">
                  <rect
                    width="398.664"
                    height="59.2441"
                    fill="white"
                    transform="translate(0.180649)"
                  />
                </clipPath>
              </defs>
            </svg>
          </motion.div>
        </div>
        {/* AI HACKATHON Text */}
        <div className="relative">
          <ScrambleText
            text="AI HACKATHON"
            className="font-relish text-[36px] xs:text-[44px] sm:text-[64px] md:text-[108px] text-white tracking-wider leading-none text-center relative z-10"
            interval={4000}
            scrambleOnLoad={true}
          />
        </div>
        {/* Subtitle */}
        <div className="relative">
          <SubtitleSection className="font-ppsans" />
        </div>
        {/* Button */}
        <div className="relative mt-6 md:mt-12 flex gap-4">
          <Button
            href="https://t.me/solana_ai_hackathon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="md:hidden block text-black/90 group-hover:text-black font-mono font-bold text-sm md:text-md tracking-wide transition-colors">
              Join Telegram
            </span>
            <span className="md:block hidden text-black/90 group-hover:text-black font-mono font-bold text-sm md:text-md tracking-wide transition-colors">
              Join Telegram
            </span>

            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4 text-black/90 group-hover:text-black transition-all duration-200 group-hover:translate-x-0.5"
            >
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18 1.897-.962 6.502-1.359 8.627-.168.9-.5 1.201-.82 1.23-.697.064-1.226-.461-1.901-.903-1.056-.692-1.653-1.123-2.678-1.799-1.185-.781-.417-1.21.258-1.911.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.139-5.062 3.345-.479.329-.913.489-1.302.481-.428-.008-1.252-.241-1.865-.44-.752-.244-1.349-.374-1.297-.789.027-.216.324-.437.893-.663 3.498-1.524 5.831-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635.099-.002.321.023.465.178.12.13.145.309.157.401-.002.068.005.157-.012.359z" />
            </svg>
          </Button>

          <Button>
            <PopupButton
              id="MXJRmO6x"
              style={{ fontSize: 20 }}
              // className="my-button"
            >
              <span className="md:block hidden text-black/90 group-hover:text-black font-mono font-bold text-sm md:text-md tracking-wide transition-colors">
                Submit your Project
              </span>
            </PopupButton>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
