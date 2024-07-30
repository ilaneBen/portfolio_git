import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Navigation, Pagination, Scrollbar, A11y, EffectCoverflow } from 'swiper/modules';
import SwiperCore from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css' ;
import '../App.css';
import icons from './github-language-icons'; // Importez les icônes de votre projet

// Installez les modules Swiper
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, EffectCoverflow]);

const GitHubRepositories = () => {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    const fetchRepositories = async () => {
      try {
        const token = 'Your_Api_key';
        const apiUrl = 'https://api.github.com/user/repos';

        const response = await axios.get(apiUrl, {
          headers: {
            'Authorization': `token ${token}`
          }
        });

        setRepositories(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des dépôts :', error);
      }
    };

    fetchRepositories();
  }, []);


  
  return (
    <div>
      <h1>Ilane Benazzouz</h1>
      <div className="swiper-container">
        <div className="side-info">
          <span>Découvrez</span>
          <h1>Mes Repositories GitHub !</h1>
          <hr />
          <p>
           Tout mes projets personnel jusqu'à maintenant.
          </p><br />
          <p>
          Ps: Oui du coup ici aussi, c'est un projet perso où j'ai combiné React avec la librairie Swiper !
          </p>
          <a href="https://github.com/ilaneBen">Voir</a>
        </div>
        
        <div className="swiper">
          <div className="swiper-wrapper">
            <Swiper
              effect="coverflow"
              grabCursor={true}
              centeredSlides={true}
              coverflowEffect={{
                rotate: 0,
                stretch: 50,
                depth: 100,
                modifier: 4,
                slideShadows: true,
              }}
              keyboard={{ enabled: true }}
              mousewheel={{ thresholdDelta: 70 }}
              loop={true}
              autoplay={{ delay: 1000, disableOnInteraction: true }}
              pagination={{ clickable: true }}
              breakpoints={{
                640: { slidesPerView: 2 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 2 },
                1560: { slidesPerView: 3},
              }}
            >
{repositories.map((repo, index) => (
  <SwiperSlide key={index}>

   
      {repo.name.includes('hackathon') && (
        <div className={`slide-one`}>
          <h2>{repo.name}</h2>
          <p>{repo.description}</p>
          {repo.language && (
            <div>
           <img src="/images/hackathon.png" alt="php logo" />
            </div>
          )}
          <a href={repo.html_url}>Voir le Repo</a>
        </div>
      )}

      {repo.name.includes('test_svelte') && (
        <div className={`slide-two`}>
          <h2>{repo.name}</h2>
          <p>{repo.description}</p>
          {repo.language && (
            <div>
              <img src="/images/svelte.png" alt="php logo" />
            </div>
          )}
          <h2><strong>Svelte</strong></h2>
          <a href={repo.html_url}>Voir le Repo</a>
        </div>
      )}

      {repo.name.includes('gamestore_flutter') && (
        <div className={`slide-three`}>
          <h2>{repo.name}</h2>
          <p>{repo.description}</p>
          {repo.language && (
            <div>
              <img src={icons[repo.language]} alt={repo.language} />
            </div>
          )}
          <a href={repo.html_url}>Voir le Repo</a>
        </div>
      )}

      {repo.name.includes('site_full_php') && (
        <div className={`slide-four`}>
          <h2>{repo.name}</h2>
          <p>{repo.description}</p>
          
            <div>
              <img src="/images/php.jpg" alt="php logo" />
            </div>
          
          <a href={repo.html_url}>Voir le Repo</a>
        </div>
      )}

      {repo.name.includes('cour_agence_chouette') && (
        <div className={`slide-five`}>
          <h2>{repo.name}</h2>
          <p>{repo.description}</p>
          {repo.language && (
            <div>
              <img src="/images/js.jpg" alt="js logo" />
            </div>
          )}
          <a href={repo.html_url}>Voir le Repo</a>
        </div>
      )}

      {repo.name.includes('symfony6_ecommerce') && (
        <div className={`slide-six`}>
          <h2>{repo.name}</h2>
          <p>{repo.description}</p>
          {repo.language && (
            <div>
              <img src={icons[repo.language]} alt={repo.language} />
            </div>
          )}
          <a href={repo.html_url}>Voir le Repo</a>
        </div>
      )}

      {repo.name.includes('jhipster-sample-application') && (
        <div className={`slide-seven`}>
          <h2>{repo.name}</h2>
          <p>{repo.description}</p>
          {repo.language && (
            <div>
              <img src="/images/java.jpg" alt="java logo" />
            </div>
          )}
          <a href={repo.html_url}>Voir le Repo</a>
        </div>
      )}

      {/* Ajoutez ici d'autres SwiperSlides en arrière-plan si nécessaire */}
  </SwiperSlide>
))}
            </Swiper>
          </div>
          <div className={"swiper-pagination"}></div>
        </div>
      </div>
    </div>
  );
};

export default GitHubRepositories;