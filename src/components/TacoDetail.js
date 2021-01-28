import React from "react";

export default function TacoDetail(props) {
  return <div>detailed page for taco with param {props.match.params.id}</div>;
}
