'use client'
import { useEffect, useRef } from 'react';

const useLoadScripts = (scripts) => {
    const scriptElementsRef = useRef([]);

    useEffect(() => {
        const loadScriptSequentially = async () => {
            for (const { src, id } of scripts) {
                await new Promise((resolve, reject) => {
                    let script = document.getElementById(id);

                    if (!script) {
                        script = document.createElement('script');
                        script.src = src;
                        script.id = id;
                        script.async = true;
                        script.onload = () => {
                            console.log(`${id} loaded`);
                            resolve();
                        };
                        script.onerror = () => {
                            console.error(`Error loading ${id}`);
                            reject(new Error(`Failed to load script: ${id}`));
                        };
                        document.body.appendChild(script);
                    } else {
                        resolve();
                    }

                    scriptElementsRef.current.push(script);
                });
            }
        };

        loadScriptSequentially().catch((error) => {
            console.error('Script loading failed', error);
        });

        // Cleanup function
        return () => {
            scriptElementsRef.current.forEach((script) => {
                if (script && script.parentNode) {
                    script.parentNode.removeChild(script);
                }
            });
            scriptElementsRef.current = [];
        };
    }, [scripts]);

    // Optionally return the script elements for further use
    return scriptElementsRef.current;
};

export default useLoadScripts;
