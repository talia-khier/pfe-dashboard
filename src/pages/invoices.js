import Head from 'next/head';
import { Box, Container } from '@mui/material';
import { DashboardLayout } from '../components/dashboard-layout';
import  ListToolbar  from 'src/components/list-toolbar';

const Invoices = () => (
  <>
    <Head>
      <title>
        Facture | Management ProfilCar
      </title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth={false}>
      <ListToolbar title="Factures" btnText="Ajouter Facture" addPage="#" search="Rechercher une facture"/>
      </Container>
    </Box>
  </>
);
Invoices.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Invoices;
