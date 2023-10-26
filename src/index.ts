import './css/style.css';
import { Header } from './components/header';
import { Main } from './main';
import { Section } from './components/section';
import { SeriesPending } from './components/pending.series';
import { ListSeriesPending } from './components/pendingListSeries';
import { listSeries } from './data/repo';
import { SeriesWatched } from './components/series.watched';

function main() {
  console.log('Loaded main');

  const appElement = document.querySelector<HTMLDivElement>('.container');
  if (appElement === null) return;

  const components = [
    new Header('.container', 'My Series'),
    new Main('.container'),
    new Section('main', 'Series list'),
    new SeriesPending(
      '.series',
      'Pending series',
      'You have 4 series pending to watch'
    ),
    new ListSeriesPending('.series-pending', listSeries),
    new SeriesWatched('.series', 'Watched series', 'You have watched 4 series'),
    new ListSeriesPending('.series-watched', listSeries),
  ];

  console.log(components);
}

main();
