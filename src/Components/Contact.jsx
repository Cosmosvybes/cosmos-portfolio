import "./Contact.css";
const Media = () => {
  const handleContactMe = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section id="contact">
        <h1> Contact me</h1>
        <div className="">
          <h4> Send message! </h4>
          <form onSubmit={handleContactMe}>
            <input type="text" placeholder="email" />
            <textarea maxLength={200} placeholder="message" />
            <input id="submit" type="submit" value="Send message" />
          </form>
        </div>
      </section>
    </>
  );
};

export default Media;
