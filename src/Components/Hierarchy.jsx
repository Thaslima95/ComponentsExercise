import React from "react";
import Jsondata from "../generated.json";
import { Details } from "./Details";
import { Details2 } from "./Details2";

export const Hierarchy = () => {
  console.log(Jsondata);
  let obj;
  return (
    <div>
      Hierarchy
      {Jsondata.map((e, index) => {
        return (
          <div className="Hierarchy">
            <dd>
              <dt>
                <b>Name:{e.name}</b>
                <dd>
                  <Details data={e} key={e} />
                  {/* {console.log(typeof e)} */}
                  {/* {(obj = JSON.stringify(e))}
                  {Object.keys(obj).map((key, idx) => {
                    // return <Details2 id={obj[key]} title={key} />;
                    console.log(obj.name);
                  })} */}
                  {/* {Object.keys(JSON.stringify(e))} */}
                </dd>
              </dt>
            </dd>
          </div>
        );
      })}
    </div>
  );
};
