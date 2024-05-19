import React from "react";
import LinkContainer from "./LinkContainer";
import { data } from "../../config/SiteLink";

const FooterContainer = () => {
  return (
    <footer className="flex sm:gap-4 xs:gap-3 gap-2 justify-center">
      {data.map((item, index) => (
        <LinkContainer
          key={index}
          src={item.src}
          name={item.name}
          href={item.link}
        />
      ))}
    </footer>
  );
};

export default FooterContainer;