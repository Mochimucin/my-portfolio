import {
  Box,
  Card,
  CardContent,
  Divider,
  Stack,
  Typography,
  Paper,
  useTheme,
  useMediaQuery
} from '@mui/material';
import { Email, Phone, LocationOn } from '@mui/icons-material';

const Contact = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box id="Contact" sx={{ backgroundColor: '#0e0e1a', px: { xs: 2, md: 4 }, py: 5 }}>
      <Typography
        variant='h4'
        sx={{
          fontWeight: 'bold',
          borderLeft: `6px solid ${theme.palette.warning.main}`,
          pl: 2,
          ml: 0,
        }}
      >
        Contact Information
      </Typography>
      <Card 
        elevation={3}
        sx={{
          backgroundColor: '#0e0e1a',
          color: 'white',
          borderRadius: 3,
          pt: 3,
          width: '100%',
        }}  
      >
        <CardContent>
          <Stack direction={{ xs: 'column', md: 'row' }} spacing={4}>
            {/* Contact Section */}
            <Box sx={{ flex: 1 }}>
              <Typography
                variant="h5"
                fontWeight="bold"
                gutterBottom
                sx={{ color: '#00bcd4' }}
              >
                Contact
              </Typography>

              <Stack spacing={2} mt={5}>
                <Stack direction="row" alignItems="center" spacing={2}>
                  <Email sx={{ color: '#00bcd4' }} />
                  <Typography variant="body1">
                    muhammadmuhsin67@gmail.com
                  </Typography>
                </Stack>

                <Stack direction="row" alignItems="center" spacing={2}>
                  <Phone sx={{ color: '#00bcd4' }} />
                  <Typography variant="body1">019-2029523</Typography>
                </Stack>

                <Stack direction="row" alignItems="center" spacing={2}>
                  <LocationOn sx={{ color: '#00bcd4' }} />
                  <Typography variant="body1">
                    No.7 Kampung Linchai, Mukim Kedawang, 07000 Langkawi, Kedah
                  </Typography>
                </Stack>
              </Stack>
            </Box>

            <Divider
              orientation= {isMobile ? 'horizontal' : 'vertical'}
              flexItem
              sx={{
                borderColor: '#333',
                display: "block",
              }}
            />

            {/* References Section */}
            <Box sx={{ flex: 1 }}>
              <Typography
                variant="h5"
                fontWeight="bold"
                gutterBottom
                sx={{ color: '#00bcd4' }}
              >
                References
              </Typography>

              <Stack spacing={2}>
                <Paper
                  variant="outlined"
                  sx={{
                    backgroundColor: '#1a1a2e',
                    color: 'white',
                    p: 2,
                    borderRadius: 2,
                    borderColor: '#333',
                  }}
                >
                  <Typography fontWeight="bold">
                    Y. Bhg. Prof. Ts. Dato’ Dr. Aziz bin Deraman
                  </Typography>
                  <Typography variant="body2">
                    • Science Computer Lecturer
                  </Typography>
                  <Typography variant="body2">• 09-6683155 / 3676</Typography>
                </Paper>

                <Paper
                  variant="outlined"
                  sx={{
                    backgroundColor: '#1a1a2e',
                    color: 'white',
                    p: 2,
                    borderRadius: 2,
                    borderColor: '#333',
                  }}
                >
                  <Typography fontWeight="bold">
                    Noor Meryza Binti Mazlan
                  </Typography>
                  <Typography variant="body2">
                    • Senior Business Analyst, Infomina Berhad
                  </Typography>
                  <Typography variant="body2">• 019-6670749</Typography>
                </Paper>
              </Stack>
            </Box>
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
}

export default Contact;