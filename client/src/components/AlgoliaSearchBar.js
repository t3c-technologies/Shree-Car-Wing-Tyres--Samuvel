import React, { useState, useRef, useEffect } from 'react';
import { liteClient as algoliasearch } from 'algoliasearch/lite';
import { InstantSearch, Hits, SearchBox, useInstantSearch } from 'react-instantsearch';
import Image from 'next/image';
import { AppIcon } from '@/lib/icon';
import { useMediaQuery } from '@/components/useMediaQuery';

const EmptyQueryBoundary = ({ children }) => {
  const { results } = useInstantSearch();

  if (!results?.__isArtificial && results?.nbHits === 0) {
    return (
      <div className="p-4 text-center text-gray-500">
        <AppIcon icon="lucide:search-x" className="mx-auto h-6 w-6 mb-2" />
        <p className="text-sm">No results found</p>
        <p className="text-xs mt-1">Try searching with different keywords</p>
      </div>
    );
  }

  return children;
};

const Hit = ({ hit }) => {
  const handleClick = () => {
    if (hit.url) {
      window.open(hit.url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div
      className="p-4 hover:bg-gray-50 cursor-pointer transition-colors duration-200 border-b border-gray-100 last:border-b-0"
      onClick={handleClick}
      title={hit.name}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleClick();
        }
      }}
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
            <h3 className="text-sm font-medium text-gray-900 truncate">{hit.name}</h3>
            {hit.group && (
              <div className="flex items-center gap-1 px-2 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium w-fit">
                <AppIcon icon="lucide:tag" className="w-3 h-3" />
                <span>{hit.group}</span>
              </div>
            )}
          </div>
          {hit.description && (
            <p className="text-xs text-gray-500 line-clamp-2 mt-1">{hit.description}</p>
          )}
        </div>
      </div>
    </div>
  );
};

const AlgoliaSearchBar = ({
  width = "w-64",
  containerClass = "",
  mobileFullWidth = true
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const searchBoxRef = useRef(null);
  const isMobile = useMediaQuery('(max-width: 768px)');

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

    const handleEscapeKey = (event) => {
      if (event.key === 'Escape') {
        setIsFocused(false);
        setSearchQuery('');
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscapeKey);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, []);

  const searchBoxWidth = isMobile && mobileFullWidth ? 'w-full' : width;

  return (
    <div
      ref={searchBoxRef}
      className={`relative ${searchBoxWidth} ${containerClass}`}
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
              root: 'relative w-full group',
              form: 'relative',
              input: `w-full px-4 pl-12 pr-4 py-3 rounded-xl border-2 border-gray-200 
                bg-white shadow-sm hover:shadow-md hover:border-gray-300
                focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500 
                focus:shadow-lg focus:bg-white
                transition-all duration-300 ease-in-out
                text-gray-900 placeholder:text-gray-400 placeholder:font-normal
                group-hover:border-gray-300
                ${isMobile ? 'text-base leading-6' : 'text-sm leading-5'}
                ${isFocused ? 'border-blue-500 ring-4 ring-blue-100 shadow-lg' : ''}`,
              submit: 'hidden',
              reset: 'absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-gray-100 transition-colors duration-200 opacity-0 group-focus-within:opacity-100',
              loadingIndicator: 'absolute right-3 top-1/2 -translate-y-1/2 animate-spin'
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
          <div className={`fixed md:absolute mt-2 bg-white rounded-lg shadow-lg border border-gray-200 
            overflow-y-auto z-[100] max-w-full
            ${isMobile ? 'inset-x-4 top-20 max-h-[70vh]' : 'w-full min-w-[300px] max-h-[calc(100vh-200px)]'}`}
          >
            {searchQuery.trim() === '' ? (
              <div className="p-4 text-center text-gray-500">
                <AppIcon icon="lucide:search" className="mx-auto h-6 w-6 mb-2" />
                <p className="text-sm">Start typing to search tyres...</p>
              </div>
            ) : (
              <EmptyQueryBoundary>
                <Hits
                  hitComponent={Hit}
                  classNames={{
                    root: 'overflow-hidden',
                    list: 'divide-y-0',
                    item: 'transition-colors duration-200'
                  }}
                />
              </EmptyQueryBoundary>
            )}
          </div>
        )}
      </InstantSearch>
    </div>
  );
};

export default AlgoliaSearchBar;