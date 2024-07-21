import Header from "../components/Header";

function About() {
  return (
    <div className="">
      <Header />
      <div className="m-auto mt-10 p-10 bg-opacity-30 rounded-lg text-center  bg-teal-400 container justify-center">
        <h1 className="text-4xl">About</h1>
        <p className="text-center m-4">
          This is a MERN stack authentication app with admin and user side.
        </p>
      </div>
    </div>
  );
}

export default About;
