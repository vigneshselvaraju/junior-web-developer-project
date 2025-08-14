import React, { useState, useEffect } from 'react';
import ProgramCard from './components/ProgramCard';
import { Container, Row, Col } from 'react-bootstrap';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [programs, setPrograms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  /* Fetch program data on component mount */
  useEffect(() => {
    fetch('/program-data.json')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to load program data');
        return res.json();
      })
      .then((data) => {
        setPrograms(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f7f2f2',paddingBottom: '2rem' }}>
      {/* Loading state */}
      {loading && (
        <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
          <div className="text-center">
            <CircularProgress />
            <p>Loading programs...</p>
          </div>
        </Container>
      )}

      {/* Error state */}
      {error && (
        <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
          <Alert severity="error">{error}</Alert>
        </Container>
      )}

      {/* Main content: display programs once loaded */}
      {!loading && !error && (
        <Container fluid className="my-5">
          <h1 className="text-center mb-4">Confederation College Programs</h1>
          <Row xs={1} md={3} className="g-4">
            {programs.map((program) => (                   //Map each program to a ProgramCard component
              <Col key={program._id} className="d-flex">
                <ProgramCard program={program} />
              </Col>
            ))}
          </Row>
        </Container>
      )}
    </div>
  );
};

export default App;