import React from 'react'
//import Image from 'next/Image'
import Img from 'next/image';
import HeaderItem from './HeaderItem';
import {HomeIcon,LightningBoltIcon,BadgeCheckIcon,UserIcon,SearchIcon,CollectionIcon} from '@heroicons/react/outline'

export default function Header() {
    return (
        <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto ">
            <div className="flex flex-grow justify-evenly max-w-2xl">
              <HeaderItem title='HOME' Icon={HomeIcon}/>
              <HeaderItem title='TRENDING' Icon={LightningBoltIcon}/>  
              <HeaderItem title='VERFIED' Icon={BadgeCheckIcon}/>  
              <HeaderItem title='COLLECTIO' Icon={CollectionIcon}/>  
              <HeaderItem title='SEARCH' Icon={SearchIcon}/>  
              <HeaderItem title='ACCOUNT' Icon={UserIcon}/>  
  
            </div>
            <Img
            className="object-contain"
            src="https://links.papareact.com/ua6"
            width={200}
            height={100}
            />
        </header>
    )
}   