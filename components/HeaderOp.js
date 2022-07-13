export default function HeaderOp({Icon , title, selected}) {
    return ( 
    <div className={`flex space-x-1 items-center justify-center border-b-2 border-transparent hover:bg-seell rounded-full  cursor-pointer
                
    ${selected && 'text-grayyy border-seell bg-seell px-2 sm:pr-5 p-2 '  } `}>
                <Icon className="h-4"/>
                <p className="hidden sm:inline-flex ">{title} </p>
             </div>
        )


}