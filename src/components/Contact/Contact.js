import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import "./Contact.css";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";

const Contact = () => {
  const publicKey = "MaRhHthiCo36Q8s3i";
  const SERVICE_ID = "service_ed2a2f8";
  const TEMPLATE_ID = "template_7d1rsyg";

  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, publicKey).then(
      (result) => {
        console.log(result.text);
        Swal.fire({
          icon: "success",
          title: "Message Sent Successfully",
        });
      },
      (error) => {
        console.log(error.text);
        Swal.fire({
          icon: "error",
          title: "Ooops, something went wrong, try again!",
          text: error.text,
        });
      }
    );
    e.target.reset();
  };

  return (
    <div className="Contact">
      <NavBar />
      <form className="form" onSubmit={handleOnSubmit}>
        <h1>
          <span>Contact</span> Me
        </h1>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          name="from_name"
          placeholder="Enter your name"
          required
        />

        <label htmlFor="email">E-Mail</label>
        <input
          id="email"
          type="text"
          name="from_email"
          placeholder="Enter your email"
          required
        />

        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          rows="5"
          cols="30"
          placeholder="Enter your message"
          name="message"
          required
        />
        <button type="submit">Submit</button>
      </form>
      <Footer />
    </div>
  );
};

export default Contact;
