import { Link } from 'react-router-dom';
import { Layout } from '@/app/layout/index.ts';

export const NotFound = () => {
  return (
    <Layout>
      <p>Oops, the page does not exist</p>
      <Link to="/">Go home</Link>
    </Layout>
  );
};
