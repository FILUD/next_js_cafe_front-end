import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface CustomBounceLoaderProps {
    loading: boolean;
    color?: string;
    size?: number;
}

export const CustomBounceLoader: React.FC<CustomBounceLoaderProps> = ({
    loading = true,
    color = "#F9D9AA",
    size = 50
}) => {
    const [bounce, setBounce] = useState(false);

    useEffect(() => {
        if (!loading) return;

        const interval = setInterval(() => {
            setBounce(prev => !prev);
        }, 500);

        return () => clearInterval(interval);
    }, [loading]);

    if (!loading) return null;

    return (
        <div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 1000
            }}
        >
            <motion.div
                style={{
                    backgroundColor: color,
                    borderRadius: '50%',
                    height: size * 0.6,
                    width: size * 0.6,
                    position: 'relative',
                }}
                animate={{
                    y: bounce ? - size * 2 : 8,
                    width: bounce ? size * 0.8 : size * 0.6,
                    height: bounce ? size * 0.8 : size * 0.6, 
                }}
                transition={{
                    duration: 0.5,
                    repeat: Infinity,
                    repeatType: 'reverse',
                    delay: 0.1,
                    ease: "easeInOut",
                }}
            />
        </div>
    );
};