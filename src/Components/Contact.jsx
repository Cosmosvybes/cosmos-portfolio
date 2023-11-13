import "./Contact.css";
const Media = () => {
  return (
    <>
      <section id="contact">
        <h1> Contact me</h1>
        <div className="">
          <h4> Send message! </h4>
          <form>
            <input type="text" placeholder="email" />
            <textarea maxLength={200} placeholder="message" />
            <input
              type="submit"
              value="Send message"
              style={{ background: "green", color: "white" }}
            />
          </form>
        </div>
      </section>
    </>
  );
};

export default Media;
