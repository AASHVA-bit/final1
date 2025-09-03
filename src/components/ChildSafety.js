// file: src/components/ChildSafety.js
import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Alert,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Fade,
  Zoom,
  Slide
} from "@mui/material";
import {
  Phone,
  Warning,
  Security,
  Help,
  Close,
  Shield,
  Report,
  CheckCircle,
  ChildCare
} from "@mui/icons-material";
import { keyframes, styled } from "@mui/material/styles";

// Animations
const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

const glow = keyframes`
  0% { box-shadow: 0 0 5px rgba(25, 118, 210, 0.5); }
  50% { box-shadow: 0 0 20px rgba(25, 118, 210, 0.8); }
  100% { box-shadow: 0 0 5px rgba(25, 118, 210, 0.5); }
`;

// Styled components
const ChildCard = styled(Card)({
  background:
    "linear-gradient(145deg, rgba(25, 118, 210, 0.95) 0%, rgba(33, 150, 243, 0.95) 100%)",
  borderRadius: 16,
  border: "2px solid rgba(255, 255, 255, 0.3)",
  color: "white",
  animation: `${glow} 3s ease-in-out infinite`,
  "& .MuiTypography-h5": {
    fontSize: "1.5rem",
    fontWeight: 700
  },
  "& .MuiTypography-body1": {
    fontSize: "1.1rem"
  }
});

const BigButton = styled(Button)({
  fontSize: "1.2rem !important",
  padding: "12px 24px !important",
  margin: "8px !important",
  minWidth: "200px !important",
  animation: `${float} 3s ease-in-out infinite`
});

const AnimatedIcon = styled(Box)({
  animation: `${pulse} 2s ease-in-out infinite`,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center"
});

function ChildSafetyContent() {
  const [dangerDialogOpen, setDangerDialogOpen] = useState(false);
  const [preventionDialogOpen, setPreventionDialogOpen] = useState(false);

  const onlineDangers = [
    {
      title: "Cyberbullying",
      description:
        "Harassment through messages, social media, or online games that can harm emotional well-being.",
      icon: <Warning color="error" />
    },
    {
      title: "Inappropriate Content",
      description:
        "Accidental or intentional exposure to violent, harmful, or adult content online.",
      icon: <Report color="warning" />
    },
    {
      title: "Stranger Danger",
      description:
        "Strangers pretending to be friends in chatrooms, games, or social platforms.",
      icon: <Security color="error" />
    },
    {
      title: "Gaming Scams",
      description:
        "Fake offers in online games that ask for passwords, money, or personal details.",
      icon: <Report color="info" />
    }
  ];

  const preventionTips = [
    "Never share passwords, addresses, or phone numbers online",
    "Tell parents or teachers if you feel uncomfortable about something online",
    "Use parental control and privacy settings on devices and apps",
    "Do not respond to strangers in games or chats",
    "Think before posting anything — once online, it can stay forever",
    "Balance screen time with offline activities",
    "Report and block anyone who sends harmful or rude messages"
  ];

  return (
    <ChildCard>
      <CardContent sx={{ p: 3 }}>
        <Box display="flex" alignItems="center" mb={2}>
          <AnimatedIcon>
            <ChildCare sx={{ fontSize: 32, mr: 1.5 }} />
          </AnimatedIcon>
          <Typography variant="h5" gutterBottom>
            Child Safety Assistant
          </Typography>
        </Box>

        <Fade in={true} timeout={1500}>
          <Typography variant="body1" paragraph>
            Guidance for children and students to stay safe while using the
            internet, social media, and online games.
          </Typography>
        </Fade>

        <Box display="flex" flexDirection="column" alignItems="center" mt={3}>
          <Slide direction="right" in={true} timeout={800}>
            <BigButton
              variant="contained"
              color="primary"
              startIcon={<Help />}
              onClick={() => setDangerDialogOpen(true)}
              sx={{ mb: 2 }}
            >
              Online Dangers
            </BigButton>
          </Slide>

          <Slide direction="right" in={true} timeout={1000}>
            <BigButton
              variant="contained"
              color="secondary"
              startIcon={<Shield />}
              onClick={() => setPreventionDialogOpen(true)}
              sx={{ mb: 2 }}
            >
              Prevention Tips
            </BigButton>
          </Slide>

          <Slide direction="right" in={true} timeout={1200}>
            <BigButton
              variant="contained"
              color="success"
              startIcon={<Phone />}
              onClick={() => window.open("tel:1098")}
            >
              Emergency Helpline: 1098
            </BigButton>
          </Slide>
        </Box>

        <Fade in={true} timeout={2000}>
          <Box
            mt={3}
            p={2}
            sx={{
              backgroundColor: "rgba(255,255,255,0.1)",
              borderRadius: 2
            }}
          >
            <Typography variant="body1" sx={{ fontWeight: 600, mb: 1 }}>
              Important Contacts:
            </Typography>
            <Typography variant="body2">
              • Child Helpline: <strong>1098</strong>
              <br />
              • National Cyber Crime Helpline: <strong>1930</strong>
              <br />
              • Police: <strong>100</strong>
              <br />
              • Trusted Parent/Teacher
              <br />
              • Cyber Crime Portal: <strong>cybercrime.gov.in</strong>
            </Typography>
          </Box>
        </Fade>
      </CardContent>

      {/* Online Dangers Dialog */}
      <Dialog
        open={dangerDialogOpen}
        onClose={() => setDangerDialogOpen(false)}
        maxWidth="md"
        fullWidth
        TransitionComponent={Fade}
      >
        <DialogTitle>
          <Box display="flex" alignItems="center">
            <Warning color="warning" sx={{ mr: 1 }} />
            Online Dangers for Children
            <IconButton
              aria-label="close"
              onClick={() => setDangerDialogOpen(false)}
              sx={{ position: "absolute", right: 8, top: 8 }}
            >
              <Close />
            </IconButton>
          </Box>
        </DialogTitle>
        <DialogContent dividers>
          <List>
            {onlineDangers.map((danger, index) => (
              <React.Fragment key={index}>
                <ListItem>
                  <ListItemIcon>{danger.icon}</ListItemIcon>
                  <ListItemText
                    primary={danger.title}
                    secondary={danger.description}
                    primaryTypographyProps={{ fontWeight: 600 }}
                  />
                </ListItem>
                {index < onlineDangers.length - 1 && (
                  <Divider variant="inset" />
                )}
              </React.Fragment>
            ))}
          </List>
          <Alert severity="warning" sx={{ mt: 2 }}>
            <strong>Be smart:</strong> If something online makes you feel scared
            or confused, stop and tell a trusted adult immediately.
          </Alert>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDangerDialogOpen(false)}>Close</Button>
        </DialogActions>
      </Dialog>

      {/* Prevention Tips Dialog */}
      <Dialog
        open={preventionDialogOpen}
        onClose={() => setPreventionDialogOpen(false)}
        maxWidth="md"
        fullWidth
        TransitionComponent={Fade}
      >
        <DialogTitle>
          <Box display="flex" alignItems="center">
            <Shield color="success" sx={{ mr: 1 }} />
            Prevention Tips for Children
            <IconButton
              aria-label="close"
              onClick={() => setPreventionDialogOpen(false)}
              sx={{ position: "absolute", right: 8, top: 8 }}
            >
              <Close />
            </IconButton>
          </Box>
        </DialogTitle>
        <DialogContent dividers>
          <List>
            {preventionTips.map((tip, index) => (
              <React.Fragment key={index}>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircle color="success" />
                  </ListItemIcon>
                  <ListItemText primary={tip} />
                </ListItem>
                {index < preventionTips.length - 1 && (
                  <Divider variant="inset" />
                )}
              </React.Fragment>
            ))}
          </List>
          <Alert severity="success" sx={{ mt: 2 }}>
            <strong>Stay safe:</strong> Always talk openly with parents or
            teachers about your online experiences.
          </Alert>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setPreventionDialogOpen(false)}>Close</Button>
        </DialogActions>
      </Dialog>
    </ChildCard>
  );
}

// Wrapper with button to open the card
export default function ChildSafety() {
  const [open, setOpen] = useState(false);

  return (
    <Box textAlign="center" mt={5}>
      <Button
        variant="contained"
        size="large"
        onClick={() => setOpen(true)}
        startIcon={<ChildCare />}
      >
         Child Safety Assistant
      </Button>

      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        maxWidth="md"
        fullWidth
        TransitionComponent={Zoom}
      >
        <DialogContent sx={{ p: 0 }}>
          <ChildSafetyContent />
        </DialogContent>
      </Dialog>
    </Box>
  );
}
