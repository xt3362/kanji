"use client"
import type { IdiomFour } from "@/app/page"

interface SearchResultItemProps{
    idiomFour: IdiomFour
}

export function SearchResultItem(props: SearchResultItemProps){
    function googleSearchURL(searchQuery: string){
        const encodedQuery = encodeURIComponent(searchQuery);
        return `https://www.google.com/search?q=${encodedQuery}`;
    }
    return (
        <li>
            <div className="flex justify-between items-start">
                <h3 className="font-semibold text-md">
                    <ruby>{props.idiomFour.kanji}<rp>(</rp><rt>{props.idiomFour.yomi}</rt><rp>)</rp></ruby>
                </h3>
                <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 w-fit text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-primary/80 bg-red-500 text-white">
                    {props.idiomFour.initials}
                </div>
            </div>
            <p className="text-sm">
            </p>
            <div className="flex space-x-2 mt-2">
                <a href={googleSearchURL(props.idiomFour.kanji)} target="_blank" rel="noopener noreferrer" className="text-red-500 hover:underline">
                Googleで検索
                </a>
            </div>
        </li>
    )
}