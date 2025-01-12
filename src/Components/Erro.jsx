import React from "react";
import { useRouteError } from "react-router-dom";

export default function Error() {
  const erro1 = useRouteError();

  return (
    <>
      <h3 style={{ background: "blue", color: "red", display: "inline" }}>
        {erro1.error.message}
      </h3>
    </>
  );
}
