"use client"; // Mark as a client component

import { useEffect } from "react";
import { useRouter } from "next/navigation"; // Use `next/navigation` for the `app` directory

export default function useAuth() {
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem("authToken");
        if (!token) {
            router.push("/login"); // Redirect to login if no token
        }
    }, [router]);
}
