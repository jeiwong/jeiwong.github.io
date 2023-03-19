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
  Text,
  UnstyledButton,
} from "@mantine/core";
import { useDisclosure, useHover } from "@mantine/hooks";
import { Link, Outlet, useLocation } from "react-router-dom";

const HeaderButtons = ({
  orientation = "horizontal",
  className,
  onClick,
}: ButtonGroupProps) => {
  const location = useLocation();
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
      {orientation === "vertical"
        ? buttonArray.map(({ label, to }) => {
            return (
              <Button
                key={label}
                variant={location.pathname.includes(to) ? "filled" : "subtle"}
                data-testid={to}
                component={Link}
                to={to}
              >
                <Text size="1.5rem">{label}</Text>
              </Button>
            );
          })
        : buttonArray.map(({ label, to }) => {
            const { hovered, ref } = useHover();
            return (
              <UnstyledButton
                key={label}
                data-testid={to}
                component={Link}
                to={to}
                py={10}
                px={15}
              >
                <div ref={ref}>
                  <Text
                    size="1.5rem"
                    color={
                      hovered || location.pathname.includes(to)
                        ? "blue"
                        : "black"
                    }
                    fw={500}
                  >
                    {label}
                  </Text>
                </div>
              </UnstyledButton>
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
    <Header height={{ base: "auto", md: "auto" }}>
      <Container>
        <Group position="apart" align={"center"}>
          <UnstyledButton p={0} component={Link} to="/">
            <Text size="2rem" fw={600}>
              Jun Wei
            </Text>
          </UnstyledButton>
          <MediaQuery largerThan="sm" styles={{ display: "none" }}>
            <HeaderBurger opened={opened} onClick={open} />
          </MediaQuery>
          <Drawer
            opened={opened}
            onClose={close}
            position="top"
            withCloseButton={false}
            size={"auto"}
          >
            <HeaderButtons orientation="vertical" onClick={close} />
          </Drawer>
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
      <Container pt={{ base: 70, md: 70 }}>
        <Outlet />
      </Container>
    </AppShell>
  );
};

export default PageLayout;
