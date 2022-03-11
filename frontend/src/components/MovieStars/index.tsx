import { ReactComponent as StarFull } from 'assets/img/starsFull.svg';
import { ReactComponent as StarHalf } from 'assets/img/starsHalf.svg';
import { ReactComponent as StarEmpty } from 'assets/img/starsEmpty.svg';
import './styles.css';

function MoviStars() {
  return (
    <div className="dsmovie-stars-container">
      <StarFull />
      <StarFull />
      <StarFull />
      <StarHalf />
      <StarEmpty />
    </div>
  );
}

export default MoviStars;