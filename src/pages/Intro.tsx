import lutfah from "../assets/lutfah.jpg";

const Intro = () => {
  return (
    <div
      id="LUTFAH AREH"
      className="flex justify-between items-center mt-40 mx-48 "
    >
      <div className="">
        <h1 className="font-bold text-3xl mb-4">
          Hi, I'm <br></br>Lutfah Olawunmi Areh
        </h1>
        <h1 className="text-2xl mb-4 font-semibold">Full-Stack Developer</h1>
        <p className="">
          I build scalable web applications and deliver<br></br> clean,
          maintainable code.
        </p>
        <main className="flex gap-4 py-8  font-semibold ">
          <a
            href="path/to/Lutfah Olawunmi Areh-Cv.pdf"
            download
            className="bg-purple-600 border-purple-500 rounded-3xl h-12 px-4 py-2 text-white"
          >
            Download Resume{" "}
          </a>
        </main>
      </div>
      <section>
        <img className="h-80 rounded-full " src={lutfah} alt="" />
      </section>
    </div>
  );
};

export default Intro;
