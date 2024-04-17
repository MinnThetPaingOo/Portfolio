<template>
 <div class="contain mx-5 grid grid-cols-1 gap-4 lg:grid-cols-4 sm:grid-cols-2  text-red-400 text-left text-xs sm:text-base md:text-base lg:text-xs xl:text-xs">
    <div class="card h-96 mx-auto w-10/12 sm:w-full pCard1">
        <img src="../assets/port-1.jpg" alt="Sora" class="card-img-top w-full h-60 md:h-60">
        <div class="card-body h-40 sm:h-56 lg:h-44 xl:h-40">
            <h5 class="card-title">Sora</h5>
            <p class="text-justify card-text pt-4 py-2 md:pt-5 md:py-3 lg:pt-4 lg:py-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.</p>
            <button class="border-2 border-red-500 rounded-lg px-3 py-1 text-red-400 cursor-pointer hover:bg-red-500 hover:text-white">
                    More
            </button>
        </div>
    </div>
    <div class="card h-96 mx-auto w-10/12 sm:w-full pCard1">
        <img src="../assets/port-2.jpg" alt="Sora" class="card-img-top w-full h-60 md:h-60">
        <div class="card-body h-40 sm:h-56 lg:h-44 xl:h-40">
            <h5 class="card-title">Umi</h5>
            <p class="text-justify card-text pt-4 py-2 md:pt-5 md:py-3 lg:pt-4 lg:py-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.</p>
            <button class="border-2 border-red-500 rounded-lg px-3 py-1 text-red-400 cursor-pointer hover:bg-red-500 hover:text-white">
                    More
            </button>
        </div>
    </div>
    <div class="card h-96 mx-auto w-10/12 sm:w-full pCard2">
        <img src="../assets/port-3.jpg" alt="Sora" class="card-img-top w-full h-60 md:h-60">
        <div class="card-body h-40 sm:h-56 lg:h-44 xl:h-40">
            <h5 class="card-title">Mori</h5>
            <p class="text-justify card-text pt-4 py-2 md:pt-5 md:py-3 lg:pt-4 lg:py-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.</p>
            <button class="border-2 border-red-500 rounded-lg px-3 py-1 text-red-400 cursor-pointer hover:bg-red-500 hover:text-white">
                    More
            </button>
        </div>
    </div>
    <div class="card h-96 mx-auto w-10/12 sm:w-full pCard2">
        <img src="../assets/port-4.jpg" alt="Sora" class="card-img-top w-full h-60 md:h-60">
        <div class="card-body h-40 sm:h-56 lg:h-44 xl:h-40">
            <h5 class="card-title">Yama</h5>
            <p class="text-justify card-text pt-4 py-2 md:pt-5 md:py-3 lg:pt-4 lg:py-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.</p>
            <button class="border-2 border-red-500 rounded-lg px-3 py-1 text-red-400 cursor-pointer hover:bg-red-500 hover:text-white">
                    More
            </button>
        </div>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>

.contain .card .card-img-top {
  position: relative;
  z-index: 2;
  transform: translateY(52%);
  transition: 0.5s;
}
.contain .card .card-body {
  z-index: 1;
  box-sizing: border-box;
  padding: 1.25em;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.056), 0 6.7px 5.3px rgba(0, 0, 0, 0.081), 0 12.5px 10px rgba(0, 0, 0, 0.1), 0 22.3px 17.9px rgba(0, 0, 0, 0.119), 0 41.8px 33.4px rgba(0, 0, 0, 0.144), 0 100px 80px rgba(0, 0, 0, 0.2);
  transform: translateY(-50%);
  transition: 0.5s;
}
.contain .card .card-body .card-title {
  font-size: 1.25em;
  font-weight: bold;
  line-height: 1.2;
}
/* .card-text{
    margin-top:5px;
    margin-bottom: 5px;
} */
.contain .card .card-body .btn {
  color: black;
  text-decoration: none;
  line-height: 1.5;
  border: 1px solid black;
  border-radius: 0.25em;
  transition: 0.5s;
}
.contain .card .card-body .btn:hover {
  color: white;
  background: black;
}
.contain .card:hover .card-img-top {
  transform: translateY(2%);
}
.contain .card:hover .card-body {
  transform: translateY(0);
}
</style>