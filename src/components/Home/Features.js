<<<<<<< HEAD
import React from 'react';

import './Features.css';

import Amala from '../../assets/images/amala.jpg';
//import Abula from '../../assets/images/abula.jpg';
import FriedRice from '../../assets/images/fried rice.jpg';
import Jollof from '../../assets/images/jollof.jpg';
import CoconutRice from '../../assets/images/coconutrice.jpg';
import Fufu from '../../assets/images/fufu.jpg';
import GrilledMeat from '../../assets/images/meat.png';



const Features = () => {
    return (
        <div>
            <section className="products-shop section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-9">
                            <div className="row align-items-center">
                                <div className="col-lg-12 mb-4 mb-lg-0">
                                    <div className="section-title">
                                        <h2 className="d-block text-left-sm">Popular Meals</h2>
                                        <div className="heading d-flex justify-content-between mb-5">
                                            <form className="ordering " method="get">
                                                <select name="orderby" className="orderby form-control" aria-label="Shop order" >
                                                    <option value="" selected="selected">Default sorting</option>
                                                    <option value="">Sort by popularity</option>
                                                    <option value="">Sort by average rating</option>
                                                    <option value="">Sort by latest</option>
                                                    <option value="">Sort by price: low to high</option>
                                                    <option value="">Sort by price: high to low</option>
                                                </select>
                                                <input type="hidden" name="paged" value="1" />
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 col-12 col-md-6 col-sm-6 mb-5" >
                                <div className="product">
                                    <div className="product-wrap">
                                        <a><img className="img-fluid w-100 mb-3 img-first" src={Amala} alt="product-img" /></a>
                                    </div>
                                    <span className="onsale">Sale</span>
                                    <div className="product-hover-overlay">
                                        <a href="#"><i className="tf-ion-android-cart"></i></a>
                                        <a href="#"><i className="tf-ion-ios-heart"></i></a>
                                    </div>
                                    <div className="product-info">
                                        <h2 className="product-title h5 mb-0"><a>Amala</a></h2>
                                        <span className="price">
                                        $329.10
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-12 col-md-6 col-sm-6 mb-5">
                                <div className="product">
                                    <div className="product-wrap">
                                        <a><img className="img-fluid w-100 mb-3 img-first" src={CoconutRice} alt="product-img" /></a>
                                    </div>
                                    <div className="product-hover-overlay">
                                        <a href="#"><i className="tf-ion-android-cart"></i></a>
                                        <a href="#"><i className="tf-ion-ios-heart"></i></a>
                                    </div>
                                    <div className="product-info">
                                        <h2 className="product-title h5 mb-0"><a>Coconut Rice</a></h2>
                                        <span className="price">
                                        $29.10
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-12 col-md-6 col-sm-6 mb-5" >
                                <div className="product">
                                    <div className="product-wrap">
                                        <a><img className="img-fluid w-100 mb-3 img-first" src={FriedRice} alt="product-img" /></a>
                                    </div>
                                    <span className="onsale">Sale</span>
                                    <div className="product-hover-overlay">
                                        <a href="#"><i className="tf-ion-android-cart"></i></a>
                                        <a href="#"><i className="tf-ion-ios-heart"></i></a>
                                    </div>
                                    <div className="product-info">
                                        <h2 className="product-title h5 mb-0"><a>Fried Rice</a></h2>
                                        <span className="price">
                                        $350.00 – $355.00
                                        </span>
                                    </div>
                                </div>
                            </div>
                         
                            
                            
                            <div className="col-12">
                                <nav aria-label="Page navigation">
                                    <ul className="pagination">
                                        <li className="page-item">
                                        <a className="page-link" href="#" aria-label="Previous">
                                            <span aria-hidden="true">&laquo;</span>
                                        </a>
                                        </li>
                                        <li className="page-item active"><a className="page-link" href="#">1</a></li>
                                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                                        <li className="page-item">
                                        <a className="page-link" href="#" aria-label="Next">
                                            <span aria-hidden="true">&raquo;</span>
                                            <p className="pt-3"><a className="button button-a button-small button-rouded js-scroll px-4" href="products" role="button">Products</a></p>
                                        </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
=======
import React from 'react';

import './Features.css';

import Amala from '../../assets/images/amala.jpg';
//import Abula from '../../assets/images/abula.jpg';
import FriedRice from '../../assets/images/fried rice.jpg';
import Jollof from '../../assets/images/jollof.jpg';
import CoconutRice from '../../assets/images/coconutrice.jpg';
import Fufu from '../../assets/images/fufu.jpg';
import GrilledMeat from '../../assets/images/meat.png';



const Features = () => {
    return (
        <div>
            <section className="products-shop section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-9">
                            <div className="row align-items-center">
                                <div className="col-lg-12 mb-4 mb-lg-0">
                                    <div className="section-title">
                                        <h2 className="d-block text-left-sm">Popular Meals</h2>
                                        <div className="heading d-flex justify-content-between mb-5">
                                            <form className="ordering " method="get">
                                                <select name="orderby" className="orderby form-control" aria-label="Shop order" >
                                                    <option value="" selected="selected">Default sorting</option>
                                                    <option value="">Sort by popularity</option>
                                                    <option value="">Sort by average rating</option>
                                                    <option value="">Sort by latest</option>
                                                    <option value="">Sort by price: low to high</option>
                                                    <option value="">Sort by price: high to low</option>
                                                </select>
                                                <input type="hidden" name="paged" value="1" />
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 col-12 col-md-6 col-sm-6 mb-5" >
                                <div className="product">
                                    <div className="product-wrap">
                                        <a><img className="img-fluid w-100 mb-3 img-first" src={Amala} alt="product-img" /></a>
                                    </div>
                                    <span className="onsale">Sale</span>
                                    <div className="product-hover-overlay">
                                        <a href="#"><i className="tf-ion-android-cart"></i></a>
                                        <a href="#"><i className="tf-ion-ios-heart"></i></a>
                                    </div>
                                    <div className="product-info">
                                        <h2 className="product-title h5 mb-0"><a>Amala</a></h2>
                                        <span className="price">
                                        $329.10
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-12 col-md-6 col-sm-6 mb-5">
                                <div className="product">
                                    <div className="product-wrap">
                                        <a><img className="img-fluid w-100 mb-3 img-first" src={CoconutRice} alt="product-img" /></a>
                                    </div>
                                    <div className="product-hover-overlay">
                                        <a href="#"><i className="tf-ion-android-cart"></i></a>
                                        <a href="#"><i className="tf-ion-ios-heart"></i></a>
                                    </div>
                                    <div className="product-info">
                                        <h2 className="product-title h5 mb-0"><a>Coconut Rice</a></h2>
                                        <span className="price">
                                        $29.10
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-12 col-md-6 col-sm-6 mb-5" >
                                <div className="product">
                                    <div className="product-wrap">
                                        <a><img className="img-fluid w-100 mb-3 img-first" src={FriedRice} alt="product-img" /></a>
                                    </div>
                                    <span className="onsale">Sale</span>
                                    <div className="product-hover-overlay">
                                        <a href="#"><i className="tf-ion-android-cart"></i></a>
                                        <a href="#"><i className="tf-ion-ios-heart"></i></a>
                                    </div>
                                    <div className="product-info">
                                        <h2 className="product-title h5 mb-0"><a>Fried Rice</a></h2>
                                        <span className="price">
                                        $350.00 – $355.00
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-12 col-md-6 col-sm-6 mb-5">
                                <div className="product">
                                    <div className="product-wrap">
                                        <a><img className="img-fluid w-100 mb-3 img-first" src={Fufu} alt="product-img" /></a>
                                    </div>
                                    <div className="product-hover-overlay">
                                        <a href="#"><i className="tf-ion-android-cart"></i></a>
                                        <a href="#"><i className="tf-ion-ios-heart"></i></a>
                                    </div>
                                    <div className="product-info">
                                        <h2 className="product-title h5 mb-0"><a>Fufu</a></h2>
                                        <span className="price">
                                        $249
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-12 col-md-6 col-sm-6 mb-5">
                                <div className="product">
                                    <div className="product-wrap">
                                        <a><img className="img-fluid w-100 mb-3 img-first" src={Jollof} alt="product-img" /></a>
                                    </div>
                                    <div className="product-hover-overlay">
                                        <a href="#"><i className="tf-ion-android-cart"></i></a>
                                        <a href="#"><i className="tf-ion-ios-heart"></i></a>
                                    </div>
                                    <div className="product-info">
                                        <h2 className="product-title h5 mb-0"><a>Jollof Rice</a></h2>
                                        <span className="price">
                                        $59.10
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-12 col-md-6 col-sm-6 mb-5" >
                                <div className="product">
                                    <div className="product-wrap">
                                        <a><img className="img-fluid w-100 mb-3 img-first" src={GrilledMeat} alt="product-img" /></a>
                                    </div>
                                    <div className="product-hover-overlay">
                                        <a href="#"><i className="tf-ion-android-cart"></i></a>
                                        <a href="#"><i className="tf-ion-ios-heart"></i></a>
                                    </div>
                                    <div className="product-info">
                                        <h2 className="product-title h5 mb-0"><a>Grilled Meat</a></h2>
                                        <span className="price">
                                        $99.00
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <nav aria-label="Page navigation">
                                    <ul className="pagination">
                                        <li className="page-item">
                                        <a className="page-link" href="#" aria-label="Previous">
                                            <span aria-hidden="true">&laquo;</span>
                                        </a>
                                        </li>
                                        <li className="page-item active"><a className="page-link" href="#">1</a></li>
                                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                                        <li className="page-item">
                                        <a className="page-link" href="#" aria-label="Next">
                                            <span aria-hidden="true">&raquo;</span>
                                        </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
>>>>>>> cd8196ff4f196be23b7b3756cdbd09db32644d95
export default Features;