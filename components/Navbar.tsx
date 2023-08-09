"use client";
const Navbar = (props: any) => {
    console.log(props)
  return (
    <div className="bg-blue-500 h-20 flex items-center space-x-4 sticky top-0 z-40">
      <div
        className="ml-auto px-4 cursor-pointer"
        onClick={() => {
          props.homeRef.current?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        Home
      </div>
      <div
        className="px-4 cursor-pointer"
        onClick={() => {
          props.experienceRef.current?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        Experience
      </div>
      <div
        className="px-4 cursor-pointer"
        onClick={() => {
          props.projectsRef.current?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        Projects
      </div>
      <div
        className="px-4 cursor-pointer"
        onClick={() => {
          props.technologiesRef.current?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        Technologies
      </div>
      <div
        className="px-4 cursor-pointer"
        onClick={() => {
          props.educationRef.current?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        Education
      </div>
      <div
        className="px-4 cursor-pointer"
        onClick={() => {
          props.acheivementsRef.current?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        Acheivements
      </div>
    </div>
  );
};

export default Navbar;
