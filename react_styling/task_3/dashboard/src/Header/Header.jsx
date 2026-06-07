import holbertonLogo from '../assets/holberton-logo.jpg';

function Header() {
  return (
    <div className="App-header flex items-center justify-start px-10 py-5 border-b-[3px] border-[var(--main-color)]">
      <img
        src={holbertonLogo}
        alt="holberton logo"
        className="h-[200px] w-auto mr-5"
      />
      <h1 className="text-[var(--main-color)] text-[2.5rem] m-0">
        School dashboard
      </h1>
    </div>
  );
}

export default Header;
