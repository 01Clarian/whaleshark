import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';
import './FeaturedTiles.css';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}
const FeaturesTiles = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {

  const outerClasses = classNames(
    'hero section center-content',
    'features-tiles section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-tiles-inner section-inner pt-0',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap center-content',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
 
    paragraph: 'Comes with original one of one laminated WhaleShark playing card - shipped worldwide. Brings forth a reckoning of digitaria spawning a new era of Hopium dens. Whale Shark, The weird Synth Pop album title was inspired by spite and revenge against mass media headlines falling on their swords with futurless EDM purchases and crash grabs for petty draped fools in paper armor. This END-FT represents a fresh slice of digital Dale Cooper pie, and comes with the full publishing rights to the synth wave album, WhaleShark, in perpetuity, along with the ONE and ONLY uncut masters of the LP via hardware wallet - shipped worldwide (unlockaeble content). This is not a one of a hundred million thousand mass marketing sell off. This is a one of one mass marketing fuck off. Listen to a peak of the album here and quiver in your tattered boots of ElvenWeb2.'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div style={{textAlign:'center'}}>
        
        <h1 className='multicolortext2' style={{marginLeft:'10px'}} >
        <img height='600px'  src={require('./../../assets/images/firstedition.png')} />

        </h1>
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content ml-200 " />
          <div className={tilesClasses}>
            <div className="multicolortext2" data-reveal-delay="400">
            <iframe style={{ height:"120px;", marginRight:'5px', textAlign:'center'}} src="https://bandcamp.com/EmbeddedPlayer/album=3275662654/size=large/bgcol=333333/linkcol=0f91ff/tracklist=false/artwork=small/track=3724830422/transparent=true/" seamless><a href="https://clarianofficial.bandcamp.com/album/whale-shark">WhaleShark by Clarian</a></iframe>
              <div>
                <div>
                </div>
                <div>
                    <div className='contained'> 
                    <img  src={require('./../../assets/images/videosample.png')} />
                    <div>
                    <iframe width="878" height="494" src="https://www.youtube.com/embed/qPmwCpL8y1g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>            
                </div>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;