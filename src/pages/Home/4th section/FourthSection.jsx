import { Box, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import CustomButton from "../../../components/Button component/CustomButton";
import CodeOffIcon from "@mui/icons-material/CodeOff";
import { useStyles } from "../../page setup/PageSetupStyle";
import { StyledSecondSection } from "../../../components/Style/AccessThemes";
import H6Typography from "../../../components/Text component/Home section/H6Typography";
import H2Typography from "../../../components/Text component/Home section/H2Typography";

const FourthSection = () => {
  const navigate = useNavigate();
  const classes = useStyles();

  return (
    <StyledSecondSection>
      <Stack
        spacing={2}
        className={classes.root}
        sx={{ px: { xs: 2, sm: 5, md: 10, lg: 25 } }}
      >
        <Box>
          <H2Typography text="Add interactivity" />
          <br /> <H2Typography text="wherever you need it" />
          <Typography
            sx={{ mt: 5, fontSize: { xs: 18, sm: 23 } }}
            variant="h6"
            color="inherit"
          >
            React components receive data and return what should appear on the
            screen. You can pass them new data in response to an interaction,
            like when the user types into an input. React will then update the
            screen to match the new data.
          </Typography>
          <H6Typography
            text="You don’t have to build your whole page in React. Add React to your
            existing HTML page, and render interactive React components anywhere
            on it."
          />
          <CustomButton
            icon={<CodeOffIcon />}
            ButtonText="Add React to your page"
            onClick={() => {
              navigate("/add-react-to-an-existing-project");
            }}
          />
        </Box>
      </Stack>
    </StyledSecondSection>
  );
};

export default FourthSection;
