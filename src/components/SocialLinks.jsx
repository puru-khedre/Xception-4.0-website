import React from "react";

const SocialLinks = ({ name, icon, url }) => {
  return (
    <a href={url} className="flex gap-1 flex-row items-center">
      {icon} {name}
    </a>
  );
};

export default SocialLinks;
