import { getFormattedNumber } from "@/core/utils/utils";

interface props {
    page:number;
    count:number;
    size_page:number;
    changePage:(page:number)=>void;
}

export default function VgPaginator(props:props){

    return <>
        <div className="flex flex-col items-center">
            <span className="text-sm text-gray-700 dark:text-gray-400">
                Page <span className="font-semibold text-gray-900 dark:text-white">{props.page}</span> to <span className="font-semibold text-gray-900 dark:text-white">{getFormattedNumber(Math.ceil(props.count/props.size_page))}</span> of <span className="font-semibold text-gray-900 dark:text-white">{getFormattedNumber(props.count)}</span> Entries
            </span>
            <div className="inline-flex mt-2 xs:mt-0">
              <button onClick={()=>props.changePage(props.page - 1)} className="flex items-center justify-center px-4 h-10 text-base cursor-pointer font-medium text-white bg-gray-800 rounded-s hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                  <svg className="w-3.5 h-3.5 me-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5H1m0 0 4 4M1 5l4-4"/>
                  </svg>
                  Prev
              </button>
              <button onClick={()=>props.changePage(props.page + 1)} className="flex items-center justify-center px-4 h-10 text-base cursor-pointer font-medium text-white bg-gray-800 border-0 border-s border-gray-700 rounded-e hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                  Next
                  <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
              </button>
            </div>
        </div>
    </>
}