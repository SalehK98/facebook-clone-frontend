import React from "react";

function Widget() {
  return (
    <div className="widgets" style={{ position: "sticky" }}>
      <iframe
        src="https://www.facebook.com/20531316728/posts/10154009990506729/"
        // data-show-text="true"
        width="340"
        height="100%"
        style={{ border: "none", overflow: "hidden" }}
        scrolling="yes"
        frameBorder="0"
        allowTransparency="true"
        allow="encrypted-media"
      >
        <blockquote
          cite="https://www.facebook.com/20531316728/posts/10154009990506729/"
          class="fb-xfbml-parse-ignore"
        >
          Posted by{" "}
          <a href="https://www.facebook.com/facebookapp/">Facebook App</a>{" "}
          on&nbsp;
          <a href="https://www.facebook.com/20531316728/posts/10154009990506729/">
            Thursday, August 27, 2015
          </a>
        </blockquote>
      </iframe>
    </div>
  );
}

export default Widget;
