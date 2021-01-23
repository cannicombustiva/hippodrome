import React from 'react';
import { Meta } from '@/components/Meta';
import Layout from '../src/components/Layout/Layout';
import Resume from '../src/components/Resume/Resume';

const Home = () => (
  <Layout>
    <div>
      <Meta title="Hippodrome" />
      <div>Something here</div>
      <Resume />
    </div>
  </Layout>
);

export default Home;
