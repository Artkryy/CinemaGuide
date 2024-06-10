import { FC } from 'react';
import './ModalTrailer.css'
import Iframe from 'react-iframe';
import { replaceWatchWithEmbed } from '../../utils/utils';

interface TModalTrailerProps {
  active: boolean;
  setActive: any;
  trailerUrl: string;
}

export const ModalTrailer: FC<TModalTrailerProps> = ({ active, setActive, trailerUrl }) => {
  return (
    <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
      <div className={active ? "modal__content active" : "modal__content"} onClick={e => e.stopPropagation()}>
        {active && (
          <>
          <Iframe
            url={`${replaceWatchWithEmbed(trailerUrl)}?autoplay=1&controls=0&rel=0&showinfo=0`}
            width="100%"
            height="100%"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope"
            frameBorder={0}
            allowFullScreen
          ></Iframe>
          <button className="auth-form__close btn-reset" onClick={() => setActive(false)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M10.5859 12L2.79297 4.20706L4.20718 2.79285L12.0001 10.5857L19.793 2.79285L21.2072 4.20706L13.4143 12L21.2072 19.7928L19.793 21.2071L12.0001 13.4142L4.20718 21.2071L2.79297 19.7928L10.5859 12Z" fill="black" />
          </svg>
        </button>
          </>
        )}
      </div>
    </div>
  )
}


