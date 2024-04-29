import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Node from "../assets/node.png";
import FireBase from "../assets/firebase.png";
import Tailwind from "../assets/tailwind.png";
import Mongo from "../assets/mongo.png";

const Skills = () => {
  return (
    <div name="skills" className="w-full sm:h-screen text-gray-300 pt-32 sm:pt-0">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-[#54AFE7]">Skills</p>
          <p className="py-4">These are the technologies I've worked with.</p>
        </div>

        <div className="w-full grid grid-cols-2 gap-4 sm:grid-cols-4 text-center py-8">
          <div className="skill-shadow hover:scale-110 duration-500 p-3">
            <img src={HTML} alt="HTML" className="w-20 mx-auto"/>
            <p className="font-light mt-2">HTML</p>
          </div>
          <div className="skill-shadow hover:scale-110 duration-500 p-3">
            <img src={CSS} alt="HTML" className="w-20 mx-auto"/>
            <p className="font-light mt-2">CSS</p>
          </div>
          <div className="skill-shadow hover:scale-110 duration-500 p-3">
            <img src={JavaScript} alt="HTML" className="w-20 mx-auto"/>
            <p className="font-light mt-2">JAVASCRIPT</p>
          </div>
          <div className="skill-shadow hover:scale-110 duration-500 p-3">
            <img src={ReactImg} alt="HTML" className="w-20 mx-auto"/>
            <p className="font-light mt-2">REACT</p>
          </div>
          <div className="skill-shadow hover:scale-110 duration-500 p-3">
            <img src={Node} alt="HTML" className="w-20 mx-auto"/>
            <p className="font-light mt-2">NODE JS</p>
          </div>
          <div className="skill-shadow hover:scale-110 duration-500 p-3">
            <img src={Mongo} alt="HTML" className="w-20 mx-auto"/>
            <p className="font-light mt-2">MONGO DB</p>
          </div>
          <div className="skill-shadow hover:scale-110 duration-500 p-3">
            <img src={Tailwind} alt="HTML" className="w-20 mx-auto"/>
            <p className="font-light mt-2">TAILWIND CSS</p>
          </div>
          <div className="skill-shadow hover:scale-110 duration-500 p-3">
            <img src={FireBase} alt="HTML" className="w-20 mx-auto"/>
            <p className="font-light mt-2">FIREBASE</p>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Skills;
