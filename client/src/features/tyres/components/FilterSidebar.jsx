import { AppIcon } from '@/shared/utils/icon';

const FilterSidebar = ({
    filters,
    filterOptions,
    hasActiveFilters,
    onFilterChange,
    onFeatureToggle,
    onClearFilters,
    onBrandNavigate,
    showFilters
}) => {
    return (
        <aside className={`lg:w-80 ${showFilters ? 'block' : 'hidden lg:block'}`}>
            <div className="bg-card border border-border rounded-xl p-6 sticky top-6">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-semibold text-card-foreground">Filters</h2>
                    {hasActiveFilters && (
                        <button
                            onClick={onClearFilters}
                            className="text-sm text-destructive hover:text-destructive/80 transition-colors"
                        >
                            Clear All
                        </button>
                    )}
                </div>

                <div className="space-y-6">
                    {/* Search */}
                    <div>
                        <label className="block text-sm font-medium text-card-foreground mb-2">
                            Search
                        </label>
                        <div className="relative">
                            <AppIcon icon="mdi:magnify" className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                            <input
                                type="text"
                                placeholder="Search tyres..."
                                value={filters.search}
                                onChange={(e) => onFilterChange('search', e.target.value)}
                                className="w-full pl-10 pr-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background"
                            />
                        </div>
                    </div>

                    {/* Category */}
                    <div>
                        <label className="block text-sm font-medium text-card-foreground mb-2">
                            Category
                        </label>
                        <select
                            value={filters.category}
                            onChange={(e) => onFilterChange('category', e.target.value)}
                            className="w-full p-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background"
                        >
                            {filterOptions.categories.map(category => (
                                <option key={category} value={category}>
                                    {category === 'ALL' ? 'All Categories' : category}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Brand */}
                    <div>
                        <label className="block text-sm font-medium text-card-foreground mb-2">
                            Brand
                        </label>
                        <select
                            value={filters.brand}
                            onChange={(e) => {
                                const selectedBrand = e.target.value;
                                if (onBrandNavigate && selectedBrand !== 'ALL') {
                                    onBrandNavigate(selectedBrand);
                                } else {
                                    onFilterChange('brand', selectedBrand);
                                }
                            }}
                            className="w-full p-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background"
                        >
                            {filterOptions.brands.map(brand => (
                                <option key={brand} value={brand}>
                                    {brand === 'ALL' ? 'All Brands' : brand}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Price Range */}
                    <div>
                        <label className="block text-sm font-medium text-card-foreground mb-2">
                            Price Range
                        </label>
                        <select
                            value={filters.priceRange}
                            onChange={(e) => onFilterChange('priceRange', e.target.value)}
                            className="w-full p-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background"
                        >
                            <option value="ALL">All Prices</option>
                            <option value="BUDGET">Budget (Under ₹3,000)</option>
                            <option value="MID">Mid-Range (₹3,000 - ₹8,000)</option>
                            <option value="PREMIUM">Premium (₹8,000 - ₹15,000)</option>
                            <option value="LUXURY">Luxury (Above ₹15,000)</option>
                        </select>
                    </div>

                    {/* Rating */}
                    <div>
                        <label className="block text-sm font-medium text-card-foreground mb-2">
                            Minimum Rating
                        </label>
                        <select
                            value={filters.rating}
                            onChange={(e) => onFilterChange('rating', e.target.value)}
                            className="w-full p-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background"
                        >
                            <option value="ALL">All Ratings</option>
                            <option value="4">4+ Stars</option>
                            <option value="3">3+ Stars</option>
                            <option value="2">2+ Stars</option>
                        </select>
                    </div>

                    {/* Size */}
                    <div>
                        <label className="block text-sm font-medium text-card-foreground mb-2">
                            Size
                        </label>
                        <select
                            value={filters.size}
                            onChange={(e) => onFilterChange('size', e.target.value)}
                            className="w-full p-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background"
                        >
                            {filterOptions.sizes.map(size => (
                                <option key={size} value={size}>
                                    {size === 'ALL' ? 'All Sizes' : size}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Availability */}
                    <div>
                        <label className="block text-sm font-medium text-card-foreground mb-2">
                            Availability
                        </label>
                        <select
                            value={filters.availability}
                            onChange={(e) => onFilterChange('availability', e.target.value)}
                            className="w-full p-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background"
                        >
                            <option value="ALL">All Availability</option>
                            <option value="IN_STOCK">In Stock</option>
                            <option value="LOW_STOCK">Low Stock</option>
                            <option value="OUT_OF_STOCK">Out of Stock</option>
                            <option value="SEASONAL">Seasonal</option>
                            <option value="PRE_ORDER">Pre-Order</option>
                        </select>
                    </div>

                    {/* Features */}
                    <div>
                        <label className="block text-sm font-medium text-card-foreground mb-2">
                            Features
                        </label>
                        <div className="space-y-2 max-h-40 overflow-y-auto custom-scrollbar">
                            {filterOptions.features.slice(0, 10).map(feature => (
                                <label key={feature} className="flex items-center">
                                    <input
                                        type="checkbox"
                                        checked={filters.features.includes(feature)}
                                        onChange={() => onFeatureToggle(feature)}
                                        className="rounded border-border text-primary focus:ring-primary focus:ring-offset-0"
                                    />
                                    <span className="ml-2 text-sm text-card-foreground">{feature}</span>
                                </label>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default FilterSidebar;
