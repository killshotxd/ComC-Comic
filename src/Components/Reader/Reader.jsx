import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import right from "../../assets/rightArr.png";
import left from "../../assets/leftArr.png";
const Reader = () => {
  const { state } = useLocation();
  const { posts } = state || {};

  var book = ePub(`${posts.LINK}`, {});
  var rendition = book.renderTo("reader", {
    flow: "paginated",
    spread: "always",
    // minSpreadWidth: 800,
    method: "default",
    width: "100%",
    // height: "900",
  });
  var displayed = rendition.display();

  useEffect(() => {
    rendition.hooks.content.register(function (contents, view) {
      var css = "img { max-width: 100%; height: 90% !important  ;}";
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
  }, []);

  const handlePrev = () => {
    rendition.prev();
  };

  const handleNext = () => {
    rendition.next();
  };
  return (
    <>
      <section style={{ minHeight: "100vh", height: "100% !important" }}>
        <div className="spreads" id="reader"></div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <button
            style={{
              position: "absolute",
              top: "22rem",
              left: "0",
              border: "none",
            }}
          >
            <img onClick={handlePrev} src={left} alt="leftArrow" />
          </button>
          <button
            style={{
              position: "absolute",
              top: "22rem",
              right: "0",
              border: "none",
            }}
          >
            <img onClick={handleNext} src={right} alt="rightArrow" />
          </button>
        </div>
      </section>
    </>
  );
};

export default Reader;
