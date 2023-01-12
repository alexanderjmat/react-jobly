import {React, useState} from "react";

const handleLogout = (token) => {
    localStorage.removeItem(token);
};

export default handleLogout;