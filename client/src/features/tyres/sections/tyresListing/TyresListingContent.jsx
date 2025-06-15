"use client";

import { AppIcon } from '@/shared/utils/icon';
import TyreCard from '../../components/TyreCard';
import QuickViewModal from '../../components/QuickViewModal';

const TyresListingContent = ({
    paginatedTyres,
    isLoading,
    viewMode,
    totalPages,
    currentPage,
    setCurrentPage,
    clearFilters,
    getComparisonCount,
    handleCompareNow,
    handleClearComparison,
    handleToggleFavorite,
    handleToggleCompare,
    handleQuickView,
    showQuickView,
    setShowQuickView,
    isFavorite,
    isInComparison,
    canAddToComparison,
    getCategoryIcon,
    getRatingStars,
    scrollToTop
}) => {
    return (
        <>
            {/* Compare Bar */}
            {getComparisonCount() > 0 && (
                <div className="mb-6 p-4 bg-accent text-accent-foreground rounded-xl compare-notification">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <AppIcon icon="mdi:compare" className="w-5 h-5" />
                            <span className="font-medium">
                                {getComparisonCount()} tyre{getComparisonCount() !== 1 ? 's' : ''} selected for comparison
                            </span>
                        </div>
                        <div className="flex items-center gap-2">
                            <button
                                onClick={handleCompareNow}
                                className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-sm"
                            >
                                Compare Now
                            </button>
                            <button
                                onClick={handleClearComparison}
                                className="px-4 py-2 bg-destructive text-destructive-foreground rounded-lg hover:bg-destructive/90 transition-colors text-sm"
                            >
                                Clear
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Loading State */}
            {isLoading && (
                <div className="flex items-center justify-center py-12">
                    <AppIcon icon="mdi:loading" className="w-8 h-8 animate-spin text-primary" />
                </div>
            )}

            {/* Results */}
            {!isLoading && (
                <>
                    {paginatedTyres.length === 0 ? (
                        <div className="text-center py-12">
                            <AppIcon icon="mdi:tire" className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                            <h3 className="text-xl font-semibold text-card-foreground mb-2">No tyres found</h3>
                            <p className="text-muted-foreground mb-4">
                                Try adjusting your filters or search terms
                            </p>
                            <button
                                onClick={clearFilters}
                                className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                            >
                                Clear Filters
                            </button>
                        </div>
                    ) : (
                        <div className={`${viewMode === 'grid'
                            ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6'
                            : 'space-y-4'
                            }`}>
                            {paginatedTyres.map((tyre, index) => (
                                <div
                                    key={tyre.id}
                                    className="animate-fadeIn"
                                    style={{ animationDelay: `${index * 100}ms` }}
                                >
                                    <TyreCard
                                        tyre={tyre}
                                        viewMode={viewMode}
                                        isFavorite={isFavorite(tyre.id)}
                                        isInComparison={isInComparison(tyre.id)}
                                        canAddToComparison={canAddToComparison(tyre.id)}
                                        onToggleFavorite={handleToggleFavorite}
                                        onToggleCompare={handleToggleCompare}
                                        onQuickView={handleQuickView}
                                        getCategoryIcon={getCategoryIcon}
                                        getRatingStars={getRatingStars}
                                    />
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Pagination */}
                    {totalPages > 1 && (
                        <div className="mt-8 flex items-center justify-center gap-2">
                            <button
                                onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                                disabled={currentPage === 1}
                                className="px-4 py-2 border border-border rounded-lg hover:bg-muted transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                <AppIcon icon="mdi:chevron-left" className="w-4 h-4" />
                            </button>

                            {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
                                let pageNum;
                                if (totalPages <= 5) {
                                    pageNum = i + 1;
                                } else if (currentPage <= 3) {
                                    pageNum = i + 1;
                                } else if (currentPage >= totalPages - 2) {
                                    pageNum = totalPages - 4 + i;
                                } else {
                                    pageNum = currentPage - 2 + i;
                                }

                                return (
                                    <button
                                        key={pageNum}
                                        onClick={() => setCurrentPage(pageNum)}
                                        className={`px-4 py-2 rounded-lg transition-colors ${currentPage === pageNum
                                            ? 'bg-primary text-primary-foreground'
                                            : 'border border-border hover:bg-muted'
                                            }`}
                                    >
                                        {pageNum}
                                    </button>
                                );
                            })}

                            <button
                                onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                                disabled={currentPage === totalPages}
                                className="px-4 py-2 border border-border rounded-lg hover:bg-muted transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                <AppIcon icon="mdi:chevron-right" className="w-4 h-4" />
                            </button>
                        </div>
                    )}
                </>
            )}

            {/* Quick View Modal */}
            <QuickViewModal
                tyre={showQuickView}
                onClose={() => setShowQuickView(null)}
                getRatingStars={getRatingStars}
            />

            {/* Scroll to Top Button */}
            <button
                onClick={scrollToTop}
                className="fixed bottom-6 right-6 w-12 h-12 bg-primary text-primary-foreground rounded-full shadow-lg hover:bg-primary/90 transition-colors z-40 flex items-center justify-center"
            >
                <AppIcon icon="mdi:chevron-up" className="w-6 h-6" />
            </button>
        </>
    );
};

export default TyresListingContent;
