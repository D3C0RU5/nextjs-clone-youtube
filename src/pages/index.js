import React from 'react';
import { Box, Grid } from '@material-ui/core';

import VideoCard from 'src/components/VideoCard';
import Layout from 'src/components/Layout';

function Home({ data }) {
  return (
    <Layout title="Youtube">
      <Box p={2}>
        <Grid container spacing={4}>
          {data.map((item) => (
            <Grid item key={item.id} xl={3} lg={3} md={4} sm={6} xs={12}>
              <VideoCard item={item} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Layout>
  );
}

export async function getStaticProps() {
  const data = [
    {
      id: 1,
      title: 'NEXT.JS: O FRAMEWORK QUE VOCÊ DEVERIA CONHECER [PARTE #01]',
      authorId: '',
      authorName: 'Lucas Nhimi',
      authorAvater: 'avatarUrl',
      views: 10,
      thumb: '/thumbs/next01.png',
      videoUrl: 'url',
      updateAt: new Date(),
    },
    {
      id: 2,
      title:
        'NEXT.JS: ENTENDENDO A RENDERIZAÇÃO REACT NO LADO SERVIDOR [PARTE #02]',
      authorId: '',
      authorName: 'Lucas Nhimi',
      authorAvater: 'avatarUrl',
      views: 10,
      thumb: '/thumbs/next02.png',
      videoUrl: 'url',
      updateAt: new Date(),
    },
    {
      id: 3,
      title: 'NEXT.JS: ROTAS ESTÁTICAS E DINÂMICAS [PARTE #03]',
      authorId: '',
      authorName: 'Lucas Nhimi',
      authorAvater: 'avatarUrl',
      views: 10,
      thumb: '/thumbs/next03.png',
      videoUrl: 'url',
      updateAt: new Date(),
    },
    {
      id: 4,
      title: 'NEXT.JS: ROTAS ESTÁTICAS E DINÂMICAS [PARTE #03]',
      authorId: '',
      authorName: 'Lucas Nhimi',
      authorAvater: 'avatarUrl',
      views: 10,
      thumb: '/thumbs/next03.png',
      videoUrl: 'url',
      updateAt: new Date(),
    },
  ];
  return {
    props: {
      data: JSON.parse(JSON.stringify(data)),
    },
  };
}

export default Home;
