function Contact() {
  return (
    <section id="contact">
      <h2>Contact Me</h2>

      <form>
        <input
          type="text"
          placeholder="Enter your name"
          required
        />

        <input
          type="email"
          placeholder="Enter your email"
          required
        />

        <textarea
          placeholder="Enter your message"
          required
        ></textarea>

        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;