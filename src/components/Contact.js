import { useContext, useRef } from "react";
import emailjs from "@emailjs/browser";
import Slide from "react-reveal/Slide";

import {
  AiFillGithub,
  AiOutlineTwitter,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { ThemeContext } from "../Context";

function Contact() {
  const theme = useContext(ThemeContext);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_la5shxn",
        "template_3w92ysw",
        form.current,
        "dxzNiEl7SJsW1ZXLi"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="mt-20" id="contact">
      <div className="mx-5 sm:mx-20">
        <Slide left>
          <p className="text-left pb-1 font-bold">CONTACT ME</p>
        </Slide>
        <hr className="b-line bg-cyan-400 mb-3" />
        <p className="text-left text-lg pb-1 ">Want to get in touch?</p>
        <div className="lg:grid lg:grid-cols-2">
          <Slide bottom>
            <div>
              <img
                src={require("../assets/output-onlinegiftools.gif")}
                alt="contact"
              />
            </div>
          </Slide>
          <Slide bottom>
            <div>
              <form
                ref={form}
                onSubmit={sendEmail}
                className="contact-form mt-4 text-left"
              >
                <div className="sm:flex sm:gap-10">
                  <div className="flex flex-col">
                    <label htmlFor="firstname" className=" font-medium">
                      Your Name
                    </label>
                    <input
                      id="firstname"
                      type="text"
                      required
                      spellCheck="false"
                      placeholder="Your name"
                      className={
                        theme === "light"
                          ? "mt-[6px] bg-white border-[0.05rem] rounded-lg border-[#d6d5cb] placeholder-[#667085] py-[10px] px-[14px] w-[300px]"
                          : "mt-[6px] bg-[#0f1329] border-[0.05rem] rounded-lg border-[#d6d5cb] placeholder-[#667085] py-[10px] px-[14px] w-[300px]"
                      }
                      name="user_name"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label
                      htmlFor="email"
                      className="font-medium sm:mt-auto mt-6"
                    >
                      Email
                    </label>
                    <input
                      id="lastname"
                      type="email"
                      placeholder="Your email"
                      required
                      spellCheck="false"
                      className={
                        theme === "light"
                          ? "mt-[6px] bg-white border-[0.05rem] rounded-lg border-[#d6d5cb]  placeholder-[#667085] w-[300px] py-[10px] px-[14px]"
                          : "mt-[6px] bg-[#0f1329] border-[0.05rem] rounded-lg border-[#d6d5cb]  placeholder-[#667085] w-[300px] py-[10px] px-[14px]"
                      }
                      name="user_email"
                    />
                  </div>
                </div>
                <div className="flex flex-col">
                  <label htmlFor="email" className="font-medium mt-6">
                    Message
                  </label>
                  <textarea
                    placeholder="Leave me a message..."
                    name="message"
                    required
                    className={
                      theme === "light"
                        ? "mt-[6px] bg-white border-[0.05rem] rounded-lg border-[#d6d5cb] placeholder-[#667085] h-[134px] py-3 px-[14px] w-[300px] resize-none"
                        : "mt-[6px] bg-[#0f1329] border-[0.05rem] rounded-lg border-[#d6d5cb] placeholder-[#667085] h-[134px] py-3 px-[14px] w-[300px] resize-none"
                    }
                  />
                </div>
                <button
                  className="send-button border-[0.1rem] border-[#d6d5cb] font-semibold  mt-8 py-3 px-[20px] rounded-lg"
                  type="submit"
                >
                  Send message
                </button>
              </form>
            </div>
          </Slide>
        </div>
      </div>
      <div className="flex py-10 text-3xl justify-center gap-6">
        <a
          href="https://github.com/segunlawal"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillGithub />
        </a>
        <a href="https://wa.me/2347019296381" target="_blank" rel="noreferrer">
          <AiOutlineWhatsApp />
        </a>
        <a
          href="https://twitter.com/Segun__Lawal"
          target="_blank"
          rel="noreferrer"
        >
          <AiOutlineTwitter />
        </a>
      </div>
      <p className="pb-5 -mt-4 font-semibold">Designed by Segun Lawal</p>
    </div>
  );
}

export default Contact;
