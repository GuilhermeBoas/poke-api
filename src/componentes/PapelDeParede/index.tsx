import { useEffect, useState } from "react";
import styled from "styled-components";
// estilos
const PosiçãoDoPapelDePareda = styled.video`
    position: fixed;
    z-index: -5;
    bottom: 0;
    max-width: 100%;
    min-height: 100%;
    @media (max-aspect-ratio: 16/9) {
        max-width: none;
        width: auto;
        height: 100%;
    }
    @media (max-width: 800px) {
        right: -50%;
    }
    @media (max-width: 600px) {
        right: -70%;
    }
    @media (max-width: 470px) {
        right: -100%;
    }
    @media (max-width: 360px) {
        right: -130%;
    }
`;
const ContainerWallpaper = styled.div`
    .hidden {
        display: none;
    }
`;
//interfaces
interface PapelDeParede{
    fundos:string[],
    classEscolhida:string|null
}
const PapelDeParede = ({ fundos,classEscolhida}: PapelDeParede) => {
    const [videoSrc, setVideoSrc] = useState<string | null>(null);

    useEffect(() => {
        if (classEscolhida) {
            setVideoSrc(`https://ia904505.us.archive.org/32/items/god_20250222/${classEscolhida}.mp4`);
        }
    }, [classEscolhida]);

    return (
        <ContainerWallpaper>
            {fundos.map((titulo, index) => (
                <PosiçãoDoPapelDePareda
                    key={index}
                    id={titulo}
                    className={classEscolhida === titulo ? '' : 'hidden'}
                    autoPlay
                    muted
                    loop
                >
                    {classEscolhida === titulo && videoSrc && (
                        <source src={videoSrc} type="video/mp4" />
                    )}
                </PosiçãoDoPapelDePareda>
            ))}
        </ContainerWallpaper>
    );
};

export default PapelDeParede;

// 800 pxs- tablet
// 320 pxs - celular