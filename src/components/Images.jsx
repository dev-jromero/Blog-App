import { Image } from '@imagekit/react';

function Images( {src, className, w ,h, alt}) {
    return (
        <Image
            urlEndpoint={import.meta.env.VITE_IK_URL_ENDPOINT} 
            src={src}
            className={className} 
            loading="lazy"
            alt= {alt}
            width={w}
            height={h}
        />
    )
}

export default Images
