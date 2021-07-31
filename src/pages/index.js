import React from 'react';
import { Button } from '@material-ui/core';

import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout title="Youtube">
      clone youtube
      <Button variant="contained" color="secondary">
        Hello world
      </Button>
    </Layout>
  );
}
