import olawunmi from "../assets/olawunmi.jpg";

const About = () => {
  return (
    <div id="About" className="flex justify-between px-50">
      <img className="h-80 rounded-full mt-20" src={olawunmi} alt="" />
      <section className="">
        <h1 className="flex justify-center  mb-5 mt-20 rounded-2xl font-semibold text-2xl">
          About Me
        </h1>

        <p className="w-2xl">
          I'm a passionate and detail-oriented full-stack developer who enjoys
          building clean, scalable, and user- focused web applications. With
          foundation in both frontend and backend development, I enjoy
          transforming ideas into responsive, user-friendly applications. I work
          confidently with technologies like HTML,CSS, JavaScript, React,
          Tailwind CSS, Node.js, Express,MongoDB, and version control with
          git/Github. I thrive in a collaborative environment. I believe that
          great products are built by great teams. <br />
          My approach to teamwork is grounded in empathy, accountability, and
          curiosity, and i continously strive to be someone others enjoy
          building with.
        </p>
      </section>
    </div>
  );
};

export default About;
