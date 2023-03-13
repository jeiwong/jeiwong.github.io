import { render, screen, userEvent } from "./utils/test-utils";
import { render as genericRender } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";
describe("App", () => {
  it("renders headline", () => {
    render(<App />);
    expect(screen.getByText("This is Home")).toBeInTheDocument();
  });
  it("test routing", async () => {
    render(<App />);
    const user = userEvent.setup();
    const workButton = screen.getByTestId("work");
    await user.click(workButton);
    expect(screen.getByText("This is work")).toBeInTheDocument();

    const projectsButton = screen.getByTestId("projects");
    await user.click(projectsButton);
    expect(screen.getByText("This is Projects")).toBeInTheDocument();

    const aboutButton = screen.getByTestId("about");
    await user.click(aboutButton);
    expect(screen.getByText("This is About")).toBeInTheDocument();

    const contactButton = screen.getByTestId("contact");
    await user.click(contactButton);
    expect(screen.getByText("This is Contact")).toBeInTheDocument();
  });

  test("landing on a bad page", () => {
    const badRoute = "/some/bad/route";

    // use <MemoryRouter> when you want to manually control the history
    genericRender(
      <MemoryRouter initialEntries={[badRoute]}>
        <App />
      </MemoryRouter>
    );

    // verify navigation to "no match" route
    expect(screen.getByText(/no match/i)).toBeInTheDocument();
  });
});
