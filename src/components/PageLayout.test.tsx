import { Text } from "@mantine/core";
import { render, screen, userEvent } from "../utils/test-utils";
import PageLayout from "./PageLayout";

describe("PageLayout", () => {
  it("render PageLayout with error", () => {
    render(<PageLayout />);
  });
});
