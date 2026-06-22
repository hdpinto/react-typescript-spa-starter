import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  component: AboutComponent,
});

function AboutComponent() {
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">
        About
      </h1>
      <p className="text-lg text-gray-700">
        This is a starter project built with React, TypeScript, Vite, TanStack
        Router, and Tailwind CSS.
      </p>
    </div>
  );
}
