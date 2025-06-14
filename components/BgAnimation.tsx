export default function BgAnimation() {
  return (
    <>
      <style>
        {`
          .drop-animation {
            animation: drop 6s linear infinite;
            animation-delay: var(--delay);
            animation-duration: var(--duration);
          }

          @keyframes drop {
            0% {
              transform: translateY(-100vh) translateX(0);
              opacity: 0;
              filter: brightness(1);
            }
            10% {
              opacity: 0.7;
              filter: brightness(1.1);
            }
            20% {
              transform: translateY(10vh) translateX(2px);
              filter: brightness(1.2);
            }
            30% {
              transform: translateY(20vh) translateX(-2px);
              filter: brightness(1);
            }
            40% {
              transform: translateY(30vh) translateX(2px);
              filter: brightness(1.15);
            }
            50% {
              transform: translateY(50vh) translateX(-2px);
              filter: brightness(1);
            }
            60% {
              transform: translateY(60vh) translateX(1.5px);
              filter: brightness(1.1);
            }
            70% {
              transform: translateY(70vh) translateX(-1.5px);
              filter: brightness(1.05);
            }
            80% {
              transform: translateY(80vh) translateX(1px);
              filter: brightness(1.1);
            }
            90% {
              opacity: 0.7;
              filter: brightness(1);
            }
            100% {
              transform: translateY(100vh) translateX(0);
              opacity: 0;
              filter: brightness(1);
            }
          }


          /* Unique delays and durations for each element */
          .drop-animation:nth-child(1) { --delay: 10s; --duration: 60s; }
          .drop-animation:nth-child(2) { --delay: 10.5s; --duration: 60.5s; }
          .drop-animation:nth-child(3) { --delay: 11s; --duration: 70s; }
          .drop-animation:nth-child(4) { --delay: 11.5s; --duration: 60.2s; }
          .drop-animation:nth-child(5) { --delay: 12s; --duration: 60.8s; }
          .drop-animation:nth-child(6) { --delay: 12.5s; --duration: 60.3s; }
          .drop-animation:nth-child(7) { --delay: 13s; --duration: 70.1s; }
          .drop-animation:nth-child(8) { --delay: 13.5s; --duration: 60.4s; }
          .drop-animation:nth-child(9) { --delay: 14s; --duration: 60.9s; }
          .drop-animation:nth-child(10) { --delay: 14.5s; --duration: 60.6s; }
          .drop-animation:nth-child(11) { --delay: 15s; --duration: 70.2s; }
          .drop-animation:nth-child(12) { --delay: 15.5s; --duration: 60.7s; }
          .drop-animation:nth-child(13) { --delay: 16s; --duration: 60.5s; }
          .drop-animation:nth-child(14) { --delay: 16.5s; --duration: 70s; }
          .drop-animation:nth-child(15) { --delay: 17s; --duration: 60.3s; }
          .drop-animation:nth-child(16) { --delay: 17.5s; --duration: 60.8s; }
          .drop-animation:nth-child(17) { --delay: 18s; --duration: 60.4s; }
          .drop-animation:nth-child(18) { --delay: 18.5s; --duration: 70.1s; }
          .drop-animation:nth-child(19) { --delay: 19s; --duration: 60.6s; }
          .drop-animation:nth-child(20) { --delay: 19.5s; --duration: 60.9s; }
          .drop-animation:nth-child(21) { --delay: 11s; --duration: 70s; }
          .drop-animation:nth-child(22) { --delay: 11.5s; --duration: 60.5s; }
          .drop-animation:nth-child(23) { --delay: 11s; --duration: 60.7s; }
          .drop-animation:nth-child(24) { --delay: 11.5s; --duration: 60.8s; }
        `}
      </style>
      <main>
        <div className="relative min-h-screen">
          <div className="jsx-10c843433ccadfdb fixed inset-0 w-full h-full overflow-hidden">
            <div className="jsx-10c843433ccadfdb absolute inset-0 bg-gradient-to-b from-zinc-950 via-[#050a14] to-black z-[-20]"></div>
            <div className="jsx-10c843433ccadfdb absolute inset-0 opacity-35 bg-noise z-[-19]"></div>
            <div className="jsx-10c843433ccadfdb absolute inset-0 opacity-20 bg-noise-fine z-[-18]"></div>

            <div
              className="absolute font-mono whitespace-pre text-xs sm:text-sm transition-opacity duration-300 drop-animation"
              style={{
                left: "20%",
                top: "15%",
                transformOrigin: "center center",
                color: "rgb(182,211,251)",
                opacity: 0.866906,
                textShadow: "rgba(81,151,251,0.83) 0px 0px 10.1607px",
                zIndex: -3,
                filter: "none",
                transform:
                  "scale(1.0405) rotate(1.76295deg) translate(-0.331531px, -2.26088px)",
              }}
            >
              {`
              ████ 
              ██
              █████
              ██
              ██
              ████`}
            </div>
            <div
              className="absolute font-mono whitespace-pre text-xs sm:text-sm transition-opacity duration-300 drop-animation"
              style={{
                left: "40%",
                top: "25%",
                transform:
                  "scale(0.966287) rotate(-2.02415deg) translate(-1.9731px, -1.48484px)",
                transformOrigin: "center center",
                color: "rgb(122,147,248)",
                opacity: 0.705242,
                textShadow: "rgba(81,115,251,0.655) 0px 0px 7.66001px",
                zIndex: -4,
                filter: "hue-rotate(-6.59325deg) brightness(1.10886)",
              }}
            >
              {`
              ╔═══════╗ 
              ║ █████ ║ 
              ║ █     ║ 
              ║ █████ ║ 
              ║ █     ║ 
              ║ █████ ║ 
              ╚═══════╝`}
            </div>
            <div
              className="absolute font-mono whitespace-pre text-xs sm:text-sm transition-opacity duration-300 drop-animation"
              style={{
                left: "60%",
                top: "35%",
                transformOrigin: "center center",
                color: "rgb(158,167,250)",
                opacity: 0.672544,
                textShadow: "rgba(81,97,251,0.898) 0px 0px 11.1148px",
                zIndex: -6,
                filter: "none",
                transform:
                  "scale(0.849832) rotate(0.752271deg) translate(2.38753px, -2.4356px)",
              }}
            >
              {`
              ┏━━━━━━━┓ 
              ┃ █████ ┃ 
              ┃ █     ┃ 
              ┃ █████ ┃ 
              ┃ █     ┃ 
              ┃ █████ ┃ 
              ┗━━━━━━━┛`}
            </div>
            <div
              className="absolute font-mono whitespace-pre text-xs sm:text-sm transition-opacity duration-300 drop-animation"
              style={{
                left: "80%",
                top: "45%",
                transform:
                  "scale(1.10818) rotate(-1.83731deg) translate(0.0556637px, -1.9985px)",
                transformOrigin: "center center",
                color: "rgb(141,176,249)",
                opacity: 0.845034,
                textShadow: "rgba(81,135,251,0.78) 0px 0px 9.44754px",
                zIndex: -2,
                filter: "none",
              }}
            >
              {`
              ┌───────┐ 
              │ █████ │ 
              │ █     │ 
              │ █████ │ 
              │ █     │ 
              │ █████ │ 
              └───────┘`}
            </div>
            <div
              className="absolute font-mono whitespace-pre text-xs sm:text-sm transition-opacity duration-300 drop-animation"
              style={{
                left: "17.1975%",
                top: "104.212%",
                transformOrigin: "center center",
                color: "rgb(148,150,249)",
                opacity: 0.887875,
                textShadow: "rgba(81,84,251,0.792) 0px 0px 9.58534px",
                zIndex: -1,
                filter: "none",
                transform:
                  "scale(1.1464) rotate(1.60323deg) translate(2.11774px, -1.55578px)",
              }}
            >
              {`
              ╔═══════╗ 
              ║ █   █ ║ 
              ║ █   █ ║ 
              ║ █████ ║ 
              ║ █   █ ║ 
              ║ █   █ ║ 
              ╚═══════╝`}
            </div>
            <div
              className="absolute font-mono whitespace-pre text-xs sm:text-sm transition-opacity duration-300 drop-animation"
              style={{
                left: "30.2998%",
                top: "106.815%",
                transformOrigin: "center center",
                color: "rgb(100,155,247)",
                opacity: 0.684691,
                textShadow: "rgba(81,145,251,0.498) 0px 0px 5.38666px",
                zIndex: -4,
                filter: "none",
                transform:
                  "scale(0.990988) rotate(-0.305935deg) translate(0.717632px, -0.0388439px)",
              }}
            >
              {`
              ▄▄▄▄▄▄▄▄▄ █ █████ █ █ █ █ █ █████ █ █ █ █ █ █████ █ ▀▀▀▀▀▀▀▀▀`}
            </div>
            <div
              className="absolute font-mono whitespace-pre text-xs sm:text-sm transition-opacity duration-300 drop-animation"
              style={{
                left: "7.18831%",
                top: "-12.0089%",
                transformOrigin: "center center",
                color: "rgb(182,199,251)",
                opacity: 0.766218,
                textShadow: "rgba(81,123,251,0.996) 0px 0px 12.5389px",
                zIndex: -5,
                filter: "none",
                transform:
                  "scale(0.919627) rotate(1.76223deg) translate(2.23716px, 1.03192px)",
              }}
            >
              {`
              ┏━━━━━━━┓ 
              ┃ █     ┃ 
              ┃ ██    ┃ 
              ┃ █████ ┃ 
              ┃ ██    ┃ 
              ┃ █     ┃ 
              ┗━━━━━━━┛`}
            </div>
            <div
              className="absolute font-mono whitespace-pre text-xs sm:text-sm transition-opacity duration-300 drop-animation"
              style={{
                left: "60.3728%",
                top: "-12.3312%",
                transformOrigin: "center center",
                color: "rgb(141,165,249)",
                opacity: 0.712349,
                textShadow: "rgba(81,118,251,0.682) 0px 0px 8.01143px",
                zIndex: -5,
                filter: "none",
                transform:
                  "scale(0.935024) rotate(0.676839deg) translate(-0.798979px, 1.61591px)",
              }}
            >
              ╔═══════╗ ║ █████ ║ ║ █ ║ ║ █████ ║ ║ █ ║ ║ █████ ║ ╚═══════╝
            </div>
            <div
              className="absolute font-mono whitespace-pre text-xs sm:text-sm transition-opacity duration-300 drop-animation"
              style={{
                left: "74.3137%",
                top: "89.7433%",
                transformOrigin: "center center",
                color: "rgb(145,173,249)",
                opacity: 0.68462,
                textShadow: "rgba(81,126,251,0.82) 0px 0px 10.0037px",
                zIndex: -6,
                filter: "none",
                transform:
                  "scale(0.889903) rotate(4.92411deg) translate(-1.98359px, 1.59153px)",
              }}
            >
              ╭───────╮ │ █████ │ │ █ │ │ ████ │ │ █ │ │ █████ │ ╰───────╯
            </div>
            <div
              className="absolute font-mono whitespace-pre text-xs sm:text-sm transition-opacity duration-300 drop-animation"
              style={{
                left: "43.7368%",
                top: "107.912%",
                transformOrigin: "center center",
                color: "rgb(178,212,251)",
                opacity: 0.730708,
                textShadow: "rgba(81,159,251,0.976) 0px 0px 12.2356px",
                zIndex: -6,
                filter: "hue-rotate(-7.49741deg) brightness(1.49823)",
                transform:
                  "scale(0.885274) rotate(0.283436deg) translate(-1.04501px, 2.23373px)",
              }}
            >
              ╭───────╮ │ ▄▄▄▄▄ │ │ █▓█▓█ │ │ █▄█▄█ │ │ ▀▀▀▀▀ │ │ ▀▄▄▄▀ │
              ╰───────╯
            </div>
            <div
              className="absolute font-mono whitespace-pre text-xs sm:text-sm transition-opacity duration-300 drop-animation"
              style={{
                left: "73.1325%",
                top: "8.82477%",
                transformOrigin: "center center",
                color: "rgb(157,195,250)",
                opacity: 0.741102,
                textShadow: "rgba(81,151,251,0.875) 0px 0px 10.7527px",
                zIndex: -5,
                filter: "none",
                transform:
                  "scale(0.937897) rotate(3.0643deg) translate(1.92309px, 0.382387px)",
              }}
            >
              ╭───────╮ │ ▒▒ ▒▒ │ │ ▓▀█▀▓ │ │ █ ▀ █ │ │ ▐▄▄▄▌ │ │ ▄▀▀▀▄ │
              ╰───────╯
            </div>
            <div
              className="absolute font-mono whitespace-pre text-xs sm:text-sm transition-opacity duration-300 drop-animation"
              style={{
                left: "1.94587%",
                top: "28.7788%",
                transformOrigin: "center center",
                color: "rgb(115,168,248)",
                opacity: 0.577648,
                textShadow: "rgba(81,149,251,0.573) 0px 0px 6.44185px",
                zIndex: -7,
                filter: "none",
                transform:
                  "scale(0.805527) rotate(0.349201deg) translate(-0.570613px, 0.635089px)",
              }}
            >
              ▓▓▓▓▓▓▓ ▓ ▓▓▓▓▓▓ ▓ ▓ ▓▓▓▓▓▓▓
            </div>
            <div
              className="absolute font-mono whitespace-pre text-xs sm:text-sm transition-opacity duration-300 drop-animation"
              style={{
                left: "20.9367%",
                top: "58.4166%",
                transformOrigin: "center center",
                color: "rgb(179,196,251)",
                opacity: 0.89289,
                textShadow: "rgba(81,121,251,0.92) 0px 0px 11.4489px",
                zIndex: -3,
                filter: "hue-rotate(9.50745deg) brightness(1.36681)",
                transform:
                  "scale(1.07865) rotate(-0.220606deg) translate(-0.406486px, 1.33333px)",
              }}
            >
              ╭───────╮ │ █████ │ │ █ │ │ █████ │ │ █ █ │ │ █████ │ ╰───────╯
            </div>
            <div
              className="absolute font-mono whitespace-pre text-xs sm:text-sm transition-opacity duration-300 drop-animation"
              style={{
                left: "79.8579%",
                top: "31.1666%",
                transformOrigin: "center center",
                color: "rgb(90,136,246)",
                opacity: 0.640783,
                textShadow: "rgba(81,130,251,0.424) 0px 0px 4.35927px",
                zIndex: -5,
                filter: "none",
                transform:
                  "scale(0.949644) rotate(0.55384deg) translate(-1.36314px, -1.29445px)",
              }}
            >
              ▄▄▄▄ ▄ ▄ ▄▄ ▄▄▄ █ █ █ █ █ █ █ █ █▄▄█ █ █ █▄▄█ █▄▄█ █ █ █ █ █ █ █ █
              █ █ ▀▄▄▀ █ █ █ █
            </div>
            <div
              className="absolute font-mono whitespace-pre text-xs sm:text-sm transition-opacity duration-300 drop-animation"
              style={{
                left: "66.5216%",
                top: "-9.99486%",
                transformOrigin: "center center",
                color: "rgb(91,131,246)",
                opacity: 0.606652,
                textShadow: "rgba(81,125,251,0.435) 0px 0px 4.48112px",
                zIndex: -6,
                filter: "hue-rotate(4.05374deg) brightness(1.49526)",
                transform:
                  "scale(0.897611) rotate(-2.43141deg) translate(-0.263669px, 1.46705px)",
              }}
            >
              ╭───────╮ │ ▓▓ ▓▓ │ │ █████ │ │ █████ │ │ ███ │ │ █ │ ╰───────╯
            </div>
            <div
              className="absolute font-mono whitespace-pre text-xs sm:text-sm transition-opacity duration-300 drop-animation"
              style={{
                left: "5.16277%",
                top: "100.387%",
                transformOrigin: "center center",
                color: "rgb(86,157,246)",
                opacity: 0.560875,
                textShadow: "rgba(81,156,251,0.404) 0px 0px 4.03362px",
                zIndex: -6,
                filter: "none",
                transform:
                  "scale(0.840429) rotate(-1.62896deg) translate(-0.989319px, -1.50816px)",
              }}
            >
              ╔═════════════╗ ║ Polybiuos ║ ║ █████ █ ██ ║ ║ █ █ █ ║ ║ ████ █ █
              ║ ║ █ █ █ ║ ║ █████ █ ██ ║ ╚═════════════╝
            </div>
            <div
              className="absolute font-mono whitespace-pre text-xs sm:text-sm transition-opacity duration-300 drop-animation"
              style={{
                left: "22.8696%",
                top: "51.1916%",
                transformOrigin: "center center",
                color: "rgb(86,140,246)",
                opacity: 0.623538,
                textShadow: "rgba(81,139,251,0.4) 0px 0px 4.00881px",
                zIndex: -5,
                filter: "none",
                transform:
                  "scale(0.935064) rotate(-4.19887deg) translate(0.282425px, 1.17422px)",
              }}
            >
              ┌─────────┐ │ ▓▓▓▓▓▓▓ │ │ ▓▓▓▓▓▓▓ │ │ ▓▓▓▓▓▓▓ │ │ ▓▓▓▓▓▓▓ │ │
              ▓▓▓▓▓▓▓ │ └─────────┘
            </div>
            <div
              className="absolute font-mono whitespace-pre text-xs sm:text-sm transition-opacity duration-300 drop-animation"
              style={{
                left: "93.1785%",
                top: "100.912%",
                transformOrigin: "center center",
                color: "rgb(177,204,251)",
                opacity: 0.616573,
                textShadow: "rgba(81,143,251,0.8) 0px 0px 9.70679px",
                zIndex: -8,
                filter: "none",
                transform:
                  "scale(0.747968) rotate(-3.82112deg) translate(-1.69641px, -0.575792px)",
              }}
            >
              ┌─────────────┐ │ EIGEN.CODE │ │ █ █ █ │ │ █████ █ █ │ │ █ █ █ █ │
              │ █ █ █ █ │ │ █████ █████│ └─────────────┘
            </div>
            <div
              className="absolute font-mono whitespace-pre text-xs sm:text-sm transition-opacity duration-300 drop-animation"
              style={{
                left: "86.0796%",
                top: "-10.0602%",
                transformOrigin: "center center",
                color: "rgb(118,157,248)",
                opacity: 0.609967,
                textShadow: "rgba(81,132,251,0.63) 0px 0px 7.30834px",
                zIndex: -6,
                filter: "none",
                transform:
                  "scale(0.844352) rotate(-0.205279deg) translate(0.998979px, 1.84563px)",
              }}
            >
              ┏━━━━━━━┓ ┃ █████ ┃ ┃ █ ┃ ┃ █████ ┃ ┃ █ ┃ ┃ █████ ┃ ┗━━━━━━━┛
            </div>
            <div
              className="absolute font-mono whitespace-pre text-xs sm:text-sm transition-opacity duration-300 drop-animation"
              style={{
                left: "63.2889%",
                top: "51.8808%",
                transform:
                  "scale(1.02267) rotate(-0.565511deg) translate(-0.586031px, 1.20311px)",
                transformOrigin: "center center",
                color: "rgb(147,169,249)",
                opacity: 0.790622,
                textShadow: "rgba(81,116,251,0.93) 0px 0px 11.5423px",
                zIndex: -3,
                filter: "none",
              }}
            >
              ▓▓▓▓▓▓▓ ▓ ▓▓▓▓▓▓ ▓ ▓ ▓▓▓▓▓▓▓
            </div>
            <div
              className="absolute font-mono whitespace-pre text-xs sm:text-sm transition-opacity duration-300 drop-animation"
              style={{
                left: "49.036%",
                top: "72.5846%",
                transform:
                  "scale(1.02626) rotate(-0.144266deg) translate(0.473935px, -0.216044px)",
                transformOrigin: "center center",
                color: "rgb(103,123,247)",
                opacity: 0.715352,
                textShadow: "rgba(81,104,251,0.52) 0px 0px 5.72732px",
                zIndex: -3,
                filter: "none",
              }}
            >
              ╔═══════╗ ║ ▄▄▄▄▄ ║ ║ ▌█ █▐ ║ ║ ▌═══▐ ║ ║ ▌█ █▐ ║ ║ ▀▀▀▀▀ ║
              ╚═══════╝
            </div>
            <div
              className="absolute font-mono whitespace-pre text-xs sm:text-sm transition-opacity duration-300 drop-animation"
              style={{
                left: "44.1725%",
                top: "74.8649%",
                transformOrigin: "center center",
                color: "rgb(165,187,250)",
                opacity: 0.670913,
                textShadow: "rgba(81,125,251,0.745) 0px 0px 8.92159px",
                zIndex: -7,
                filter: "none",
                transform:
                  "scale(0.835289) rotate(-3.75639deg) translate(0.833419px, -1.54832px)",
              }}
            >
              ╭───────╮ │ █████ │ │ █ │ │ ████ │ │ █ │ │ █████ │ ╰───────╯
            </div>
            <div
              className="absolute font-mono whitespace-pre text-xs sm:text-sm transition-opacity duration-300 drop-animation"
              style={{
                left: "71.8199%",
                top: "21.654%",
                transformOrigin: "center center",
                color: "rgb(89,156,246)",
                opacity: 0.639151,
                textShadow: "rgba(81,154,251,0.427) 0px 0px 4.36949px",
                zIndex: -5,
                filter: "none",
                transform:
                  "scale(0.950622) rotate(-2.36713deg) translate(1.33054px, -0.0706674px)",
              }}
            >
              ╭───────╮ │ █████ │ │ █ │ │ ████ │ │ █ │ │ █████ │ ╰───────╯
            </div>
            <div
              className="absolute font-mono whitespace-pre text-xs sm:text-sm transition-opacity duration-300 drop-animation"
              style={{
                left: "59.3986%",
                top: "43.1104%",
                transformOrigin: "center center",
                color: "rgb(142,151,249)",
                opacity: 0.733661,
                textShadow: "rgba(81,95,251,0.698) 0px 0px 8.27484px",
                zIndex: -4,
                filter: "none",
                transform:
                  "scale(0.960364) rotate(-1.85374deg) translate(1.86763px, -1.57909px)",
              }}
            >
              ┏━━━━━━━┓ ┃ █████ ┃ ┃ █ ┃ ┃ █████ ┃ ┃ █ ┃ ┃ █████ ┃ ┗━━━━━━━┛
            </div>
          </div>
        </div>
      </main>
    </>
  );
}