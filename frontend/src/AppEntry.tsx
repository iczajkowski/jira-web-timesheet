import { connect } from "react-redux";
import { RootState } from "./reducer";
import React from "react";
import { checkAuthenticate } from "./api/authenticate";
import Routes from "./Routes";

interface Props {
  checkAuthenticationConnect: () => void;
  isAuthenticated: boolean | null;
}

const AppEntry: React.FC<Props> = ({
  checkAuthenticationConnect,
  isAuthenticated
}) => {
  React.useEffect(() => {
    checkAuthenticationConnect();
  }, []);
  return isAuthenticated != null ? <Routes /> : null;
};

const mapStateToProps = (state: RootState) => ({
  isAuthenticated: state.appState.isAuthenticated
});
const mapDispatchToProps = {
  checkAuthenticationConnect: checkAuthenticate
};
export default connect(mapStateToProps, mapDispatchToProps)(AppEntry as any);
