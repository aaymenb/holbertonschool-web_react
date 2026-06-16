import { getCurrentYear, getFooterCopy } from '../utils/utils';
import newContext from '../Context/context';

function Footer() {
  return (
    <newContext.Consumer>
      {({ user }) => (
        <div className="App-footer mt-auto border-t-[3px] border-[var(--main-color)] px-10 py-5 text-center italic bg-white text-base max-[912px]:text-sm max-[520px]:text-xs">
          <p className="m-0">
            Copyright {getCurrentYear()} - {getFooterCopy(true)}
          </p>
          {user.isLoggedIn && (
            <p className="m-0 mt-2 not-italic">
              <a href="#">Contact us</a>
            </p>
          )}
        </div>
      )}
    </newContext.Consumer>
  );
}

export default Footer;
