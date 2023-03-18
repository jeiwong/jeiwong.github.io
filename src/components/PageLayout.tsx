import {
  AppShell,
  Burger,
  BurgerProps,
  Button,
  ButtonGroupProps,
  Container,
  Drawer,
  Group,
  Header,
  MediaQuery,
  Popover,
  Text,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Link, Outlet } from "react-router-dom";

const HeaderButtons = ({
  orientation = "horizontal",
  className,
  onClick,
}: ButtonGroupProps) => {
  const buttonArray = [
    { label: "Work", to: "work" },
    { label: "Projects", to: "projects" },
    { label: "About", to: "about" },
    { label: "Contact", to: "contact" },
  ];
  return (
    <Button.Group
      orientation={orientation}
      className={className}
      onClick={onClick}
    >
      {buttonArray.map(({ label, to }) => {
        return (
          <Button
            key={label}
            variant="subtle"
            data-testid={to}
            component={Link}
            to={to}
          >
            <Text size="1.5rem">{label}</Text>
          </Button>
        );
      })}
    </Button.Group>
  );
};

const HeaderBurger = ({ className, opened, onClick }: BurgerProps) => {
  return (
    <Burger opened={opened} onClick={onClick} size="sm" className={className} />
  );
};

const CustomHeader = () => {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <Header height={{ base: 70, md: 70 }} p="md">
      <Drawer
        opened={opened}
        onClose={close}
        position="top"
        withCloseButton={false}
        size={"28%"}
      >
        <HeaderButtons orientation="vertical" onClick={close} />
      </Drawer>
      <Container>
        <Group position="apart">
          <Button p={0} variant={"white"} component={Link} to="/">
            <Text size="2rem">Jun Wei</Text>
          </Button>
          <MediaQuery largerThan="sm" styles={{ display: "none" }}>
            <HeaderBurger opened={opened} onClick={open} />
          </MediaQuery>
          <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
            <HeaderButtons orientation="horizontal" onClick={close} />
          </MediaQuery>
        </Group>
      </Container>
    </Header>
  );
};

const PageLayout = () => {
  return (
    <AppShell header={<CustomHeader />}>
      <Container>
        <Outlet />
      </Container>
    </AppShell>
  );
};

export default PageLayout;
