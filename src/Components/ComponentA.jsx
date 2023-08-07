import React from "react";
import OutputData from "../output.json";
import { ComponentE } from "./ComponentE";
import { ListTags } from "./ListTags";
import { Details2 } from "./Details2";
import { FriendsList } from "./FriendsList";

export const ComponentA = () => {
  return (
    <>
      <Details2 id={OutputData.min_position} title={"min-position"} />
      <Details2 id={OutputData.has_more_items} title={"has_more_items"} />
      <Details2 id={OutputData.items_html} title={"items_html"} />
      <Details2 id={OutputData.new_latent_count} title={"new_latent_count"} />
      <p>
        {Object.keys(OutputData.data).map((key, idx) => {
          return <Details2 id={OutputData.data[key]} title={key} />;
        })}
      </p>
      <p>
        String Array
        <ul>
          {OutputData.StringArray.map((e, idx) => {
            {
              console.log(e);
            }
            return <ListTags tags={e} key={idx} />;
          })}
        </ul>
      </p>
      <Details2
        id={OutputData.multipleTypesArray}
        title={"multipleTypesArray"}
      />
      <dl>
        {OutputData.objArray.map((e, idx) => {
          return <FriendsList id={e.class} name={e.age} key={idx} />;
        })}
      </dl>
    </>
  );
};
