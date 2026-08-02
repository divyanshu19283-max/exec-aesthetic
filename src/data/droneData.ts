import heroPoster from "@/assets/hero-flight.jpg";
import vulcanPoster from "@/assets/closeup-vulcan.jpg";
import rotorPoster from "@/assets/closeup-rotor.jpg";
import sensorPoster from "@/assets/closeup-sensor.jpg";
import framePoster from "@/assets/closeup-frame.jpg";
export const droneData = {
  hero: {
    title: "EXECUTIONER",
    subtitle:
      "Advanced autonomous aerial platform engineered for precision operations, intelligent surveillance and next-generation defence missions.",

    videoPath: "/videos/hero/executioner-tactical-operations.mp4",
    posterPath: heroPoster,
    posterAlt: "Executioner Tactical Drone",
  },

  showcase: [
    {
      id: "vulcan",
      eyebrow: "WEAPON PLATFORM",
      title: "VULCAN M134",
      subtitle: "Computer Stabilized Rotary Cannon",

      body:
        "The integrated M134 Vulcan system delivers sustained suppressive fire at up to 6,000 rounds per minute while maintaining sub-MRAD targeting precision through AI-assisted stabilization.",

      videoPath: "/videos/hero/closeups/vulcan-cannon.mp4",

      posterPath: vulcanPoster,
      posterAlt: "Vulcan Cannon",

      align: "left" as const,

      stats: [
        { label: "FIRE RATE", value: "6000 RPM" },
        { label: "TARGET ERROR", value: "0.4 MRAD" },
      ],
    },

    {
      id: "rotor",
      eyebrow: "PROPULSION",

      title: "HYBRID ROTOR SYSTEM",

      subtitle: "850kW Adaptive Drive Train",

      body:
        "Carbon-fiber counter-rotating blades powered by a hybrid propulsion architecture deliver maximum lift efficiency, reduced acoustic signature and unmatched endurance.",

      videoPath: "/videos/hero/closeups/titanium-frame.mp4",

      posterPath: rotorPoster,

      posterAlt: "Rotor",

      align: "right" as const,

      stats: [
        { label: "POWER", value: "850 kW" },
        { label: "ENDURANCE", value: "46 MIN" },
      ],
    },

    {
      id: "sensor",

      eyebrow: "AI PERCEPTION",

      title: "MULTI-SPECTRAL VISION",

      subtitle: "Autonomous Threat Detection",

      body:
        "Electro-optical, infrared, radar and AI-powered target recognition combine into a single perception engine capable of identifying, tracking and classifying threats in real time.",

      videoPath: "/videos/hero/closeups/sensor-integration.mp4",

      posterPath: sensorPoster,

      posterAlt: "Sensor",

      align: "left" as const,

      stats: [
        { label: "RANGE", value: "12.4 KM" },
        { label: "TRACKING", value: "128 TARGETS" },
      ],
    },

    {
      id: "frame",

      eyebrow: "AIRFRAME",

      title: "TITANIUM STRUCTURE",

      subtitle: "Military Grade Monocoque",

      body:
        "Machined from aerospace-grade titanium alloy and reinforced carbon composite, the airframe withstands extreme maneuvering while minimizing structural weight.",

      videoPath: "/videos/hero/closeups/titanium-frame.mp4",

      posterPath: framePoster,

      posterAlt: "Titanium Frame",

      align: "right" as const,

      stats: [
        { label: "LOAD LIMIT", value: "9 G" },
        { label: "WEIGHT", value: "212 KG" },
      ],
    },
  ],

 

 specs: [
  { label: "POWER OUTPUT", value: "850 kW" },
  { label: "MAX SPEED", value: "294 km/h" },
  { label: "MISSION RANGE", value: "6100 m" },
  { label: "FLIGHT ENDURANCE", value: "4.2 Hours" },
  { label: "PAYLOAD CAPACITY", value: "184 kg" },
  { label: "SECURE COMMUNICATION", value: "Encrypted Network Systems" },
],
  pricing: [
    {
      id: "civilian",
      name: "Research / Civilian",
      price: "$250,000",
      features: [
        "Restricted flight params",
        "Standard support",
        "1-year warranty",
      ],
    },
    {
      id: "government",
      name: "Defense Contractor",
      price: "custom proposal",
      features: [
        "Full weapon systems",
        "Military encryption",
        "Priority support",
      ],
      featured: true,
    },
    {
      id: "enterprise",
      name: "Enterprise Security",
      price: "Custom Quote",
      features: [
        "Perimeter defense",
        "Autonomous patrol",
        "Fleet management",
      ],
    },
  ],
};