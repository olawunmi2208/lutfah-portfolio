const Header = () => {
  return (
    <div className="flex justify-between px-12 py-6 text fixed top-0 bg-purple-100 w-[100%] ">
      <section className="text-2xl font-extrabold">
        <a href="#LUTFAH AREH">LUTFAH AREH</a>
      </section>
      <section className="flex gap-5">
        <a href="#About">About</a>
        <a href="#Projects">Projects</a>
        <a href="#Skills">Skills</a>
        <a href="Resume">Resume</a>
        <a href="#Contact Me">Contacts</a>
      </section>
    </div>
  );
};

export default Header;
