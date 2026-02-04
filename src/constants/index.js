import { IconAirConditioning, IconBrandFacebook, IconBrandInstagram, IconBrandTiktok, IconBrandX, IconBulb, IconChargingPile, IconCircuitCapacitor, IconDeviceComputerCamera, IconMail, IconMapPin, IconPhone, IconSolarPanel2 } from "@tabler/icons-react";

const socials = [
  { name: "Instagram", href: "#", icon: IconBrandInstagram },
  { name: "X", href: "#", icon: IconBrandX },
  { name: "TikTok", href: "#", icon: IconBrandTiktok },
  { name: "Facebook", href: "#", icon: IconBrandFacebook },
]

const serviceList = [
  "EV Charger Installation",
  "Solar Panel Installation",
  "Air Conditioning Installation",
  "Electrical Inspections",
  "Property Lighting",
  "Security Cameras",
  "Rewiring",
  "Fuse Box Upgrades",
  "Loft Conversions"
]

const services = [
  {
    name: "EV Charger Installation",
    icon: IconChargingPile,
    image: "/images/EV-Charger-normal.png",
    description: "Installing EV chargers at your property."
  },
  {
    name: "Solar Panel Installation",
    icon: IconSolarPanel2,
    image: "/images/Solar-Panels.png",
    description: "Installing solar panels at your property."
  },
  {
    name: "Air Conditioning Installation",
    icon: IconAirConditioning,
    image: "/images/Wall-Mounted-AC-Unit.jpg",
    description: "Installing air conditioning units at your property."
  },
  {
    name: "Electrical Inspections",
    icon: IconCircuitCapacitor,
    image: "/images/Inspection.png",
    description: "Carry out safety inspections on your property."
  },
  {
    name: "Property Lighting",
    icon: IconBulb,
    image: "/images/Lighting.jpg",
    description: "Installing lighting at your property."
  },
  {
    name: "Security Cameras",
    icon: IconDeviceComputerCamera,
    image: "/images/CCTV-Install.png",
    description: "Installing security cameras at your property."
  },
]

const testimonials = [
  {
    name: "Ace Ukiyo",
    quote: "EP Electrics really helped out. I can definitely recommend them for any electrical work needed in your home.",
    rating: 5
  },
  {
    name: "Scott Truman",
    quote: "Extremely impressed with the work ethic of EP Electrics, you can count on them for any urgent electrical issues.",
    rating: 4
  },
  {
    name: "Mario Ballet",
    quote: "I called EP Electrics to fit an EV Charger at home, it was ready to go by the next day and everything was done perfectly.",
    rating: 5
  },
  {
    name: "Amy Rose",
    quote: "We had solar panels installed at our business by EP Electrics. They really impressed us.",
    rating: 5
  },
  {
    name: "Cloud Strife",
    quote: "We had a great experience with EP Electrics, they completed everything professionally.",
    rating: 5
  },
  {
    name: "Si-on Park",
    quote: "Working with EP Electrics was amazing, I highly recommend their services to anyone.",
    rating: 4
  },
]

const contactInfo = [
  {
    icon: IconMail,
    label: "Email",
    value: "contact@epelectrics.com",
    href: "mailto:contact@epelectrics.com",
  },
  {
    icon: IconPhone,
    label: "Phone",
    value: "+44 7890 123456",
    href: "tel:+447890123456",
  },
  {
    icon: IconMapPin,
    label: "Location",
    value: "Milton Keynes, UK",
    href: "https://maps.google.com/?q=Milton Keynes, UK",
  },
]

export {
  socials,
  serviceList,
  services,
  testimonials,
  contactInfo,
};