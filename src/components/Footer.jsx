import { IconBrandFacebook, IconBrandInstagram, IconBrandTiktok, IconBrandX } from "@tabler/icons-react";

const socials = [
  { name: "Instagram", href: "#", icon: IconBrandInstagram },
  { name: "X", href: "#", icon: IconBrandX },
  { name: "TikTok", href: "#", icon: IconBrandTiktok },
  { name: "Facebook", href: "#", icon: IconBrandFacebook },
]

const Footer = () => {
    
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer border-t border-black-200">
      <div className="container px-6 mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex gap-4 text-center md:text-left">
            <a href="#home">
              <img className="logo" src="/EP-Symbol.svg" alt="EP Electrics Logo" />
            </a>
            <p className="text-sm text-white-50 mt-3">
              © {currentYear} EP Electrics. All rights reserved.
            </p>
          </div>

          <div className="flex items-center gap-4">
            {socials.map((social) => (
              <a key={social.name} href={social.link} aria-label={social.name}
              className="p-2 text-white-50 rounded-full hover:bg-black-200 hover:text-primary transition-all cursor-pointer">
                <social.icon className="w-10 h-10" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer