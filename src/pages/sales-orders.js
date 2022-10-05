import Head from 'next/head';
import { Box, Container } from '@mui/material';
import { DashboardLayout } from '../components/dashboard-layout';
import  ListToolbar  from 'src/components/list-toolbar';


const SalesOrders = () => (
  <>
    <Head>
      <title>
      Commandes | Management ProfilCar
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
      <ListToolbar title="Commandes" btnText="Ajouter Commande" addPage="#" search="Rechercher une commande"/>
      </Container>
    </Box>
  </>
);
SalesOrders.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default SalesOrders;
