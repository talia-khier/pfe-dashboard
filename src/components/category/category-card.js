import React from 'react'
import NextLink from 'next/link'
import PropTypes from 'prop-types';
import { Box, Card, CardContent, Divider, Grid, Typography, Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export const CategoryCard = ({ category, ...rest }) => (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      }}
      {...rest}
    >
      <CardContent sx={{
        display:'flex',
        alignItems: 'center',
        flexDirection: 'Column',
        padding: '0 0 0 0',

      }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            pb: 3,
          }}
        >
          <img
            alt="Category"
            src={category.media}
            height='200PX'
          />
        </Box>
  
        <Typography
          align="center"
          color="textPrimary"
          gutterBottom
          variant="h5"
        >
          {category.title}
        </Typography>
      
        <Typography
          align="center"
          color="textPrimary"
          gutterBottom
        >
          {category.description}
        </Typography>
        <NextLink
            href="#"
            passHref
          >
            <Button
              component="a"
              startIcon={<ArrowForwardIcon fontSize="small" />}
            >
             Voir les produits
            </Button>
          </NextLink>
      </CardContent>
    </Card>
  );
  
  CategoryCard.propTypes = {
    category: PropTypes.object.isRequired
  };
  