import Head from 'next/head';
import { Box, Container, Grid, Pagination } from '@mui/material';
import { DashboardLayout } from '../components/dashboard-layout';
import AddCategoryForm from 'src/components/category/add-category-form';

const AddCategory = () =>(
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
        <AddCategoryForm/>
      </Container>
    </Box>
  </>
);




AddCategory.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default AddCategory;
