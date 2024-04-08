import { useState } from 'react';
import {
  Filter,
  TitleFilter,
  TypeField,
  TypeFilterContainer,
} from './FilterBar.styled';

const FilterBar = ({ setFilter, filter }) => {
  const [isOpenTypeFilter, setIsOpenTypeFilter] = useState(false);

  const { setTypeProduct, setSortForPrice } = setFilter;

  const toglleTypeContainer = () => {
    setIsOpenTypeFilter(!isOpenTypeFilter);
  };
  const closeTypeContainer = () => {
    setIsOpenTypeFilter(false);
  };

  const handleSelectField = e => {
    setTypeProduct(e.currentTarget.outerText);
    toglleTypeContainer();
  };

  const resetFilter = () => {
    setSortForPrice(null);
    setTypeProduct('Всі');
    closeTypeContainer();
  };
  return (
    <Filter>
      <TitleFilter>
        <TypeField onClick={toglleTypeContainer}>
          <p>{filter}</p>
        </TypeField>
        <TypeField
          onClick={() => {
            setSortForPrice(true);
            closeTypeContainer();
          }}
        >
          <p>За зростанням</p>
        </TypeField>
        <TypeField
          onClick={() => {
            setSortForPrice(false);
            closeTypeContainer();
          }}
        >
          <p>За спаданням</p>
        </TypeField>
        <TypeField onClick={resetFilter}>
          <p>Скинути фільтр</p>
        </TypeField>
      </TitleFilter>
      <TypeFilterContainer open={isOpenTypeFilter}>
        <ul>
          <li onClick={handleSelectField}>Всі</li>
          <li onClick={handleSelectField}>Листівка</li>
          <li onClick={handleSelectField}>Стікер</li>
          <li onClick={handleSelectField}>Шопер</li>
        </ul>
      </TypeFilterContainer>
    </Filter>
  );
};
export default FilterBar;
