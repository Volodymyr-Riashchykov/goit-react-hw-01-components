import PropTypes from 'prop-types';

import style from './Statistic.module.css'

function bgColor() {
    return `rgb(
    ${Math.round(Math.random() * 230)}, 
    ${Math.round(Math.random() * 230)}, 
    ${Math.round(Math.random() * 230)})`
}

export default function Statistic({title,stat}) {
    return (
        <section className={style.statistics}>
            {title && <h2 className={style.title}>{title}</h2>}

            <ul className={style.stat_list}>
                {stat.map(({ id, label, percentage }) => (
                    <li
                        key={id}
                        className={style.item}
                        style={{ backgroundColor: bgColor() }}
                    >
                        <span className={style.label}>{label}</span>
                        <span className={style.percentage}>{percentage}</span>
                    </li>
                        )
                    )
                }
            </ul>
        </section>
    )
}

Statistic.propTypes = {
  title: PropTypes.string,
  stat: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};