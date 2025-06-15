import { AppIcon } from '@/shared/utils/icon';

const QuickViewModal = ({ tyre, onClose, getRatingStars }) => {
    if (!tyre) return null;

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 modal-backdrop">
            <div className="bg-card rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto modal-content">
                <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-semibold text-card-foreground">Quick View</h3>
                        <button
                            onClick={onClose}
                            className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-muted transition-colors"
                        >
                            <AppIcon icon="mdi:close" className="w-4 h-4" />
                        </button>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <img
                                src={tyre.image_urls?.[0] || '/placeholder-tyre.jpg'}
                                alt={tyre.name}
                                className="w-full aspect-square object-cover rounded-lg"
                                onError={(e) => {
                                    e.target.src = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="400" height="400"><rect width="400" height="400" fill="%23f3f4f6"/><g transform="translate(200,200)"><circle r="60" fill="%236b7280" opacity="0.3"/><path d="M-30,-30 L30,30 M30,-30 L-30,30" stroke="%236b7280" stroke-width="4" opacity="0.5"/></g></svg>`;
                                }}
                            />
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold text-card-foreground mb-2">
                                {tyre.name}
                            </h4>
                            <p className="text-primary font-medium mb-3">{tyre.brand}</p>
                            <p className="text-muted-foreground text-sm mb-4">
                                {tyre.description}
                            </p>

                            {tyre.reviews && (
                                <div className="flex items-center gap-2 mb-4">
                                    <div className="flex items-center">
                                        {getRatingStars(tyre.reviews.average_rating)}
                                    </div>
                                    <span className="text-sm text-muted-foreground">
                                        {tyre.reviews.average_rating} ({tyre.reviews.total_reviews} reviews)
                                    </span>
                                </div>
                            )}

                            <div className="text-xl font-bold text-primary mb-4 price-highlight">
                                {tyre.price_range}
                            </div>

                            <a
                                href={`/tyres/${tyre.id}`}
                                className="block w-full bg-primary text-primary-foreground text-center px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors font-medium"
                            >
                                View Full Details
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuickViewModal;
