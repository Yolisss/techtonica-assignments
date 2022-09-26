import { render, screen, cleanup } from "@testing-library/react";
import App from "../App";

// 2
afterEach(() => {
  cleanup();
});
//First test will check if App renders
describe("App", () => {
  test("App renders", () => {
    render(<App />);
  });
});
