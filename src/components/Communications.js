import React from "react";

const Communications = () => {
  return (
    <div className="section communication-wrapper">
      <div className="location-wrapper">
        <iframe
          title="residence"
          frameborder="0"
          src="https://www.google.com/maps/embed/v1/place?q=n7&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
        ></iframe>
      </div>

      <div className="form-wrapper">
        <form
          action=""
          method="POST"
          name="contact-form"
          autocomplete="off"
          data-netlify="true"
        >
          <input type="text" name="name" placeholder="name..." />
          <input type="email" name="email" placeholder="email..." />
          <textarea name="message" placeholder="enter message..."></textarea>
          <button type="submit">send</button>
        </form>
      </div>
    </div>
  );
};

export default Communications;
