import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import './FeaturedTiles.css';


const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {

  const [videoModalActive, setVideomodalactive] = useState(false);

  const openModal = (e) => {
    e.preventDefault();
    setVideomodalactive(true);
  }

  const closeModal = (e) => {
    e.preventDefault();
    setVideomodalactive(false);
  }   

  const outerClasses = classNames(
    'hero section center-content',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'hero-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  return (
    <section
      {...props}
      className={outerClasses} >
      <div className="container-md">
        <div className={innerClasses}>
          <div className="hero-content">
            <h1 className="mt-0 mb-16 reveal-from-bottom multicolortext" data-reveal-delay="200">
              <img height='600px' src={require('./../../assets/images/whalesharktitle.png')} />
            </h1>
            <br/>
            <img maxHeight='200px' className='contained' href='https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/72448555997048199970373615651430281795522827893938176318660963873613808664577' src={require('./../../assets/images/image-3.png')} />
            <br/>
            <div className="container-xs">
              <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
              A crowned rare alpha collectible for the Ultra Dragona Hash Lord. 
The Gland Wizard - First Edition - WhaleShark is an independent new wave token known by sultry underground curmudgeons as the authentic first music album minted on the Ethereum Blockchain (token ownership comes with album hardware wallet shipped). WhaleShark gained notable commercial scorn and reluctant attention - <a href="https://www.clashmusic.com/news/wait-did-clarian-beat-kings-of-leons-nft-record">Clash,</a> <a href='https://www.broadwayworld.com/bwwmusic/article/Clarian-Makes-History-As-First-Artist-To-Auction-Album-Whale-Shark-as-NFT-20210311'> Broadway World, </a> <a href="https://mixmag.net/feature/what-is-an-nft-how-help-music-industry-musicians-guide-clarian-whale-shark">Mixmag,</a> <a href="https://github.com/01Clarian/" >Broadway, </a> <a href="https://xlr8r.com/news/visionary-artist-clarian-becomes-first-artist-to-auction-album-as-nft/" >XLR8R, </a> <a href="https://www.vulture.com/2021/03/music-nft-projects-ranked.html">Vulture, </a> <a href="https://www.magneticmag.com/2021/03/clarian-selling-new-album-whale-shark-publishing-copyright-nft/" >Magnetic</a> - etc... and rated in the top three most detestable NFT by New York Magazine). Cower, EDM pleabs
                </p>
              <div className="reveal-from-bottom" data-reveal-delay="600">
              </div>
            </div>
          </div>
          <div className="hero-figure" data-reveal-value="20px" data-reveal-delay="800">
          <nft-card width='600px' contractAddress="0x495f947276749ce646f68ac8c248420045cb7b5e" tokenId="72448555997048199970373615651430281795522827893938176318660963873613808664577"> </nft-card>
          </div>
        </div>
      </div>
    </section>
  );
}

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;