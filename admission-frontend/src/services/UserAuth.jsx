import React, { useState } from 'react';
import { Outlet, Navigate } from 'react-router-dom';

export const UserAuth = () => {
    const token = localStorage.getItem('token') !== null;
    const role =  localStorage.getItem('role') === "STUDENT";

    return (

        token && role ? <Outlet /> : <Navigate to='/' />
    )
};
