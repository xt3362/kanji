"use client"
import { SearchResultItem } from "./SearchResultItem"
import { IdiomFour } from "./page"

interface SearchResultList{
    result: Array<IdiomFour>
}

export function SearchResultList(props: SearchResultList){
    return (
        <div className="w-full flex justify-center">
            <div className="border text-card-foreground bg-white shadow-lg rounded-lg min-w-96 w-1/2">
                <div className="flex flex-col space-y-1.5 p-6 bg-red-300 rounded-t-lg">
                    <h2 className="text-lg font-semibold">検索結果: {props.result.length}件</h2>
                </div>
                <div className="p-6">
                    <ul className="space-y-4">
                        {props.result.map(x => <SearchResultItem key={x.kanji} idiomFour={x}></SearchResultItem>)}
                    </ul>
                </div>
            </div>
        </div>
    )
}