import React from "react";
import Jsondata from "../generated.json";
import { Details } from "./Details";

export const Hierarchy = () => {
  console.log(Jsondata);
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
                </dd>
              </dt>
            </dd>
          </div>
        );
      })}
    </div>
  );
};
