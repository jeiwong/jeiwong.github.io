import {
  AppShell,
  Burger,
  BurgerProps,
  Button,
  ButtonGroupProps,
  Group,
  Header,
  MediaQuery,
  Popover,
  Text,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { ReactNode } from "react";
import { Link, Outlet } from "react-router-dom";

interface PageLayoutProps {
  children: ReactNode;
}

const HeaderButtons = ({
  orientation = "horizontal",
  className,
}: ButtonGroupProps) => {
  return (
    <Button.Group orientation={orientation} className={className}>
      <Button variant={"subtle"} data-testid="work" component={Link} to="/work">
        <Text size={16}>Work</Text>
      </Button>
      <Button
        variant={"subtle"}
        data-testid="projects"
        component={Link}
        to="/projects"
      >
        <Text size={16}>Projects</Text>
      </Button>
      <Button
        variant={"subtle"}
        data-testid="about"
        component={Link}
        to="/about"
      >
        <Text size={16}>About</Text>
      </Button>
      <Button
        variant={"subtle"}
        data-testid="contact"
        component={Link}
        to="/contact"
      >
        <Text size={16}>Contact</Text>
      </Button>
    </Button.Group>
  );
};

const HeaderBurger = ({ className, opened, onClick }: BurgerProps) => {
  return (
    <Popover trapFocus position="bottom" withArrow shadow="md" opened={opened}>
      <Popover.Target>
        <Burger
          opened={opened}
          onClick={onClick}
          size="sm"
          mr="xl"
          className={className}
        />
      </Popover.Target>
      <Popover.Dropdown>
        <HeaderButtons orientation="vertical" />
      </Popover.Dropdown>
    </Popover>
  );
};

const CustomHeader = () => {
  const [opened, { toggle }] = useDisclosure(false);
  return (
    <Header height={{ base: 70, md: 70 }} p="md">
      <Group position="apart">
        <Button variant={"white"} component={Link} to="/">
          <Text size={30}>JunWei</Text>
        </Button>
        <MediaQuery largerThan="sm" styles={{ display: "none" }}>
          <HeaderBurger opened={opened} onClick={toggle} />
        </MediaQuery>
        <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
          <HeaderButtons orientation="horizontal" />
        </MediaQuery>
      </Group>
    </Header>
  );
};

const PageLayout = () => {
  return (
    <AppShell header={<CustomHeader />}>
      <Outlet />
    </AppShell>
  );
};

export default PageLayout;
