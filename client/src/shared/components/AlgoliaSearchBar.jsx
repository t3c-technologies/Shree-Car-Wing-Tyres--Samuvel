"use client";

import React, { useState, useRef, useEffect } from 'react';
import { liteClient as algoliasearch } from 'algoliasearch/lite';
import { InstantSearch, Hits, SearchBox, useInstantSearch } from 'react-instantsearch';
import Image from 'next/image';
import { AppIcon } from '@/shared/utils/icon';

const EmptyQueryBoundary = ({ children }) => {
  const { results } = useInstantSearch();

  if (!results?.__isArtificial && results?.nbHits === 0) {
    return (
      <div className="p-4 text-center text-muted-foreground">
        <AppIcon icon="lucide:search-x" className="mx-auto h-6 w-6 mb-2" />
        <p>No results found</p>
      </div>
    );
  }

  return children;
};

const Hit = ({ hit }) => (
  <div
    className="p-4 hover:bg-accent cursor-pointer transition-colors duration-200"
    onClick={() => window.open(hit.url, '_blank')}
    title={hit.name}
  >
    <div className="flex items-center gap-3">
      {hit.image_urls?.[0] && (
        <div className="relative w-12 h-12 md:w-16 md:h-16 flex-shrink-0">
          <Image
            src={hit.image_urls[0]}
            alt={hit.name}
            fill
            className="object-cover rounded-lg"
            sizes="(max-width: 768px) 48px, 64px"
          />
        </div>
      )}
      <div className="flex-1 min-w-0">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1 md:gap-2">
          <h3 className="text-sm font-medium text-foreground truncate">{hit.name}</h3>
          <div className="flex items-center gap-1 px-2 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium w-fit">
            <AppIcon icon="lucide:tag" className="w-3 h-3" />
            <span>{hit.group}</span>
          </div>
        </div>
        <p className="text-xs text-muted-foreground line-clamp-2 mt-1">{hit.description}</p>
      </div>
    </div>
  </div>
);

const AlgoliaSearchBar = ({
  width = "w-64",
  containerClass = "",
  mobileFullWidth = true
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const searchBoxRef = useRef(null);

  const searchClient = algoliasearch(
    process.env.NEXT_PUBLIC_ALGOLIA_APP_ID,
    process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY
  );

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchBoxRef.current && !searchBoxRef.current.contains(event.target)) {
        setIsFocused(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div
      ref={searchBoxRef}
      className={`relative ${mobileFullWidth ? 'w-full' : `w-full md:${width}`} ${containerClass}`}
    >
      <InstantSearch
        searchClient={searchClient}
        indexName="tyres"
        future={{
          preserveSharedStateOnUnmount: true
        }}
        initialUiState={{
          tyres: {
            query: searchQuery
          }
        }}
      >
        <div className="relative">
          <SearchBox
            onFocus={() => setIsFocused(true)}
            onChange={(e) => setSearchQuery(e.target.value)}
            value={searchQuery}
            placeholder="Search tyres..."
            classNames={{
              root: 'relative w-full',
              form: 'relative',
              input: `w-full px-4 pl-10 py-2 rounded-lg border border-primary pr-10 
                focus:outline-none focus:ring-2 focus:ring-primary 
                transition-all duration-300 text-foreground placeholder:text-muted-foreground bg-input
                text-base md:text-sm`,
              submit: 'hidden',
              reset: 'hidden',
              loadingIndicator: 'hidden'
            }}
          />
          <div className="absolute left-2 top-1/2 -translate-y-1/2 h-5 w-auto opacity-70">
            <Image
              src="/images/algolia.png"
              alt="Search by Algolia"
              width={20}
              height={20}
              className="h-5 w-auto"
            />
          </div>
        </div>

        {isFocused && (
          <div className={`absolute mt-2 bg-popover rounded-lg shadow-lg border border-border 
            overflow-y-auto z-[100] top-full left-0 right-0
            max-h-[60vh] md:max-h-[calc(100vh-200px)] md:min-w-[300px]`}
          >
            <EmptyQueryBoundary>
              <Hits
                hitComponent={Hit}
                classNames={{
                  root: 'overflow-hidden',
                  list: 'divide-y divide-border',
                  item: 'transition-colors duration-200'
                }}
              />
            </EmptyQueryBoundary>
          </div>
        )}
      </InstantSearch>
    </div>
  );
};

export default AlgoliaSearchBar;