import React, { useState } from "react";
import { brandColor } from "./Colors";
// main program function
export const History = ({ theme, headText, paragraph }) => {
  // states and normal variables
  const [showMore, SetShowMore] = useState("none");
  const [btnState, setBtnState] = useState("Read More");
  return (
    <section
      className="w-full h-max py-3 relative"
      style={{ background: theme }}>
      <div
        id="history"
        className="w-full md:w-11/12 px-2 md:p-0 h-max  text-2xl m-auto">
        <h1 style={{ color: headText }}>History of university</h1>

        <p className="text-sm md:text-justify" style={{ color: paragraph }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit ipsum
          minus commodi laboriosam? Alias, iste. Quidem explicabo dolorum,
          laborum nulla incidunt, exercitationem laudantium tempore earum
          reprehenderit beatae harum quos reiciendis placeat fugit id velit
          inventore necessitatibus cumque repudiandae aliquam accusantium eaque
          quam ex deleniti. Atque necessitatibus quasi tempora! Consequuntur
          repudiandae blanditiis vero voluptate ad asperiores iste debitis et
          fugiat quam inventore, excepturi ipsam voluptatum mollitia itaque
          dolorem hic, fugit ex. Obcaecati id ratione maiores beatae quam minima
          ipsum dicta aliquid a facere. Exercitationem error pariatur
          dignissimos, suscipit ullam ratione magnam minima omnis eligendi quae
          possimus expedita maxime commodi qui tempora?
        </p>
        <br style={{ display: showMore }} />
        <p
          className="text-sm md:text-justify"
          style={{ color: paragraph, display: showMore }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit ipsum
          minus commodi laboriosam? Alias, iste. Quidem explicabo dolorum,
          laborum nulla incidunt, exercitationem laudantium tempore earum
          reprehenderit beatae harum quos reiciendis placeat fugit id velit
          inventore necessitatibus cumque repudiandae aliquam accusantium eaque
          quam ex deleniti. Atque necessitatibus quasi tempora! Consequuntur
          repudiandae blanditiis vero voluptate ad asperiores iste debitis et
          fugiat quam inventore, excepturi ipsam voluptatum mollitia itaque
          dolorem hic, fugit ex. Obcaecati id ratione maiores beatae quam minima
          ipsum dicta aliquid a facere. Exercitationem error pariatur
          dignissimos, suscipit ullam ratione magnam minima omnis eligendi quae
          possimus expedita maxime commodi qui tempora? inventore necessitatibus
          cumque repudiandae aliquam accusantium eaque quam ex deleniti. Atque
          necessitatibus quasi tempora! Consequuntur repudiandae blanditiis vero
          voluptate ad asperiores iste debitis et fugiat quam inventore,
          excepturi ipsam voluptatum mollitia itaque dolorem hic, fugit ex.
          Obcaecati id ratione maiores beatae quam minima ipsum dicta aliquid a
          facere. Exercitationem error pariatur dignissimos, suscipit ullam
          ratione magnam minima omnis eligendi quae possimus expedita maxime
          commodi qui tempora? inventore necessitatibus cumque repudiandae
          aliquam accusantium eaque quam ex deleniti. Atque necessitatibus quasi
          tempora! Consequuntur repudiandae blanditiis vero voluptate ad
          asperiores iste debitis et fugiat quam inventore, excepturi ipsam
          voluptatum mollitia itaque dolorem hic, fugit ex. Obcaecati id ratione
          maiores beatae quam minima ipsum dicta aliquid a facere.
          Exercitationem error pariatur dignissimos, suscipit ullam ratione
          magnam minima omnis eligendi quae possimus expedita maxime commodi qui
          tempora?
        </p>
        <br style={{ display: showMore }} />
        <p
          className="text-sm md:text-justify"
          style={{ color: paragraph, display: showMore }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit ipsum
          minus commodi laboriosam? Alias, iste. Quidem explicabo dolorum,
          laborum nulla incidunt, exercitationem laudantium tempore earum
          reprehenderit beatae harum quos reiciendis placeat fugit id velit
          inventore necessitatibus cumque repudiandae aliquam accusantium eaque
          quam ex deleniti. Atque necessitatibus quasi tempora! Consequuntur
          repudiandae blanditiis vero voluptate ad asperiores iste debitis et
          fugiat quam inventore, excepturi ipsam voluptatum mollitia itaque
          dolorem hic, fugit ex. Obcaecati id ratione maiores beatae quam minima
          ipsum dicta aliquid a facere. Exercitationem error pariatur
          dignissimos, suscipit ullam ratione magnam minima omnis eligendi quae
          possimus expedita maxime commodi qui tempora?
        </p>
        <br style={{ display: showMore }} />
        <p
          className="text-sm md:text-justify"
          style={{ color: paragraph, display: showMore }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit ipsum
          minus commodi laboriosam? Alias, iste. Quidem explicabo dolorum,
          laborum nulla incidunt, exercitationem laudantium tempore earum
          reprehenderit beatae harum quos reiciendis placeat fugit id velit
          inventore necessitatibus cumque repudiandae aliquam accusantium eaque
          quam ex deleniti. Atque necessitatibus quasi tempora! Consequuntur
          repudiandae blanditiis vero voluptate ad asperiores iste debitis et
          fugiat quam inventore, excepturi ipsam voluptatum mollitia itaque
          dolorem hic, fugit ex. Obcaecati id ratione maiores beatae quam minima
          ipsum dicta aliquid a facere. Exercitationem error pariatur
          dignissimos, suscipit ullam ratione magnam minima omnis eligendi quae
          possimus expedita maxime commodi qui tempora? inventore necessitatibus
          cumque repudiandae aliquam accusantium eaque quam ex deleniti. Atque
          necessitatibus quasi tempora! Consequuntur repudiandae blanditiis vero
          voluptate ad asperiores iste debitis et fugiat quam inventore,
          excepturi ipsam voluptatum mollitia itaque dolorem hic, fugit ex.
          Obcaecati id ratione maiores beatae quam minima ipsum dicta aliquid a
          facere. Exercitationem error pariatur dignissimos, suscipit ullam
          ratione magnam minima omnis eligendi quae possimus expedita maxime
          commodi qui tempora?
        </p>

        <button
          className="px-2 py-2 text-white text-sm mt-2"
          onClick={() => {
            if (btnState === "Read More") {
              setBtnState("See less");
              SetShowMore("block");
            } else {
              setBtnState("Read More");
              SetShowMore("none");
            }
          }}
          style={{ background: brandColor }}>
          {btnState}
        </button>
      </div>
    </section>
  );
};
