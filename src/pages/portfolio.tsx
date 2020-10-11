import Layout from "../components/Layout";
import Project from "../components/Project";
import BasePage from "../components/BasePage";
import PortfolioSection from "../components/PortfolioSection";

export default function Portfolio() {
  return (
    <BasePage
      title="Cristobal Salazar - Portfolio"
      description="A Project showcase by Cristobal Salazar"
    >
      <Layout activeLinkName="Portfolio">
        <main className="container pt-24 pb-12 mx-auto sm:px-3" role="main">
          <PortfolioSection title="Web Apps">
            <Project
              title="Event.io"
              description="
                      Event io is a social media application that is based on user
                      location. Think of it like a localized instagram. The purpose
                      of event.io is to create a singular feed for an event in which
                      users can post to and see what others are posting. The
                      application allows users to make friends and follow each
                      other's activity. The application was built using React Native
                      and employs the same mapping and geocoding technology used by
                      airbnb. The app uses web sockets to communicate in realtime
                      and employs role based authentication to make sure that server
                      routes, and feeds are protected based on the users role.
                    "
              gitLink="https://github.com/CristobalSalazar/hidden-notes"
              videoSrc="/videos/event-io.mp4"
            />
            <Project
              title="StockTracker"
              description="
                      StockTracker is a financial desktop application built using
                      React and Electron. The app allows users to view and monitor
                      stock prices as well as other data provieded by IEX. The app
                      features watchlists which enable the user to track certain
                      companies as well as compare companies with their peers to see
                      how they relate with the competition. While making the app I
                      employed a binary search algorithm to effectively sort through
                      a list of 8000 tickers. You are also able to view news on the
                      currently viewed company to gather even more information.
                    "
              gitLink="https://github.com/CristobalSalazar/grmnotebook"
              videoSrc="/videos/grm.m4v"
            />
            <Project
              title="Giffycat"
              description="
                      Giffycat is a social media front-end application that allows
                      users to like, favourite and comment on their favourite gifs.
                      The app was built as part of a school project. It pulls data
                      from the GIPHY API. The design of the app was inspired by
                      Instagram's layout. The app was also built from the ground up
                      with mobile devices in mind and as a result is very adaptive
                      to different devices. The app was styled using sass and the
                      main logic implements jQuery.
                    "
              gitLink="https://github.com/CristobalSalazar/giffycat"
              videoSrc="/videos/giffycat.m4v"
            />
          </PortfolioSection>
          <PortfolioSection title="Unity Games">
            <Project
              title="Barb's Adventure"
              description="
                      Barb's Adventure is an isometric ARPG video game which is the
                      result of combining Diablo chess. It is a mobile game made
                      with the Unity Engine. I programmed everything from game
                      logic, to shaders, and even did all the animations vfx, sfx,
                      music and 3D modelling! Key features of Barb's Adventure
                      include a dynamic procedural level generation system which
                      increases in difficulty the further you travel. The game makes
                      extensive use of the ASTAR algorithm in the enemy pathfinding
                      and AI.
                    "
              gitLink="https://github.com/CristobalSalazar/barbsadventure"
              videoSrc="/videos/ba.mp4"
            />
            <Project
              title="Bitstream"
              description="
                      Bitstream is an arcade inspired shoot 'em up (SHMUP). The game
                      was programmed from the bottom up for mobile devices and makes
                      use of the accelerometer for navigation. The game features
                      many unlockable ships and different attacks. Like Barb's
                      Adventure, I programmed everything in the game, and made all
                      the pixel art, animations, music and sound effects. Bitstream
                      uses themed levels to maintain consistency and appeal to the
                      gamer, all whilst using controlled random generation to
                      provide a different experience through each play through.
                      Bitstream is available on both the iOS and Google Play Store
                      and is monetized via in game ads.
                    "
              gitLink="https://github.com/CristobalSalazar/bitstream"
              videoSrc="/videos/bs.m4v"
            />
          </PortfolioSection>
          <PortfolioSection title="Console Tools">
            <Project
              title="Pathfinder"
              description="
                    Pathfinding Algorithms is a console application that gives you
                    a random seed of obstacles, and places the starting point at
                    the bottom left of the map and an exit at the top right. You
                    are then able to see how different algorithms solve the maze.
                    The application was a result of research done on pathfinding
                    algorithms. The application makes use of 3 different
                    algorithms: ASTAR, Dijkstra, Greedy-Best First. You are also
                    able to toggle diagonal movement.
                  "
              gitLink="https://github.com/CristobalSalazar/pathfinding"
              videoSrc="/videos/pathfinding.m4v"
            />
            <Project
              title="Liri"
              description="
                    Liri is a console media application inspired by Apple's Siri.
                    Liri was built using Node. The app allows you to have access
                    to view songs, movies, and concerts. Liri connects to Spotify,
                    OMDB, and Bandsintown to recieve the data. Liri also logs all
                    requests into a text file.
                  "
              gitLink="https://github.com/CristobalSalazar/liri"
              videoSrc="/videos/liri.m4v"
            />
          </PortfolioSection>
        </main>
      </Layout>
    </BasePage>
  );
}
