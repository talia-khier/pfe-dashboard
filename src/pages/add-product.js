import Head from 'next/head';
import { Box, Container, Grid, Pagination } from '@mui/material';
import { DashboardLayout } from '../components/dashboard-layout';
import AddProductForm from 'src/components/product/add-product-form';

const AddProduct = () =>(
    <>
    <Head>
      <title>
        Ajouter Produit | Management Profilcar
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
        <AddProductForm/>
      </Container>
    </Box>
  </>
);




AddProduct.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default AddProduct;
