import Image from "next/image"

type Props = {}

export default function Logo({ }: Props) {
  return (
    <Image height={130} width={130} alt="logo" src={"/logo.svg"} />
  )
}


