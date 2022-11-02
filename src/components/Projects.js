import { useContext } from "react";

import Carousel from "nuka-carousel";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import Slide from "react-reveal/Slide";

import { ThemeContext } from "../Context";
import Data from "../Data";

function Projects() {
  /* eslint-disable no-unused-vars */
  const theme = useContext(ThemeContext);
  const allcards = Data.map((eachcard) => (
    <div key={eachcard.id} className="">
      <Card className="card rounded overflow-hidden border-2 sm:w-96 w-72 mx-auto my-2">
        <CardHeader color="blue" className="hover:brightness-90">
          <a href="/" className="screenshots">
            <img
              className=""
              src={`${process.env.PUBLIC_URL}/${eachcard.imgSrc}`}
              alt="preview"
            />
            {/* <img
              className=""
              src={`${process.env.PUBLIC_URL}/${eachcard.hoverImgSrc}`}
              alt="preview"
            /> */}
          </a>
        </CardHeader>
        <CardBody
          className={
            theme === "light" ? "text-center bg-[#fffffa]" : "text-center"
          }
        >
          <Typography variant="h5" className="mb-2 pt-5 flex justify-between">
            <p className="font-bold text-lg text-left pl-5 text-cyan-400">
              {eachcard.name}
            </p>
            <div className="flex gap-5 pr-5">
              <a href={eachcard.LiveLink}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  className="w-7"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a href={eachcard.gitHubLink}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  className="w-7"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </Typography>
          <Typography className="tech-used gap-3 px-5 flex py-2">
            {eachcard.techUsed.map((eachtechused, index) => (
              <small
                className={
                  theme === "light"
                    ? "p-2 bg-cyan-400 eachtechused shadow-2xl"
                    : "p-2 bg-[#00001f] eachtechused shadow-2xl"
                }
              >
                {eachtechused}
              </small>
            ))}
          </Typography>

          <Typography className="pb-5 px-5 text-left">
            {eachcard.description}
          </Typography>
        </CardBody>
      </Card>
    </div>
  ));
  /* eslint-enable no-unused-vars */

  return (
    <div className="">
      <Slide left>
        <p className="text-left sm:px-20 px-5 pb-1 mt-20 font-bold">
          SOME OF MY PROJECTS
        </p>
      </Slide>

      <hr className="b-line bg-cyan-400 sm:mx-20 mx-5" />
      <Slide bottom>
        <div className="cursor-grab  gap-10 mx-10 my-10">
          <Carousel
            // adaptiveHeight
            dragging
            defaultControlsConfig={{
              pagingDotsClassName: "hidden",
              prevButtonClassName:
                "cookie-font h-14 prev-button rounded-full bg-cyan-400 h-8 w-8 text-2xl font-semibold flex flex-col justify-center lg:ml-60 md:ml-20 sm:ml-5 mb-30 -ml-10",
              nextButtonClassName:
                "cookie-font h-14 next-button rounded-full bg-cyan-400 h-8 w-8 text-2xl font-semibold flex flex-col justify-center lg:mr-60 md:mr-20 sm:mr-5 mb-30 -mr-10",
              prevButtonStyle: {
                background: "#2196f3",
                color: "#f2f2f2",
              },
              nextButtonStyle: {
                background: "#2196f3",
                color: "#f2f2f2",
              },
              prevButtonText: "<",
              nextButtonText: ">",
            }}
            speed={1800}
            swiping
            // wrapAround
          >
            {allcards}
          </Carousel>
        </div>
      </Slide>
    </div>
  );
}

export default Projects;
