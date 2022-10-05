import Head from 'next/head';
import NextLink from 'next/link'
import { DashboardLayout } from '../../components/dashboard-layout';
import ProductDetails from 'src/components/product/product-details';
import { useRouter } from 'next/router';
import { 
  Box,
  Button,
  Checkbox,
  Container,
  FormHelperText,
  Link,
  TextField,
  Typography} from '@mui/material';
  import ArrowBackIcon from '@mui/icons-material/ArrowBack';

  function Product(props) {
  const product = props.product
  var router = useRouter();
  var id = router.query["id"];
return (
  <>
  <Head>
    <title>
      Détails du Produit | Management Profilcar
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
    <NextLink
            href="/products"
            passHref
          >
            <Button
              component="a"
              startIcon={<ArrowBackIcon fontSize="small" />}
            >
              Liste des produits
            </Button>
          </NextLink>
      <ProductDetails id={id} />
    </Container>
  </Box>
</>
  
);
}


Product.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Product;
