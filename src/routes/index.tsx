import { createFileRoute } from "@tanstack/react-router";
import { Greeting } from "components/greeting";

export const Route = createFileRoute("/")({
  component: IndexComponent,
});

function IndexComponent() {
  return (
    <>
      <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">
        React Typescript SPA Starter
      </h1>
      <Greeting />
    </>
  );
}
