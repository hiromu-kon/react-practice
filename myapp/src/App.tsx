/* @mui/material */
import { Box, Container } from "@mui/material";
import MailIcon from '@mui/icons-material/Mail';

/* components */
import { Layout } from "./components/layouts/Layouts";
import { PrimaryButton } from "./components/atoms/Button/PrimaryButton";
import { Table } from "./components/organisms/Table/Table";
import { IconBadge } from "./components/molecules/IconBadge/IconBadge";

/* styles */
import theme from "./styles/theme"
import { ThemeProvider } from "@mui/material/styles";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Layout>
        <Container maxWidth="lg">
          <Box sx={{ m: 4 }} />
          <PrimaryButton variant='contained'>ABC</PrimaryButton>
          <Box sx={{ m: 4 }} />
          <Table />
          <IconBadge badgeContent={3}>
            <MailIcon color="action" />
          </IconBadge>
        </Container>
        </Layout>
      </ThemeProvider>
    </div>
  );
}

export default App;
