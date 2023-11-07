import classes from "./MainHeader.module.css";

const MainHeader = () => {
    return (
      <header className={classes.main}>
        <h1>{t("header.title")}</h1>
      </header>
    );
  };
  
  export default MainHeader;