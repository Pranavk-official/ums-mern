import Header from "../components/Header";

function Home() {
  return (
    <div>
      <Header />
      <div
        className="flex justify-center items-center h-screen"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1721073769260-60623455f428?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
        }}
      >
        <div className="bg-zinc-50 p-4 rounded-lg bg-opacity-65">
          <p className="text-center font-bold text-4xl text-slate-700">
            Welcome to my MERN User Management app
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
