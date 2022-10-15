import articles from '../dummydata/articles';
import Styles from '../components/tablestyle';
import Table from '../components/evidencetable';
import tablecolumns from '../components/tablecolumns';
import Dropdown from '../components/Dropdown';
import SearchBar from '../components/SearchBar';

function SEPractice() {
  return (
    <div>
      <h2>Select SE Practice to get evidence for the claimed benefits</h2>
      <Dropdown />
      <SearchBar placeholder="Search" data={articles} />
      <Styles>
        <Table
          data={articles}
          columns={tablecolumns}
        />
      </Styles>
    </div>
  );
}

export default SEPractice;
