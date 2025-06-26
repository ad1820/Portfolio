import "./Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="kira-section">
      <div className="kira-form-box">
        <h2 className="kira-title">Contact Me</h2>
        <p className="kira-quote">“I am Justice. But go ahead... leave your name.”</p>

        <form
          action="https://formspree.io/f/xpwronqd"
          method="POST"
          className="kira-form"
        >
          <label>
            Name:
            <input type="text" name="name" required />
          </label>
          <label>
            Email:
            <input type="email" name="email" required />
          </label>
          <label>
            Message:
            <textarea name="message" rows="4" required />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
