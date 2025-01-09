import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <div>
      <section className="grid grid-cols-2 h-[50vh]">
      <div className="bg-purple-300 flex flex-col gap-4 justify-center  items-center">
      <p className="font-bold text-2xl">The best url shortner</p>
      <p>Most straight forward app </p>
      <div className='flex gap-3 pr-3'>
        <Link href="/generate"><button className='bg-purple-400 shadow-lg rounded-md px-1'>Try Now</button></Link>
        <Link href="/about"><button className='bg-purple-400 shadow-lg rounded-md px-1'>Github</button></Link>
        </div>
      </div>
      <div className=" flex justify-start relative">
      <Image className="" alt="an image from globe." src={"/office.jpg"} fill={true} ></Image>
      </div>
      </section>
    </div>
  )
}
