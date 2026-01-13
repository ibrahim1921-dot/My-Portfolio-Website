"use client";

import { useState } from "react";
import {
  Box,
  Paper,
  TextField,
  Button,
  Typography,
  Stack,
  Alert,
  CircularProgress,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormStatus {
  type: "success" | "error" | null;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<FormStatus>({ type: null, message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: null, message: "" });

    // Simulate form submission (replace with actual API call)
    try {
      // Example: await fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) })

      // Simulate delay
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setStatus({
        type: "success",
        message: "Thank you for your message! I will get back to you soon.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch {
      setStatus({
        type: "error",
        message: "Something went wrong. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Paper
      elevation={0}
      sx={{
        p: { xs: 3, md: 4 },
        borderRadius: 3,
        border: 1,
        borderColor: "divider",
      }}
    >
      <Stack spacing={3}>
        <Typography variant="h5" fontWeight={700}>
          Send me a message
        </Typography>

        {status.type && (
          <Alert
            severity={status.type}
            onClose={() => setStatus({ type: null, message: "" })}
          >
            {status.message}
          </Alert>
        )}

        <Box component="form" onSubmit={handleSubmit}>
          <Stack spacing={3}>
            {/* Name Field */}
            <TextField
              fullWidth
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              variant="outlined"
              disabled={isSubmitting}
            />

            {/* Email Field */}
            <TextField
              fullWidth
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              variant="outlined"
              disabled={isSubmitting}
            />

            {/* Subject Field */}
            <TextField
              fullWidth
              label="Subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              variant="outlined"
              disabled={isSubmitting}
            />

            {/* Message Field */}
            <TextField
              fullWidth
              label="Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              multiline
              rows={6}
              variant="outlined"
              disabled={isSubmitting}
            />

            {/* Submit Button */}
            <Button
              type="submit"
              variant="contained"
              size="large"
              endIcon={
                isSubmitting ? (
                  <CircularProgress size={20} color="inherit" />
                ) : (
                  <SendIcon />
                )
              }
              disabled={isSubmitting}
              sx={{
                py: 1.5,
                textTransform: "none",
                fontWeight: 700,
                fontSize: "1rem",
              }}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </Stack>
        </Box>
      </Stack>
    </Paper>
  );
}
