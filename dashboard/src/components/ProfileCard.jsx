import React from 'react'
import { useGetProfileQuery } from '../redux/profileService'
import { useSelector } from 'react-redux'

const ProfileCard = () => {

    const user = localStorage.getItem('auth') &&  JSON.parse(localStorage.getItem('auth'))
    const profile = useSelector(state => state.profile )
    
   const {data, isLoading, isFetching, isError, refetch} =useGetProfileQuery(user?.user?.id) 

    console.log('my profile', profile)
  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
      <link
        rel="stylesheet"
        href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css"
      ></link>
      {/* <link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css"></link> */}
      <main class="profile-page ">
    
        <section class="relative block h-500-px">
          <div
            class="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=2710&amp;q=80)",
            }}
          >
            <span
              id="blackOverlay"
              class="w-full h-full absolute opacity-50 bg-black"
            ></span>
          </div>
          <div class="top-auto bottom-0 left-0 right-0  absolute pointer-events-none overflow-hidden h-70-px">
            <svg
              class="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                class="text-blueGray-200 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </section>
        <section class="relative py-16 bg-blueGray-200">
          <div class="container mx-auto px-4">
            <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
              <div class="px-6">
                <div class="flex flex-wrap justify-center">
                  <div class="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                    <div class="relative">
                      <img
                        alt="..."
                        src="https://demos.creative-tim.com/notus-js/assets/img/team-2-800x800.jpg"
                        class="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
                      />
                    </div>
                  </div>
                  <div class="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                    <div class="py-6 px-3 mt-32 sm:mt-0">
                      {/* <button
                        class="bg-pink-500 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                        type="button"
                      >
                        Connect
                      </button> */}
                    </div>
                  </div>
                  <div class="w-full lg:w-4/12 px-4 lg:order-1">
                    <div class="flex justify-center py-4 lg:pt-4 pt-8">
                      <div class="mr-4 p-3 text-center">
                        <span class="text-sm text-nowrap font-bold block uppercase tracking-wide text-blueGray-600">
                         {profile?.profile?.data[0].attributes.numero}
                        </span>
                        <span class="text-sm text-blueGray-400">Téléphone</span>
                      </div>
                      <div class="mr-4 p-3 text-center">
                        <span class="text-sm font-bold block uppercase tracking-wide text-blueGray-600">
                        {profile?.profile?.data[0].attributes.adresse}

                        </span>
                        <span class="text-sm text-blueGray-400">Adresse</span>
                      </div>
                      {/* <div class="lg:mr-4 p-3 text-center">
                        <span class="text-sm font-bold block uppercase tracking-wide text-blueGray-600">
                          89
                        </span>
                        <span class="text-sm text-blueGray-400">Comments</span>
                      </div> */}
                    </div>
                  </div>
                </div>
                <div class="text-center mt-12">
                  <h3 class="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                  {profile?.profile?.data[0].attributes.nom} {" " && profile?.profile?.data[0].attributes.prenom}

                  </h3>
                  <div class="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                    <i class="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
                     {profile?.profile?.data[0].attributes.poste ? profile?.profile?.data[0].attributes.poste : <p className='text-red-600'> Le poste n'a pas été renseigné</p> }
                  </div>
                  <div class="mb-2 text-blueGray-600 mt-10">
                    <i class="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
                    Mairie de Siby
                  </div>
                  {/* <div class="mb-2 text-blueGray-600">
                    <i class="fas fa-university mr-2 text-lg text-blueGray-400"></i>
                    University of Computer Science
                  </div> */}
                </div>
                
              </div>
            </div>
          </div>
          
        </section>
      </main>
    </div>
  )
}

export default ProfileCard