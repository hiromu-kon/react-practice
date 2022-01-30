/* @mui/material */
import { Box, Container } from "@mui/material";

/* components */
import { Layout } from "./components/layouts/Layouts";
import { PrimaryButton } from "./components/atoms/Button/PrimaryButton";
import { Table } from "./components/organisms/Table/Table";

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
        </Container>
        </Layout>
      </ThemeProvider>
    </div>
  );
}

export default App;
