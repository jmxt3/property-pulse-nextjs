import Link from 'next/link'

export default function Navbar() {
    return (
        <div className='flex flex-row items-center justify-between w-full absolute z-10 p-5'>
            <Link href='/' className='font-bold text-2xl'> Super App</Link>
            <div className='flex flex-row gap-5' />
            <Link href='/properties'> Properties</Link>
            <Link href='/properties/1'> Id Properties</Link>
            <Link href='/properties/add'> Add Property</Link>
        </div>
    );
}
