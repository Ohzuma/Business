import React from "react";
import Started from "./Started";
import Team from "./Team";
import "./Team.css";

const Index = () => {
  return (
    <div id="team" data-aos="fade-up">
      <Team />
      <Started />
    </div>
  );
};

export default Index;
