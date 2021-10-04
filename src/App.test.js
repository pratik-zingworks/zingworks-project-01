import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import SignIn from './components/SignIn/SignIn.component';

// it('main app data', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/username/i);
//   expect(linkElement).toBeInTheDocument();
// });
// it('checking sign in data', () => {
//   render(<SignIn />);
//   const linkElement = screen.getByTitle("pratik");
//   expect(linkElement).toBeInTheDocument();
// });

it('checking form data', async () => {
  render(<App />);
  const linkElement = await screen.findByTestId("hello-1");
  expect(linkElement).toBeInTheDocument();
});
it('checking form data by uery', async () => {
  render(<App />);
  const linkElement = screen.queryByTestId("hello-2");
  expect(linkElement).not.toBeInTheDocument();
});

it('checking form data length', async () => {
  render(<App />);
  const linkElement = screen.getAllByTestId("hello-1");
  expect(linkElement.length).toBe(1);
});

describe("let's Check", () => {
  it('checking form data length', async () => {
    render(<App />);
    const linkElement = screen.getAllByTestId("hello-1");
    expect(linkElement.length).toBe(1);
  });
})

describe("let's Check form", () => {
  it('checking form data length', async () => {
    render(<App />);
    const linkElement = screen.getByPlaceholderText(/testing/i);
    fireEvent.change(linkElement, {target: {value : "pratik"}})
    expect(linkElement.value).toBe("pratik")
  });
})