import { connect } from "react-redux";
import { RootState } from "./reducer";
import React from "react";
import { checkAuthenticateDispatch } from "./dispatchers/authenticate";
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
  checkAuthenticationConnect: checkAuthenticateDispatch
};
export default connect(mapStateToProps, mapDispatchToProps)(AppEntry as any);
