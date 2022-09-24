import { render, screen, cleanup } from "@testing-library/react";
import Users from "../components/users";

// 2
afterEach(() => {
  cleanup();
});
//First test will check if App renders
describe("Users", () => {
  test("Users renders", () => {
    render(<Users />);
  });
});

test("renders User Management title", () => {
  render(<Users />);
  expect(screen.getByText(/User Management/));
});
