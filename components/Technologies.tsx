import Image from "@/node_modules/next/image";

const Technologies = (props: any) => {
  return (
    <div ref={props.technologiesRef} className="scroll-my-20">
      <div className="text-5xl text-center p-10 mt-20">Tech Stack</div>
      <div className="grid grid-cols-3 items-center gap-20 mt-20">
        <div className="p-4 flex flex-col w-full h-full">
          <div className="p-10 text-center">
            <Image
            src="/html-css-js-logo.jpeg"
            alt="HTM5 CSS3"
            width="300"
            height="300"
          />
          </div>
          <div className="font-medium mt-auto">
            Worked With HTML, CSS, JS ever since i started coding with 5+ years of experience
          </div>
        </div>
        <div className="p-4 flex flex-col w-full h-full">
          <div className="p-2 text-center">
            <Image
            src="/react-logo.png"
            alt="React Js"
            width="300"
            height="300"
          />
          </div>
          <div className="font-medium mt-auto">
            Worked With React framework for 5+ years making personal projects as well as working professionally for company in this framework. 
          </div>
        </div>
        <div className="p-4 flex flex-col w-full h-full">
        <div className="text-center">
          <Image src="/node-logo.webp" alt="Node Js" width="300" height="300" />
        </div>
        <div className="font-medium mt-auto">
          Worked on Nodejs (4+ Years) and it&#39;s related frameworks to make backend server code. Made multiple routes and handler functions for multitude of tasks.
        </div>
        </div>
        <div className="p-4 flex flex-col space-y-14">
        <div className="text-center">
          <Image
            src="/next-js-logo.png"
            alt="Next Js"
            width="300"
            height="300"
          />
          </div>
          <div className="font-medium mt-auto">
          Starting using this technology relatively recently from few months ago. Even this site is built in nextJs. Have a good grasp on it now.
        </div>
        </div>
        <div className="p-4 flex flex-col space-y-14">
        <div className="text-center">
          <Image
            src="/Expressjs-logo.png"
            alt="Express Js"
            width="300"
            height="300"
          />
          </div>
          <div className="font-medium mt-auto">
          Been using express Js ever since started with nodeJs (4+ years). Primary write the backend code using expressJs instead of vanilla node due to it&#39;s simple and powerful syntax and middleware functions.
        </div>
        </div>
      </div>
      <div className="p-4 text-medium mt-16">
        Apart from the above tech stack i have worked with both Sql and No Sql technologies, and many more things involved in building a full stack application from scratch
      </div>
    </div>
  );
};

export default Technologies;
