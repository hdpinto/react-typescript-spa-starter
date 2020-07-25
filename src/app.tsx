import React, { FC } from "react";
import { Greeting } from "components/greeting";

export const App: FC = () => (
  <div className="my-app">
    <div className="columns is-centered">
      <div className="column">
        <h1 className="title is-1 has-text-centered">
          React Typescript SPA Starter
        </h1>
      </div>
    </div>
    <Greeting />
  </div>
);
