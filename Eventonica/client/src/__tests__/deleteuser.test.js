import { render, screen, cleanup } from "@testing-library/react";
import DeleteUser from "../components/deleteuser";

// 2
afterEach(() => {
  cleanup();
});
//First test will check if App renders
describe("DeleteUser", () => {
  test("DeleteUser renders", () => {
    "want to make sure deleteUser is displaying properly";
    render(<DeleteUser />);
  });
});
