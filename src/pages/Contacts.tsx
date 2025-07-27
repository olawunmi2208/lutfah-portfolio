import { CiMail } from "react-icons/ci";
import { IoCall } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";

const Contacts = () => {
  return (
    <div id="Contact Me" className="flex justify-center ">
      <section className="">
        <h1 className="font-extrabold text-3xl mt-30 ">CONTACT ME</h1>
        <ul className="flex flex-col text-3xl gap-5 items-center mt-10">
          <li>
            <CiMail className="text-purple-600" />
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=areholawumi2@gmail.com"
              target="_blank "
            >
              areholawunmi2@gmail.com
            </a>
          </li>
          <li>
            <IoCall className="text-purple-600" />
            <a href="">+2349039576035 </a>
          </li>
          <li>
            <FaLinkedin className="text-purple-600" />
            <a
              href="https://www.linkedin.com/in/lutfah-olawunmi-areh/"
              target="_blank "
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Contacts;
