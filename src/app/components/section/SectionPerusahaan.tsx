import { DataPerusahaan, SECTIONS } from '@/config/constants';
import Image from 'next/image';

export default function SectionPerusahaan() {
    return (
        <div className='grid grid-cols-3 gap-4'>
            {(SECTIONS.perusahaan.data as DataPerusahaan[])?.map(
                (perusahaan: DataPerusahaan, idx: number) => (
                    <div key={idx}>
                        <Image
                            src={perusahaan.img_src}
                            alt={perusahaan.alt}
                            width={100}
                            height={100}
                            className='w-full aspect-square object-contain bg-white p-2'
                        />
                    </div>
                )
            )}
        </div>
    );
}
