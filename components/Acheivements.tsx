import { AcheivementsConstant } from "@/constants/Acheivements";
import { Card, CardContent, CardHeader } from "@/node_modules/@mui/material/index";
import '../app/globals.css';

const Acheivements = (props: any) => {
  return (
    <div ref={props.acheivementsRef} className="scroll-my-20 mt-44">
      <div className="text-5xl text-center p-5 mt-20">Acheivements</div>
      <div className="flex justify-around mt-20 p-10">
        {AcheivementsConstant.map((item, idx) => (
            <Card key={idx}>
                <CardHeader title={item.title}/>
                <CardContent>
                    {item.description}
                </CardContent>
            </Card>
        ))}
      </div>
    </div>
  );
};

export default Acheivements;
