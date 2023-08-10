import "../app/globals.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardHeader } from "@/node_modules/@mui/material/index";
import { ProjectsConstant } from "@/constants/ProjectsConstant";
import { v4 as uuidv4 } from 'uuid'

const Projects = (props: any) => {
  return (
    <div ref={props.projectsRef} className="scroll-my-20">
      <div className="text-5xl p-10 text-center mt-20">Projects</div>
      <div className="p-4 flex flex-wrap justify-between drop-shadow-xl mt-20">
        {ProjectsConstant.map((item) => {
          return (
            <div className="p-4" key={uuidv4()}>
              <Card sx={{ width: 400, height: 400, overflow: "auto" }}>
                <CardHeader title={item.title} />
                {item.description.map((desc) => (
                  <CardContent key={uuidv4()}>{desc}</CardContent>
                ))}
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
