import { IconSend } from "@tabler/icons-react"
import { contactInfo } from "../constants"

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="section-padding text-center">
        <h2 className="md:text-7xl text-3xl">
          Get in <span className="font-semibold text-primary">Touch</span>
        </h2>
        <p className="md:text-2xl text-white-50 mb-8">
          Request a quote or learn more
        </p>
        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="bg-black-200 p-8 rounded-3xl border border-primary/30 animate-fade-in animation-delay-300">
            <form className="space-y-6">
              <div>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" placeholder="What's your name?" />
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="What's your email?" />
              </div>
              <div>
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" placeholder="What's your message?"></textarea>
              </div>
              <a href="mailto:contact@epelctrics.com">
                <button className="flex flex-row gap-4">
                  Send Message<IconSend className="w-5 h-5 mt-1" />
                </button>
              </a>
            </form>
          </div>

          <div className="space-y-6 animate-fade-in animation-delay-400">
            <div className="bg-black-200 rounded-3xl p-8">
              <h3 className="text-white-50 text-xl font-semibold">Contact Information</h3>
              <div>
                {contactInfo.map((item, i) => (
                  <a key={i} href={item.href} 
                  className="flex items-center gap-4 p-4 rounded-xl hover:bg-black-100 transition-colors group">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-white-50">
                        {item.label}
                      </div>
                      <div className="font-medium">{item.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
