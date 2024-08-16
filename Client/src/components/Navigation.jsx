import { Link } from "react-router-dom";
import React from "react";

export function Navigation() {
    return (
        <div className="fixed bottom-0 left-0 w-full bg-gray-800">
            <div className="flex justify-center p-4">
                <Link to="/" className="bg-blue-500 text-white px-4 py-2 rounded-lg">
                    Home
                </Link>
            </div>
        </div>
    );
}
