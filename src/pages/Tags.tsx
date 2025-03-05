import { useQuery } from '@tanstack/react-query';
import Banner from '../components/Banner';
import { IoIosArrowDown } from "react-icons/io";
import axios from 'axios';
import Catalog from '../components/Catalog';
import { useState } from 'react';
import BannerGrid from '../components/BannerGrid';
import Breadcrumb from '../components/Breadcrumb';
import Ads from '../components/Ads';
import Trending from '../components/Trending';
import Features from '../components/Features';
import Blog from '../components/Blog';

const Tags = () => {
    const [selectedTag, setSelectedTag] = useState<string | null>('groceries');

    const { data: categories } = useQuery({
        queryKey: [selectedTag],
        queryFn: () =>
            axios.get('https://dummyjson.com/products/category-list')
                .then(res => res.data)
    });

    const handleSort = (tag: string) => {
        setSelectedTag(prev => (prev === tag ? null : tag));        
    };

    return (
        <>
            <Banner />
            <div className='py-10 px-4'>
                <div className='max-w-[1500px] mx-auto'>
                    <div className='flex gap-3 max-[647px]:flex-wrap max-[647px]:justify-center'>
                        <div className='border border-[#EEEEEE] rounded w-[376px] flex flex-col p-4 gap-2.5'>
                            <div className='flex justify-between border-b border-[#EEEEEE] py-3 items-center'>
                                <span className='font-semibold text-[#5CAF90] text-[17px]'>Category</span>
                                <span className='text-[#212529]'><IoIosArrowDown /></span>
                            </div>
                            <h2 
                                className={`text-[#777777] font-bold text-[15px] cursor-pointer ${selectedTag === null ? 'text-[#5CAF90]' : ''}`}
                                onClick={() => setSelectedTag(null)}
                            >
                                All
                            </h2>
                            {categories?.map((item: string) => (
                                <div className='flex flex-col gap-2' key={item}>
                                    <div className='flex justify-between items-center'>
                                        <label className='flex gap-2 items-center cursor-pointer w-full' htmlFor={item}>
                                            <input
                                                id={item}
                                                type="checkbox"
                                                checked={selectedTag === item}
                                                onChange={() => handleSort(item)}
                                            />
                                            <h2 className={`text-[#777777] text-[14px] ${selectedTag === item ? 'text-[#5CAF90]' : ''}`}>
                                                {item}
                                            </h2>
                                        </label>
                                        <div>
                                            <h2 className='text-[#777777] text-[14px]'>(3)</h2>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div>
                            <Catalog skip={0} limit={12} category={selectedTag ?? 'groceries'} />
                        </div>
                    </div>
                </div>
            </div>
            <BannerGrid/>
            <Breadcrumb/>
            <Catalog category='laptops' skip={0} limit={5}/>
            <div className='mt-15'>
                <Ads/>
            </div>
            <Trending/>
            <Features/>
            <Blog/>
        </>
    );
};

export default Tags;
