import createHistory from 'history/createBrowserHistory';

let history;

export default function getHistory() {
  if (!history) {
    history = createHistory();
  }

  return history;
}
