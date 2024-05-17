"use client";
import { IcreateFirefly } from "@/interfaces/interfaces";
import React, { useEffect, useState } from "react";
const createFirefly = () => ({
    id: Math.random(),
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    animationDuration: `${Math.random() * 5 + 5}s`,
});
const FireFliesBackground = () => {
    const [fireflies, setFireflies] = useState<IcreateFirefly[]>([]);
    useEffect(() => {
        const addFireflyPeriodically = () => {
            const newFirefly = createFirefly();
            setFireflies((currentFireflies) => [
                ...currentFireflies.slice(-14),
                newFirefly,
            ]);
        };
        const interval = setInterval(addFireflyPeriodically, 1000);
        return () => clearInterval(interval);
    }, []);
    return (
        <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden">
            {fireflies.map(
                ({ id, animationDuration, left, top }: IcreateFirefly) => {
                    return (
                        <div
                            key={id}
                            className="absolute roudned-full w-[10px] h-[10px] bg-firefly-radial"
                            style={{
                                top: top,
                                left: left,
                                animation: `move ${animationDuration} infinite alternate`,
                            }}
                        ></div>
                    );
                }
            )}
        </div>
    );
};

export default FireFliesBackground;
