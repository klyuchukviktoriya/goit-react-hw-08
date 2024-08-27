import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import AppBar from "../AppBar/AppBar";

export default function Layout() {
    return (
        <>
            <AppBar />
            <Suspense fallback={null}>
                <Outlet />
            </Suspense>
        </>
    );
}
