import React from "react";
import "./Body.css";

const Body = () => {
  return (
    <div className="main-body">
      <div className="body-container">
        <section className="body-inner-container">
          <p className="body-para">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            porttitor risus non lorem hendrerit, a laoreet ligula luctus.
            Aliquam aliquet eu massa eu mollis. Nunc ex ipsum, aliquet in lacus
            at, mattis semper libero. Duis non risus sed eros facilisis egestas
            in eget nisl. Nullam eros magna, posuere sed consectetur vitae,
            eleifend auctor nunc. Nunc tempus condimentum sem, nec aliquet ex
            bibendum tincidunt. Ut placerat, arcu id luctus vehicula, arcu orci
            egestas felis, ac eleifend ante quam rhoncus enim.{" "}
          </p>
        </section>
        <section className="body-inner-container">
          <p>
            <img
              className="body-image"
              alt="An image"
              src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*ddyz8qnOhFeFKY-_c3tleQ.jpeg"
            />
          </p>
        </section>
      </div>
    </div>
  );
};

export default Body;
