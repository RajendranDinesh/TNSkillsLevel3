import Image from 'next/image'
import file from '@assets/logo.png'

interface LogoParams {
    height?: number | `${number}`
}

export default function Logo({
    height = 50
}: LogoParams) {
    return <Image src={file} alt='logo' height={height} priority />
}
