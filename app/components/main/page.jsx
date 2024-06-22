"use client"
import React from 'react'
import ToursData from "@/csvjson.json";
import { useRouter } from 'next/navigation';
const Main = () => {
    const router = useRouter();
    return (
        // < !--==================== MAIN ==================== -->
        <main className="main">
            {/* <!--==================== HOME ====================--> */}
            <section className="home section" id="home">
                <img src="images/home-bg.jpg" alt="home image" className="home__bg" />
                <div className="home__shadow"></div>

                <div className="home__container container grid">
                    <div className="home__data">
                        <h3 className="home__subtitle">
                            Welcome To Travel
                        </h3>

                        <h1 className="home__title">
                            Explore <br />
                            The World
                        </h1>

                        <p className="home__description" >
                            Live the trips exploring the world, discover
                            paradises, islands, mountains and much
                            more, get your trip now.
                        </p>

                        <a href="https://wa.me/917976358709?text=hello,+I+want+to+know+more+about+your+services." className="button">
                            Start Your Journey <i className="ri-arrow-right-line"></i>
                        </a>
                    </div>

                    <div className="home__cards grid">
                        <article className="home__card">
                            <img src="images/delhi.webp" alt="home image" className="home__card-img" />
                            <h3 className="home__card-title">Delhi</h3>
                            <div className="home__card-shadow"></div>
                        </article>

                        <article className="home__card">
                            <img src="images/jaipur.webp" alt="home image" className="home__card-img" />
                            <h3 className="home__card-title">Jaipur</h3>
                            <div className="home__card-shadow"></div>
                        </article>

                        <article className="home__card">
                            <img src="images/jodhpur.webp" alt="home image" className="home__card-img" />
                            <h3 className="home__card-title">Jodhpur</h3>
                            <div className="home__card-shadow"></div>
                        </article>

                        <article className="home__card">
                            <img src="images/udaipur.webp" alt="home image" className="home__card-img" />
                            <h3 className="home__card-title">Udaipur</h3>
                            <div className="home__card-shadow"></div>
                        </article>
                    </div>
                </div>
            </section>

            {/* <!--==================== ABOUT ====================--> */}
            <section className="about section" id="about">
                <div className="about__container container grid">
                    <div className="about__data">
                        <h2 className="section__title">
                            Learn More <br />
                            About Travel
                        </h2>

                        <p className="about__description">
                            All the trips around the world are a great
                            pleasure and happiness for anyone, enjoy
                            the sights when you travel the world. Travel
                            safely and without worries, get your trip and
                            explore the paradises of the world.
                        </p>

                        <a href="https://wa.me/917976358709?text=hello,+I+want+to+know+more+about+your+services." className="button">
                            Explore Travel <i className="ri-arrow-right-line"></i>
                        </a>
                    </div>

                    <div className="about__image">
                        <img src="images/heritage.jpg" alt="about image" className="about__img" />
                        <div className="about__shadow"></div>
                    </div>
                </div>
            </section>

            {/* <!--==================== POPULAR ====================--> */}
            <section className="popular section" id="popular">
                <h2 className="section__title">
                    Enjoy The Beauty <br />
                    Of The World
                </h2>

                <div className="popular__container container grid">
                    {ToursData.map((tour) => (
                        <article key={tour.id} className="popular__card" onClick={() => router.push(`/tour-main?id=${tour.id}`)}>
                            <div className="popular__image ">
                                <img src={tour.image_url[0]} alt="popular image" className="popular__img h-56   " />
                                <div className="popular__shadow"></div>
                            </div>

                            <h2 className="popular__title">
                                {tour.name.length > 50 ? `${tour.name.substring(0, 50)}...` : tour.name}
                            </h2>

                            <div className="popular__location mt-3">
                                <div>
                                    <a onClick={() => router.push(`/tour-main?id=${tour.id}`)} className="button cursor-pointer">
                                        Show Details <i className="ri-arrow-right-line"></i>
                                    </a>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </section>


            {/* <!--==================== EXPLORE ====================--> */}
            <section className="explore section" id="explore">
                <div className="explore__container">
                    <div className="explore__image">
                        <img src="images/explore-beach.jpg" alt="explore image" className="explore__img" />
                        <div className="explore__shadow"></div>
                    </div>

                    <div className="explore__content container grid">
                        <div className="explore__data">
                            <h2 className="section__title">
                                Explore The <br />
                                Best Paradises
                            </h2>

                            <p className="explore__description">
                                Exploring paradises such as islands and
                                valleys when traveling the world is one of
                                the greatest experiences when you travel, it
                                offers you harmony and peace and you
                                can enjoy it with great comfort.
                            </p>
                        </div>

                        <div className="explore__user">
                            <img src="images/explore-perfil.png" alt="explore image" className="explore__perfil" />
                            <span className="explore__name">Paul Jeams</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!--==================== JOIN ====================--> */}
            <section className="join section">
                <div className="join__container container grid">
                    <div className="join__data">
                        <h2 className="section__title">
                            Your Journey <br />
                            Starts Here
                        </h2>

                        <p className="join__description">
                            Get up to date with the latest
                            travel and information from us.
                        </p>

                        <form action="" className="join__form">
                            <input type="email" placeholder="Enter your message" className="join__input" />

                            <button className="join__button button">
                                Subscribe Our Newsletter <i className="ri-arrow-right-line"></i>
                            </button>
                        </form>
                    </div>

                    <div className="join__image">
                        <img src="images/join-island.jpg" alt="join image" className="join__img" />
                        <div className="join__shadow"></div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Main