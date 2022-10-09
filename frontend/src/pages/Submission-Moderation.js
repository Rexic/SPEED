import articles from '../dummydata/articles';
import Styles from '../components/tablestyle';
import Table from '../components/evidencetable';
import tablecolumns from '../components/tablecolumns';
import Dropdown from '../components/Dropdown';
import '../App.css';

function ModerateArticle() {
  return (
    <div>
      <h2>Moderate Article</h2>
      <p>
        Submitted articles pending review.
      </p>
      <Dropdown />
      <Styles>
        <Table
          data={articles}
          columns={tablecolumns}
        />
      </Styles>
    </div>
  );
}

export default ModerateArticle;
