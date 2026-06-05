import "./App.css";
import "./index.css";
import SlidingIcon from "./components/SlidingIcon.tsx";
import DocumentIcon from "./assets/icons/Doc.tsx";
import SaveIcon from "./assets/icons/Save.tsx";
import RocketIcon from "./assets/icons/Rocket.tsx";

// FIX FOR THE BROKEN GIF: Import it directly if it's inside the src folder!
// (If it's in the public folder instead, you would just use src="/wave.gif")
import waveGif from "./assets/wave.gif";

function App() {
  // Define our two distinct styles
  const darkButtonStyle = "bg-slate-900 shadow-xl border border-slate-800";
  const textStyle = "font-Montserrat font-bold text-lg text-[#d9ec43]";

  // THE MISSING GLASS: Added the glassmorphism classes back as a variable
  const glassButtonStyle =
    "bg-black/5 backdrop-blur-xl border border-black/10 shadow-lg text-slate-800";

  return (
    <main className="w-screen min-h-screen bg-[#0a0a0a] p-4 md:p-6 lg:p-8 box-border flex flex-col">
      <div className="relative flex-1 w-full bg-[#d9ec43] rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden flex flex-col items-center justify-center shadow-2xl">
        <section className="relative z-10 flex flex-col items-center justify-center pointer-events-none">
          <h1 className="text-center font-Montserrat font-bold text-slate-900 uppercase tracking-widest text-sm md:text-base mb-2">
            Hi! I'm
          </h1>
          <h1 className="text-center font-Montserrat text-6xl md:text-8xl font-black text-slate-900 tracking-tight">
            Srivathsan
          </h1>
        </section>

        {/* =========================================
            TEXT BUTTONS (Dark Mode)
        ========================================= */}
        <SlidingIcon
          corner="top-left"
          zone="left"
          onClick={() => console.log("Projects clicked!")}
          className={darkButtonStyle}
        >
          <span className={textStyle}>Projects</span>
        </SlidingIcon>

        <SlidingIcon
          corner="bottom-left"
          zone="left"
          onClick={() => console.log("About clicked!")}
          className={darkButtonStyle}
        >
          <span className={textStyle}>About Me</span>
        </SlidingIcon>

        <SlidingIcon
          corner="top-right"
          zone="right"
          onClick={() => console.log("Contact clicked!")}
          className={darkButtonStyle}
        >
          <div className="flex items-center gap-3">
            <span className={textStyle}>Contact</span>
          </div>
        </SlidingIcon>

        <SlidingIcon
          corner="bottom-right"
          zone="right"
          className={darkButtonStyle}
          onClick={() => {
            window.open("/resume.pdf", "_blank");
          }}
        >
          <span className={textStyle}>Resume</span>
        </SlidingIcon>

        {/* =========================================
            ICON BUTTONS (Glass Mode Restored!)
        ========================================= */}
        <SlidingIcon
          corner="top-left"
          zone="left"
          onClick={() => console.log("Wave clicked!")}
          className={glassButtonStyle}
        >
          {/* Using the imported gif variable here */}
          <img src={waveGif} alt="waving hand" className="w-8 h-8" />
        </SlidingIcon>

        <SlidingIcon
          corner="bottom-left"
          zone="left"
          onClick={() => console.log("Doc clicked!")}
          className={glassButtonStyle}
        >
          <DocumentIcon />
        </SlidingIcon>

        <SlidingIcon
          corner="top-right"
          zone="right"
          onClick={() => console.log("Save clicked!")}
          className={glassButtonStyle}
        >
          <SaveIcon />
        </SlidingIcon>

        <SlidingIcon
          corner="bottom-right"
          zone="right"
          className={glassButtonStyle}
        >
          <RocketIcon />
        </SlidingIcon>
      </div>
    </main>
  );
}

export default App;
