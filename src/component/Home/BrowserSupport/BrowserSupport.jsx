import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";

const data = [
  {
    title: "sur",
    subtitle:
      "SUR Construction P.L.C is established by the Endowment Fund for the Rehabilitation of Tigray (EFFORT) in 1992 with an initial capital of Birr 108 million as a General Contractor - Grade one (GC-1).",
    icon: "sur.jpeg",
  },
  {
    title: "Midroc",
    subtitle:
      "Midroc Construction Ethiopia PLC is a civil engineering company based out of Addis Ababa, Addis Ababa, Addis Ababa, Ethiopia..",
    icon: "midroc.png",
  },
  {
    title: "Rama",
    subtitle:
      "Rama Construction Private Limited Company is established in 1995 in Addis Ababa, Ethiopia. Rama, a category - One General Contractor, ever since it's",
    icon: "rama.png",
  },
  {
    title: "sunshine",
    subtitle:
      "Sunshine Construction Plc was founded in 1984, as a sole proprietorship and later in 1993 transformed into a private limited company.",
    icon: "./sunshine.png",
  },
];

const BrowserSupport = () => {
  return (
    <Box p={2} mb={2}>
      <Box marginBottom={4} textAlign={"center"}>
        <Typography
          sx={{
            textTransform: "uppercase",
            fontWeight: "medium",
          }}
          gutterBottom
          color={"secondary"}
        >
          PARTINERSHIP
        </Typography>
        <Typography fontWeight={700} variant={"h4"}>
          Communcation all major Construction Company
        </Typography>
      </Box>
      <Grid container spacing={2}>
        {data.map((item, i) => (
          <Grid item xs={12} md={3} key={i}>
            <Box
              width={1}
              height={1}
              data-aos={"fade-up"}
              data-aos-delay={i * 100}
              data-aos-offset={100}
              data-aos-duration={600}
            >
              <Box
                display={"flex"}
                flexDirection={"column"}
                alignItems={"center"}
              >
                <Box
                  component={Avatar}
                  width={80}
                  height={80}
                  marginBottom={2}
                  src={item.icon}
                />
                <Typography
                  variant={"h6"}
                  gutterBottom
                  fontWeight={500}
                  align={"center"}
                >
                  {item.title}
                </Typography>
                <Typography align={"center"} color="text.secondary">
                  {item.subtitle}
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default BrowserSupport;
