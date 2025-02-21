import { useEffect, useState } from "react";
import styled from "styled-components";

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
        text-align: center;
    }
`;

const ContainerWallpaper = styled.div`
    .hidden {
        display: none;
    }
`;

const PapelDeParede = ({ fundos, classEscolhida }: { fundos: string[], classEscolhida: string | null }) => {
    const [videoSrc, setVideoSrc] = useState<string | null>(null);

    useEffect(() => {
        if (classEscolhida) {
            // Define o caminho do vídeo diretamente
            setVideoSrc(`/gif/${classEscolhida}.mp4`);
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