import {
  Burger,
  Button,
  ButtonGroupProps,
  Container,
  Drawer,
  Group,
  Header as MantineHeader,
  MediaQuery,
  Text,
  UnstyledButton,
} from "@mantine/core";
import { useDisclosure, useHover } from "@mantine/hooks";
import { Link, useLocation } from "react-router-dom";

export const HeaderButtons = ({
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

const Header = () => {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <MantineHeader height={{ base: "auto", md: "auto" }}>
      <Container>
        <Group position="apart" align={"center"}>
          <UnstyledButton p={0} component={Link} to="/">
            <Text size="2rem" fw={600}>
              Jun Wei
            </Text>
          </UnstyledButton>
          <MediaQuery largerThan="sm" styles={{ display: "none" }}>
            <Burger opened={opened} onClick={open} size="sm" />
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
    </MantineHeader>
  );
};

export default Header;
