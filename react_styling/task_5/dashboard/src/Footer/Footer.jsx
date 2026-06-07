import { getCurrentYear, getFooterCopy } from '../utils/utils';

function Footer() {
  return (
    <div className="App-footer mt-auto border-t-[3px] border-[var(--main-color)] px-10 py-5 text-center italic bg-white text-base max-[912px]:text-sm max-[520px]:text-xs">
      <p className="m-0">
        Copyright {getCurrentYear()} - {getFooterCopy(true)}
      </p>
    </div>
  );
}

export default Footer;
