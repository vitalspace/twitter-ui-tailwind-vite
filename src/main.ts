import './style.css'


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<div class="h-full bg-[#04121c]">
  <nav class="mb-1 py-4">
    <div class="container mx-auto flex items-center justify-between">
      <div class="mx-4 flex items-center space-x-4 px-2">
        <img src="icons/tweet-twitter-twitter-icon-svgrepo-com.svg" width="50" alt="" />
        <div>
          <input class="rounded-full border-2 py-2 pl-4" type="text" name="" id="" placeholder="# Explore" />
        </div>
      </div>

      <div class="mx-4 flex space-x-8">
        <button class="items-center rounded-full bg-white hidden md:flex"><img width="40" src="icons/home-4-svgrepo-com.svg" alt="" /><p class="px-2">Home</p></button>

        <button class="hidden md:flex">
          <img width="40" src="icons/message-svgrepo-com.svg" alt="" />
        </button>

        <button class="hidden md:flex">
          <img width="40" src="icons/bell-svgrepo-com.svg" alt="" />
        </button>

        <button class="items-center rounded-full bg-[#2c3b42] text-white hidden md:flex"">
          <img width="40" src="icons/cat-svgrepo-com.svg" alt="" />
          <h2 class="mx-4">JrDev94</h2>
        </button>

        <button>
          <img width="35" src="icons/menu-grid-svgrepo-com.svg" alt="" />
        </button>
      </div>
    </div>
  </nav>

  <div class="container p-4 md:mx-auto md:p-0 flex justify-center ">
    <!-- Left modal -->
    <div class="mx-4 space-y-4 hidden md:block">
      <div class="w-80 rounded-lg bg-[#1a2631] pb-4 text-center text-white">
        <div class="flex justify-center rounded-t-lg bg-gradient-to-br from-slate-300 via-white to-gray-500">
          <img width="70" class="relative top-9" src="icons/cat-svgrepo-com.svg" alt="" />
        </div>

        <div class="space-y-4">
          <div class="mt-10">
            <h2 class="text-xl">DevJr94</h2>
            <p class="text-xs text-gray-500">@devj94</p>
          </div>

          <div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, maxime!</p>
          </div>

          <div class="flex justify-center">
            <div class="w-full border-[0.1em] border-gray-500">
              <h2>888</h2>
              <p class="text-gray-400">Following</p>
            </div>
            <div class="w-full border-[0.1em] border-gray-500">
              <h2>888</h2>
              <p class="text-gray-400">Followers</p>
            </div>
          </div>

          <div class="flex justify-center">
            <a class="text-blue-600" href="/">My Profile</a>
          </div>
        </div>
      </div>

      <div class="w-80 rounded-lg bg-[#1a2631] pb-4 text-white">
        <div class="py-2 pl-4">
          <h2>Who is to follow you</h2>
        </div>

        <div class="flex flex-wrap space-y-2">
          <div class="flex w-full items-center justify-around space-x-8">
            <img class="rounded-full" width="60" src="icons/dog-svgrepo-com.svg" alt="" />
            <div>
              <h3 class="text-sm">Product Hunt</h3>
              <p class="text-xs text-gray-400">@productuht</p>
            </div>
            <button class="rounded-xl bg-white px-4 py-1 text-sm text-gray-900">Follow</button>
          </div>

          <div class="flex w-full items-center justify-around space-x-8">
            <img class="rounded-full" width="60" src="icons/dog-svgrepo-com.svg" alt="" />
            <div>
              <h3 class="text-sm">Product Hunt</h3>
              <p class="text-xs text-gray-400">@productuht</p>
            </div>
            <button class="rounded-xl bg-white px-4 py-1 text-sm text-gray-900">Follow</button>
          </div>

          <div class="flex w-full items-center justify-around space-x-8">
            <img class="rounded-full" width="60" src="icons/dog-svgrepo-com.svg" alt="" />
            <div>
              <h3 class="text-sm">Product Hunt</h3>
              <p class="text-xs text-gray-400">@productuht</p>
            </div>
            <button class="rounded-xl bg-white px-4 py-1 text-sm text-gray-900">Follow</button>
          </div>
        </div>
      </div>
    </div>

    <!-- FEED div -->
    <div class="w-full space-y-4 text-white">
      <div class="flex flex-wrap rounded-lg bg-[#1a2631] py-4">
        <div class="flex w-full space-x-2 px-8">
          <img width="40" src="icons/cat-svgrepo-com.svg" alt="" />
          <input class="w-full rounded-lg bg-[#29353f] pl-4" type="text" name="" id="" placeholder="What's happening?" />
        </div>
        <div class="flex space-x-[1.1em] md:pl-20 pt-4 md:space-x-[0.4em]">
          <button class="flex items-center rounded-full border-[0.1em] border-gray-600 space-x-2 py-1 md:px-4"><img src="icons/img-svgrepo-com.svg" width="20" alt="" /><p>Photo</p></button>
          <button class="flex items-center rounded-full border-[0.1em] border-gray-600 space-x-2 py-1 md:px-4"><img src="icons/video-circle-svgrepo-com.svg" width="20" alt="" /><p>Video</p></button>
          <button class="flex items-center rounded-full border-[0.1em] border-gray-600 space-x-2 py-1 md:px-4"><img src="icons/list-svgrepo-com.svg" width="22" alt="" /><p>Thread</p></button>
          <button class="flex items-center rounded-full border-[0.1em] border-gray-600 space-x-2 py-1 md:px-4"><img src="icons/schedule-svgrepo-com.svg" width="20" alt="" /><p>Schedule</p></button>
        </div>
      </div>

      <div class="flex flex-wrap rounded-lg bg-[#1a2631] py-4">
        <div class="pl-8">
          <img width="40" class="" src="icons/cat-svgrepo-com.svg" alt="" />
        </div>

        <div class="flex flex-wrap">
          <div class="flex space-x-2 pl-2">
            <h2>Elon Muks</h2>
            <p>@elonmusk</p>
          </div>
          <span class="w-full pl-2 text-gray-400">2 hours ago</span>
        </div>

        <div class="md:pl-20 md:pr-14">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iure accusamus dolor iusto. Vel minus facilis et est hic sit esse, dolores perspiciatis sunt dicta ducimus error ab quae magni!</p>
          <div class="mt-4 flex justify-between">
            <div class="flex space-x-2">
              <img src="icons/heart-svgrepo-com.svg" width="20" alt="" />
              <img src="icons/sync-svgrepo-com.svg" width="20" alt="" />
              <img src="icons/share-alt-svgrepo-com.svg" width="20" alt="" />
              <p class="text-gray-400">234k</p>
            </div>
            <a class="text-gray-400" href="/">45 Comments</a>
          </div>

          <div class="mt-4 flex space-x-1">
          <button class="flex items-center rounded-lg bg-[#29353f] space-x-2 px-2 py-1"><img src="icons/heart-svgrepo-com.svg" width="30" alt="" /><p>Like</p></button>
          <button class="flex items-center rounded-lg bg-[#29353f] space-x-2 px-2 py-1"><img src="icons/sync-svgrepo-com.svg" width="30" alt="" /><p>Retweet</p></button>
          <button class="flex items-center rounded-lg bg-[#29353f] space-x-2 px-2 py-1"><img src="icons/comments-svgrepo-com.svg" width="30" alt="" /><p>Comment</p></button>
          <button class="flex items-center rounded-lg bg-[#29353f] px-4 py-1"><img src="icons/share-alt-svgrepo-com.svg" width="30" alt="" /></button>
          </div>
        </div>
      </div>

      <div class="flex flex-wrap rounded-lg bg-[#1a2631] py-4">
        <div class="pl-8">
          <img width="40" class="" src="icons/cat-svgrepo-com.svg" alt="" />
        </div>

        <div class="flex flex-wrap">
          <div class="flex space-x-2 pl-2">
            <h2>Elon Muks</h2>
            <p>@elonmusk</p>
          </div>
          <span class="w-full pl-2 text-gray-400">2 hours ago</span>
        </div>

        <div class="md:pl-20 md:pr-14">
          <h2>Dogecoin</h2>
          <img src="https://public.bnbstatic.com/static/academy/uploads-original/0ee9d7d59d424a7c8bd7d70c86070beb.png" alt="" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iure accusamus dolor iusto. Vel minus facilis et est hic sit esse, dolores perspiciatis sunt dicta ducimus error ab quae magni!</p>
          <div class="mt-4 flex justify-between">
            <div class="flex space-x-2">
              <img src="icons/heart-svgrepo-com.svg" width="20" alt="" />
              <img src="icons/sync-svgrepo-com.svg" width="20" alt="" />
              <img src="icons/share-alt-svgrepo-com.svg" width="20" alt="" />
              <p class="text-gray-400">234k</p>
            </div>
            <a class="text-gray-400" href="/">45 Comments</a>
          </div>

          <div class="mt-4 flex space-x-1">
            <button class="flex items-center rounded-lg bg-[#29353f] space-x-2 px-2 py-1"><img src="icons/heart-svgrepo-com.svg" width="30" alt="" /><p>Like</p></button>
            <button class="flex items-center rounded-lg bg-[#29353f] space-x-2 px-2 py-1"><img src="icons/sync-svgrepo-com.svg" width="30" alt="" /><p>Retweet</p></button>
            <button class="flex items-center rounded-lg bg-[#29353f] space-x-2 px-2 py-1"><img src="icons/comments-svgrepo-com.svg" width="30" alt="" /><p>Comment</p></button>
            <button class="flex items-center rounded-lg bg-[#29353f] px-4 py-1"><img src="icons/share-alt-svgrepo-com.svg" width="30" alt="" /></button>
          </div>
        </div>
      </div>
    </div>

    <!-- Right Modal -->
    <div class="mx-4 hidden md:block ">
      <div class="w-80 rounded-lg bg-[#1a2631] pb-4 text-white">
        <div class="flex justify-between px-4 py-2">
          <h2>Trend for you</h2>
          <button>
            <img src="icons/configuration-gear-options-preferences-settings-system-svgrepo-com.svg" width="20" alt="" />
          </button>
        </div>

        <div class="px-4">
          <div class="mb-2 space-y-2">
            <h2 class="text-gray-400">TRENDING IN USA</h2>
            <div class="flex justify-between">
              <ul>
                <li>#Minions</li>
                <li class="text-gray-400">97.7 k Tweets</li>
              </ul>
              <p class="text-gray-400">...</p>
            </div>

            <div class="flex justify-between">
              <ul>
                <li>#Minions</li>
                <li class="text-gray-400">97.7 k Tweets</li>
              </ul>
              <p class="text-gray-400">...</p>
            </div>
            <hr />
          </div>

          <div class="mb-2 space-y-2">
            <h2 class="text-gray-400">TRENDING IN USA</h2>
            <div class="flex justify-between">
              <ul>
                <li>#Minions</li>
                <li class="text-gray-400">97.7 k Tweets</li>
              </ul>
              <p class="text-gray-400">...</p>
            </div>

            <div class="flex justify-between">
              <ul>
                <li>#Minions</li>
                <li class="text-gray-400">97.7 k Tweets</li>
              </ul>
              <p class="text-gray-400">...</p>
            </div>
            <hr />
          </div>

          <div class="mb-2 space-y-2">
            <h2 class="text-gray-400">TRENDING IN USA</h2>
            <div class="flex justify-between">
              <ul>
                <li>#Minions</li>
                <li class="text-gray-400">97.7 k Tweets</li>
              </ul>
              <p class="text-gray-400">...</p>
            </div>

            <div class="flex justify-between">
              <ul>
                <li>#Minions</li>
                <li class="text-gray-400">97.7 k Tweets</li>
              </ul>
              <p class="text-gray-400">...</p>
            </div>
          </div>
        </div>

        <div class="px-4">
          <a class="text-blue-600" href="/">Show More</a>
        </div>
      </div>
    </div>
  </div>
</div>
`

document.querySelector<HTMLButtonElement>('#counter');
