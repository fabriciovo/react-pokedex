import { styled, alpha } from "@mui/material/styles";
import {  InputBase } from "@mui/material";
export const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

export const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));


export const StyledPokemonNumber = styled("div")(`
font-family: "Flexo-Bold",arial,sans-serif;
color: #919191;
padding-top: 8px;
padding-left: 12px;
font-weight: bold;
`);


export const StyledPokeballLoading = styled("div")(`
  width:50px;
  height:50px;
  border-radius:50%;
  border: solid 2px black;
  position: relative;    
  background: linear-gradient(to bottom, #EEEEEE 0%,#FFFFFF 100%) !important;
  margin: 10px auto;
  
  &:before,
  &:after{
    content: "";
    display: block;
  }
  
  &,
  &:before,
  &:after{
    transition: all 600ms cubic-bezier(.67,.4,.36,.75);
  }
  
  &:before {
    width: 50px;
    height: 24px;
    border-bottom: solid 2px black;
    border-radius: 25px 25px 0 0;
    background: linear-gradient(to bottom, #d10000 0%,#ff0000 50%);
  }
  
  &:after {
    content: "";
    width: 10px;
    height: 10px;
    background: linear-gradient(to bottom, #fff 0%,#ccc 100%);
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    border-radius: 50%;
    box-shadow: 0 0 0 10px black,
                0 0 0 2px #ddd,
                0 0 0 (50px/14) black,
                0 0 10px (50px/17) rgba(0,0,0,0.4);
  }
  animation: tada 1200ms infinite;

`)