import { Box, Container, Grid } from "@mui/material";
import ContactHero from "@/components/contact/ContactHero";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";

export const metadata = {
  title: "Contact Me | Abdul-Sobur Ibrahim",
  description:
    "Get in touch with me for project inquiries, collaborations, or just to say hello.",
};

export default function ContactPage() {
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
        width: "100%",
      }}
    >
      <ContactHero />

      <Box sx={{ py: 8 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {/* Contact Form */}
            <Grid size={{xs: 12, md: 7}}>
              <ContactForm />
            </Grid>

            {/* Contact Info */}
            <Grid size={{xs: 12, md: 5}}>
              <ContactInfo />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
