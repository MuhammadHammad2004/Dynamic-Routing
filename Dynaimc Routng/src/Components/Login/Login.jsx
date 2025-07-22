import PagesLink from "../PagesLink";
import Loginpage from "./Loginpage";

export const Login = () => {
  return (
    <div style={{ marginTop: "80px" }}>
      <PagesLink />
      <br />
      <div
        style={{
          marginTop: "4rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Loginpage />
      </div>
    </div>
  );
};
