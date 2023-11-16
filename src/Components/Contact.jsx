import { useEffect, useState } from "react";
import "./Contact.css";
const Media = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");

  const handleContactMe = (e) => {
    e.preventDefault();
    if (!email || !message) {
      return;
    }
    const objectData = { email, message };
    fetch("/api/contact/me/message", {
      method: "POST",
      headers: { "Content-Type": "Application/json" },
      body: JSON.stringify({ ...objectData }),
    })
      .then((result) => {
        if (!result.ok) {
          throw new Error("operation failed");
        }
        return result.json();
      })
      .then((response) => {
        setResponse(response.response);
      })
      .catch((err) => {
        console.log(err);
      });
    setEmail("");
    setMessage("");
  };

  useEffect(() => {
    setTimeout(() => {
      setResponse("");
    }, 8000);
  }, [response]);

  return (
    <>
      <section id="contact">
        <h1> Contact me</h1>
        <div className="">
          <h4> Send message! </h4>
          <form onSubmit={handleContactMe}>
            <input
              type="email"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
              maxLength={200}
              placeholder="message"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
            />
            <input id="submit" type="submit" value="Send message" />
            <p style={{ color: "lightgreen", textAlign: "center" }}>
              {response}
            </p>
          </form>
        </div>
      </section>
    </>
  );
};

export default Media;
