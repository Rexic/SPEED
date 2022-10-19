/* eslint-disable react/prop-types */
import { useState } from 'react';
import { MdOutlineSearch, MdCancel } from 'react-icons/md';
import '../components/SearchBar.css';
import articles from '../dummydata/articles';
import Styles from '../components/tablestyle';
import Table from '../components/evidencetable';
import tablecolumns from '../components/tablecolumns';
import Dropdown from '../components/Dropdown';

function SEPractice() {
  const [filteredData, setFilteredData] = useState(articles);
  const [wordEntered, setWordEntered] = useState('');

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    // eslint-disable-next-line max-len
    const newFilter = articles.filter((value) => value.title.toLowerCase().includes(searchWord.toLowerCase()));

    if (searchWord === '') {
      setFilteredData(articles);
    } else {
      setFilteredData(newFilter);
    }
  };

  // eslint-disable-next-line no-unused-vars
  const clearInput = () => {
    setFilteredData(articles);
    setWordEntered('');
  };

  return (
    <div>
      <h2>Select SE Practice to get evidence for the claimed benefits</h2>
      <Dropdown />
      <div className="search">
        <div className="searchInputs">
          <input
            type="text"
            placeholder="Search"
            value={wordEntered}
            onChange={handleFilter}
          />
          <div className="searchIcon">
            {wordEntered.length === 0 ? (
              <MdOutlineSearch />
            ) : (
              <MdCancel id="clearBtn" onClick={clearInput} />
            )}
          </div>
        </div>
      </div>
      <Styles>
        <Table
          data={filteredData}
          columns={tablecolumns}
        />
      </Styles>
    </div>
  );
}

export default SEPractice;
