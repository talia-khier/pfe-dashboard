import NextLink from 'next/link'
import PropTypes from 'prop-types';
import { Box, Card, CardContent, Divider, Grid, Typography } from '@mui/material';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import InventoryIcon from '@mui/icons-material/Inventory';

export const ProductCard = ({ product, ...rest }) => (
  <NextLink  href={`/product/${product.id}`} passHref>
  <Card
    sx={{
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      cursor:'pointer'
    }}
    {...rest}
  >
    <CardContent>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          pb: 3
        }}
      >
        <img
          alt="Product"
          src={product.media}
          
        />
      </Box>

      <Typography
        align="center"
        color="textPrimary"
        gutterBottom
        variant="h5"
      >
        {product.title}
      </Typography>
    
    </CardContent>
    <Box sx={{ flexGrow: 1 }} />
    <Divider />
    <Box sx={{ p: 2 }}>
      <Grid
        container
        spacing={2}
        sx={{ justifyContent: 'space-between' }}
      >
        <Grid
          item
          sx={{
            alignItems: 'center',
            display: 'flex'
          }}
        >
          <MonetizationOnIcon color="action" />
          <Typography
            color="textSecondary"
            display="inline"
            sx={{ pl: 1 }}
            variant="body2"
          >
            {product.price}
            {' '}
            DZD
          </Typography>
        </Grid>
        <Grid
          item
          sx={{
            alignItems: 'center',
            display: 'flex'
          }}
        >
          <InventoryIcon color="action" />
          <Typography
            color="textSecondary"
            display="inline"
            sx={{ pl: 1 }}
            variant="body2"
          >
            {product.totalDownloads}
            {' '}
            Objets
          </Typography>
        </Grid>
      </Grid>
    </Box>
  </Card>
  </NextLink>
);

ProductCard.propTypes = {
  product: PropTypes.object.isRequired
};
