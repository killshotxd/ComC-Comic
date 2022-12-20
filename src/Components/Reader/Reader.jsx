import React from "react";
import { useLocation } from "react-router-dom";
const Reader = () => {
  const { state } = useLocation();
  const { posts } = state || {};

  var book = ePub(`${posts.LINK}`, {});
  var rendition = book.renderTo("reader", {
    flow: "paginated",
    spread: "always",
    // minSpreadWidth: 1500,
    method: "default",
    width: "100%",
    height: 800,
  });
  var displayed = rendition.display();
  rendition.hooks.content.register(function (contents, view) {
    var css = "img { max-width: 100%; height: auto !important ;}";
    var head = contents.document.getElementsByTagName("head")[0];
    var s = contents.document.createElement("style");
    s.setAttribute("type", "text/css");
    if (s.styleSheet) {
      // IE
      s.styleSheet.cssText = css;
    } else {
      // the world
      s.appendChild(contents.document.createTextNode(css));
    }
    head.appendChild(s);
  });

  const handlePrev = () => {
    rendition.prev();
  };

  const handleNext = () => {
    rendition.next();
  };
  return (
    <>
      <section style={{ height: "110vh" }}>
        <div className="spreads" id="reader"></div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <button
            style={{ position: "absolute", top: "22rem", left: "0" }}
            onClick={handlePrev}
          >
            Prev
          </button>
          <button
            style={{ position: "absolute", top: "22rem", right: "0" }}
            onClick={handleNext}
          >
            Next
          </button>
        </div>
      </section>
    </>
  );
};

export default Reader;
