import { getCurrentYear, getFooterCopy } from '../utils/utils';

function Footer() {
  return (
    <div className="App-footer border-t-[3px] border-[var(--main-color)] px-10 py-5 text-center italic fixed bottom-0 left-0 right-0 bg-white">
      <p className="m-0">
        Copyright {getCurrentYear()} - {getFooterCopy(true)}
      </p>
    </div>
  );
}

export default Footer;
