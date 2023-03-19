import { AppShell, Container } from "@mantine/core";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const PageLayout = () => {
  return (
    <AppShell header={<Header />}>
      <Container pt={{ base: 70, md: 70 }}>
        <Outlet />
      </Container>
    </AppShell>
  );
};

export default PageLayout;
