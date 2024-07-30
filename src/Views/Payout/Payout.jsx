import { FaFilter, FaSearch, FaChevronRight, FaChevronLeft, FaDollarSign } from 'react-icons/fa';
import rewards from "../../assets/rewards.png";
import paypal from "../../assets/paypal.png";
import Nav from "../../Components/Nav";
import Footer from "../../Components/Footer";

const Payout = () => {
    return ( 
        <div>
            <Nav />
            <div className='bg-secondary w-full h-auto min-h-screen overflow-x-hidden'>
                <div className="container mx-auto px-4">
                    <div className="pt-12">
                        <h1 className="text-3xl text-slate-950 font-bold mt-10">Rewards List</h1>
                        <ol className="qs-breadcrumbs__list list-none p-0">
                            <li className="qs-breadcrumbs__list-element inline-block">
                                <a href="/rewards" className="qs-breadcrumbs__link qs-breadcrumbs__link--active text-xs text-zinc-700">Rewards List</a>
                            </li>
                        </ol>
                    </div>

                    <div className='flex flex-col md:flex-row'>
                        {/* Filtered Reward */}
                        <div className="w-full h-[420px] md:w-1/3 lg:w-1/4 mt-4 bg-white rounded-3xl sticky space-y-4 p-4 overflow-y-auto">
                            <div className="flex items-center justify-between space-x-4 p-4">
                                <FaFilter className="icon icon-outline icon-stroke-3" />
                                <h1 className="font-bold text-slate-800 flex-grow">Filter rewards</h1>
                                <a href="#" className='text-xs text-slate-500'>Reset filters</a>
                            </div>

                            <div className='px-4'>
                                <p className='text-sm'>Coins</p>
                                <div className="relative w-full mt-2 h-1 bg-gray-200 rounded-lg">
                                    <div className="absolute inset-0 bg-orange-500 rounded-lg w-full" style={{ width: '100%', left: '0%' }}>
                                        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-orange-500 border-2 border-orange-500 rounded-full range__thumb range__thumb--left"></div>
                                        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-orange-500 border-2 border-orange-500 rounded-full range__thumb range__thumb--right"></div>
                                    </div>
                                </div>
                                <div className='flex justify-between mt-3'>
                                    <div className='bg-slate-200 rounded-3xl w-12 text-center'>
                                        <span className='text-xs'>0.01</span>
                                    </div>
                                    <div className='bg-slate-200 rounded-3xl w-12 text-center'>
                                        <span className='text-xs'>157.7</span>
                                    </div>
                                </div>
                            </div>

                            <div className='mt-8 px-4'>
                                <p className='text-sm'>Category</p>
                                <div className='space-y-2 mt-2'>
                                    {["Virtual Currencies", "Game Keys", "Gift cards", "Money"].map((category) => (
                                        <div key={category} className="bg-slate-200 rounded-2xl h-11 flex items-center space-x-2 px-4">
                                            <input type="checkbox" className="bg-white h-4 w-4" />
                                            <span className="text-gray-700 text-sm">{category}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Content to the right */}
                        <div className='flex-1'>
                            {/* Block image */}
                            <div className='bg-white rounded-2xl flex mt-4 md:ml-8 p-6 items-center'>
                                <img src={rewards} alt="rewards" className="w-32 h-32" />
                                <div className='ml-4'>
                                    <h1 className='font-semibold text-slate-900'>Here you can directly exchange Coins for rewards</h1>
                                    <span className='text-xs'>Search through available rewards using filters or use the search engine to find exactly what you are looking for.</span>
                                </div>
                            </div>

                            {/* Search */}
                            <div className="relative w-full md:w-60 text-sm mt-4 md:ml-8">
                                <input type="text" placeholder="What are you looking for?" className="w-full py-2 pl-10 pr-4 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                <FaSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-950" />
                            </div>

                            {/* Payment options */}
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 md:ml-8'>
                                {[
                                    { name: 'Paypal', amount: '1.2', type1: 'MONEY', type2: 'PAYPAL', image: paypal },
                                    { name: 'iTunes', amount: '2.6', type1: 'GIFT CARDS', type2: 'ITUNES', image: paypal },
                                    { name: 'Binance', amount: '3.44', type1: 'VIRTUAL CURRENCIES', type2: 'BINANCE', image: paypal },
                                    { name: 'Crypto Voucher', amount: '4.99', type1: 'VIRTUAL CURRENCIES', type2: 'CRYPTO VOUCHER', image: paypal },
                                    { name: 'Paypal', amount: '1.2', type1: 'MONEY', type2: 'PAYPAL', image: paypal },
                                    { name: 'iTunes', amount: '2.6', type1: 'GIFT CARDS', type2: 'ITUNES', image: paypal },
                                    { name: 'Binance', amount: '3.44', type1: 'VIRTUAL CURRENCIES', type2: 'BINANCE', image: paypal },
                                    { name: 'Crypto Voucher', amount: '4.99', type1: 'VIRTUAL CURRENCIES', type2: 'CRYPTO VOUCHER', image: paypal },
                                    { name: 'Paypal', amount: '1.2', type1: 'MONEY', type2: 'PAYPAL', image: paypal },
                                    { name: 'iTunes', amount: '2.6', type1: 'GIFT CARDS', type2: 'ITUNES', image: paypal },
                                    { name: 'Binance', amount: '3.44', type1: 'VIRTUAL CURRENCIES', type2: 'BINANCE', image: paypal },
                                    { name: 'Crypto Voucher', amount: '4.99', type1: 'VIRTUAL CURRENCIES', type2: 'CRYPTO VOUCHER', image: paypal },
                                ].map(payment => (
                                    <a href="#" key={payment.name} className='bg-white rounded-2xl p-4 flex hover:border-2 hover:border-gray-50 hover:shadow-2xl'>
                                        <div className='ml-4'>
                                            <p>{payment.name}</p>
                                            <h2 className="text-gray-600 mb-4">
                                                from {payment.amount}
                                                <FaDollarSign className="w-6 h-6 inline rounded-full bg-orange-900 text-white text-center p-1 border-2 border-primary" />
                                                coins
                                            </h2>
                                            <div className='flex text-xs text-slate-700 mt-12 text-center'>
                                                <div className='bg-slate-200 rounded-3xl w-20 h-6 mr-2'>
                                                    <span>{payment.type1}</span>
                                                </div>
                                                <div className='bg-slate-200 rounded-3xl w-20 h-6'>
                                                    <span>{payment.type2}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="relative w-32 h-32">
                                            <img src={payment.image} alt={payment.name} className="absolute inset-0 w-32 h-32 ml-20 rounded-2xl object-cover" />
                                        </div>
                                    </a>
                                ))}
                            </div>
                            <div className="pagination flex flex-col md:flex-row items-center justify-center space-x-2 mt-8">
                                <button className="pagination__change-page-button btn btn--size-sm btn--type-adaptive btn--tone-positive btn--icon-only btn--squared" type="button">
                                    <FaChevronLeft className="text-black w-4 h-4" />
                                </button>

                                <div className="pagination__pages flex items-center space-x-2 mb-4 md:mb-0">
                                    <input type="text" className="pagination__input w-16 md:w-8 text-center border rounded" size="1" defaultValue="1" />
                                    <span className="pagination__pages-counter-wrapper flex items-center">
                                        <span className="pagination__pages-counter-prefix mr-1">of</span>
                                        <span className="pagination__pages-counter">3</span>
                                    </span>
                                </div>
                                <button className="pagination__change-page-button btn btn--size-sm btn--type-adaptive btn--tone-positive btn--icon-only btn--squared" type="button">
                                    <FaChevronRight className="text-black w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Payout;
