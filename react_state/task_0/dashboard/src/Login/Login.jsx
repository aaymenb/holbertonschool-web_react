import WithLogging from '../HOC/WithLogging';

function Login() {
  return (
    <div className="App-body p-10 min-h-[50vh] border-t-[3px] border-[var(--main-color)] max-[520px]:p-5">
      <p className="text-xl mb-5">Login to access the full dashboard</p>
      <div className="App-form flex flex-wrap items-center gap-5 max-[520px]:flex-col max-[520px]:items-stretch max-[520px]:gap-2.5">
        <div className="form-row flex items-center gap-2.5 max-[520px]:flex-col max-[520px]:items-start max-[520px]:gap-1">
          <label htmlFor="email" className="text-base cursor-pointer">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="text-base border border-gray-300 rounded px-2.5 py-1.5 max-[520px]:w-full"
          />
        </div>
        <div className="form-row flex items-center gap-2.5 max-[520px]:flex-col max-[520px]:items-start max-[520px]:gap-1">
          <label htmlFor="password" className="text-base cursor-pointer">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="text-base border border-gray-300 rounded px-2.5 py-1.5 max-[520px]:w-full"
          />
        </div>
        <button
          type="submit"
          className="text-base text-white border-none rounded px-4 py-1.5 cursor-pointer bg-[var(--main-color)] hover:bg-[#b50030] max-[520px]:w-full"
        >
          OK
        </button>
      </div>
    </div>
  );
}

export default WithLogging(Login);
