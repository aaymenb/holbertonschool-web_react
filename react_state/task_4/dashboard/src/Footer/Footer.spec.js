import { render, screen } from '@testing-library/react';
import Footer from './Footer';
import newContext from '../Context/context';
import { getCurrentYear, getFooterCopy } from '../utils/utils';

function renderFooter(user) {
  return render(
    <newContext.Provider value={{ user, logOut: () => {} }}>
      <Footer />
    </newContext.Provider>
  );
}

test('It should rendered "copyright {year} - holberton school" whenever isIndex is set to true', () => {
  renderFooter({ email: '', password: '', isLoggedIn: false });

  const footerParagraph = screen.getByText(
    `Copyright ${getCurrentYear()} - ${getFooterCopy(true)}`
  );

  expect(footerParagraph).toHaveTextContent(
    new RegExp(`copyright ${new Date().getFullYear()} - holberton School`, 'i')
  );
});

test('does not display the Contact us link when the user is logged out', () => {
  renderFooter({ email: '', password: '', isLoggedIn: false });

  expect(
    screen.queryByRole('link', { name: /contact us/i })
  ).not.toBeInTheDocument();
});

test('displays the Contact us link when the user is logged in', () => {
  renderFooter({
    email: 'test@holberton.com',
    password: 'password123',
    isLoggedIn: true,
  });

  expect(
    screen.getByRole('link', { name: /contact us/i })
  ).toBeInTheDocument();
});
