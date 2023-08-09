import Image from "@/node_modules/next/image";

const Education = (props: any) => {
  return (
    <div ref={props.educationRef} className="scroll-my-20">
      <div className="text-5xl text-center p-5 mt-20">Education</div>
      <div className="flex mt-28 justify-between">
        <div className="flex flex-col p-8">
          <div className="p-4 text-lg">
            College :{" "}
            <span className="font-semibold text-base">
              Thapar Institute Of Engineering and Technology
            </span>
          </div>
          <div className="p-4 text-lg">
            Degree Type :{" "}
            <span className="font-semibold text-base">
              Bachelors in Technology (B.Tech)
            </span>
          </div>
          <div className="p-4 text-lg">
            Specialisation :{" "}
            <span className="font-semibold text-base">
              Computer Science and Engineering
            </span>
          </div>
          <div className="p-4 text-lg">
            Cgpa: <span className="font-semibold text-base">7.8</span>
          </div>
        </div>
        <div className="p-4">
            <Image
                src="/thapar-logo.png"
                alt="Thapar Institute"
                width="500"
                height="500"
            />
        </div>
      </div>
    </div>
  );
};

export default Education;
