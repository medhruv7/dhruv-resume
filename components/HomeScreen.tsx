import "../app/globals.css";
import { AiFillPhone } from "react-icons/ai";
import { FiMail } from "react-icons/fi";
import Image from "@/node_modules/next/image";

const HomeScreen = (props: any) => {
  return (
    <div className="h-screen scroll-my-20" ref={props.homeRef}>
      <div className="bg-gray-300 h-2/3">
        <div className="flex justify-between items-center">
          <div className="flex flex-col p-2 pt-20 ml-20">
            <div className="p-2 text-5xl font-normal">Dhruv Aggarwal</div>
            <div className="p-2 mt-10">Full Stack Developer</div>
            <div className="p-2">Competitive Programmer</div>
            <div className="p-2 flex flex-row items-center space-x-2">
              <div>
                <FiMail />{" "}
              </div>
              <div> medhruv7@gmail.com</div>
            </div>
            <div className="p-2 flex flex-row items-center space-x-2">
              <div>
                <AiFillPhone />{" "}
              </div>
              <div> +91-8146882244 </div>
            </div>
          </div>
          <div className="mr-52 mt-10 rounded-full overflow-hidden border-black w-200 h-200">
            <Image
                src="/resume_pic.jpeg"
                alt="Resume Pic"
                width="300"
                height="300"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
