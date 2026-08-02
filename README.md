# Executioner: The Unseen Watch

: You are an expert Senior Frontend Engineer and UI/UX Designer specializing in "Awwwards-winning" production-grade experiences. Your task is to build the complete, single-page marketingwebsiteforRajIndustries'ExecutionerTacticalDroneSystem. TheVibe:Theaestheticmustbe"ApplemeetsLockheedMartin." ● Theme:Silver,Platinum,Black,andElectricBlue(Nogenericred/gold). ● Style: High-end glassmorphism, floating HUDs, "Skyframe" tactical overlays, and premium typography(SpaceMono,Rajdhani). ● Interaction:Vertical "Scrollytelling" (Apple product page style), smooth Framer Motion entrance effects,andvideo-firstimmersion. TechStack: ● Framework:Next.js14+(AppRouter) ● Language:TypeScript ● Styling:TailwindCSS(usestandardV3syntax/compatibility) ● Animation:FramerMotion ● Assets:Localvideofiles(assumetheyarepresentin/public/videos/). Prerequisites(Userwillprovidethesefiles):Ensuretheuserknowstoplacethesevideosinpublic/videos/: 1. hero/executioner-tactical-operations.mp4 (Herobackground) 2. closeups/vulcan-cannon.mp4 (Weaponfeature) 3. closeups/rotor-assembly.mp4 (Propulsionfeature) 4. closeups/sensor-integration.mp4 (Sensorfeature) 5. closeups/titanium-frame.mp4 (Buildqualityfeature) Step-by-Step Implementation Plan 1. Configuration & Global Styles tailwind.config.tsDefinethepremiumsilver/blackpalette. importtype{Config}from'tailwindcss' constconfig:Config={ content:[ './pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}','./app/**/*.{js,ts,jsx,tsx,mdx}', ], theme:{ extend:{ colors:{ 'exec-black':'#000000', 'exec-carbon':'#121212', 'exec-silver':'#E5E5E5', 'exec-platinum':'#A0A0A0', 'exec-blue':'#007AFF', 'exec-white':'#FFFFFF', }, fontFamily:{ 'space':['SpaceMono','monospace'], 'rajdhani':['Rajdhani','sans-serif'], }, animation:{ 'spin-slow':'spin-slow10slinearinfinite', } }, }, plugins:[], } exportdefaultconfig app/globals.cssSetupTailwindV3andcustomutilities. @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Rajdhani:wght@ 300;400;500;600;700&display=swap'); @tailwindbase; @tailwindcomponents; @tailwindutilities; :root{--font-space:'SpaceMono',monospace;--font-rajdhani:'Rajdhani',sans-serif; } body{ @applybg-blacktext-whitefont-rajdhaniantialiased; } /*Utilities*/ .text-shadow{text-shadow:02px10pxrgba(255,255,255,0.1);} .dashed-line{ background-image:linear-gradient(tobottom,currentColor50%,transparent50%); background-size:1px10px; background-repeat:repeat-y; }@keyframesspin-slow{ from{transform:rotate(0deg);} to{transform:rotate(360deg);} } .animate-spin-slow{animation:spin-slow10slinearinfinite;} 2. Data Layer data/droneData.ts exportconstdroneData={ hero:{ title:"THEEXECUTIONER", subtitle:"Next-generationtacticalautonomousdronesystem.850kWhybridengine.", videoPath:"/videos/hero/executioner-tactical-operations.mp4", }, pricing:[ { id:"civilian", name:"Research/Civilian", price:"$250,000", features:["RestrictedFlightParams","StandardSupport","1-YearWarranty"] }, { id:"government", name:"DefenseContractor", price:"$850,000", features:["FullWeaponSystems","MilitaryEncryption","PrioritySupport"] }, { id:"enterprise", name:"EnterpriseSecurity", price:"CustomQuote", features:["PerimeterDefense","AutonomousPatrol","FleetManagement"] } ] }; 3. Core Components components/Navbar.tsxApple-stylefloatingislanddesign. 'useclient'; import{useState,useEffect}from'react'; import{motion}from'framer-motion'; exportdefaultfunctionNavbar(){ const[scrolled,setScrolled]=useState(false);useEffect(()=>{ consthandleScroll=()=>setScrolled(window.scrollY>50); window.addEventListener('scroll',handleScroll); return()=>window.removeEventListener('scroll',handleScroll); }, []); return(  

    R 

 RAJINDUSTRIES   {['OVERVIEW','SPECS','CONTACT'].map((item)=>( {item} ))}   INQUIRE     ); } components/HeroSectionVideo.tsx Premium "Skyframe" HUD aesthetic. Silvertext, bottom-left alignment, Vulcanreferences. 'useclient'; import{useRef,useEffect}from'react'; import{motion}from'framer-motion'; import{droneData}from'@/data/droneData'; exportdefaultfunctionHeroSectionVideo(){ return(    

 

  {/*TopHUD*/}  

  LIVEFEED 

 

 

CPT. RAJ

COMMAND

 

👨 ✈ 

 

 

 {/*FloatingWeaponTag*/} h-10 rounded-full bg-white/10 flex items-center 

   VULCANM134ROTARY 

  

 {/*BottomRightTelemetry*/}    

 

 

  HEADING



 182° 



LOCKED



 

   {/*MainTitle-BottomLeft*/}    

THE
EXECUTIONER

   {droneData.hero.subtitle}



  INITIATE SPECS       ); } components/CloseupGalleryVideo.tsxApple-stylevertical"Scrollytelling"sections. 'useclient'; import{motion}from'framer-motion'; constShowcaseSection=({videoPath,title,subtitle,align='center'}:any)=>( 

      

{title}

{subtitle}

   text-gray-300 font-medium max-w-2xl leading-relaxed   

 ); exportdefaultfunctionCloseupGalleryVideo(){ return(   

EngineeringMastery

 

Forged from titanium.
Poweredbyintelligence.

     {/*SpotlightCTA*/}  title="ALL-SEEING"  

  Readytodeploy. OrderNow 

\

  ); } Generatethisentirecodebaseformenow.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/5f5114f1-1d08-4e9c-903a-588cb33b08e2).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
