import { Text } from "@mantine/core";
import { render, screen, userEvent } from "../utils/test-utils";
import PageLayout from "./PageLayout";

describe("PageLayout", () => {
  it("render PageLayout with error", () => {
    render(
      <PageLayout>
        <Text>Hello</Text>
      </PageLayout>
    );
    expect(screen.getByText("Hello")).toBeInTheDocument();
  });
  it("PageLayout button click", async () => {
    render(
      <PageLayout>
        <Text>Hello</Text>
      </PageLayout>
    );
    const workButton = screen.getByTestId("work");
    const user = userEvent.setup();
    await user.click(workButton);
    const projectsButton = screen.getByTestId("projects");
    await user.click(projectsButton);
    const aboutButton = screen.getByTestId("about");
    await user.click(aboutButton);
    const contactButton = screen.getByTestId("contact");
    await user.click(contactButton);
  });
});
