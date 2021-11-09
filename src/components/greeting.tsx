import React, { FC, useState } from "react";

import "./_greeting.scss";

export const Greeting: FC = () => {
  const [name, setName] = useState("");
  return (
    <div data-testid="component-greeting" className="component-greeting">
      <div className="columns is-centered">
        <div className="column is-4">
          <div className="box">
            <div className="lead">
              {name?.length > 0 ? (
                <>
                  Hello, <strong>{name}</strong>
                </>
              ) : (
                "Please enter your name"
              )}
            </div>
            <label className="label" htmlFor="username">
              Name
            </label>
            <input
              className="input"
              name="username"
              id="username"
              type="text"
              defaultValue={name}
              onChange={({ target }) => setName(target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
