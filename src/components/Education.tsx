import React from 'react';
import { 
  Box,
  Typography,
  Card,
  CardContent,
  Stack,
  useTheme,
  useMediaQuery
 } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const Education: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const educationList = [
    {
      title: 'SMK Kedawang',
      subtitle: 'Pentaksiran Tingkatan 3 (PT3)',
      date: '2012 – 2014',
      result: '7A 1B 2C',
    },
    {
      title: 'MRSM Kubang Pasu',
      subtitle: 'Sijil Pelajaran Malaysia (SPM)',
      date: '2015 – 2016',
      result: '5A 4B',
    },
    {
      title: 'Kolej Matrikulasi Kedah',
      subtitle: 'Science Stream (Computer Science)',
      date: '2017 – 2018',
    },
    {
      title: 'University Malaysia Terengganu',
      subtitle: 'Bachelor of Computer Science (Software Engineering) with Hons',
      date: '2019 – 2022',
    },
    {
      title: 'Perak Human Capital Development Centre (PHCDC)',
      subtitle: [
        'Expert Craftsmans Programmes – Pneumatic and Electro Pneumatics',
        'Expert Craftsmans Programmes – Mechatronic System',
        'Data Modelling and Statistical Analysis',
      ],
    },
  ];

  const EducationCard = (edu: typeof educationList[0], key?: number) => (
    <Card
      key={key}
      elevation={6}
      sx={{
        backgroundColor: '#2a2540',
        color: '#ffffff',
        borderLeft: `5px solid ${theme.palette.primary.main}`,
        borderRadius: 3,
        px: 3,
        py: 2,
        mx: isMobile ? 1 : 0,
        transition: 'transform 0.3s ease',
        '&:hover': {
          transform: 'translateY(-4px)',
        },
      }}
    >
      <CardContent>
        <Typography variant="h6" sx={{ fontWeight: 700 }}>
          {edu.title}
        </Typography>

        {Array.isArray(edu.subtitle) ? (
          <Stack spacing={0.5} sx={{ mt: 1 }}>
            {edu.subtitle.map((item, idx) => (
              <Typography key={idx} variant="body2" sx={{ color: '#bcb6e2' }}>
                • {item}
              </Typography>
            ))}
          </Stack>
        ) : (
          <Typography variant="body2" sx={{ color: '#bcb6e2', mt: 0.5 }}>
            • {edu.subtitle}
          </Typography>
        )}

        {edu.date && (
          <Typography variant="caption" sx={{ color: '#aaa', display: 'block', mt: 1 }}>
            {edu.date}
          </Typography>
        )}

        {edu.result && (
          <Typography variant="caption" sx={{ color: '#aaa' }}>
            {edu.result}
          </Typography>
        )}
      </CardContent>
    </Card>
  );

  return (
    <Box
      id="Education"
      sx={{
        px: isMobile ? 0: 6,
        py: 6,
        bgcolor: '#1c1c2b',
        color: '#fff',
      }}
    >
      <Typography
        variant={isMobile ? 'h5' : 'h4'}
        sx={{
          fontWeight: 'bold',
          borderLeft: `6px solid ${theme.palette.warning.main}`,
          pl: 2,
          mb: 5,
          ml: isMobile ? 2 : 0,
        }}
      >
        Education Background
      </Typography>

      {isMobile ? (
        <Box sx={{ px: 1 }}>
          <Swiper
            modules={[Pagination]}
            spaceBetween={16}
            slidesPerView={1}
            pagination={{ clickable: true }}
          >
            {educationList.map((edu, index) => (
              <SwiperSlide key={index}>{EducationCard(edu)}</SwiperSlide>
            ))}
          </Swiper>
        </Box>
      ) : (
        <Stack spacing={4}>
          {educationList.map((edu, index) => EducationCard(edu, index))}
        </Stack>
      )}
    </Box>
  )
}

export default Education;