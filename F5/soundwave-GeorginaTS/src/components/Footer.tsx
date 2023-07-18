import { Button, capitalize, styled } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

const MyButton = styled(Button)({
  color: "white",
  fontSize: 12,
});

export const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div>
          <button>About us</button>
          <button>Contact</button>
        </div>
        <div>
          <button><TwitterIcon /> Twitter</button>
          <button> <FacebookIcon /> Facebook</button>
        </div>
      </div>
    </footer>
  );
};
