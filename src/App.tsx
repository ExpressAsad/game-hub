const App = () => {
  return (
    <div className="min-h-screen grid grid-rows-[64px_1fr]">
      {/* Navbar */}
      <nav className="bg-gray-800"></nav>

      {/* Content */}
      <div className="grid grid-cols-1 md:grid-cols-[220px_1fr]">
        {/* Sidebar */}
        <aside className="hidden md:block bg-gray-100"></aside>

        {/* Main */}
        <main className="bg-white min-h-[500px]"></main>
      </div>
    </div>
  );
};

export default App;
