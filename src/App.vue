<template>
<div class="font-mono">
    <!-- nav bar section -->
    <nav class=" mx-auto sticky top-0 px-4 py-4 flex justify-start items-center bg-gray-100 dark:bg-gray-600 bg-opacity-90 dark:bg-opacity-90 z-10 shadow-lg h-12 sm:h-auto">
        <!-- logo and menu div -->
        <div class=" flex justify-start sm:ml-14 md:ml-0 md:justify-around w-11/12">
            <!-- logo div -->
            <a ref="logo" class=" text-4xl font-bold leading-none text-red-500" href="#">
                <i class="fa-solid fa-leaf"></i>
            </a>
            <!-- menu div -->
            <ul class=" nav-ul hidden md:block md:flex md:items-center">
                <li>
                    <a class="nav-ul-li-a-1 text-sm text-gray-700 hover:text-red-500 dark:text-white dark:hover:text-red-500 " href="#home">Home</a>
                    <div class="indicator block"></div>
                </li>
                <li class="text-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" class="w-4 h-4 current-fill" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                    </svg>
                </li>

                <li>
                    <a class="nav-ul-li-a-2 text-sm text-gray-700 hover:text-red-500 dark:text-white dark:hover:text-red-500" href="#about">AboutMe</a>
                    <div class="indicator block"></div>
                </li>
                <li class="text-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" class="w-4 h-4 current-fill" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                    </svg>
                </li>

                <li>
                    <a class="nav-ul-li-a-3 text-sm  text-gray-700 hover:text-red-500 dark:text-white dark:hover:text-red-500" href="#portfolio">Portfolio</a>
                    <div class="indicator block"></div>
                </li>
                <li class="text-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" class="w-4 h-4 current-fill" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                    </svg>
                </li>

                <li>
                    <a class="nav-ul-li-a-4 text-sm text-gray-700 hover:text-red-500 dark:text-white dark:hover:text-red-500" href="#services">Services</a>
                    <div class="indicator block"></div>
                </li>
                <li class="text-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" class="w-4 h-4 current-fill" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                    </svg>
                </li>

                <li>
                    <a class="nav-ul-li-a-5 text-sm text-gray-700 hover:text-red-500 dark:text-white dark:hover:text-red-500" href="#experience">Experience</a>
                    <div class="indicator block"></div>
                </li>
                <li class="text-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" class="w-4 h-4 current-fill" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                    </svg>
                </li>

                <li>
                    <a class="nav-ul-li-a-6 text-sm text-gray-700 hover:text-red-500 dark:text-white dark:hover:text-red-500" href="#contact">Contact</a>
                    <div class="indicator block"></div>
                </li>

            </ul>
        </div>
        <!-- dark mode and menu button -->
        <div class="flex justify-around w-1/12">
            <!-- dark mode button -->
            <button class="text-base md:text-2xl text-red-500 font-bold  rounded-xl transition duration-200" @click="toggleDark()">
                <span v-if="isDark==false">
                    <i class="fa-solid fa-moon"></i>
                </span>
                <span v-if="isDark==true">
                    <i class="fa-solid fa-sun"></i>
                </span>
            </button>
            <!-- menu button -->
            <div class="md:hidden">
                <button class="navbar-burger flex items-center text-red-500 p-3">
                    <svg class="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <title>Mobile menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                    </svg>
                </button>
            </div>
        </div>
    </nav>

    <!-- mobile menu  -->
    <div class="navbar-menu relative z-10 hidden ">
        <div class="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
        <nav class="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto  dark:bg-gray-600 bg-opacity-90 dark:bg-opacity-90 ">
            <div class="flex items-center mb-8">
                <a class="mr-auto text-3xl font-bold leading-none" href="#">
                    <a ref="logo" class=" text-4xl font-bold leading-none text-red-500" href="#">
                        <i class="fa-solid fa-leaf"></i>
                    </a>
                </a>
                <button class="navbar-close">
                    <svg class="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>
            </div>
            <div>
                <ul class="mob-nav-ul nav-ul">
                    <li class="mb-1 flex flex-col">
                        <a class="nav-ul-li-a-1 block p-4 text-sm font-semibold  text-gray-700 hover:text-red-500 dark:text-white rounded" href="#home">Home</a>
                        <div class="indicator block"></div>
                    </li>

                    <li class="mb-1 flex flex-col">
                        <a class="nav-ul-li-a-2 block p-4 text-sm font-semibold  text-gray-700 hover:text-red-500 dark:text-white rounded" href="#about">AboutMe</a>
                        <div class="indicator block"></div>
                    </li>

                    <li class="mb-1 flex flex-col">
                        <a class="nav-ul-li-a-3 block p-4 text-sm font-semibold  text-gray-700 hover:text-red-500 dark:text-white rounded" href="#portfolio">Portfolio</a>
                        <div class="indicator block"></div>
                    </li>

                    <li class="mb-1 flex flex-col">
                        <a class="nav-ul-li-a-4 block p-4 text-sm font-semibold  text-gray-700 hover:text-red-500 dark:text-white rounded" href="#services">Services</a>
                        <div class="indicator block"></div>
                    </li>

                    <li class="mb-1 flex flex-col">
                        <a class="nav-ul-li-a-5 block p-4 text-sm font-semibold  text-gray-700 hover:text-red-500 dark:text-white rounded" href="#home">Experience</a>
                        <div class="indicator block"></div>
                    </li>

                    <li class="mb-1 flex flex-col">
                        <a class="nav-ul-li-a-6 block p-4 text-sm font-semibold  text-gray-700 hover:text-red-500 dark:text-white rounded" href="#home">Contact</a>
                        <div class="indicator block"></div>
                    </li>
                </ul>
            </div>
        </nav>
    </div>

    <!-- home section -->
    <section id="home" class="   mx-auto pt-7 sm:py-14 md:py-20 dark:bg-gray-700">
        <div class="grid sm:grid-cols-2 py-5 text-red-500">
            <!-- home left -->
            <div class="w-full flex justify-center items-center ">
                <div class="text-center sm:text-start homeleft">
                    <div class=" animate__animated animate__fadeInDown">
                        <span class="text-gray-700 dark:text-white font-extrabold">I'm a</span>
                        <h1 class="max-w-2xl mb-4 text-5xl font-extrabold tracking-tight leading-none sm:text-4xl md:text-5xl xl:text-6xl dark:text-red-500 uppercase">
                            <ul class="menu">
                                <li><a class="word word1" href="#"><span>F</span><span>r</span><span>o</span><span>n</span><span>t</span><span>-</span><span>e</span><span>n</span><span>d</span></a></li>
                                <li><a class="word word1" href="#"><span>w</span><span>e</span><span>b</span><span>s</span><span>i</span><span>t</span><span>e</span></a></li>
                                <li><a class="word word1" href="#"><span>d</span><span>e</span><span>v</span><span>e</span><span>l</span><span>o</span><span>p</span><span>e</span><span>r</span></a></li>
                            </ul>
                        </h1>
                    </div>
                    <button class="about-btn px-2 py-1 sm:px-3 sm:py-2" style="--clr:#EF1B1B">
                        <span class="xl:text-lg lg:text-lg md:text-base sm:text-sm text-xs">Hire Me</span>
                        <i></i>
                    </button>
                </div>
            </div>
            <!-- home right -->
            <div class="w-full flex justify-center items-center shrink ">
                <div class="rounded-full bg-red-500 hidden sm:block lg:w-80 lg:h-96 md:w-72 md:h-80 sm:w-64 sm:h-72 animate__animated animate__fadeInRight homeright">
                    <img class="rounded-full lg:w-80 lg:h-96 md:w-72 md:h-80 sm:w-64 sm:h-72" src="./assets/home-img.png" alt="mockup">
                </div>
            </div>
        </div>
    </section>

    <!-- about section -->
    <section id="about" class=" mx-auto pt-10 sm:py-24 lg:py-36 dark:bg-gray-700">
        <div class="aboutflex mx-auto flex  flex-col sm:flex-row h-full">
            <div class="w-full sm:w-1/3 flex mx-auto justify-center aboutLeft">
                <div class="xl:w-80 xl:h-96 lg:w-72 lg:h-80 md:w-72 md:h-64 sm:w-64 sm:h-60 w-56 h-60 rotate ">
                    <img class="object-cover object-center rounded img-border w-full h-full img-border" alt="hero" src="./assets/about.jpg">
                </div>
            </div>
            <div class="aboutRight w-11/12 sm:w-2/3 h-full flex justify-center mx-auto mt-10 sm:mt-0 ">
                <div class="mx-5">
                    <h1 class="w-2/5 text-center sm:text-start text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-medium uppercase text-red-500">About Me
                    </h1>
                    <p class="aboutRightP py-2 sm:py-3 md:py-5 lg:py-10 text-justify text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-gray-800 dark:text-white first-letter:text-4xl sm:first-letter:text-5xl md:first-letter:text-6xl lg:first-letter:text-7xl first-letter:font-bold first-letter:text-red-500
                  first-letter:mr-3  first-letter:float-left">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto officia, odio tempora nostrum deleniti nam officiis ex, deserunt sed quae error, perspiciatis quia nemo facere. Mollitia, ea qui exercitationem quidem sapiente neque ex, laborum vel ipsam, incidunt repudiandae ad alias consequuntur consectetur at aliquid consequatur dolore natus earum sequi. Dolor quisquam minus natus aliquam fugiat culpa consectetur. Placeat pariatur, iste at fugit, delectus explicabo laboriosam nesciunt dolorum eum deleniti esse. Distinctio cupiditate ipsa dicta explicabo natus enim. Ad error tempore eius pariatur rerum sed minus illum debitis nihil. Quasi obcaecati maxime, suscipit ea voluptatem iure unde quia excepturi quo repellat?
                    </p>
                    <div class="flex justify-center sm:justify-start">
                        <div class="aboutRightButton1">
                            <button class="about-btn mx-5 px-2 py-1 sm:px-3 sm:py-2" style="--clr:#EF1B1B">
                                <span class="xl:text-lg lg:text-lg md:text-base sm:text-sm text-xs">Hire Me</span>
                                <i></i>
                            </button>
                        </div>
                        <div class="aboutRightButton2">
                            <button class="about-btn px-2 py-1 sm:px-3 sm:py-2" style="--clr:#EF1B1B">
                                <span class="xl:text-lg lg:text-lg md:text-base sm:text-sm text-xs">Hire Me</span>
                                <i></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- portfolio -->
    <section id="portfolio" class=" mx-auto bg-white dark:bg-gray-700 py-12 sm:py-20">
        <h1 class="pTitle text-center text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-medium uppercase text-red-500">Portfolio
        </h1>
        <div class=" text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-700 dark:text-white font-normal text-center my-1 sm:my-2 md:my-3 lg:my-4 xl:my-5">
            <router-link to="/" class="pMenu ml-5">Projects</router-link>
            <router-link to="/favorite" class="pMenu ml-5">Favorite</router-link>
            <router-link to="/languages" class="pMenu ml-5">Languages</router-link>
            <router-view />
        </div>
    </section>

    <!-- services -->
    <section id="services" class="container mx-auto pt-20 xl:pt-20 lg:pt-20  dark:bg-gray-700 font-mono">
        <h1 class="text-center text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-medium uppercase text-red-500">Services
        </h1>
        <div class="py-5 lg:w-11/12 md:w-full sm:w-10/12 mx-auto grid grid-cols-2 gap-2 sm:gap-3 md:gap-0 md:grid-cols-4">
            <div class="mx-auto xl:w-52 xl:h-80 lg:w-48 lg:h-72 md:w-44 md:h-64 sm:w-40 sm:h-60 w-36 h-56">
                <a class="mx-auto s-card s-1 bg-gray-100 dark:bg-gray-400 w-full h-full">
                    <div class="overlay lg:w-12 lg:h-12 md:w-10 md:h-10 sm:w-8 sm:h-8 w-7 h-7">
                    </div>
                    <div class="circle xl:text-5xl lg:text-5xl md:text-4xl sm:text-3xl text-2xl xl:w-32 xl:h-32 lg:w-28 lg:h-28 md:w-24 md:h-24 sm:w-20 sm:h-20 w-16 h-16 after:xl:w-28 after:xl:h-28 after:lg:w-24 after:lg:h-24 after:md:w-20 after:md:h-20 after:sm:w-16 after:sm:h-16 after:w-14 after:h-14 text-yellow-500">
                        <i class="fa-brands fa-figma"></i>
                    </div>
                    <p class="xl:mt-12 lg:mt-11 md:mt-10 sm:mt-9 mt-8 md:text-base sm:text-sm text-sm">UI & UX Design
                    </p>
                </a>
            </div>
            <div class="mx-auto xl:w-52 xl:h-80 lg:w-48 lg:h-72 md:w-44 md:h-64 sm:w-40 sm:h-60 w-36 h-56">
                <a class="mx-auto s-card s-2 bg-gray-100 dark:bg-gray-400 w-full h-full">
                    <div class="overlay lg:w-12 lg:h-12 md:w-10 md:h-10 sm:w-8 sm:h-8 w-7 h-7">
                    </div>
                    <div class="circle xl:text-5xl lg:text-5xl md:text-4xl sm:text-3xl text-2xl xl:w-32 xl:h-32 lg:w-28 lg:h-28 md:w-24 md:h-24 sm:w-20 sm:h-20 w-16 h-16 after:xl:w-28 after:xl:h-28 after:lg:w-24 after:lg:h-24 after:md:w-20 after:md:h-20 after:sm:w-16 after:sm:h-16 after:w-14 after:h-14 text-green-500">
                        <i class="fa-solid fa-cubes">
                        </i>
                    </div>
                    <p class="xl:mt-12 lg:mt-11 md:mt-10 sm:mt-9 mt-8 md:text-base sm:text-sm text-sm">Graphic Design
                    </p>
                </a>
            </div>

            <div class="mx-auto xl:w-52 xl:h-80 lg:w-48 lg:h-72 md:w-44 md:h-64 sm:w-40 sm:h-60 w-36 h-56">
                <a class="mx-auto s-card s-3 bg-gray-100 dark:bg-gray-400 w-full h-full">
                    <div class="overlay lg:w-12 lg:h-12 md:w-10 md:h-10 sm:w-8 sm:h-8 w-7 h-7">
                    </div>
                    <div class="circle xl:text-5xl lg:text-5xl md:text-4xl sm:text-3xl text-2xl xl:w-32 xl:h-32 lg:w-28 lg:h-28 md:w-24 md:h-24 sm:w-20 sm:h-20 w-16 h-16 after:xl:w-28 after:xl:h-28 after:lg:w-24 after:lg:h-24 after:md:w-20 after:md:h-20 after:sm:w-16 after:sm:h-16 after:w-14 after:h-14 text-violet-500">
                        <i class="fa-solid fa-desktop"></i>
                    </div>
                    <p class="xl:mt-12 lg:mt-11 md:mt-10 sm:mt-9 mt-8 md:text-base sm:text-sm text-sm">Web Design
                    </p>
                </a>
            </div>

            <div class="mx-auto xl:w-52 xl:h-80 lg:w-48 lg:h-72 md:w-44 md:h-64 sm:w-40 sm:h-60 w-36 h-56">
                <a class="mx-auto s-card s-4 bg-gray-100 dark:bg-gray-400 w-full h-full">
                    <div class="overlay lg:w-12 lg:h-12 md:w-10 md:h-10 sm:w-8 sm:h-8 w-7 h-7">
                    </div>
                    <div class="circle xl:text-5xl lg:text-5xl md:text-4xl sm:text-3xl text-2xl xl:w-32 xl:h-32 lg:w-28 lg:h-28 md:w-24 md:h-24 sm:w-20 sm:h-20 w-16 h-16 after:xl:w-28 after:xl:h-28 after:lg:w-24 after:lg:h-24 after:md:w-20 after:md:h-20 after:sm:w-16 after:sm:h-16 after:w-14 after:h-14 text-blue-500">
                        <i class="fa-solid fa-mobile-screen-button"></i>
                    </div>
                    <p class="xl:mt-12 lg:mt-11 md:mt-10 sm:mt-9 mt-8 md:text-base sm:text-sm text-sm ">App Design
                    </p>
                </a>
            </div>
        </div>
    </section>

    <!-- experience -->
    <section id="experience" class="container mx-auto dark:bg-gray-700 pt-20 font-mono">
        <h1 class="text-center text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-medium uppercase text-red-500">Experience
        </h1>
        <div class="grid w-10/12 mx-auto sm:grid-cols-4 grid-cols-3 gap-5 mt-10">
            <div class="single-chart flex flex-col justify-center items-center mx-auto w-2/5">
                <svg viewBox="0 0 36 36" class="circular-chart w-4/5">
                    <path class="circle-bg stroke-gray-300" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                    <path class="circle stroke-red-500" stroke-dasharray="80, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                    <text x="7.5" y="22" class="percentage fill-black dark:fill-white bg-red-700">80%</text>
                </svg>
                <span class="text-balck dark:text-white xl:text-xl lg:text-lg md:text-base sm:text-sm text-xs">Html</span>
            </div>
            <div class="single-chart flex flex-col justify-center items-center mx-auto w-2/5">
                <svg viewBox="0 0 36 36" class="circular-chart w-4/5">
                    <path class="circle-bg stroke-gray-300" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                    <path class="circle stroke-blue-500" stroke-dasharray="80, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                    <text x="7.5" y="22" class="percentage fill-black dark:fill-white bg-red-700">80%</text>
                </svg>
                <span class="text-balck dark:text-white xl:text-xl lg:text-lg md:text-base sm:text-sm text-xs">Css</span>
            </div>
            <div class="single-chart flex flex-col justify-center items-center mx-auto w-2/5">
                <svg viewBox="0 0 36 36" class="circular-chart w-4/5">
                    <path class="circle-bg stroke-gray-300" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                    <path class="circle stroke-yellow-500" stroke-dasharray="80, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                    <text x="7.5" y="22" class="percentage fill-black dark:fill-white bg-red-700">80%</text>
                </svg>
                <span class="text-balck dark:text-white xl:text-xl lg:text-lg md:text-base sm:text-sm text-xs">JavaScript</span>
            </div>
            <div class="single-chart flex flex-col justify-center items-center mx-auto w-2/5">
                <svg viewBox="0 0 36 36" class="circular-chart w-4/5">
                    <path class="circle-bg stroke-gray-300" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                    <path class="circle stroke-violet-500" stroke-dasharray="80, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                    <text x="7.5" y="22" class="percentage fill-black dark:fill-white bg-red-700">80%</text>
                </svg>
                <span class="text-balck dark:text-white xl:text-xl lg:text-lg md:text-base sm:text-sm text-xs">Bootstrap</span>
            </div>
            <div class="single-chart flex flex-col justify-center items-center mx-auto w-2/5">
                <svg viewBox="0 0 36 36" class="circular-chart w-4/5">
                    <path class="circle-bg stroke-gray-300" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                    <path class="circle stroke-blue-400" stroke-dasharray="80, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                    <text x="7.5" y="22" class="percentage fill-black dark:fill-white bg-red-700">80%</text>
                </svg>
                <span class="text-balck dark:text-white xl:text-xl lg:text-lg md:text-base sm:text-sm text-xs">Tailwind</span>
            </div>
            <div class="single-chart flex flex-col justify-center items-center mx-auto w-2/5">
                <svg viewBox="0 0 36 36" class="circular-chart w-4/5">
                    <path class="circle-bg stroke-gray-300" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                    <path class="circle stroke-green-500" stroke-dasharray="80, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                    <text x="7.5" y="22" class="percentage fill-black dark:fill-white bg-red-700">80%</text>
                </svg>
                <span class="text-balck dark:text-white xl:text-xl lg:text-lg md:text-base sm:text-sm text-xs">Vue</span>
            </div>
            <div class="single-chart flex flex-col justify-center items-center mx-auto w-2/5">
                <svg viewBox="0 0 36 36" class="circular-chart w-4/5">
                    <path class="circle-bg stroke-gray-300" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                    <path class="circle stroke-gray-500" stroke-dasharray="80, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                    <text x="7.5" y="22" class="percentage fill-black dark:fill-white bg-red-700">80%</text>
                </svg>
                <span class="text-balck dark:text-white xl:text-xl lg:text-lg md:text-base sm:text-sm text-xs">GitHub</span>
            </div>
            <div class="single-chart flex flex-col justify-center items-center mx-auto w-2/5">
                <svg viewBox="0 0 36 36" class="circular-chart w-4/5">
                    <path class="circle-bg stroke-gray-300" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                    <path class="circle stroke-green-500" stroke-dasharray="80, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                    <text x="7.5" y="22" class="percentage fill-black dark:fill-white bg-red-700">80%</text>
                </svg>
                <span class="text-balck dark:text-white xl:text-xl lg:text-lg md:text-base sm:text-sm text-xs">VueX</span>
            </div>
        </div>
    </section>

    <!-- contact -->
    <section id="contact" class="container mx-auto dark:bg-gray-700 pt-20 py-10">
        <h1 class="text-center text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-medium uppercase text-gray-800 dark:text-white">Contact
        </h1>
        <div class="grid grid-cols-1 sm:grid-cols-2 w-10/12 mx-auto mt-10">
            <div class=" w-4/5 mx-auto">
                <iframe class="w-full h-4/5" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d245462.2855640647!2d97.74801435522747!3d15.99537883261571!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e8745fa5984411%3A0xcb67d740f14d830a!2sThanbyuzayat!5e0!3m2!1sen!2smm!4v1677812821920!5m2!1sen!2smm" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                <div class="flex flex-row pt-5">
                    <div>
                        <i class="fa-solid fa-location-dot mr-5 text-base"></i><br>
                        <i class="fa-regular fa-paper-plane mr-5 text-base"></i><br>
                        <i class="fa-solid fa-phone-volume mr-5 text-base"></i>
                    </div>
                    <div>
                        Lorem ipsum dolor sit amet.<br>
                        thetpaingoo@ucsy.edu.mm<br>
                        09799910026
                    </div>
                </div>
            </div>
            <div class=" w-full mt-16 sm:mt-0">
                <div class="w-4/5 mx-auto dark:text-red-500">
                    <form>
                        <div class="grid md:grid-cols-2 md:gap-6">
                            <div class="relative z-0 w-full mb-6 group">
                                <input type="text" name="floating_first_name" id="floating_first_name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer" placeholder=" " required />
                                <label for="floating_first_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
                            </div>
                            <div class="relative z-0 w-full mb-6 group">
                                <input type="text" name="floating_last_name" id="floating_last_name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer" placeholder=" " required />
                                <label for="floating_last_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
                            </div>
                        </div>
                        <div class="relative z-0 w-full mb-6 group">
                            <input type="email" name="floating_email" id="floating_email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer" placeholder=" " required />
                            <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                        </div>
                        <div class="relative z-0 w-full mb-6 group">
                            <input type="date" name="floating_password" id="floating_password" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer" placeholder=" " required />
                            <label for="floating_password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Birthday</label>
                        </div>
                        <div class="relative z-0 w-full mb-6 group">
                            <input type="color" class="mt-1 block w-full">
                            <label for="floating_password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Favorite Color</label>
                        </div>
                        <div class="relative z-0 w-full mb-6 group">
                            <textarea type="text" name="floating_email" id="floating_email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer" placeholder=" " required></textarea>
                            <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Message</label>
                        </div>
                        <button class="about-btn px-2 py-1 sm:px-3 sm:py-2" style="--clr:#EF1B1B">
                            <span class="xl:text-lg lg:text-lg md:text-base sm:text-sm text-xs">Submit</span>
                            <i></i>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </section>
    <div class="container mx-auto">
        <hr>
    </div>

    <section id="footer" class="container mx-auto dark:bg-gray-700 py-3">
        <div class="grid grid-cols-3  w-full">
            <div>
                <a ref="logo" class="mx-10 text-4xl font-bold leading-none text-red-500 " href="#">
                    <i class="fa-solid fa-leaf"></i>
                </a>
            </div>
            <div class=" flex justify-center items-center">
                <span>
                    2023 - Haru Studio, All Rights Reserved
                </span>
            </div>
            <div class=" flex justify-center items-center">
                <div class=" text-xl">
                    <i class="fa-brands fa-square-facebook mx-5"></i>
                    <i class="fa-brands fa-square-instagram mx-5"></i>
                    <i class="fa-brands fa-linkedin mx-5"></i>
                    <i class="fa-brands fa-square-github mx-5"></i>
                </div>
            </div>
        </div>
    </section>
</div>
</template>

<script>
<
reference types = "@types/scrollreveal" / >

    import {
        onMounted,
        ref
    } from 'vue';
import ScrollReveal from 'scrollreveal';

// import ScrollReveal from 'scrollreveal/dist/scrollreveal.es.js';

import {
    useDark,
    useToggle
} from "@vueuse/core"

//color theme

export default {
    setup() {

        // dark mode
        const isDark = useDark();
        const toggleDark = useToggle(isDark)
        console.log(isDark.value)

        document.addEventListener('DOMContentLoaded', function () {
            // open
            const burger = document.querySelectorAll('.navbar-burger');
            const menu = document.querySelectorAll('.navbar-menu');

            if (burger.length && menu.length) {
                for (var i = 0; i < burger.length; i++) {
                    burger[i].addEventListener('click', function () {
                        for (var j = 0; j < menu.length; j++) {
                            menu[j].classList.toggle('hidden');
                        }
                    });
                }
            }

            // close
            const close = document.querySelectorAll('.navbar-close');
            const backdrop = document.querySelectorAll('.navbar-backdrop');

            if (close.length) {
                for (var i = 0; i < close.length; i++) {
                    close[i].addEventListener('click', function () {
                        for (var j = 0; j < menu.length; j++) {
                            menu[j].classList.toggle('hidden');
                        }
                    });
                }
            }

            if (backdrop.length) {
                for (var i = 0; i < backdrop.length; i++) {
                    backdrop[i].addEventListener('click', function () {
                        for (var j = 0; j < menu.length; j++) {
                            menu[j].classList.toggle('hidden');
                        }
                    });
                }
            }
        });

        // scroll

        onMounted(() => {
            ScrollReveal().reveal('.homeleft', {
                delay: 0,
                duration: 1800,
                distance: '50px',
                easing: 'ease-in-out',
                // easing: 'step-start'
                origin: 'left',
            });
            ScrollReveal().reveal('.homeright', {
                delay: 0,
                duration: 2000,
                distance: '50px',
                easing: 'ease-in-out',
                origin: 'right',
            });
            ScrollReveal().reveal('.aboutLeft', {
                delay: 0,
                duration: 1800,
                distance: '50px',
                easing: 'ease-in-out',
                origin: 'left',
                mobile: true
            });
            ScrollReveal().reveal('.aboutRight', {
                delay: 1000,
                duration: 1800,
                distance: '50px',
                easing: 'ease-in-out',
                origin: 'right',
                mobile: true
            });
            ScrollReveal().reveal('.pTitle', {
                delay: 0,
                duration: 2000,
                distance: '50px',
                easing: 'ease-in-out',
                origin: 'top',
            });
            ScrollReveal().reveal('.pMenu', {
                delay: 1000,
                duration: 2000,
                distance: '50px',
                easing: 'ease-in-out',
                origin: 'top',
            });
            ScrollReveal().reveal('.pCard1', {
                delay: 1000,
                duration: 2000,
                distance: '50px',
                easing: 'ease-in-out',
                origin: 'top',
            });
            ScrollReveal().reveal('.pCard2', {
                delay: 1000,
                duration: 2000,
                distance: '50px',
                easing: 'ease-in-out',
                origin: 'top',
            });
        });

        return {
            toggleDark,
            isDark,

        }
    }
}
</script>

<style scoped>
.nav-ul a {
    /* background-color: #4ec3ca; */
    position: relative;
    width: 33.333%;
    display: table-cell;
    text-align: center;
    /* color: #949494; */
    text-decoration: none;
    /* font-family: Verdana, Geneva, Tahoma, sans-serif; */
    /* font-weight: bold; */
    padding: 10px 20px;
    transition: 0.2s ease color;
}

.nav-ul a:before,
.nav-ul a:after {
    content: "";
    position: absolute;
    border-radius: 50%;
    transform: scale(0);
    transition: 0.2s ease transform;
}

.nav-ul a:before {
    top: 0;
    left: 10px;
    width: 6px;
    height: 6px;
}

.nav-ul a:after {
    top: 5px;
    left: 18px;
    width: 4px;
    height: 4px;
}

.mob-nav-ul li a:before,
.mob-nav-ul li a:after {
    content: "";
    position: absolute;
    border-radius: 50%;
    transform: scale(0);
    transition: 0.2s ease transform;
}

.mob-nav-ul li a:before {
    /* top: 0px; */
    left: 10px;
    width: 6px;
    height: 6px;
}

.mob-nav-ul li a:after {
    /* top: 5px; */
    left: 18px;
    width: 4px;
    height: 4px;
}

.nav-ul-li-a-1:before {
    background-color: gold;
}

.nav-ul-li-a-1:after {
    background-color: hotpink;
}

.nav-ul-li-a-2:before {
    background-color: #f9d1d2;
}

.nav-ul-li-a-2:after {
    background-color: #e1b53a;
}

.nav-ul-li-a-3:before {
    background-color: #00a2a1;
}

.nav-ul-li-a-3:after {
    background-color: #4ec3ca;
}

.nav-ul-li-a-4:before {
    background-color: #e9e6dd;
}

.nav-ul-li-a-4:after {
    background-color: #696967;
}

.nav-ul-li-a-5:before {
    background-color: #50c3ca;
}

.nav-ul-li-a-5:after {
    background-color: #d8d1c7;
}

.nav-ul-li-a-6:before {
    background-color: #009fad;
}

.nav-ul-li-a-6:after {
    background-color: #a6c55d;
}

.indicator {
    /* position: absolute; */
    /* top:60px; */
    /* left:340px; */
    /* bottom: 0; */
    width: 30px;
    height: 3px;
    background-color: linear-gradient(130deg, gold, hotpink);
    border-radius: 5px;
    transition: 0.2s ease left;
}

.nav-ul a:hover:before,
.nav-ul a:hover:after,
.nav-ul a:active:before,
.nav-ul a:active:after {
    transform: scale(1);
}

.mob-nav-ul a:hover:before,
.mob-nav-ul a:hover:after,
.mob-nav-ul a:active:before,
.mob-nav-ul a:active:after {
    transform: scale(1);
}

.nav-ul-li-a-1:hover~.indicator,
.nav-ul-li-a-1:active~.indicator {
    background: linear-gradient(130deg, gold, hotpink);
}

.nav-ul-li-a-2:hover~.indicator {
    background: linear-gradient(130deg, #f9d1d2, #e1b53a);
}

.nav-ul-li-a-2:visited~.indicator {
    background: linear-gradient(130deg, #00e2ff, #89ff00);
}

.nav-ul-li-a-3:hover~.indicator {
    background: linear-gradient(130deg, #00a2a1, #4ec3ca);
}

.nav-ul-li-a-4:hover~.indicator {
    background: linear-gradient(130deg, #e9e6dd, #696967);
}

.nav-ul-li-a-5:hover~.indicator {
    background: linear-gradient(130deg, #50c3ca, #d8d1c7);
}

.nav-ul-li-a-6:hover~.indicator {
    background: linear-gradient(130deg, #009fad, #a6c55d);
}

/* end nav bar */

/* start home */
.menu li::before,
/*menu=home left text */
.menu li::after {
    content: "";
    position: absolute;
}

.menu li::before {
    background: rgba(255, 255, 255, 0.4);
    border-radius: 50%;
    transition: background 1s;
}

.menu li:hover::before {
    background: #fff;
}

.word {
    text-decoration: none;
    /* color: orangered; */
}

.word:hover span {
    transform: rotateX(-360deg);
    color: #fff;
}

.word span {
    display: inline-block;
    transition: transform 1s linear, color 2s linear;
}

.word1 span:nth-child(1) {
    transition-delay: 0.1s;
}

.word1 span:nth-child(2) {
    transition-delay: 0.2s;
}

.word1 span:nth-child(3) {
    transition-delay: 0.3s;
}

.word1 span:nth-child(4) {
    transition-delay: 0.4s;
}

.word1 span:nth-child(5) {
    transition-delay: 0.5s;
}

.word1 span:nth-child(6) {
    transition-delay: 0.6s;
}

.word1 span:nth-child(7) {
    transition-delay: 0.7s;
}

.word1 span:nth-child(8) {
    transition-delay: 0.8s;
}

.word1 span:nth-child(9) {
    transition-delay: 0.9s;
}

/* home button */
.about-btn {
    position: relative;
    background: hsl(0, 100%, 50%);
    color: black;
    text-decoration: none;
    text-transform: uppercase;
    border: none;
    /* letter-spacing: 0.1rem;
    font-size: 1rem;
    padding: 1rem 3rem; */
    transition: 0.2s;
}

.about-btn:hover {
    letter-spacing: 0.2rem;
    /* padding: 1.1rem 3.1rem; */
    background: var(--clr);
    color: var(--clr);
    box-shadow: 0 0 35px var(--clr);
    animation: box 3s infinite;
}

.about-btn::before {
    content: "";
    position: absolute;
    inset: 2px;
    background: rgb(223, 223, 223);
}

.about-btn span {
    position: relative;
    z-index: 1;
}

.about-btn i {
    position: absolute;
    inset: 0;
    display: block;
}

.about-btn i::before {
    content: "";
    position: absolute;
    width: 10px;
    height: 2px;
    right: 20%;
    top: -2px;
    border: 2px solid var(--clr);
    background: #272822;
    transition: 0.2s;
}

.about-btn:hover i::before {
    width: 15px;
    right: 80%;
    animation: move 3s infinite;
}

.about-btn i::after {
    content: "";
    position: absolute;
    width: 10px;
    height: 2px;
    left: 18%;
    bottom: -2px;
    border: 2px solid var(--clr);
    background: #272822;
    transition: 0.2s;
}

.about-btn:hover i::after {
    width: 15px;
    left: 75%;
    animation: move 3s infinite;
}

@keyframes move {
    0% {
        transform: translateX(0);
    }

    50% {
        transform: translateX(5px);
    }

    100% {
        transform: translateX(0);
    }
}

@keyframes box {
    0% {
        box-shadow: #27272c;
    }

    50% {
        box-shadow: 0 0 25px var(--clr);
    }

    100% {
        box-shadow: #27272c;
    }
}

/* home img */
.shrink {
    transition: 1s ease;
}

.shrink:hover {
    -webkit-transform: scale(0.8);
    -ms-transform: scale(0.8);
    transform: scale(0.8);
    transition: 1s ease;
}

/* about */
/* about img */
.rotate img {
    transition: 1s ease;
}

.rotate img:hover {
    -webkit-transform: rotateZ(-10deg);
    -ms-transform: rotateZ(-10deg);
    transform: rotateZ(-10deg);
    transition: 1s ease;
}

.img-border {
    --color: #EF4444;
    /* the border color */
    --border: 5px;
    /* the border thickness*/
    --offset: 8px;
    /* control the offset*/
    --gap: 5px;
    /* the gap on hover */

    --_c: var(--color) var(--border), #0000 0 calc(100% - var(--border)), var(--color) 0;
    --_o: calc(3*var(--offset));
    padding:
        calc(var(--gap) + var(--border)) calc(var(--gap) + var(--border) + var(--offset)) calc(var(--gap) + var(--border) + var(--offset)) calc(var(--gap) + var(--border));
    background:
        linear-gradient(var(--_c)) var(--_o) var(--_o),
        linear-gradient(90deg, var(--_c)) var(--_o) var(--_o);
    background-size: calc(100% - var(--_o)) calc(100% - var(--_o));
    background-repeat: no-repeat;
    filter: grayscale(.4);
    transition: .5s;
    cursor: pointer;
}

.img-border:hover {
    background-position: 0px 0px;
    background-size: calc(100% - var(--offset)) calc(100% - var(--offset));
    filter: grayscale(0);
}

/* about */

.aboutleft {
    flex: 1;
    overflow-y: scroll;
    touch-action: pan-y;
}

@media (min-width: 768px) {
    .aboutflex {
        flex-direction: row;
    }

    .aboutleft {
        overflow-y: initial;
        overflow-x: scroll;
    }
}

/* services */
.s-1 {
    --bg-color: #ffd861;
    --bg-color-light: #ffeeba;
    --text-color-hover: #4C5656;
    --box-shadow-color: rgba(255, 215, 97, 0.48);
}

.s-2 {
    --bg-color: #B8F9D3;
    --bg-color-light: #e2fced;
    --text-color-hover: #4C5656;
    --box-shadow-color: rgba(184, 249, 211, 0.48);
}

.s-3 {
    --bg-color: #CEB2FC;
    --bg-color-light: #F0E7FF;
    --text-color-hover: #fff;
    --box-shadow-color: rgba(206, 178, 252, 0.48);
}

.s-4 {
    --bg-color: #DCE9FF;
    --bg-color-light: #f1f7ff;
    --text-color-hover: #4C5656;
    --box-shadow-color: rgba(220, 233, 255, 0.48);
}

.s-card {
    /* width: 220px; */
    /* height: 321px; */
    border-top-right-radius: 10px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    box-shadow: 0 14px 26px rgba(0, 0, 0, 0.04);
    transition: all 0.3s ease-out;
    text-decoration: none;
}

.s-card:hover {
    transform: translateY(-5px) scale(1.005) translateZ(0);
    box-shadow: 0 24px 36px rgba(0, 0, 0, 0.11),
        0 24px 46px var(--box-shadow-color);
}

.s-card:hover .overlay {
    transform: scale(10) translateZ(0);
}

.s-card:hover .circle {
    border-color: var(--bg-color-light);
    background: var(--bg-color);
}

.s-card:hover .circle:after {
    background: var(--bg-color-light);
}

.s-card:hover p {
    /* color: var(--text-color-hover); */
    color: whitesmoke
}

.s-card:active {
    transform: scale(1) translateZ(0);
    box-shadow: 0 15px 24px rgba(0, 0, 0, 0.11),
        0 15px 24px var(--box-shadow-color);
}

.s-card p {
    /* font-size: 17px; */
    color: #4C5656;
    /* margin-top: 30px; */
    z-index: 1;
    transition: color 0.3s ease-out;
}

.circle {
    /* width: 131px; */
    /* height: 131px; */
    border-radius: 50%;
    background: #fff;
    border: 2px solid var(--bg-color);
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 1;
    transition: all 0.3s ease-out;
}

.circle:after {
    content: "";
    /* width: 118px; */
    /* height: 118px; */
    display: block;
    position: absolute;
    background: var(--bg-color);
    border-radius: 50%;
    /* top: 7px; */
    /* left: 7px; */
    transition: opacity 0.3s ease-out;
}

.circle i {
    z-index: 10000;
    transform: translateZ(0);
}

.overlay {
    /* width: 50px; */
    position: absolute;
    /* height: 50px; */
    border-radius: 50%;
    background: var(--bg-color);
    top: 90px;
    right: auto;
    bottom: auto;
    left: auto;
    z-index: 0;
    transition: transform 0.3s ease-out;
}

/* experience */
.single-chart {
    /* width: 33%; */
    justify-content: space-around;
}

.circular-chart {
    display: block;
    /* margin: 10px auto; */
    max-width: 80%;
    max-height: 250px;
}

.circle-bg {
    fill: none;
    /* stroke: #eee; */
    stroke-width: 3.8;
}

.circle {
    fill: none;
    stroke-width: 2.8;
    stroke-linecap: round;
    animation: progress 1s ease-out forwards;
}

@keyframes progress {
    0% {
        stroke-dasharray: 0 100;
    }
}

.percentage {
    /* fill: #666; */
    font-family: sans-serif;
    font-size: 0.7em;
    /* text-anchor:middle; */

}

/* color theme */
html.green nav a.logo {
    color: greenyellow;
}

html.green nav ul a:hover {
    color: greenyellow
}

html.contrast {
    filter: contrast(2);
}
</style>
