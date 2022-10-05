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

const AddCategoryForm = () => {
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      name: '',
      description: '',
      parent:''
    },
    validationSchema: Yup.object({
        
      name: Yup
        .string()
        .max(255)
        .required(
          'Ce champs est obligatoire'),
      description: Yup
        .string()
        .max(255),
      parent: Yup
        .string()
        .required(
          'Ce champs est obligatoire'),
    }),
    onSubmit: () => {
      router.push('/categories');
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
            href="/categories"
            passHref
          >
            <Button
              component="a"
              startIcon={<ArrowBackIcon fontSize="small" />}
            >
              Liste des catégories
            </Button>
          </NextLink>
          <form onSubmit={formik.handleSubmit}>
            <Box sx={{ my: 3 }}>
              <Typography
                color="textPrimary"
                variant="h4"
              >
                Ajouter une nouvelle catégorie
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
                label="Nom de la catégorie"
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
                error={Boolean(formik.errors.parent)}>
                <InputLabel id="parent">Catégorie parent</InputLabel>
                <Select 
                  labelId="parent"
                  name="parent"
                  value={formik.values.parent}
                  label="Catégorie parent"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                >
                  
                  <MenuItem value={1}>Catégorie 1</MenuItem>
                  <MenuItem value={2}>Catégorie 2</MenuItem>
                  <MenuItem value={3}>Catégorie 3</MenuItem>
                </Select>
                <FormHelperText>{formik.errors.parent}</FormHelperText>
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
           
            <Box sx={{ py: 2 }}>
              <Button
                color="primary"
                disabled={formik.isSubmitting}
                fullWidth
                size="large"
                type="submit"
                variant="contained"
              >
                Ajouter la catégorie
              </Button>
            </Box>
            
          </form>
        </Container>
      </Box>
    </>
  );
};

export default AddCategoryForm;
