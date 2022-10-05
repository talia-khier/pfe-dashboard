import { useState } from 'react';
import { Box, Button, Card, CardContent, CardHeader, Divider, TextField } from '@mui/material';

export const SettingsPassword = (props) => {
  const [values, setValues] = useState({
    oldpassword: '',
    newPassword:'',
    confirm: ''
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  return (
    <form {...props}>
      <Card>
        <CardHeader
          subheader="Modifer votre mot de passe"
          title="Mot de passe"
        />
        <Divider />
        <CardContent>
        <TextField
            fullWidth
            label="Ancien mot de passe"
            margin="normal"
            name="oldPassword"
            onChange={handleChange}
            type="password"
            value={values.oldPassword}
            variant="outlined"
          />
          <TextField
            fullWidth
            label="Nouveau mot de passe"
            margin="normal"
            name="newPassword"
            onChange={handleChange}
            type="password"
            value={values.newPassword}
            variant="outlined"
          />
          <TextField
            fullWidth
            label="Confirmer nouveau mot de passe"
            margin="normal"
            name="confirm"
            onChange={handleChange}
            type="password"
            value={values.confirm}
            variant="outlined"
          />
        </CardContent>
        <Divider />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            p: 2
          }}
        >
          <Button
            color="primary"
            variant="contained"
          >
            Modifier
          </Button>
        </Box>
      </Card>
    </form>
  );
};
