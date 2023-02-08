import React, { useContext } from "react";
import styled from "styled-components";
import ToggleButton from "../../../reusable-ui/ToggleButton";
import ProfileStyled from "./Profile";
import { toast } from "react-toastify";
import Toast from "../../../reusable-ui/Toast";
import AdminContext from "../../../../context/AdminContext";
export default function RightSide({ username }) {
  const { isAdmin, setIsAdmin } = useContext(AdminContext);
  const enableToast = () => {
    if (!isAdmin) {
      toast.info("Mode admin activé", {
        // icon: <FaUserSecret size={30} />,
        theme: "dark",
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      //openAdminPanel
    }
    setIsAdmin(!isAdmin);
  };
  return (
    <RightSideStyled>
      <div className="toggle">
        <ToggleButton
          isChecked={isAdmin}
          onToggle={enableToast}
          labelIfUnchecked="ACTIVER LE MODE ADMIN"
          labelIfChecked="DÉSACTIVER LE MODE ADMIN"
        />
      </div>
      <ProfileStyled username={username} />
      <Toast />
    </RightSideStyled>
  );
}
const RightSideStyled = styled.div`
  display: flex;
  align-items: center;

  .toggle {
    margin-right: 50px;
  }
`;
