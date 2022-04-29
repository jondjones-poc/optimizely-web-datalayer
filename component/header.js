import React from "react";
import Link from "next/link";

export default function Header() {

    const navLinks = [
        { name: "Add Event Data From DataLayer",
            path: "/"
        },
        { name: "Code Based Experiment",
            path: "/data"
        },
        { name: "Force Bucket",
            path: "/force-bucket"
        },
    ];

    return (
        <header>
            <nav>
                <div className="topnav">
                    <div className="title">
                    <Link href="https://github.com/jondjones-poc/optimizely-web-datalayer">
                        Optimizely Web Javascript Examples
                    </Link>
                    </div>
                    {navLinks.map((link, index) => {
                    return <Link key={index} href={link.path}>
                                <a>{link.name}</a>
                            </Link>
                    })}
                </div>
            </nav>
        </header>
    );
}