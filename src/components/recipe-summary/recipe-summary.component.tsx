import { Summary } from '@/shared/interfaces/summary.interface';
import './recipe-summary.component.scss';

const RecipeSummary = ({ healthScore, readyInMinutes, servings}: Summary) => {

  return (
    <div className="summary">
      <div className="summary-item">
        <img alt="Preparation time" src="/clock.png" className="summary-img" />
        <div className="summary-title">{ readyInMinutes }</div>
      </div>
      <div className="summary-item">
        <img alt="Servings" src="/plate.png" className="summary-img" />
        <div className="summary-title">{ servings }</div>
      </div>
      <div className="summary-item">
        <img alt="Health score" src="/health-score.png" className="summary-img" />
        <div className="summary-title">{ healthScore }</div>
      </div>
    </div>
  )
}

export default RecipeSummary;
