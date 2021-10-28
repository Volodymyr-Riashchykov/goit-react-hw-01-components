import PropTypes from 'prop-types';

import style from './User.module.css'

export default function User ({ name, tag, location, avatar, stats }) {
    
    return (
    <div className={style.profile}>
      <div className={style.description}>
        <img src={avatar} alt={name} className={style.avatar}/>
        <p className={style.name}>{name}</p>
        <p className={style.tag}>{tag}</p>
        <p className={style.location}>{ location}</p>
      </div>

      <ul className={style.stats}>
        <li className={style.paragraph}>
          <span className={style.label}>Followers</span>
          <span className={style.quantity}>{stats.followers}</span>
        </li>
        <li className={style.paragraph}>
          <span className={style.label}>Views</span>
          <span className={style.quantity}>{stats.views}</span>
        </li>
        <li className={style.paragraph}>
          <span className={style.label}>Likes</span>
          <span className={style.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

User.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
}