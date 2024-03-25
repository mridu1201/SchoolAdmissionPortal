import React, { useState } from 'react';
import { Outlet, Navigate } from 'react-router-dom';

export const AdminAuth = () => {

    const token = localStorage.getItem('token') !== null;
    const role =  localStorage.getItem('role') === "ADMIN";

    return (

        token && role ? <Outlet /> : <Navigate to='/' />
    )
};
