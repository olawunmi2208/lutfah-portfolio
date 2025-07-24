const Header = () => {
  return (
    <div className="flex justify-between px-12 py-6 text ">
      <section>
        <h1 className="text-2xl">MY PORTFOLIO</h1>
      </section>
      <section className="flex gap-5">
        <a href="#About">About</a>
        <a href="#Projects">Projects</a>
        <a href="#Skills">Skills</a>
        <a href="Resume">Resume</a>
        <a href="#Contact Me">Contact</a>
      </section>
    </div>
  );
};

export default Header;
