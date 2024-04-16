import Image from 'next/image'
import file from '@assets/logo.png'

interface LogoParams {
    height?: number | `${number}`
    className?: string
}

export default function Logo({
    height = 50,
    className
}: LogoParams) {
    return <Image className={className} src={file} alt='logo' height={height} priority />
}
