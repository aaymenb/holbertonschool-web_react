import WithLogging from '../HOC/WithLogging';

function Login() {
  return (
    <div className="App-body p-10 min-h-[50vh] border-t-[3px] border-[var(--main-color)]">
      <p className="text-xl mb-5">Login to access the full dashboard</p>
      <div className="App-form flex flex-wrap items-center gap-5">
        <div className="form-row flex items-center gap-2.5">
          <label htmlFor="email" className="text-base cursor-pointer">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="text-base border border-gray-300 rounded px-2.5 py-1.5"
          />
        </div>
        <div className="form-row flex items-center gap-2.5">
          <label htmlFor="password" className="text-base cursor-pointer">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="text-base border border-gray-300 rounded px-2.5 py-1.5"
          />
        </div>
        <button
          type="submit"
          className="text-base text-white border-none rounded px-4 py-1.5 cursor-pointer bg-[var(--main-color)] hover:bg-[#b50030]"
        >
          OK
        </button>
      </div>
    </div>
  );
}

export default WithLogging(Login);
