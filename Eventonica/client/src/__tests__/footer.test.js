import { render, screen, cleanup } from "@testing-library/react";
import Footer from "../components/footer";

// 2
afterEach(() => {
  cleanup();
});
//First test will check if App renders
describe("Footer", () => {
  test("Footer renders", () => {
    render(<Footer />);
  });
});
