import React from "react";
import WorkImg from "./assets/p1.png";
import WorkImg2 from "./assets/p3.png";
import Griditems from "./Griditems";

const Work = () => {
  return (
    <div name="work" className="bg-[#0a192f] w-full md:h-screen text-gray-300">
      <div className="flex flex-col justify-center mx-auto p-4 w-full max-w-[1000px] h-full">
        <div className="pb-8">
          <p className="inline border-pink-400 border-b-4 font-bold text-4xl text-gray-300">
            work{" "}
          </p>
          <p className="py-6"> // Check out some of my recent work </p>
        </div>
        <div className="gap-4 grid sm:grid-cols-2 md:grid-cols-3">
          {/*Grid item1*/}
          <Griditems pic={WorkImg} />

          {/* grid item2 */}
          <Griditems pic={WorkImg2} />

          {/*Grid item3*/}
          <Griditems pic={WorkImg} />

          {/* grid item4 */}
          <Griditems pic={WorkImg2} />

          {/*Grid item5*/}
          <Griditems pic={WorkImg} />

          {/* grid item6 */}
          <Griditems pic={WorkImg2} />
        </div>
      </div>
    </div>
  );
};

export default Work;
