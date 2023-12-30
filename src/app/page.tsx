"use client"
import { useState } from 'react';
import { SearchResultList } from './SearchResultList';
import { IdiomSearch } from './IdiomSearch';

export interface IdiomFour{
  yomi: string;
  kanji: string;
  url: string;
  initials: string;
}


export default function Home() {
  const [searchResult, setSearchResult] = useState(Array<IdiomFour>);
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <IdiomSearch setResult={(d) => setSearchResult(d)}></IdiomSearch>
      <SearchResultList result={searchResult}></SearchResultList>
    </main>
  )
}
