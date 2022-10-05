import Head from 'next/head';
import { categories } from '../__mocks__/categories';
import { Box, Container, Grid } from '@mui/material';
import { DashboardLayout } from '../components/dashboard-layout';
import  ListToolbar  from 'src/components/list-toolbar';
import {CategoryCard} from 'src/components/category/category-card';
const Categories = () => (
  <>
    <Head>
      <title>
       Catégories | Management ProfilCar
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
      <ListToolbar title="Catégories" btnText="Ajouter Catégorie" addPage="add-category" search="Rechercher une catégories"/>
      <Box sx={{ pt: 3 }}>
          <Grid
            container
            spacing={3}
          >
            {categories.map((category) => (
              <Grid
                item
                key={category.id}
                lg={4}
                md={6}
                xs={12}
              >
                <CategoryCard category={category} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  </>
);
Categories.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Categories;
