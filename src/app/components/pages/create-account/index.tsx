import './styles.scss';
import ThemeContainer from '@components/templates/ThemeContainer';
import { useRouter } from 'next/router';

import CreateAccountForm from '@components/organisms/create-account/CreateAccountForm';
import { Typography, Button, Container } from '@mui/material';

const CreateAccountFormPage = () => {
  const router = useRouter();

  const redirectToLoginPage = () => {
    router.push('/login')
  }
  return (
    <ThemeContainer>
      <main className="main_create-account">
        <Container
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '32px',
            width: '60vmax'
          }}
        >
          <section className="create-account_form">
            <div className="create-account_header-section">
              <Typography variant="h2" component="h2" align="center">
                Crie sua conta
              </Typography>
              <Typography variant="subtitle2" component="h2" align="center">
                Cadastre-se para ter acesso aos nossos conteúdos.
              </Typography>
            </div>
            <CreateAccountForm/>
          </section>
          <section className="create-account_login">
            <Typography variant="subtitle1" component="h2" align="center">
              Tem uma conta?
            </Typography>
            <Button
              variant="text"
              onClick={redirectToLoginPage}
            >Conecte-se</Button>
          </section>
        </Container>
      </main>
    </ThemeContainer>
  );
};

export default CreateAccountFormPage;
