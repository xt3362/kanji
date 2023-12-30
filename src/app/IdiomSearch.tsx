"use client"
import { useEffect, useState } from "react";
import idiomfour from "@/data/idiom-four.json";
import type { IdiomFour } from "@/app/page"

interface IdiomSearch{
    setResult: (result: Array<IdiomFour>) => void
}

export function IdiomSearch(props: IdiomSearch){
    const [first, setFirst] = useState("");
    const [second, setSecond] = useState("");
    const [third, setThird] = useState("");
    const [fourth, setFourth] = useState("");

    function updateResult(result: IdiomFour[]){
        props.setResult(result);
    }

    useEffect(() => {
        const result = search(first, second, third, fourth);
        updateResult(result);
    }, [first, second, third, fourth]);

    function search(first: string, second: string, third: string, fourth: string){
        if (!first && !second && !third && !fourth) return [];
        return idiomfour
            .filter(x => !first || x.kanji[0] === first)
            .filter(x => !second || x.kanji[1] === second)
            .filter(x => !third || x.kanji[2] === third)
            .filter(x => !fourth || x.kanji[3] === fourth);
    }

    return (
        <>
            <div className="w-full flex justify-center border-b">
                <div className="basis-1/12 flex flex-col items-center">
                    <label htmlFor="first">一文字目</label>
                    <input
                        type="text"
                        className="w-24 h-24 text-4xl text-center border-2 rounded-md p-2"
                        placeholder="四"
                        maxLength={1}
                        id="first"
                        onChange={(e) => setFirst(e.target.value)}
                    ></input>
                </div>
                <div className="basis-1/12 flex flex-col items-center">
                    <label htmlFor="first">二文字目</label>
                    <input
                        type="text"
                        className="w-24 h-24 text-4xl text-center border-2 rounded-md p-2"
                        placeholder="字"
                        maxLength={1}
                        id="second"
                        onChange={(e) => setSecond(e.target.value)}
                    ></input>
                </div>
                <div className="basis-1/12 flex flex-col items-center">
                    <label htmlFor="first">三文字目</label>
                    <input
                        type="text"
                        className="w-24 h-24 text-4xl text-center border-2 rounded-md p-2"
                        placeholder="熟"
                        maxLength={1}
                        id="third"
                        onChange={(e) => setThird(e.target.value)}
                    ></input>
                </div>
                <div className="basis-1/12 flex flex-col items-center">
                    <label htmlFor="first">四文字目</label>
                    <input
                        type="text"
                        className="w-24 h-24 text-4xl text-center border-2 rounded-md p-2"
                        placeholder="語"
                        maxLength={1}
                        id="fourth"
                        onChange={(e) => setFourth(e.target.value)}
                    ></input>
                </div>
            </div>
        </>
    )
}
