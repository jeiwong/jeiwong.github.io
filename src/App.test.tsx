import { render, screen } from "./utils/test-utils";

import App from "./App";
describe("App", () => {
  it("renders headline", () => {
    render(<App />);
    expect(screen.getByText("JunWei")).toBeInTheDocument();
  });
});
