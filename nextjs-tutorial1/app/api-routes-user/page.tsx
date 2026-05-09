"use client";

import {SubmitEvent} from "react";

function ApiRoutesUser() {
    const handleSubmit = async (e: SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get("name");

        await fetch("/api/create", {
            cache: "force-cache",
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({name}),
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" />
            <button type="submit">Send</button>
        </form>
    );
}

export default ApiRoutesUser;