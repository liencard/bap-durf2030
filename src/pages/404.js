import { Button } from '../components/UI';

export default function FourOhFour() {
  const divContainer = {
    display: 'flex',
    height: '100vh',
    alignItems: 'center',
  };

  const divStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '40%',
    margin: '0 auto',
  };

  const title = {
    margin: '20px 0',
    fontSize: '18px',
  };

  return (
    <>
      <div style={divContainer}>
        <div style={divStyle}>
          <img src="/logo.svg" alt="logo DURF2030" width="300" height="340" />
          <h1 style={title}>404 - Pagina niet gevonden</h1>
          <Button text="Terug naar home" variant="outline" href="/" />
        </div>
      </div>
    </>
  );
}
