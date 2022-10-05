import Head from 'next/head';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  Box,
  Button,
  Container,
  FormHelperText,
  TextField,
  Typography,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const AddProductForm = () => {
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      name: '',
      category:'',
      description: '',
      sellingPrice: '',
      costPrice: '',
      quantity:'',
      image: ''
    },
    validationSchema: Yup.object({
        sellingPrice: Yup
        .number()
        .positive(
            'Entrez un némuro positif'
        ) 
        .required(
          'Ce champs est obligatoire'),
        costPrice: Yup
        .number()
        .positive(
            'Entrez un némuro positif'
        ) 
        .required(
          'Ce champs est obligatoire'),
        quantity: Yup
        .number()
        .positive(
            'Entrez un némuro positif'
        ) 
        .required(
          'Ce champs est obligatoire'),
      name: Yup
        .string()
        .max(255)
        .required(
          'Ce champs est obligatoire'),
      image: Yup
        .string(),
      description: Yup
        .string()
        .max(255),
      category: Yup
        .string()
        .max(255)
        .required(
          'Ce champs est obligatoire'),

    }),
    onSubmit: () => {
      router.push('/product');
    }
  });

  return (
    <>
      <Box
        component="main"
        sx={{
          alignItems: 'right',
          display: 'flex',
          flexGrow: 1,
          minHeight: '100%'
        }}
      >
        <Container >
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
          <form onSubmit={formik.handleSubmit}>
            <Box sx={{ my: 3 }}>
              <Typography
                color="textPrimary"
                variant="h4"
              >
                Ajouter un nouveau produit
              </Typography>
              <Typography
                color="textSecondary"
                gutterBottom
                variant="body2"
              >
                Veuillez remplir le formulaire suivant:
              </Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent : 'space-between',
              }}
            >
              <TextField
                sx={{
                  width:"45%",
                }}
                error={Boolean(formik.touched.name && formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
                label="Nom du produit"
                margin="normal"
                name="name"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.name}
                variant="outlined"
              />
              <FormControl  
                sx={{
                  mt:'16px',
                  mb:'8px',
                  width:"45%",
                }} 
                error={Boolean(formik.errors.category)}>
                <InputLabel id="category">Catégorie</InputLabel>
                <Select 
                  labelId="category"
                  name="category"
                  value={formik.values.category}
                  label="Catégorie"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                >
                  
                  <MenuItem value={1}>Catégorie 1</MenuItem>
                  <MenuItem value={2}>Catégorie 2</MenuItem>
                  <MenuItem value={3}>Catégorie 3</MenuItem>
                </Select>
                <FormHelperText>{formik.errors.category}</FormHelperText>
              </FormControl>
            </Box>
           
            <TextField
              error={Boolean(formik.touched.description && formik.errors.description)}
              fullWidth
              helperText={formik.touched.description && formik.errors.description}
              label="Description"
              margin="normal"
              name="description"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.description}
              variant="outlined"
              multiline
              maxRows={4}
            />
            <Box
              sx={{
                display: 'flex',
                justifyContent : 'space-between',
              }}
            >
              
              <TextField
                sx={{
                  width:"45%",
                }}
                error={Boolean(formik.touched.costPrice && formik.errors.costPrice)}
                helperText={formik.touched.costPrice && formik.errors.costPrice}
                label="Prix d'achat"
                margin="normal"
                name="costPrice"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                type="number"
                value={formik.values.costPrice}
                variant="outlined"
              />
              <TextField
                sx={{
                  width:"45%",
                }}
                error={Boolean(formik.touched.sellingPrice && formik.errors.sellingPrice)}
                helperText={formik.touched.sellingPrice && formik.errors.sellingPrice}
                label="Prix de vente"
                margin="normal"
                name="sellingPrice"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                type="number"
                value={formik.values.sellingPrice}
                variant="outlined"
              />
            </Box>
            
            <TextField
              error={Boolean(formik.touched.quantity && formik.errors.quantity)}
              fullWidth
              helperText={formik.touched.quantity && formik.errors.quantity}
              label="La quantité"
              margin="normal"
              name="quantity"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="number"
              value={formik.values.quantity}
              variant="outlined"
            />
            <Button variant="contained" component="label">
                Ajouter une image
                <input hidden accept="image/*"  type="file" name='image'  value={formik.values.image}   onChange={formik.handleChange}/>
            </Button>
           
            <Box sx={{ py: 2 }}>
              <Button
                color="primary"
                disabled={formik.isSubmitting}
                fullWidth
                size="large"
                type="submit"
                variant="contained"
              >
                Ajouter le produit
              </Button>
            </Box>
            
          </form>
        </Container>
      </Box>
    </>
  );
};

export default AddProductForm;
