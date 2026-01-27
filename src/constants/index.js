import { IconBrandFacebook, IconBrandInstagram, IconBrandTiktok, IconBrandX, IconMail, IconMapPin, IconPhone } from "@tabler/icons-react";

const socials = [
  { name: "Instagram", href: "#", icon: IconBrandInstagram },
  { name: "X", href: "#", icon: IconBrandX },
  { name: "TikTok", href: "#", icon: IconBrandTiktok },
  { name: "Facebook", href: "#", icon: IconBrandFacebook },
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
  testimonials,
  contactInfo,
};