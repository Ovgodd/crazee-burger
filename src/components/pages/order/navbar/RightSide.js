import React, { useState } from "react";
import styled from "styled-components";
import NavbarRightSideIncomplet from "./NavbarRightSideIncomplet";
import ToggleButton from "../../../reusable-ui/ToggleButton";
import ProfileStyled from "./Profile";
import { toast } from "react-toastify";
export default function RightSide({ username }) {
  const [isAdmin, setIsAdmin] = useState();

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
      <NavbarRightSideIncomplet />
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
