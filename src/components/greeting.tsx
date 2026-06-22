import type { FC } from "react";
import { useState } from "react";

export const Greeting: FC = () => {
  const [name, setName] = useState("");
  return (
    <div data-testid="component-greeting" className="py-12">
      <div className="max-w-md mx-auto">
        <div className="bg-white shadow-md rounded-lg p-6">
          <p className="text-xl mb-4">
            {name?.length > 0 ? (
              <>
                Hello, <strong className="font-semibold">{name}</strong>
              </>
            ) : (
              "Please enter your name"
            )}
          </p>
          <label
            className="block text-sm font-medium text-gray-700 mb-1"
            htmlFor="username"
          >
            Name
          </label>
          <input
            className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            name="username"
            id="username"
            type="text"
            defaultValue={name}
            onChange={({ target }) => setName(target.value)}
          />
        </div>
      </div>
    </div>
  );
};
