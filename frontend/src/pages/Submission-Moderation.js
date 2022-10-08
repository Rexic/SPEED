import articles from '../dummydata/articles';
import Styles from '../components/tablestyle';
import Table from '../components/evidencetable';
import tablecolumns from '../components/tablecolumns';

function SubmissionModeration() {
  return (
    <div>
      <h2>Page to moderate articles submitted for addition</h2>
      <Styles>
        <Table
          data={articles}
          columns={tablecolumns}
        />
      </Styles>
    </div>
  );
}

export default SubmissionModeration;
