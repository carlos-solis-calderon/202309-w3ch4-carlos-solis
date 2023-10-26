import { Component } from './component';
import { SerieStructure } from '../models//list';
import '../style.css';

export class ListSeriesPending extends Component {
  listSeries: SerieStructure[];
  constructor(selector: string, listSeries: SerieStructure[]) {
    super(selector);
    this.listSeries = listSeries;
    this.template = this.createTemplate();
    this.render();
  }

  getSeries(series: SerieStructure[]) {
    let listSeriesHTML = '';
    for (const serie of series) {
      listSeriesHTML += `
    <li class="serie">
      <img class="serie__poster"
        src="${serie.poster}"
        alt="${serie.name} poster" />
      <h4 class="serie__title">${serie.name}</h4>
      <p class="serie__info">${serie.creator} (${serie.year})</p>
      <ul class="score">
        <li class="score__star">
          <i class="icon--score fas fa-star" title="1/5"></i>
        </li>
        <li class="score__star">
          <i class="icon--score fas fa-star" title="2/5"></i>
        </li>
        <li class="score__star">
          <i class="icon--score fas fa-star" title="3/5"></i>
        </li>
        <li class="score__star">
          <i class="icon--score fas fa-star" title="4/5"></i>
        </li>
        <li class="score__star">
          <i class="icon--score fas fa-star" title="5/5"></i>
        </li>
      </ul>
      <i class="fas fa-times-circle icon--delete"></i>
    </li>
    `;
    }

    return listSeriesHTML;
  }

  createTemplate() {
    return `
    <ul class="series-list">
    ${this.getSeries(this.listSeries)}
    </ul>
    `;
  }
}
