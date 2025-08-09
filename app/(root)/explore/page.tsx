import ExplorePage from "@/components/explore-users";

export default function Explore() {
  return (
    <div className="space-y-5">
      <div className="border-b-2 p-2">
        <h1 className="text-xl font-medium">Explore</h1>
      </div>
      <div className="p-2 m-5 flex items-center">
        <p>
          Discover other users’ UI/UX designs and see how they applied usability
          heuristics, design principles, and best practices. Analyze their
          layout choices, interactions, and accessibility features to gain
          insights and improve your own work.
        </p>
      </div>
      <ExplorePage />
    </div>
  );
}
