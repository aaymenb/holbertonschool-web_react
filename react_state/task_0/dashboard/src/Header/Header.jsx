import holbertonLogo from '../assets/holberton-logo.jpg';

function Header() {
  return (
    <div className="App-header flex items-center justify-start px-10 py-5 border-b-[3px] border-[var(--main-color)] max-[520px]:flex-col max-[520px]:px-4 max-[520px]:text-center">
      <img
        src={holbertonLogo}
        alt="holberton logo"
        className="h-[200px] w-auto mr-5 max-[520px]:h-[120px] max-[520px]:mr-0 max-[520px]:mb-2.5"
      />
      <h1 className="text-[var(--main-color)] text-[2.5rem] m-0 max-[520px]:text-2xl">
        School dashboard
      </h1>
    </div>
  );
}

export default Header;
