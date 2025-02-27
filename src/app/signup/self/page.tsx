'use client';
import { useRouter } from "next/navigation"
import { useEffect } from "react";

export default function Self(){
    const router = useRouter();
    useEffect(() => {
        async function fetchUser() {
            const res = await fetch("/api/user");
            if (res.ok) {
                const user = await res.json();
                console.log(user);
            } else {
                console.error("Failed to fetch user");
            }
            router.push('/');
        }
        fetchUser();
    }, []);
    return (<></>)
}