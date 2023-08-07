import React from "react";
import { ListTags } from "./ListTags";
import { FriendsList } from "./FriendsList";
import { Details2 } from "./Details2";

export const Details = (props) => {
  console.log(props);
  return (
    <>
      <div className="container">
        <Details2 id={props.data._id} title={"id"} />
        <Details2 id={props.data.index} title={"index"} />
        <Details2 id={props.data.guid} title={"guid"} />
        <Details2 id={props.data.balance} title={"balance"} />
        <img src={props.data.picture} alt="" />
        <Details2 id={props.data.age} title={"age"} />
        <Details2 id={props.data.eyecolor} title={"eyecolor"} />

        <Details2 id={props.data.age} title={"age"} />
        <Details2 id={props.data.gender} title={"gender"} />
        <Details2 id={props.data.company} title={"company"} />
        <Details2 id={props.data.email} title={"email"} />
        <Details2 id={props.data.phone} title={"phone"} />
        <Details2 id={props.data.address} title={"address"} />
        <Details2 id={props.data.about} title={"about"} />
        <Details2 id={props.data.registered} title={"registered"} />
        <Details2 id={props.data.latitude} title={"latitude"} />
        <Details2 id={props.data.longitude} title={"longitude"} />

        <p>
          Tags:
          <ul>
            {props.data.tags.map((e, idx) => {
              {
                console.log(e);
              }
              return <ListTags tags={e} key={idx} />;
            })}
          </ul>
        </p>
        <p>
          Friends
          <dl>
            {props.data.friends.map((e, idx) => {
              return <FriendsList id={e.id} name={e.name} key={idx} />;
            })}
          </dl>
        </p>
        <Details2 id={props.data.greeting} title={"greeting"} />
        <Details2 id={props.data.favoriteFruit} title={"favoritefruit"} />
      </div>
    </>
  );
};
