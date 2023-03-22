// import { styled } from "@mui/material/styles";
// import CheckCircleIcon from "@mui/icons-material/CheckCircle";

// import Radio from "@mui/material/Radio";

// const SquareRadioIcon = styled("span")(({ theme }) => ({
//   borderRadius: "0px",
//   width: "16px",
//   height: "16px",
//   backgroundColor: theme.palette.text.secondary,
// }));

// const SquareRadioCheckedIcon = styled(SquareRadioIcon)(({ theme }) => ({
//   backgroundColor: theme.palette.primary.main,
// }));

// const SquareRadio = (props) => (
//   <Radio
//     disableRipple
//     color="default"
//     // color: `${theme.palette.text.secondary} !important`,
//     checkedIcon={<SquareRadioCheckedIcon />}
//     icon={<SquareRadioIcon />}
//     {...props}
//   />
// );
// export default SquareRadio;
import { styled } from "@mui/material/styles";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import "./SquareRadio.scss";
import Radio from "@mui/material/Radio";

const SquareRadioIcon = styled("span")(({ theme }) => ({
  borderRadius: "0px",
  width: "18px",
  height: "18px",
  //   backgroundColor: theme.palette.text.secondary,
  border: "1px solid",
}));

const SquareRadioCheckedIcon = styled(SquareRadioIcon)(({ theme }) => ({
  //   backgroundColor: theme.palette.primary.main,
  position: "relative",
  "&::before": {
    content: '""',
    position: "absolute",
    top: "-2px",
    left: "1px",
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    backgroundColor: "white",
    zIndex: "1",
  },
}));

const SquareRadio = (props) => (
  <Radio
    disableRipple
    color="default"
    checkedIcon={
      <SquareRadioCheckedIcon>
        <CheckCircleIcon />
      </SquareRadioCheckedIcon>
    }
    icon={<SquareRadioIcon />}
    {...props}
  />
);
export default SquareRadio;
