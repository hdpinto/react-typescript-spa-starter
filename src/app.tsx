import React, { FC } from "react";
import { Greeting } from "components/greeting";

export const App: FC = () => (
  <div className="min-h-screen bg-gray-50 py-8">
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">
        React Typescript SPA Starter
      </h1>
      <Greeting />
    </div>
  </div>
);
