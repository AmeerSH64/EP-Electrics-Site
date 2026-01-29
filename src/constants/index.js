import { IconBrandFacebook, IconBrandInstagram, IconBrandTiktok, IconBrandX, IconMail, IconMapPin, IconPhone } from "@tabler/icons-react";

const socials = [
  { name: "Instagram", href: "#", icon: IconBrandInstagram },
  { name: "X", href: "#", icon: IconBrandX },
  { name: "TikTok", href: "#", icon: IconBrandTiktok },
  { name: "Facebook", href: "#", icon: IconBrandFacebook },
]

const services = [
  {
    name: "EV Charger Installation",
    description: "Installing EV chargers at your property."
  },
  {
    name: "Solar Panel Installation",
    description: "Installing solar panels at your property."
  },
  {
    name: "Air Conditioning Installation",
    description: "Installing air conditioning units at your property."
  },
  {
    name: "Electrical Inspections",
    description: "Carry out safety inspections on your property."
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
  services,
  testimonials,
  contactInfo,
};