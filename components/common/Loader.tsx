import React from "react";
import Image from "next/image";
import loading from "../../assets/loading.svg";

function Loader() {
  return (
    <div className="globalLoader">
      <Image src={loading} alt="loading" />
    </div>
  );
}

export default Loader;
