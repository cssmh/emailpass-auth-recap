const Home = () => {
  return (
    <div>
      <div className="hero min-h-[80vh] bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">
              Spider-man<br></br> No way Home!
            </h1>
            <p className="py-6">Marvel multiverse film.</p>
            <button className="btn btn-primary bg-green-500 border-none text-white">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
