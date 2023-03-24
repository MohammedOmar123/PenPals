import React from "react";
import Loading from "../Loading";

const Overlay = () => {
  return (
    <div className="fixed inset-0 z-50 bg-gray-900 opacity-75">
      <Loading />
    </div>
  );
};

export default Overlay;
