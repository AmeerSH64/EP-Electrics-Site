const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="section-padding text-center">
        <h2 className="md:text-7xl text-3xl">Get in Touch</h2>
        <p className="md:text-2xl text-white-50 mb-8">
          Request a quote or learn more
        </p>
        <div className="flex-center mb-8 rounded-2xl bg-black-50 p-6 md:p-12">
          <form>
            <div>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" />
            </div>
            <div>
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message"></textarea>
            </div>
            <a href="mailto:contact@epelctrics.com">
              <button>Contact Us</button>
            </a>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
