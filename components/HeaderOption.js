import HeaderOp from './HeaderOp'
import {
    DotsVerticalIcon,
    MapIcon,
    NewspaperIcon,
    PlayIcon,
    PhotographIcon,
    SearchIcon,

} from "@heroicons/react/outline"
export default function HeaderOption(){
    return (
        <div className="flex w-full text-grayyy justify-evenly text-sm lg:text-base lg:justify-start lg:space-x-36 lg:pl-32 " >
        <div className="flex space-x-8">
            <HeaderOp Icon={SearchIcon} title="All" selected/>
            <HeaderOp Icon={PhotographIcon} title="Images"/>
            <HeaderOp Icon={PlayIcon} title="Video"/>

        </div>
        </div>
    )
}