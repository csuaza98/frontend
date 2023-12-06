import { useParams, Link } from 'react-router-dom';
import { Container, Typography } from '@mui/material';

import { useGetUserQuery } from '@/redux/services/user.service';

const User = () => {
  const { id } = useParams<{ id: string }>();

  const { data } = useGetUserQuery(id);

  return (
    <Container maxWidth="lg" sx={{ mt: 5 }}>
      <Link to="/">Ir a la lista de usuarios</Link>
      <Typography variant="h4" component="h1" gutterBottom>
        User {id}
      </Typography>
      <pre>{JSON.stringify(data?.user, null, 2)}</pre>
    </Container>
  );
};

export default User;
