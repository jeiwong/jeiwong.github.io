import { render } from "../utils/test-utils";
import Header, { HeaderButtons } from "./Header";

describe("Header", () => {
  it("render PageLayout with error", () => {
    render(<Header />);
  });

  it("render PageLayout with error", () => {
    render(<HeaderButtons orientation="vertical" />);
  });
});
