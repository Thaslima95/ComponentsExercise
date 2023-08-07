import React from "react";

export const FriendsList = (props) => {
  return (
    <>
      <dt>{props.id}</dt>
      <dd>{props.name}</dd>
    </>
  );
};
