import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="min-h-screen grid grid-rows-[64px_1fr]">
      {/* Navbar */}
      <nav className="container mx-auto content-center">
        <Navbar />
      </nav>

      {/* Content */}
      <div className="grid grid-cols-1 md:grid-cols-[220px_1fr]">
        {/* Sidebar */}
        <aside className="hidden md:block bg-gray-100"></aside>

        {/* Main */}
        <main className="bg-white min-h-[5x]00p"></main>
      </div>
    </div>
  );
};

export default App;
